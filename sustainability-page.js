document.title = 'Sustainability | Skylink Corridors';
document.querySelector('meta[name="description"]').content = 'Creating Sustainable Supply Chains for the Future. Explore Skylink Corridors commitments to efficient transportation, environmental responsibility, and ethical business.';

const sustainabilityItems = [
  {
    title: 'Efficient Transportation',
    text: 'Optimizing routes and processes to improve efficiency, reduce fuel consumption, and minimize emissions.',
    icon: '<svg viewBox="0 0 24 24"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>'
  },
  {
    title: 'Lower Environmental Impact',
    text: 'Minimizing waste and promoting environmentally responsible practices across our logistics operations.',
    icon: '<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>'
  },
  {
    title: 'Digital Transformation',
    text: 'Leveraging digital solutions to improve efficiency, streamline processes, and reduce paper usage.',
    icon: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
  },
  {
    title: 'Safe Workplaces',
    text: 'Maintaining safe and healthy working environments while promoting a strong culture of workplace safety.',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
  },
  {
    title: 'People & Communities',
    text: 'Supporting employee development and contributing positively to the communities we serve.',
    icon: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  },
  {
    title: 'Ethical Business',
    text: 'Conducting business with integrity, transparency, accountability, and a strong commitment to compliance.',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.8 2.9 8.3 7 10 4.1-1.7 7-5.2 7-10V6Z"/><path d="m9 12 2 2 4-4"/></svg>'
  }
];

document.querySelector('main').innerHTML = `
  <section class="sustain-page-hero">
    <img src="/assets/sustainability.jpg" alt="Sustainable logistics - Skylink Corridors">
    <div class="sustain-page-overlay"></div>
    <div class="container sustain-page-content">
      <div class="eyebrow">Sustainability</div>
      <h1>Sustainability</h1>
      <p>Creating Sustainable Supply Chains for the Future</p>
    </div>
  </section>

  <section class="commitments-section">
    <div class="container">
      <div class="commitments-head">
        <h2>Creating Sustainable Supply Chains for the Future</h2>
        <p>Every decision we make considers its environmental and social impact. Here is how we are<br>building more responsible supply chains across Pakistan and regional corridors.</p>
      </div>
      <div class="commitments-grid">
        ${sustainabilityItems.map(item => `
          <article class="commitment-card">
            <i>${item.icon}</i>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>


  <section class="values-cta">
    <div class="container">
      <h2>Partner in Sustainable Logistics</h2>
      <p>Discover how our sustainable logistics solutions can support your environmental and operational goals.</p>
      <a class="btn btn-primary" href="/contact/">Connect with Us <span>→</span></a>
    </div>
  </section>`;
