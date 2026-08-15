document.title = 'Our Values | Skylink Corridors';
document.querySelector('meta[name="description"]').content = 'The values that guide Skylink Corridors and every logistics solution we deliver.';

const values = [
  {key:'integrity',title:'Integrity',text:'We operate with honesty and transparency in every interaction — with customers, partners, and employees. Our word is our bond, and our commitments are kept.',icon:'<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.8 2.9 8.3 7 10 4.1-1.7 7-5.2 7-10V6Z"/></svg>'},
  {key:'excellence',title:'Operational Excellence',text:'We relentlessly pursue improvement in everything we do. From route optimization to warehouse throughput, we measure, learn, and continuously raise the bar.',icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>'},
  {key:'customer',title:'Customer First',text:'Every decision starts with the customer. We build lasting partnerships by anticipating needs, delivering on promises, and always going the extra mile.',icon:'<svg viewBox="0 0 24 24"><circle cx="10" cy="8" r="3"/><path d="M4 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6M19 14a5 5 0 0 1 2 4v2"/></svg>'},
  {key:'innovation',title:'Innovation',text:'We embrace technology and new thinking to solve logistics challenges in smarter ways. Innovation is not a department — it is a mindset embedded in our culture.',icon:'<svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M8.3 14.5A7 7 0 1 1 15.7 14.5C14.6 15.3 14 16.3 14 18h-4c0-1.7-.6-2.7-1.7-3.5Z"/></svg>'},
  {key:'regional',title:'Regional Pride',text:'We are proud to be a Pakistani company connecting our region to the world. We invest in local talent, communities, and infrastructure to create lasting regional value.',icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>'},
  {key:'people',title:'People Matter',text:'Our people are our most valuable asset. We invest in their growth, safety, and wellbeing — because when our people thrive, our customers and business thrive too.',icon:'<svg viewBox="0 0 24 24"><path d="M20.8 5.8a5.4 5.4 0 0 0-7.6 0L12 7l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 22l8.8-8.6a5.4 5.4 0 0 0 0-7.6Z"/></svg>'}
];

document.querySelector('main').innerHTML = `
  <section class="values-hero"><img src="/assets/about.jpg" alt="Our Values"><div class="values-hero-overlay"></div><div class="container values-hero-content"><div class="eyebrow">About Us</div><h1>Our Values</h1><p>The principles that guide our decisions, shape our culture, and define every relationship we build.</p></div></section>
  <section class="values-section"><div class="container values-grid">${values.map(value=>`<article class="value-card ${value.key}"><i>${value.icon}</i><h2>${value.title}</h2><p>${value.text}</p></article>`).join('')}</div></section>
  <section class="values-cta"><div class="container"><h2>Values You Can Rely On</h2><p>Experience a logistics partnership built on trust, performance, and shared success.</p><a class="btn btn-primary" href="/contact/">Partner with Us <span>→</span></a></div></section>`;
