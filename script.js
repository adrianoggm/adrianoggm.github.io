'use strict';

document.documentElement.classList.add('js');

const caseStudies = {
  platform: {
    label: 'ENGINEERING / PROFESSIONAL WORK',
    title: 'Building the data layer of smarter cities.',
    intro: 'Interoperability is an engineering problem, not just an API integration problem.',
    challenge: 'Connected environments bring together diverse providers, protocols and data models. Data needs to arrive consistently, survive outages and become useful for downstream products.',
    approach: 'Delivered 50+ integrations for 100+ clients using TypeScript, NestJS and Python services, APIs and ETL pipelines. Work also includes asynchronous messaging, transit route prediction and positioning, AI service integrations, and analytics dashboards over Azure-hosted data warehouses.',
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
    intro: 'An experimental look at what relational image encodings preserve — and what they discard.',
    challenge: 'Time series are often transformed into images for machine learning. But the ability to reconstruct the original signal from those images is not always well understood.',
    approach: 'Built a comparative cross-domain experimental framework for Recurrence Plots, Gramian Angular Fields, Markov Transition Fields and XIRP, exploring image-only inverse methods, quantization and reconstruction performance.',
    tags: ['Python', 'Time Series', 'Signal Representation', 'Inverse Problems', 'Reproducibility'],
    note: 'Research manuscript. Publication status and links will be updated when public.'
  },
  flower: {
    repository: 'https://github.com/adrianoggm/flower-basic',
    image: 'assets/flower-basic-comparison.png',
    imageAlt: 'Federated versus centralized ECG5000 experiment comparison plots.',
    imageCaption: 'Original prototype plots; later analysis found dataset leakage and no significant difference (p = 0.592).',
    label: 'RESEARCH ENGINEERING / FEDERATED LEARNING EVALUATION',
    title: 'Flower Basic - fog computing with a careful re-evaluation.',
    intro: 'A Flower and MQTT prototype for hierarchical federated learning, paired with an honest statistical review of its benchmark.',
    challenge: 'A high score is only useful when the experiment avoids leakage and supports a statistically meaningful comparison.',
    approach: 'Built a hierarchical fog-computing demo with a 1D CNN on ECG5000, then audited the evaluation. The repository reports no significant difference between federated and centralized approaches (p = 0.592) and detected 92.1% data leakage in the dataset split.',
    tags: ['Python', 'Flower', 'MQTT', 'ECG5000', 'Statistical evaluation'],
    note: 'The plot shows the prototype results; the README documents the leakage finding and its limits.'
  },
  truebeam: {
    repository: 'https://github.com/adrianoggm/TrueBeamControl',
    label: 'DATA TOOLING / QUALITY CONTROL',
    title: 'TrueBeam quality checks, made easier to inspect.',
    intro: 'A small interactive tool for reviewing daily accelerator quality-control CSVs.',
    challenge: 'Quality checks arrive in different files and formats, while teams need to compare values over time against clear tolerances.',
    approach: 'Built a Streamlit dashboard and reusable plotting script that normalize dates, filter TrueBeam 2 MPC and QuickCheck CAX records, aggregate by day, week or month, and report statistics against the stated tolerances.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'CSV analytics'],
    note: 'The portfolio graphic shows the README tolerance ranges only; it contains no measured data.'
  },
  onion: {
    repository: 'https://github.com/adrianoggm/Onion-FL',
    label: 'RESEARCH / OPEN-SOURCE FRAMEWORK',
    title: 'Onion-FL — federated learning from edge to cloud.',
    intro: 'A framework for experimenting with hierarchical federated learning across edge, fog and cloud nodes.',
    challenge: 'Federated learning in real deployments has to account for heterogeneous data, unreliable links, limited resources and privacy constraints across multiple levels.',
    approach: 'Built on the OnTheEdge research project, Onion-FL models hierarchies of arbitrary depth and supports simulation and MQTT-based runs, pluggable learning techniques, monitoring and reproducible experiments.',
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
    challenge: 'An AI assistant can make financial information easier to explore, but model-generated output should never directly read private data or move money.',
    approach: 'Built a local proof of concept on synthetic data with text and voice interaction, charts, and a LangGraph orchestrator. Deterministic services validate proposals; users explicitly authorise actions before execution.',
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
    challenge: 'Community organizers need one place to manage membership, fixtures, lineups, player stats and standings—and players need a clear view of how their season is going.',
    approach: 'Built a Python FastAPI backend with Hexagonal Architecture and a React/Vite frontend. The product includes role-based admin and user dashboards, season and match workflows, standings, player-performance insights and match visualizations.',
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
    intro: 'A mental wellbeing app built with a multidisciplinary team during a 48-hour Telefónica-organised hackathon.',
    challenge: 'Make it easier for people to notice and manage their emotions, find helpful guidance and reach support when they need it.',
    approach: 'Contributed to an Android prototype with daily emotion tracking, virtual companion Lani, a panic button and routes to professional support. The team won second prize at HackForGood UGR 2024 and qualified for the national phase.',
    tags: ['Java', 'Android', 'Emotion tracking', 'Virtual assistant', 'Team project'],
    note: 'Student hackathon prototype developed by a team. MoodPal is a wellbeing project, not a substitute for professional care.'
  },
  devops: {
    label: 'ENGINEERING / PROFESSIONAL WORK',
    title: 'From commit to production, with confidence.',
    intro: 'Delivery is part of engineering — not the last step after engineering.',
    challenge: 'Client-facing services require repeatable releases, reliable routing and enough observability to understand what is happening in production.',
    approach: 'Worked on deployment and maintenance of containerized services, Kubernetes environments, GitLab CI/CD pipelines, Traefik routing, Grafana monitoring and connections between development and operational workflows.',
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
