import * as THREE from 'three';

export function createSculpture(canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 8);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'low-power',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  scene.add(new THREE.AmbientLight(0xfff8ec, 1.5));
  const keyLight = new THREE.DirectionalLight(0xfff7e9, 3.2);
  keyLight.position.set(-3, 4, 5);
  scene.add(keyLight);
  const warmRim = new THREE.PointLight(0xb89b5e, 22, 12);
  warmRim.position.set(3, -1.5, 2);
  scene.add(warmRim);
  const coolFill = new THREE.PointLight(0xc5c8c0, 14, 12);
  coolFill.position.set(-3, -2, -2);
  scene.add(coolFill);

  const sculpture = new THREE.Group();
  const geometry = new THREE.TorusKnotGeometry(1.05, 0.34, 180, 22, 2, 3);
  const shell = new THREE.Mesh(
    geometry,
    new THREE.MeshPhysicalMaterial({
      color: 0xd9d3c8,
      roughness: 0.24,
      metalness: 0.16,
      clearcoat: 0.9,
      clearcoatRoughness: 0.2,
    }),
  );
  sculpture.add(shell);
  const fineLines = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({
      color: 0xb89b5e,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    }),
  );
  sculpture.add(fineLines);

  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(1.85, 0.008, 6, 128),
    new THREE.MeshBasicMaterial({ color: 0xb89b5e, transparent: true, opacity: 0.5 }),
  );
  halo.rotation.set(0.9, 0.25, -0.3);
  sculpture.add(halo);
  scene.add(sculpture);

  const motion = {
    pointerX: 0,
    pointerY: 0,
    dragX: 0,
    dragY: 0,
    velocityX: 0,
    velocityY: 0,
    dragging: false,
    previousX: 0,
    previousY: 0,
  };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frameId = 0;
  let isVisible = true;
  let disposed = false;

  const render = () => {
    if (disposed) return;
    frameId = 0;
    sculpture.rotation.y += motion.velocityX + (motion.dragging ? 0 : 0.0025);
    sculpture.rotation.x += motion.velocityY + (motion.dragging ? 0 : 0.001);
    motion.velocityX *= 0.94;
    motion.velocityY *= 0.94;
    sculpture.rotation.y += (motion.pointerX * 0.16 - sculpture.rotation.y) * 0.012;
    sculpture.rotation.x += (motion.pointerY * 0.13 - sculpture.rotation.x) * 0.012;
    renderer.render(scene, camera);
    if (isVisible && !reducedMotion.matches) {
      frameId = window.requestAnimationFrame(render);
    }
  };

  const resizeObserver = new ResizeObserver((entries) => {
    const { width, height } = entries[0].contentRect;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.position.z = width < 500 ? 8.6 : 8;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    if (reducedMotion.matches && isVisible) renderer.render(scene, camera);
  });
  resizeObserver.observe(canvas);

  const onPointerMove = (event) => {
    const bounds = canvas.getBoundingClientRect();
    if (motion.dragging) {
      const deltaX = event.clientX - motion.previousX;
      const deltaY = event.clientY - motion.previousY;
      motion.velocityY = deltaX * 0.006;
      motion.velocityX = deltaY * 0.006;
      motion.previousX = event.clientX;
      motion.previousY = event.clientY;
    } else {
      motion.pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      motion.pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    }
    requestRender();
  };

  const onPointerDown = (event) => {
    motion.dragging = true;
    motion.previousX = event.clientX;
    motion.previousY = event.clientY;
    canvas.setPointerCapture(event.pointerId);
    canvas.classList.add('is-dragging');
  };

  const onPointerUp = () => {
    motion.dragging = false;
    canvas.classList.remove('is-dragging');
  };

  const requestRender = () => {
    if (!frameId && isVisible) {
      frameId = window.requestAnimationFrame(render);
    }
  };

  const visibilityObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible) requestRender();
    else if (frameId) {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    }
  });
  visibilityObserver.observe(canvas);

  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerUp);
  canvas.addEventListener('pointerleave', () => {
    if (!motion.dragging) {
      motion.pointerX = 0;
      motion.pointerY = 0;
      requestRender();
    }
  });

  if (!reducedMotion.matches) requestRender();
  else renderer.render(scene, camera);

  window.addEventListener('pagehide', () => {
    disposed = true;
    if (frameId) window.cancelAnimationFrame(frameId);
    resizeObserver.disconnect();
    visibilityObserver.disconnect();
    geometry.dispose();
    shell.material.dispose();
    fineLines.material.dispose();
    halo.geometry.dispose();
    halo.material.dispose();
    renderer.dispose();
  }, { once: true });
}
