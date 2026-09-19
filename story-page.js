document.title = 'Our Story | Skylink Corridors';
document.querySelector('meta[name="description"]').content = 'Building Stronger Connections Through Logistics. Discover how Skylink Corridor delivers end-to-end transportation, warehousing, freight forwarding, and supply chain management.';

const storyIcons = {
  mission: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
  vision: '<svg viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.3 14.5A7 7 0 1 1 15.7 14.5C14.6 15.3 14 16.3 14 18h-4c0-1.7-.6-2.7-1.7-3.5Z"/></svg>',
  reach: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
  excellence: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="6"/><path d="m8 14-1 8 5-3 5 3-1-8"/></svg>'
};

document.querySelector('main').innerHTML = `
  <section class="story-hero">
    <img src="/assets/about.jpg" alt="Our Story - Skylink Corridors">
    <div class="story-hero-overlay"></div>
    <div class="container story-hero-content">
      <div class="eyebrow">About Us</div>
      <h1>Our Story</h1>
      <p>Building Stronger Connections Through Logistics</p>
    </div>
  </section>

  <section class="story-foundation">
    <div class="container story-grid">
      <div class="story-copy">
        <h2>Building Stronger Connections<br>Through Logistics</h2>
        <p>Skylink Corridor was established with a vision to redefine logistics by delivering reliable, technology-driven, and customer-focused supply chain solutions. From our beginnings as a transportation service provider, we have evolved into an integrated logistics company offering end-to-end transportation, warehousing, freight forwarding, cross-border logistics, and supply chain management services across Pakistan and regional markets.</p>
        <p>Our growth has been driven by a commitment to operational excellence, innovation, and long-term partnerships. By continuously investing in transportation assets, skilled professionals, and digital technologies, we help businesses overcome supply chain challenges while improving efficiency, visibility, and cost performance.</p>
        <p>Today, Skylink Corridor serves customers across diverse industries including retail, healthcare, manufacturing, automotive, FMCG, construction, and international trade. Our integrated logistics capabilities enable businesses to move goods seamlessly from origin to destination while maintaining the highest standards of reliability, compliance, and customer service.</p>
        <p>As we continue to grow, our mission remains unchanged—to become the most trusted logistics partner for businesses seeking dependable transportation solutions, smarter supply chains, and sustainable business growth.</p>
      </div>

      <div class="story-values">
        <article>
          <i>${storyIcons.mission}</i>
          <h3>Our Mission</h3>
          <p>Delivering reliable and efficient logistics solutions worldwide.</p>
        </article>
        <article>
          <i>${storyIcons.vision}</i>
          <h3>Our Vision</h3>
          <p>Connecting businesses through seamless global logistics.</p>
        </article>
        <article>
          <i>${storyIcons.reach}</i>
          <h3>Our Reach</h3>
          <p>Connecting Pakistan to global markets and trade corridors.</p>
        </article>
        <article>
          <i>${storyIcons.excellence}</i>
          <h3>Our Excellence</h3>
          <p>Driven by expertise, reliability, and service excellence.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="story-cta">
    <div class="container">
      <h2>Ready to Partner with Us?</h2>
      <p>Let us build a smarter, faster, and more efficient supply chain together.</p>
      <a class="btn btn-primary" href="/contact/">Contact Our Team <span>→</span></a>
    </div>
  </section>`;
