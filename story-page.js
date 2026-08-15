document.title = 'Our Story | Skylink Corridors';
document.querySelector('meta[name="description"]').content = 'Discover the story, mission, vision, regional reach, and operational excellence of Skylink Corridors.';

const storyIcons = {
  mission:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
  vision:'<svg viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.3 14.5A7 7 0 1 1 15.7 14.5C14.6 15.3 14 16.3 14 18h-4c0-1.7-.6-2.7-1.7-3.5Z"/></svg>',
  reach:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
  excellence:'<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="6"/><path d="m8 14-1 8 5-3 5 3-1-8"/></svg>'
};

document.querySelector('main').innerHTML = `
  <section class="story-hero"><img src="/assets/about.jpg" alt="Our Story"><div class="story-hero-overlay"></div><div class="container story-hero-content"><div class="eyebrow">About Us</div><h1>Our Story</h1><p>Skylink Corridor was founded on a simple but powerful belief: businesses deserve a logistics partner they can truly rely on — one that combines operational excellence with regional expertise and a genuine commitment to customer success.</p></div></section>
  <section class="story-foundation"><div class="container story-grid"><div class="story-copy"><h2>Built on a Foundation of Trust &amp;<br>Expertise</h2><p>Skylink Corridor is a leading integrated logistics and transportation company committed to delivering reliable, innovative, and customer-focused supply chain solutions. We combine transportation, warehousing, freight forwarding, distribution, and technology-driven logistics services.</p><p>From domestic transportation across Pakistan to complex cross-border operations connecting Afghanistan and Central Asia, our expertise enables customers to move products with confidence through every stage of the supply chain.</p><p>Driven by operational excellence, strategic partnerships, and continuous innovation, we create customized logistics solutions that support businesses of every size and industry.</p></div><div class="story-values">
    <article><i>${storyIcons.mission}</i><h3>Our Mission</h3><p>To provide seamless, technology-driven logistics solutions that accelerate business growth across South and Central Asia.</p></article>
    <article><i>${storyIcons.vision}</i><h3>Our Vision</h3><p>To be the most trusted integrated logistics partner connecting businesses from Pakistan to global markets.</p></article>
    <article><i>${storyIcons.reach}</i><h3>Our Reach</h3><p>Operating across Pakistan, Afghanistan, and Central Asia with a growing international freight network.</p></article>
    <article><i>${storyIcons.excellence}</i><h3>Our Excellence</h3><p>Recognized for operational reliability, customer satisfaction, and innovative supply chain management.</p></article>
  </div></div></section>
  <section class="story-cta"><div class="container"><h2>Ready to Partner with Us?</h2><p>Let us build a smarter, faster, and more efficient supply chain together.</p><a class="btn btn-primary" href="/contact/">Contact Our Team <span>→</span></a></div></section>`;
