const menuToggle = document.querySelector('.menu-toggle');
const navWrap = document.querySelector('.nav-wrap');
const navItems = document.querySelectorAll('.has-menu');

document.querySelectorAll('img[alt="Skylink Corridors"]').forEach((logo) => {
  logo.src = '/assets/Skylink%20Corridor%20logo%20New.png';
});

menuToggle.addEventListener('click', () => {
  const open = navWrap.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

navItems.forEach((item) => {
  const trigger = item.querySelector('.nav-trigger');
  trigger.addEventListener('click', (event) => {
    event.stopPropagation();
    navItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove('open');
        other.querySelector('.nav-trigger').setAttribute('aria-expanded', 'false');
      }
    });
    const open = item.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(open));
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.has-menu')) {
    navItems.forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.nav-trigger').setAttribute('aria-expanded', 'false');
    });
  }
});

const quoteForm = document.querySelector('#quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = quoteForm.querySelector('.form-status');
    const button = quoteForm.querySelector('.send-request');
    const originalButtonText = button.innerHTML;

    status.className = 'form-status';
    status.textContent = 'Sending your request...';
    button.disabled = true;

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(quoteForm)))
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) throw new Error(result.error || 'Your request could not be sent.');

      status.classList.add('success');
      status.textContent = 'Thank you. Your request has been sent successfully.';
      quoteForm.reset();
    } catch (error) {
      status.classList.add('error');
      status.textContent = error.message || 'Your request could not be sent. Please try again.';
    } finally {
      button.disabled = false;
      button.innerHTML = originalButtonText;
    }
  });
}

const detailCta = document.querySelector('.detail-cta');
if (detailCta) {
  detailCta.className = 'detail-cta';
  detailCta.innerHTML = `<div class="container detail-cta-inner">
    <div><h2>Ready to get started?</h2><p>Talk to our logistics experts and get a custom quote today.</p></div>
    <div class="detail-cta-actions">
      <a class="btn btn-primary" href="/contact/">Request a Quote</a>
      <a class="btn detail-call-btn" href="tel:+92210000000"><span aria-hidden="true">☎</span> Call Us</a>
    </div>
  </div>`;
}

// Shared motion system: reveal sections as they enter the viewport and stagger groups.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealSelector = [
  '.section-head', '.about .two-col > *', '.service-card', '.service-slide', '.industry-grid a',
  '.why-grid article', '.sustainability .two-col > *', '.contact-details > *',
  '.quote-card', '.benefit-grid article', '.job-card', '.detail-grid > *',
  '.offer-list article', '.detail-related .container > *', '.detail-cta-inner > *',
  '.footer-grid > *', '.portfolio-card', '.portfolio-cta .container',
  '.story-copy', '.story-values article', '.story-cta .container',
  '.value-card', '.values-cta .container', '.commitments-head',
  '.commitment-card', '.sustain-metrics article', '.about-detail-head',
  '.about-feature-card', '.news-card', '.about-detail-cta .container'
].join(',');
const revealItems = document.querySelectorAll(revealSelector);

revealItems.forEach((item) => {
  item.classList.add('motion-reveal');
  const siblings = item.parentElement ? [...item.parentElement.children] : [];
  const index = Math.max(0, siblings.indexOf(item));
  item.style.setProperty('--motion-delay', `${Math.min(index, 5) * 70}ms`);
});

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -45px' });
  revealItems.forEach((item) => revealObserver.observe(item));
}

document.querySelectorAll('.hero-content, .contact-hero-content, .careers-hero-content, .detail-hero-content, .portfolio-hero-content, .story-hero-content, .values-hero-content, .sustain-page-content, .about-detail-content')
  .forEach((item) => item.classList.add('hero-motion'));

const statNumbers = document.querySelectorAll('.stats strong');
const animateStat = (element) => {
  if (element.dataset.counted === 'true') return;
  element.dataset.counted = 'true';
  const original = element.textContent.trim();
  if (original.includes('/')) {
    element.textContent = original;
    return;
  }
  const target = Number.parseInt(original.replace(/\D/g, ''), 10);
  const suffix = original.replace(/[\d,]/g, '');
  if (!Number.isFinite(target) || reduceMotion) return;
  const duration = 1150;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(update);
  };
  element.textContent = `0${suffix}`;
  requestAnimationFrame(update);
};

if (statNumbers.length) {
  if (reduceMotion || !('IntersectionObserver' in window)) {
    statNumbers.forEach(animateStat);
  } else {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      statNumbers.forEach(animateStat);
      observer.disconnect();
    }, { threshold: 0.35 });
    statsObserver.observe(document.querySelector('.stats'));
  }
}

// Services Pictorial Slider
const servicesSlider = document.querySelector('#services-slider');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const sliderDotsContainer = document.querySelector('#slider-dots');

if (servicesSlider && sliderPrev && sliderNext) {
  const slides = servicesSlider.querySelectorAll('.service-slide');
  const slideCount = slides.length;

  const getSlideStep = () => {
    const firstSlide = slides[0];
    if (!firstSlide) return 340;
    return firstSlide.getBoundingClientRect().width + 24;
  };

  if (sliderDotsContainer && slideCount > 0) {
    sliderDotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        servicesSlider.scrollTo({ left: i * getSlideStep(), behavior: 'smooth' });
      });
      sliderDotsContainer.appendChild(dot);
    });
  }

  const updateDots = () => {
    if (!sliderDotsContainer) return;
    const step = getSlideStep();
    const activeIndex = Math.min(Math.round(servicesSlider.scrollLeft / step), slideCount - 1);
    const dots = sliderDotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  };

  let scrollTimeout;
  servicesSlider.addEventListener('scroll', () => {
    if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
    scrollTimeout = requestAnimationFrame(updateDots);
  }, { passive: true });

  sliderNext.addEventListener('click', () => {
    servicesSlider.scrollBy({ left: getSlideStep(), behavior: 'smooth' });
  });

  sliderPrev.addEventListener('click', () => {
    servicesSlider.scrollBy({ left: -getSlideStep(), behavior: 'smooth' });
  });
}
