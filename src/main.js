import './styles.css';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

menuToggle?.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  navigation?.classList.toggle('is-open', !isExpanded);
});

navigation?.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('a')) {
    menuToggle?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }
});

const projectVariants = {
  carewell: {
    title: 'Carewell — Sangi Morgan',
    description: 'Carewell: a student healthcare design case study about making everyday care easier to navigate.',
    label: 'Healthcare UX · Independent project',
    heading: 'Care that feels<br /><em>closer.</em>',
    deck: 'A more connected care companion that helps people keep track of appointments, understand next steps, and feel supported between visits.',
    facts: ['UX designer, end-to-end', '5 weeks, fall 2024', 'Research, flows, prototyping', 'Figma, FigJam, Protopie'],
    imageLabel: 'Carewell healthcare app concept with appointment and care plan cards',
    wireframeNotes: ['Keep the next step<br />visible.', 'Make follow-up<br />easy to return to.'],
    wireframeCaption: 'CAREWELL / FLOW STUDY 02',
    solutionKicker: 'CAREWELL / DESIGN PRINCIPLE',
    solutionHeadline: 'Care that feels<br /><em>within reach.</em>',
    solutionScreenLabel: 'A MOMENT OF REASSURANCE',
    solutionScreenHeading: 'Next step, clear.',
    solutionScreenCopy: 'Your visit notes are ready to review.',
    solutionProgress: 'A simple plan, one step at a time',
    solutionProgressWidth: '56%',
    nextProjectHeading: 'Building a shared<br /><em>design language.</em>',
    nextProjectHref: 'case-study.html?project=common-ground',
    sections: [
      {
        heading: 'Good care continues<br /><em>between visits.</em>',
        paragraphs: [
          'Carewell is a concept for a healthcare companion that brings the small, often scattered parts of care into one reassuring place. I explored how an accessible mobile experience could make follow-up steps easier to find and easier to understand.',
          'This student project moves from exploratory interviews to a simple appointment and care-plan prototype.',
        ],
      },
      {
        heading: 'A visit ends.<br />The questions don’t.',
        paragraphs: ['People often leave appointments with a mix of notes, next steps, and uncertainty. Important details can be spread across portals and paper reminders, making it hard to know what to do next.'],
        quote: 'I get home and realize I can’t remember what I was supposed to do first.',
        quoteSource: 'RESEARCH PARTICIPANT, 34',
        note: 'The challenge: help people feel oriented after a visit without adding more work to their care routine.',
      },
      {
        heading: 'Make the next step<br />feel understandable.',
        paragraphs: ['I spoke with five adults about how they prepare for appointments and keep track of follow-up care. Three themes shaped the concept: information needs plain language, plans need to fit real routines, and people want reassurance without being overwhelmed.'],
        insights: [
          ['Plain language builds confidence', 'Short summaries help people recall what matters once they are back home.'],
          ['Small steps are easier to act on', 'A clear next action feels more manageable than a long checklist.'],
          ['Access needs are everyday needs', 'Readable type and predictable patterns support everyone, not only a few.'],
        ],
        note: 'Research note: an exploratory student project with five participants; not a clinical study.',
      },
      {
        heading: 'Give every detail<br />a place to land.',
        paragraphs: [
          'The first sketches tried a feed, a calendar, and a single care-plan view. A lightweight prototype review showed that people wanted an at-a-glance appointment summary before browsing older information.',
          'I brought the next visit forward, grouped related instructions together, and used clear labels so a person could return to the plan when they needed it.',
        ],
      },
      {
        heading: 'A gentler way<br /><em>to stay on track.</em>',
        paragraphs: ['Carewell brings appointment details, care notes, and one clear next step together. The final concept uses a calm visual hierarchy, accessible contrast, and supportive language to make follow-up feel less like a chore.'],
        outcome: 'Designing for health means making room for different needs, energy levels, and ways of understanding information. Clarity and accessibility are part of care, not a finishing touch.',
      },
    ],
  },
  'common-ground': {
    title: 'Common Ground — Sangi Morgan',
    description: 'Common Ground: a student design systems case study about creating a flexible, accessible visual language.',
    label: 'Design systems · Independent project',
    heading: 'A shared language<br /><em>for good things.</em>',
    deck: 'A small, flexible design system that helps a growing community platform feel consistent without making every experience look the same.',
    facts: ['Product designer, end-to-end', '4 weeks, winter 2024', 'Foundations, components, docs', 'Figma, FigJam, HTML & CSS'],
    imageLabel: 'Common Ground color, type, and interface component design system board',
    wireframeNotes: ['Make component intent<br />easy to scan.', 'Keep variants<br />purposeful.'],
    wireframeCaption: 'COMMON GROUND / COMPONENT STUDY',
    solutionKicker: 'COMMON GROUND / DESIGN PRINCIPLE',
    solutionHeadline: 'Built to work<br /><em>together.</em>',
    solutionScreenLabel: 'A SMALL SYSTEM, READY TO GROW',
    solutionScreenHeading: 'One clear pattern.',
    solutionScreenCopy: 'Shared building blocks for new stories.',
    solutionProgress: 'Foundations · components · guidance',
    solutionProgressWidth: '86%',
    nextProjectHeading: 'Making money feel<br /><em>manageable.</em>',
    nextProjectHref: 'case-study.html',
    sections: [
      {
        heading: 'Consistency can leave<br /><em>room to grow.</em>',
        paragraphs: [
          'Common Ground is a design system concept for a community platform connecting people with local projects. I set out to build a visual and interaction foundation that stays recognizable while leaving teams room to tell different stories.',
          'This self-directed project covers a small set of design foundations, reusable patterns, and practical usage guidance.',
        ],
      },
      {
        heading: 'More components.<br />Less shared clarity.',
        paragraphs: ['As a product grows, small one-off decisions can create inconsistent patterns and make the interface harder to maintain. A component library alone does not solve the problem if teams cannot tell when or how to use it.'],
        quote: 'I want things to feel related, not like every page came from the same mold.',
        quoteSource: 'DESIGN CRITIQUE PARTICIPANT',
        note: 'The challenge: make a shared system useful and flexible, not restrictive or decorative.',
      },
      {
        heading: 'Start with the moments<br />people repeat.',
        paragraphs: ['I audited a set of community listings and spoke with three designers about their handoff habits. The strongest opportunity was to standardize frequent building blocks while making content, hierarchy, and image choices flexible.'],
        insights: [
          ['Names should explain intent', 'Clear component labels make patterns easier to find and apply.'],
          ['Defaults do a lot of work', 'Thoughtful spacing and accessible type reduce repeated decisions.'],
          ['Examples make rules real', 'Usage notes are easier to understand when paired with a concrete example.'],
        ],
        note: 'This system is a learning prototype, not a production library tested across a live product.',
      },
      {
        heading: 'Build the rhythm<br />before the library.',
        paragraphs: [
          'I began with a typographic scale, spacing rhythm, and a small set of color roles. Early component studies helped test whether those foundations could support both information-heavy listings and more expressive community stories.',
          'After critique, I reduced near-duplicate variants and added usage examples to the patterns that were easiest to misuse.',
        ],
      },
      {
        heading: 'A system that guides,<br /><em>not dictates.</em>',
        paragraphs: ['The final foundation pairs accessible color roles and type with a focused library of cards, buttons, and navigation patterns. Each component includes a clear purpose and enough flexibility to support the content around it.'],
        outcome: 'A useful design system is a shared conversation. Clear foundations create consistency, while good examples and deliberate flexibility make it easier for a team to build something together.',
      },
    ],
  },
};

const caseStudyPage = document.body.dataset.page === 'case-study';
const requestedProject = new URLSearchParams(window.location.search).get('project');
const projectVariant = caseStudyPage && requestedProject && Object.hasOwn(projectVariants, requestedProject)
  ? projectVariants[requestedProject]
  : null;

if (projectVariant) {
  document.title = projectVariant.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', projectVariant.description);
  document.querySelector('.case-intro .eyebrow').textContent = projectVariant.label;
  document.querySelector('.case-intro h1').innerHTML = projectVariant.heading;
  document.querySelector('.case-deck').textContent = projectVariant.deck;
  document.querySelector('.project-facts').querySelectorAll('div').forEach((fact, index) => {
    fact.querySelectorAll('span')[1].textContent = projectVariant.facts[index];
  });
  document.querySelector('.case-hero-visual').setAttribute('aria-label', projectVariant.imageLabel);
  document.body.dataset.project = requestedProject;

  document.querySelectorAll('.case-section-body').forEach((body, index) => {
    const section = projectVariant.sections[index];
    body.querySelector('h2').innerHTML = section.heading;
    body.querySelectorAll(':scope > p').forEach((paragraph, paragraphIndex) => {
      if (section.paragraphs[paragraphIndex]) {
        paragraph.textContent = section.paragraphs[paragraphIndex];
      }
    });

    if (section.quote) {
      body.querySelector('blockquote').textContent = section.quote;
      body.querySelector('cite').textContent = `— ${section.quoteSource}`;
      body.querySelector('.small-note').textContent = section.note;
    }

    if (section.insights) {
      body.querySelectorAll('.insight-grid article').forEach((article, insightIndex) => {
        article.querySelector('h3').textContent = section.insights[insightIndex][0];
        article.querySelector('p').textContent = section.insights[insightIndex][1];
      });
      body.querySelector('.small-note').textContent = section.note;
    }

    if (section.outcome) {
      body.querySelector('.outcome-block p').textContent = section.outcome;
    }
  });

  const projectVisual = document.querySelector('.case-phone');
  projectVisual?.setAttribute('aria-hidden', 'true');
  document.querySelector('.case-visual-caption').hidden = true;
  document.querySelectorAll('.wireframe-note').forEach((note, index) => {
    note.innerHTML = projectVariant.wireframeNotes[index];
  });
  document.querySelector('.visual-caption').textContent = projectVariant.wireframeCaption;

  const solutionPanel = document.querySelector('.solution-panel');
  solutionPanel.querySelector('.solution-kicker').textContent = projectVariant.solutionKicker;
  solutionPanel.querySelector('.solution-copy p').innerHTML = projectVariant.solutionHeadline;
  solutionPanel.querySelector('.solution-screen > span').textContent = projectVariant.solutionScreenLabel;
  solutionPanel.querySelector('.solution-screen strong').textContent = projectVariant.solutionScreenHeading;
  solutionPanel.querySelector('.solution-screen p').textContent = projectVariant.solutionScreenCopy;
  solutionPanel.querySelector('.solution-progress i').style.width = projectVariant.solutionProgressWidth;
  solutionPanel.querySelector('.solution-screen small').textContent = projectVariant.solutionProgress;
  document.querySelector('.next-project h2').innerHTML = projectVariant.nextProjectHeading;
  document.querySelector('.next-project-link').href = projectVariant.nextProjectHref;
}

const heroCanvas = document.querySelector('#hero-canvas');
if (heroCanvas instanceof HTMLCanvasElement) {
  import('./hero.js').then(({ createSculpture }) => createSculpture(heroCanvas));
}
