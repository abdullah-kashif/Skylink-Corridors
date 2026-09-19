const aboutPage = document.body.dataset.aboutPage;
const icon = (paths) => `<svg viewBox="0 0 24 24">${paths}</svg>`;

const leadership = {
  title: 'Leadership',
  eyebrow: 'About Us',
  image: 'about.jpg',
  hero: 'Leadership Driven by Experience and Innovation',
  intro: 'At Skylink Corridors, our leadership approach is built around operational expertise, customer focus, and continuous improvement. Rather than being defined by individual designations, our leadership structure is aligned with the key activities that drive successful logistics operations.',
  heading: 'Leadership Driven by Experience and Innovation',
  paragraphs: [
    'At Skylink Corridors, our leadership approach is built around operational expertise, customer focus, and continuous improvement. Rather than being defined by individual designations, our leadership structure is aligned with the key activities that drive successful logistics operations.'
  ],
  cards: [
    ['SD', 'Strategic Direction', 'Setting clear business priorities, strengthening market presence, and building long-term relationships with customers and strategic partners.'],
    ['OT', 'Operations & Transportation', 'Driving efficient transportation, warehousing, and cross-border activities while maintaining safety, reliability, and service quality.'],
    ['CC', 'Customer & Commercial Excellence', 'Understanding customer requirements and developing practical logistics solutions that deliver value, flexibility, and consistent service.'],
    ['SS', 'Supply Chain Solutions', 'Coordinating integrated logistics activities across freight, distribution, fulfillment, and international supply chains.'],
    ['QC', 'Quality, Compliance & Governance', 'Maintaining operational standards, regulatory compliance, risk management, and responsible business practices.'],
    ['PI', 'People & Continuous Improvement', 'Developing teams, promoting collaboration and learning, and continuously improving processes, technology, and operational performance.']
  ]
};

const technology = {
  title: 'Technology & Innovation',
  eyebrow: 'About Us',
  image: 'warehouse.jpg',
  hero: 'Smarter Logistics Powered by Technology',
  intro: 'Technology is at the heart of every successful supply chain. Skylink Corridor leverages advanced logistics technologies to improve transportation planning, warehouse operations, shipment visibility, and customer communication.',
  heading: 'Smarter Logistics Powered by Technology',
  paragraphs: [
    'Technology is at the heart of every successful supply chain. Skylink Corridor leverages advanced logistics technologies to improve transportation planning, warehouse operations, shipment visibility, and customer communication.',
    'Our integrated technology platform includes transportation management systems, warehouse management solutions, GPS-enabled fleet monitoring, digital documentation, and real-time shipment tracking. These tools provide customers with greater visibility, improved operational control, and data-driven insights that enhance decision-making.'
  ],
  cards: [
    [icon('<path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/><circle cx="12" cy="12" r="9"/>'), 'Digital Transportation Management', 'Streamlining transportation planning, routing, and execution for greater efficiency.'],
    [icon('<path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.4 7.3 11.7a1 1 0 0 0 1.4 0c.3-.3 7.3-6.3 7.3-11.7a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/>'), 'Real-Time Visibility', 'GPS monitoring and shipment tracking provide greater visibility throughout the logistics journey.'],
    [icon('<path d="M8 7h8M8 12h8M8 17h5"/><rect x="4" y="3" width="16" height="18" rx="2"/>'), 'Digital Documentation', 'Reducing paperwork through digital documentation and streamlined processes.'],
    [icon('<path d="M4 19V9M9 19V5M14 19v-7M19 19V3M3 21h18"/>'), 'Data-Driven Decisions', 'Turning logistics data into actionable insights for better planning and operational control.'],
    [icon('<path d="m4 17 5-5 4 4 7-8"/><path d="M15 8h5v5"/>'), 'Automation & Innovation', 'Embracing automation and emerging technologies to reduce costs, improve performance, and strengthen supply chain resilience.'],
    [icon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'), 'Customer Connectivity', 'Enhancing communication and providing customers with timely shipment updates and information.']
  ]
};

const news = {
  title: 'News & Insights',
  eyebrow: 'About Us',
  image: 'forwarding.jpg',
  hero: 'Ideas and Updates from Across Our Network',
  intro: 'Explore Skylink Corridors company updates, operational perspectives, and practical insights from the logistics industry.',
  heading: 'Latest from Skylink Corridors',
  paragraphs: [
    'Perspectives on transportation, supply chains, regional trade, technology, and responsible logistics.'
  ],
  cards: [
    ['cross-border.jpg', 'Regional Logistics', 'Building More Resilient Cross-Border Supply Chains', 'How disciplined planning, documentation, and regional expertise help businesses navigate complex trade corridors.'],
    ['transport.jpg', 'Transportation', 'Improving Fleet Utilization and Delivery Reliability', 'Practical ways asset visibility, preventive planning, and route discipline improve transportation performance.'],
    ['ecommerce.jpg', 'E-Commerce', 'Fulfillment Designed for a Better Customer Experience', 'Why inventory accuracy, fast order processing, and dependable final-mile handoffs matter for online growth.'],
    ['warehouse.jpg', 'Warehousing', 'Creating Efficient, Scalable Warehouse Operations', 'A closer look at flow, space utilization, inventory controls, and the processes behind reliable distribution.'],
    ['sustainability.jpg', 'Sustainability', 'Responsible Logistics Through Continuous Improvement', 'How route efficiency, resource awareness, safety, and measurable targets support more responsible operations.'],
    ['forwarding.jpg', 'International Freight', 'Maintaining Visibility Across International Freight', 'The role of documentation, milestone management, and proactive communication in global freight movements.']
  ]
};

const data = { leadership, technology, news }[aboutPage];
if (data) {
  document.title = `${data.title} | Skylink Corridors`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = data.intro;

  const heroMarkup = `<section class="about-detail-hero"><img src="/assets/${data.image}" alt="${data.title}"><div class="about-detail-overlay"></div><div class="container about-detail-content"><div class="eyebrow">${data.eyebrow}</div><h1>${data.title}</h1><p>${data.hero || data.intro}</p></div></section>`;

  const cardsMarkup = aboutPage === 'news'
    ? `<div class="news-grid">${data.cards.map(([imageName, badge, title, text]) => `<article class="news-card"><div class="news-media"><img src="/assets/${imageName}" alt="${title}"><span>${badge}</span></div><div class="news-body"><h3>${title}</h3><p>${text}</p><a href="/contact/">Learn More <span>→</span></a></div></article>`).join('')}</div>`
    : `<div class="about-feature-grid ${aboutPage}-grid">${data.cards.map(([visual, title, text]) => `<article class="about-feature-card"><i class="${aboutPage === 'leadership' ? 'role-mark' : ''}">${visual}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>`;

  const paragraphsMarkup = data.paragraphs
    ? data.paragraphs.map(p => `<p>${p}</p>`).join('')
    : `<p>${data.subheading || data.intro}</p>`;

  document.querySelector('main').innerHTML = `${heroMarkup}<section class="about-detail-section"><div class="container"><div class="about-detail-head"><h2>${data.heading}</h2>${paragraphsMarkup}</div>${cardsMarkup}</div></section><section class="about-detail-cta"><div class="container"><h2>${aboutPage === 'leadership' ? 'Partner with a Team That Leads from Experience' : aboutPage === 'technology' ? 'Build a Smarter Supply Chain' : 'Stay Connected with Skylink Corridors'}</h2><p>${aboutPage === 'news' ? 'Contact our team for company information and logistics perspectives.' : 'Talk to our team about your operational priorities and growth plans.'}</p><a class="btn btn-primary" href="/contact/">Contact Our Team <span>→</span></a></div></section>`;
}
