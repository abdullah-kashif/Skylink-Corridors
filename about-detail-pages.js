const aboutPage = document.body.dataset.aboutPage;
const icon = (paths) => `<svg viewBox="0 0 24 24">${paths}</svg>`;

const leadership = {
  title:'Leadership', eyebrow:'About Us', image:'about.jpg',
  hero:'Leadership Built Around Operational Excellence',
  intro:'Our leadership approach combines regional expertise, disciplined execution, and a customer-first mindset to guide every part of the organization.',
  heading:'Leading with Purpose and Accountability',
  subheading:'Our leadership functions work as one team to build reliable operations, develop our people, and deliver long-term value for customers.',
  cards:[
    ['MD','Managing Director','Sets the strategic direction of Skylink Corridors and strengthens long-term customer, partner, and regional relationships.'],
    ['OP','Operations Leadership','Leads transportation, warehousing, and cross-border execution with a focus on safety, reliability, and service quality.'],
    ['CS','Commercial Strategy','Builds customer-focused logistics programs and aligns commercial growth with sustainable operational capacity.'],
    ['SC','Supply Chain Solutions','Designs integrated, scalable solutions across transportation, fulfillment, distribution, and international freight.'],
    ['FN','Finance & Governance','Maintains financial discipline, responsible governance, and investment decisions that support resilient growth.'],
    ['PT','People & Culture','Develops talent, strengthens safety culture, and creates an environment where teams can perform and grow.']
  ]
};

const technology = {
  title:'Technology & Innovation', eyebrow:'About Us', image:'warehouse.jpg',
  hero:'Smarter Technology. Better Logistics.',
  intro:'We combine practical logistics expertise with connected technology to improve visibility, decisions, execution, and customer experience.',
  heading:'Technology That Moves Supply Chains Forward',
  subheading:'Our digital capabilities are designed around real operational needs—from the first booking through final delivery.',
  cards:[
    [icon('<path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/><circle cx="12" cy="12" r="9"/>'),'Real-Time Visibility','Track shipments through operational milestones with proactive status updates and exception communication.'],
    [icon('<path d="M4 19V9M9 19V5M14 19v-7M19 19V3M3 21h18"/>'),'Performance Analytics','Turn shipment, fleet, and warehouse data into actionable performance and continuous-improvement insights.'],
    [icon('<path d="m4 17 5-5 4 4 7-8"/><path d="M15 8h5v5"/>'),'Route Optimization','Improve route selection, fleet utilization, delivery sequencing, and resource planning across complex networks.'],
    [icon('<path d="M8 7h8M8 12h8M8 17h5"/><rect x="4" y="3" width="16" height="18" rx="2"/>'),'Digital Documentation','Simplify shipping documents, proof of delivery, milestone records, and operational information exchange.'],
    [icon('<path d="M8 12h8M12 8v8"/><circle cx="12" cy="12" r="9"/>'),'System Integration','Connect customer systems and workflows to reduce manual effort and improve the speed and accuracy of information.'],
    [icon('<path d="M12 3 5 6v5c0 4.8 2.9 8.3 7 10 4.1-1.7 7-5.2 7-10V6Z"/><path d="m9 12 2 2 4-4"/>'),'Data Security','Protect operational and customer information through controlled access, reliable processes, and responsible data management.']
  ]
};

const news = {
  title:'News & Insights', eyebrow:'About Us', image:'forwarding.jpg',
  hero:'Ideas and Updates from Across Our Network',
  intro:'Explore Skylink Corridors company updates, operational perspectives, and practical insights from the logistics industry.',
  heading:'Latest from Skylink Corridors',
  subheading:'Perspectives on transportation, supply chains, regional trade, technology, and responsible logistics.',
  cards:[
    ['cross-border.jpg','Regional Logistics','Building More Resilient Cross-Border Supply Chains','How disciplined planning, documentation, and regional expertise help businesses navigate complex trade corridors.'],
    ['transport.jpg','Transportation','Improving Fleet Utilization and Delivery Reliability','Practical ways asset visibility, preventive planning, and route discipline improve transportation performance.'],
    ['ecommerce.jpg','E-Commerce','Fulfillment Designed for a Better Customer Experience','Why inventory accuracy, fast order processing, and dependable final-mile handoffs matter for online growth.'],
    ['warehouse.jpg','Warehousing','Creating Efficient, Scalable Warehouse Operations','A closer look at flow, space utilization, inventory controls, and the processes behind reliable distribution.'],
    ['sustainability.jpg','Sustainability','Responsible Logistics Through Continuous Improvement','How route efficiency, resource awareness, safety, and measurable targets support more responsible operations.'],
    ['forwarding.jpg','International Freight','Maintaining Visibility Across International Freight','The role of documentation, milestone management, and proactive communication in global freight movements.']
  ]
};

const data = {leadership,technology,news}[aboutPage];
document.title = `${data.title} | Skylink Corridors`;
document.querySelector('meta[name="description"]').content = data.intro;

const heroMarkup = `<section class="about-detail-hero"><img src="/assets/${data.image}" alt="${data.title}"><div class="about-detail-overlay"></div><div class="container about-detail-content"><div class="eyebrow">${data.eyebrow}</div><h1>${data.title}</h1><p>${data.intro}</p></div></section>`;

const cardsMarkup = aboutPage === 'news'
  ? `<div class="news-grid">${data.cards.map(([imageName,badge,title,text])=>`<article class="news-card"><div class="news-media"><img src="/assets/${imageName}" alt="${title}"><span>${badge}</span></div><div class="news-body"><h3>${title}</h3><p>${text}</p><a href="/contact/">Learn More <span>→</span></a></div></article>`).join('')}</div>`
  : `<div class="about-feature-grid ${aboutPage}-grid">${data.cards.map(([visual,title,text])=>`<article class="about-feature-card"><i class="${aboutPage === 'leadership' ? 'role-mark' : ''}">${visual}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>`;

document.querySelector('main').innerHTML = `${heroMarkup}<section class="about-detail-section"><div class="container"><div class="about-detail-head"><h2>${data.heading}</h2><p>${data.subheading}</p></div>${cardsMarkup}</div></section><section class="about-detail-cta"><div class="container"><h2>${aboutPage === 'leadership' ? 'Partner with a Team That Leads from Experience' : aboutPage === 'technology' ? 'Build a Smarter Supply Chain' : 'Stay Connected with Skylink Corridors'}</h2><p>${aboutPage === 'news' ? 'Contact our team for company information and logistics perspectives.' : 'Talk to our team about your operational priorities and growth plans.'}</p><a class="btn btn-primary" href="/contact/">Contact Our Team <span>→</span></a></div></section>`;
