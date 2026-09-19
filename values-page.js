document.title = 'Our Values | Skylink Corridors';
document.querySelector('meta[name="description"]').content = 'The Principles That Drive Every Delivery. Our values define how we operate, serve our customers, and build lasting logistics partnerships.';

const values = [
  {
    key: 'customer',
    title: 'Customer First',
    text: 'We place our customers at the center of everything we do, delivering tailored logistics solutions that create long-term value and support business success.',
    icon: '<svg viewBox="0 0 24 24"><circle cx="10" cy="8" r="3"/><path d="M4 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6M19 14a5 5 0 0 1 2 4v2"/></svg>'
  },
  {
    key: 'integrity',
    title: 'Integrity',
    text: 'We conduct our business with honesty, transparency, and accountability while building relationships founded on trust and mutual respect.',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.8 2.9 8.3 7 10 4.1-1.7 7-5.2 7-10V6Z"/></svg>'
  },
  {
    key: 'excellence',
    title: 'Excellence',
    text: 'We continuously improve our people, processes, and technology to deliver safe, efficient, and reliable logistics services.',
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>'
  },
  {
    key: 'innovation',
    title: 'Innovation',
    text: 'We embrace digital transformation, operational innovation, and smarter supply chain strategies to help customers remain competitive in a rapidly changing marketplace.',
    icon: '<svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M8.3 14.5A7 7 0 1 1 15.7 14.5C14.6 15.3 14 16.3 14 18h-4c0-1.7-.6-2.7-1.7-3.5Z"/></svg>'
  },
  {
    key: 'collaboration',
    title: 'Collaboration',
    text: 'We believe successful logistics is built through teamwork, strong partnerships, and open communication with customers, employees, and stakeholders.',
    icon: '<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>'
  }
];

document.querySelector('main').innerHTML = `
  <section class="values-hero">
    <img src="/assets/about.jpg" alt="Our Values - Skylink Corridors">
    <div class="values-hero-overlay"></div>
    <div class="container values-hero-content">
      <div class="eyebrow">About Us</div>
      <h1>Our Values</h1>
      <p>The Principles That Drive Every Delivery</p>
    </div>
  </section>

  <section class="values-section">
    <div class="container">
      <div class="commitments-head" style="margin-bottom: 40px; text-align: center;">
        <h2 style="font-size: 30px; margin-bottom: 12px;">The Principles That Drive Every Delivery</h2>
        <p style="max-width: 800px; margin: 0 auto; color: var(--muted); font-size: 15.5px; line-height: 1.6;">Our values define how we operate, how we serve our customers, and how we build lasting relationships. They shape every decision we make and inspire us to deliver logistics solutions that exceed expectations.</p>
      </div>
      <div class="values-grid">
        ${values.map(value => `
          <article class="value-card ${value.key}">
            <i>${value.icon}</i>
            <h2>${value.title}</h2>
            <p>${value.text}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="values-cta">
    <div class="container">
      <h2>Values You Can Rely On</h2>
      <p>Experience a logistics partnership built on trust, performance, and shared success.</p>
      <a class="btn btn-primary" href="/contact/">Partner with Us <span>→</span></a>
    </div>
  </section>`;
