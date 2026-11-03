'use strict';

document.documentElement.classList.add('js');

const caseStudies = {
  platform: {
    label: 'ENGINEERING / PROFESSIONAL WORK',
    title: 'Building the data layer of smarter cities.',
    intro: 'Interoperability is an engineering problem, not just an API integration problem.',
    challenge: 'City operations rely on providers with different APIs, formats and update schedules. The hard part is keeping those feeds dependable enough for downstream products and decisions.',
    approach: 'Worked across TypeScript, NestJS and Python services: built and maintained integrations, ingestion and ETL flows, asynchronous messaging, transit prediction and positioning services, AI integrations, and analytics over Azure-hosted warehouses.',
    outcome: 'The portfolio spans 50+ integrations used by 100+ clients. The shared goal is to make fragmented systems behave like dependable data products.',
    tags: ['TypeScript', 'NestJS', 'Python', 'REST APIs', 'RabbitMQ', 'ETL', 'IoT', 'Power BI'],
    note: 'Selected professional experience. Client-specific architectures, datasets and source code are not shared.'
  },
  reconstruction: {
    repository: 'https://github.com/adrianoggm/time-series-image-reconstruction',
    image: 'assets/time-series-benchmark.png',
    imageAlt: 'Cross-domain time-series reconstruction figure comparing multiple image encodings across seven datasets.',
    imageCaption: 'Research figure from the current cross-domain benchmark: seven datasets across six domains.',
    label: 'RESEARCH / MANUSCRIPT',
    title: 'How much of a time series survives its image?',
    intro: 'Can a time series be recovered after it has been turned into pixels? I compare representations and decoders to find out what information survives.',
    challenge: 'Time-series images are used as inputs to machine-learning models, but converting a signal into pixels may discard information. This study asks whether the original sequence can be recovered from the stored image, and how the answer changes across domains and encodings.',
    approach: 'Compared ten encoding-decoder combinations across seven datasets and six domains, including recurrence plots, Gramian Angular Fields, Markov Transition Fields and XIRP. I developed analytic inverse methods and measured fidelity after 8-bit storage, robustness, computational cost and downstream classification utility.',
    outcome: 'Four representations recover all 61,079 benchmark series to machine precision before image quantization. After 8-bit storage, signed recurrence plots stay at 0.0009-0.0022 NMAE on six datasets, but rise to 0.012-0.017 on Swarm. Storage and signal conditioning therefore matter as much as the inverse method.',
    tags: ['Python', 'Time Series', 'Signal Representation', 'Inverse Problems', 'Reproducibility'],
    note: 'The current cross-domain manuscript is prepared for Information Sciences; it has not been published.',
  },
  flower: {
    repository: 'https://github.com/adrianoggm/flower-basic',
    image: 'assets/flower-basic-comparison.png',
    imageAlt: 'Federated versus centralized ECG5000 experiment comparison plots.',
    imageCaption: 'Original prototype plots; later analysis found dataset leakage and no significant difference (p = 0.592).',
    label: 'RESEARCH ENGINEERING / FEDERATED LEARNING EVALUATION',
    title: 'Flower Basic - fog computing with a careful re-evaluation.',
    intro: 'A Flower and MQTT prototype for hierarchical federated learning, paired with an honest statistical review of its benchmark.',
    challenge: 'Federated training is useful only if its comparison with centralized training is fair. The prototype started as a hierarchical fog-learning experiment; the follow-up asks whether its promising metrics survive statistical checks and a search for leakage.',
    approach: 'Implemented a 1D CNN experiment on ECG5000 with Flower and MQTT, then re-examined the evaluation with significance testing and leakage checks. The point was to assess the evidence, not to treat a high accuracy score as proof that federation helped.',
    outcome: 'The repository reports no significant federated-versus-centralized difference (p = 0.592) and detects 92.1% data leakage in the dataset setup. That caveat changes how the original accuracy plots should be interpreted.',
    tags: ['Python', 'Flower', 'MQTT', 'ECG5000', 'Statistical evaluation'],
    note: 'The plot shows the prototype results; the README documents the leakage finding and its limits.'
  },
  truebeam: {
    repository: 'https://github.com/adrianoggm/TrueBeamControl',
    label: 'DATA TOOLING / QUALITY CONTROL',
    title: 'TrueBeam quality checks, made easier to inspect.',
    intro: 'A small interactive tool for reviewing daily accelerator quality-control CSVs.',
    challenge: 'Daily TrueBeam 2 checks arrive as CSV exports with different date formats and measurement types. Reviewing a trend means finding the right machine, energy and date range, then checking measurements against their tolerances.',
    approach: 'Built a Streamlit view and reusable plotting script that normalize dates, read MPC output-change and QuickCheck CAX records, and let the user filter energy and time range or aggregate by day, week or month. The plots and tables report summary statistics and out-of-tolerance percentages.',
    outcome: 'One workflow brings together MPC output change (warning at +/-1%, tolerance +/-2%) and QuickCheck CAX (nominal 100%, tolerance 98-102%). The card illustration shows only these documented limits, not measured results.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'CSV analytics'],
    note: 'The portfolio graphic shows the README tolerance ranges only; it contains no measured data.'
  },
  onion: {
    repository: 'https://github.com/adrianoggm/Onion-FL',
    label: 'RESEARCH / OPEN-SOURCE FRAMEWORK',
    title: 'Onion-FL — federated learning from edge to cloud.',
    intro: 'A framework for experimenting with hierarchical federated learning across edge, fog and cloud nodes.',
    challenge: 'A federated-learning hierarchy has more than one coordinator: edge clients send updates through fog aggregators before the cloud combines them. The project makes it possible to study how different hierarchy shapes and communication links affect that process.',
    approach: 'Built Onion-FL on the OnTheEdge research work. It supports hierarchies of arbitrary depth, simulation and MQTT-based runs, pluggable learning techniques, monitoring and reproducible experiments; the four-fog graph on this page is one documented topology.',
    outcome: 'The same framework describes edge-fog-cloud layouts without hard-coding one number of levels. The repository supports both simulation and MQTT communication for experiments.',
    tags: ['Python', 'Federated Learning', 'Edge–Fog–Cloud', 'MQTT', 'Simulation', 'Observability'],
    note: 'Master’s thesis research prototype. The public repository documents implementation status, limitations and reproducible experiments.'
  },
  finguard: {
    repository: 'https://github.com/adrianoggm/FinGuard',
    image: 'assets/finguard-conversation.png',
    imageAlt: 'FinGuard mobile conversational interface showing an expense chart by category.',
    imageCaption: 'Real FinGuard interface screenshot; the demo uses generated financial data.',
    label: 'ENGINEERING / OPEN-SOURCE PROOF OF CONCEPT',
    title: 'FinGuard — a banking assistant with clear boundaries.',
    intro: 'A conversational assistant for exploring financial data and preparing payment actions.',
    challenge: 'A financial assistant can make account data easier to explore, but a language model must not gain direct database access or authority to move money. The prototype makes that boundary part of the system design.',
    approach: 'Built a local text-and-voice assistant around a LangGraph orchestrator and typed operations. Deterministic banking services execute validated queries and prepare payment actions; a person must explicitly confirm a transfer or Bizum in the web interface. Charts are built from service results, not figures invented by the model.',
    outcome: 'The demo supports follow-up questions, editable spending charts and payment previews while keeping execution behind deterministic checks and user approval. It runs on generated data and is not connected to a real bank.',
    tags: ['Python', 'LangGraph', 'Conversational AI', 'Voice', 'Financial Workflows', 'Safety'],
    note: 'Proof of concept only. It uses generated data and is not connected to a real bank.'
  },
  footballhub: {
    repository: 'https://github.com/adrianoggm/footballhubmanager',
    image: 'assets/footballhub-players.png',
    imageAlt: 'FootballHubManager player directory with filters and season roles.',
    imageCaption: 'Real project screenshot populated with sample player data.',
    label: 'PRODUCT ENGINEERING / FULL-STACK SIDE PROJECT',
    title: 'FootballHubManager — match data for the whole community.',
    intro: 'A full-stack platform for amateur football communities, from player and season management to match-based insights.',
    challenge: 'Amateur football groups often track members, seasons, lineups and match statistics in separate places. Organizers need administration tools, while players need a clear view of standings and their own season performance.',
    approach: 'Built a React/Vite product and FastAPI backend using a hexagonal structure. Admin and player roles share a domain for membership, seasons, matches and player stats; the API provides standings and match-based insights for the dashboards.',
    outcome: 'The platform connects club administration to the match record: entered events and player statistics feed season standings and performance views. The screenshots use sample data from the repository.',
    tags: ['Python', 'FastAPI', 'React', 'MySQL', 'Hexagonal Architecture', 'Analytics'],
    note: 'The dashboard image uses sample data from the project repository.'
  },
  moodpal: {
    repository: 'https://github.com/adrianoggm/MoodPal',
    image: 'assets/moodpalteam.png',
    imageAlt: 'The MoodPal team together at HackForGood UGR 2024.',
    imageCaption: 'The MoodPal team at HackForGood UGR 2024.',
    label: 'AWARD-WINNING TEAM PROJECT / HACKFORGOOD UGR 2024',
    title: 'MoodPal — emotional wellbeing, designed with care.',
    intro: 'MoodPal was an interdisciplinary collaboration created during the IX HackForGood UGR: seven teammates had 48 hours to turn a social-impact challenge into a working concept.',
    challenge: 'How can a short hackathon turn an abstract wellbeing challenge into practical support someone can reach in a difficult moment? We centered the experience on noticing emotions and finding a clear route to help.',
    approach: 'The team brought together computing, social sciences, economics and biology, so technical and human perspectives shaped the idea together. I contributed to the Android prototype: emotion check-ins, virtual companion Lani, a panic button and routes to professional support.',
    outcome: 'MoodPal won second prize (\u20ac600) at the UGR event and qualified for the national phase. This was a shared result of seven people collaborating across disciplines in 48 hours.',
    tags: ['Java', 'Android', 'Emotion tracking', 'Virtual assistant', 'Team project'],
    note: 'Student hackathon prototype developed by a team. MoodPal is a wellbeing project, not a substitute for professional care.'
  },
  devops: {
    label: 'ENGINEERING / PROFESSIONAL WORK',
    title: 'From commit to production, with confidence.',
    intro: 'Delivery is part of engineering — not the last step after engineering.',
    challenge: 'A feature is only useful if it can be released and operated reliably. Client-facing services need repeatable deployments, clear routing and enough telemetry to diagnose problems after release.',
    approach: 'Worked across containerized services, Kubernetes environments, GitLab CI/CD, Traefik routing and Grafana monitoring, connecting development workflows with day-to-day operations.',
    outcome: 'The work focuses on making delivery repeatable and production behavior easier to inspect, while keeping client-specific infrastructure and configuration private.',
    tags: ['Kubernetes', 'Docker', 'GitLab CI/CD', 'Traefik', 'Grafana', 'Operations'],
    note: 'Selected professional experience. Sensitive client configuration and infrastructure details are omitted.'
  },
};

const config = window.PORTFOLIO_CONFIG || {};
const setContactLink = (id, value, prefix = '') => {
  if (!value || typeof value !== 'string') return;
  const link = document.getElementById(id);
  if (!link) return;
  if (!prefix && !/^https:\/\//i.test(value)) return;
  link.href = prefix + value;
  link.hidden = false;
  document.getElementById('contact-placeholder').hidden = true;
};
setContactLink('contact-email', config.email, 'mailto:');
setContactLink('contact-linkedin', config.linkedin);
setContactLink('contact-github', config.github);
setContactLink('contact-x', config.x);

document.getElementById('current-year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  mobileMenu.hidden = true;
};
menuToggle.addEventListener('click', () => {
  const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
  mobileMenu.hidden = !opening;
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
filters.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('is-active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => {
    card.hidden = selected !== 'all' && card.dataset.category !== selected;
  });
}));

const dialog = document.getElementById('case-dialog');
const closeDialog = dialog.querySelector('.dialog-close');
let previousFocus = null;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const detail = caseStudies[button.dataset.project];
  if (!detail) return;
  previousFocus = document.activeElement;
  document.getElementById('case-label').textContent = detail.label;
  document.getElementById('case-title').textContent = detail.title;
  document.getElementById('case-intro').textContent = detail.intro;
  const imageWrap = document.getElementById('case-image-wrap');
  const caseImage = document.getElementById('case-image');
  const imageCaption = document.getElementById('case-image-caption');
  imageWrap.hidden = !detail.image;
  caseImage.src = detail.image || '';
  caseImage.alt = detail.imageAlt || '';
  imageCaption.textContent = detail.imageCaption || '';
  document.getElementById('case-challenge').textContent = detail.challenge;
  document.getElementById('case-approach').textContent = detail.approach;
  document.getElementById('case-outcome').textContent = detail.outcome || '';
  document.getElementById('case-outcome-wrap').hidden = !detail.outcome;
  document.getElementById('case-note').textContent = detail.note;
  const sourceLink = document.getElementById('case-source');
  sourceLink.hidden = !detail.repository;
  if (detail.repository) sourceLink.href = detail.repository;
  const tags = document.getElementById('case-tags');
  tags.replaceChildren();
  detail.tags.forEach(tag => { const item = document.createElement('span'); item.textContent = tag; tags.appendChild(item); });
  dialog.showModal();
}));
closeDialog.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => previousFocus?.focus());

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }
  }, { threshold: 0.08, rootMargin: '0px 0px 60px 0px' });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
}
