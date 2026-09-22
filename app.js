// Fixed header on scroll
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const handleHeaderScroll = () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();
}

const menuToggle = document.querySelector('.menu-toggle');
const navWrap = document.querySelector('.nav-wrap');
const navItems = document.querySelectorAll('.has-menu');

document.querySelectorAll('img[alt="Skylink Corridors"]').forEach((logo) => {
  logo.src = '/assets/Skylink%20Corridor%20logo%20New.png';
});

if (menuToggle && navWrap) {
  menuToggle.addEventListener('click', () => {
    const open = navWrap.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

navItems.forEach((item) => {
  const trigger = item.querySelector('.nav-trigger');
  if (!trigger) return;
  const caret = trigger.querySelector('span');

  trigger.addEventListener('click', (event) => {
    const isMobile = window.innerWidth <= 900;
    // On mobile screens, tapping the caret arrow toggles the dropdown submenu
    if (isMobile && (event.target === caret || event.target.closest('span') === caret)) {
      event.preventDefault();
      event.stopPropagation();
      navItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          const ot = other.querySelector('.nav-trigger');
          if (ot) ot.setAttribute('aria-expanded', 'false');
        }
      });
      const open = item.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(open));
      return;
    }
    // Standard click on link text navigates to /about/, /services/, /industries/ directly!
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

  const serviceSelect = quoteForm.querySelector('select[name="service"]');
  if (serviceSelect) {
    const params = new URLSearchParams(window.location.search);
    const requestedService = params.get('service');
    if (requestedService) {
      const cleanReq = requestedService.toLowerCase().replace(/[-_]/g, ' ').trim();
      for (const option of serviceSelect.options) {
        const cleanOpt = option.value.toLowerCase().replace(/[-_]/g, ' ').trim();
        if (cleanOpt && (cleanOpt === cleanReq || cleanOpt.includes(cleanReq) || cleanReq.includes(cleanOpt))) {
          option.selected = true;
          break;
        }
      }
    }
  }
}

const detailCta = document.querySelector('.detail-cta');
if (detailCta) {
  detailCta.className = 'detail-cta';
  detailCta.innerHTML = `<div class="container detail-cta-inner">
    <div><h2>Ready to get started?</h2><p>Talk to our logistics experts and get a custom quote today.</p></div>
    <div class="detail-cta-actions">
      <a class="btn btn-primary" href="/contact/">Request a Quote</a>
      <a class="btn detail-call-btn" href="tel:+9221111555401"><span aria-hidden="true">☎</span> Call Us</a>
    </div>
  </div>`;
}

// Shared motion system: reveal sections as they enter the viewport and stagger groups.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealSelector = [
  '.section-head', '.about .two-col > *', '.service-card', '.industry-grid a',
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
  const slides = [...servicesSlider.querySelectorAll('.service-slide')];
  const count = slides.length;
  // Copies on both ends allow the last card to flow directly into the first.
  const copySlide = (slide) => {
    const copy = slide.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    copy.querySelectorAll('a').forEach(link => link.tabIndex = -1);
    return copy;
  };
  servicesSlider.prepend(...slides.map(copySlide));
  servicesSlider.append(...slides.map(copySlide));
  const allSlides = [...servicesSlider.querySelectorAll('.service-slide')];
  let positions = [];
  let timer;
  let settleTimer;
  let visible = true;
  let touching = false;
  let active = 0;
  const nearestIndex = () => positions.reduce((best, position, i) =>
    Math.abs(position - servicesSlider.scrollLeft) < Math.abs(positions[best] - servicesSlider.scrollLeft) ? i : best, count);
  const logicalIndex = index => ((index - count) % count + count) % count;
  const updateDots = () => {
    active = logicalIndex(nearestIndex());
    [...sliderDotsContainer.children].forEach((dot, i) => {
      dot.classList.toggle('active', i === active);
      dot.setAttribute('aria-current', String(i === active));
    });
  };
  const normalize = () => {
    if (touching || !positions.length) return;
    const index = nearestIndex();
    if (index < count || index >= count * 2) {
      servicesSlider.scrollTo({ left: positions[count + logicalIndex(index)], behavior: 'instant' });
    }
    updateDots();
  };
  const goTo = (index) => {
    if (!positions.length) return;
    clearTimeout(settleTimer);
    servicesSlider.scrollTo({ left: positions[index], behavior: 'smooth' });
  };
  const move = direction => {
    normalize();
    goTo(nearestIndex() + direction);
  };
  const schedule = () => {
    clearInterval(timer);
    if (!touching && visible && !document.hidden && count > 1) {
      timer = setInterval(() => move(1), 3200);
    }
  };
  slides.forEach((slide, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slider-dot';
    dot.setAttribute('aria-label', `Show ${slide.querySelector('h3').textContent.trim()}`);
    dot.setAttribute('aria-controls', 'services-slider');
    dot.addEventListener('click', () => { goTo(count + i); schedule(); });
    sliderDotsContainer.appendChild(dot);
  });
  const rebuild = () => {
    positions = allSlides.map(slide => slide.offsetLeft - allSlides[0].offsetLeft);
    servicesSlider.scrollTo({ left: positions[count + active], behavior: 'instant' });
    updateDots();
    schedule();
  };
  sliderNext.addEventListener('click', () => { move(1); schedule(); });
  sliderPrev.addEventListener('click', () => { move(-1); schedule(); });
  servicesSlider.addEventListener('scroll', () => {
    updateDots();
    clearTimeout(settleTimer);
    settleTimer = setTimeout(normalize, 180);
  }, { passive: true });
  servicesSlider.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    move(event.key === 'ArrowRight' ? 1 : -1);
    schedule();
  });
  servicesSlider.addEventListener('pointerdown', () => { touching = true; schedule(); });
  servicesSlider.addEventListener('mouseenter', () => { touching = true; clearInterval(timer); });
  servicesSlider.addEventListener('mouseleave', () => { touching = false; schedule(); });
  const release = () => { if (touching) { touching = false; settleTimer = setTimeout(normalize, 180); schedule(); } };
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);
  document.addEventListener('visibilitychange', schedule);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      schedule();
    }, { threshold: 0.1 }).observe(servicesSlider);
  } else {
    visible = true;
  }
  window.addEventListener('resize', rebuild);
  window.addEventListener('load', rebuild);
  rebuild();
  schedule();
}

// Hero background video smooth autoplay initialization
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  const showVideo = () => {
    heroVideo.classList.add('video-playing');
  };

  heroVideo.addEventListener('playing', showVideo, { once: true });
  heroVideo.addEventListener('timeupdate', () => {
    if (heroVideo.currentTime > 0) showVideo();
  }, { once: true });

  if (!heroVideo.paused && heroVideo.currentTime > 0) {
    showVideo();
  }

  // Safety fallback after 1.8s
  setTimeout(showVideo, 1800);

  const playPromise = heroVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // If autoplay is blocked by browser policy, still reveal the video smoothly
      showVideo();
    });
  }
}

