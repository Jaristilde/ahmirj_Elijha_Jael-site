(() => {
  'use strict';
  const config = window.AJ_BOOKING || {};
  const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  function publicEventUrl(value) {
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' || !['eventbrite.com', 'www.eventbrite.com'].includes(url.hostname.toLowerCase()) || url.username || url.password || !/^\/e\/.+-\d+\/?$/.test(url.pathname)) return null;
      const incoming = new URLSearchParams(window.location.search);
      for (const key of campaignKeys) {
        if (!url.searchParams.has(key) && incoming.has(key)) url.searchParams.set(key, incoming.get(key));
      }
      return url.href;
    } catch { return null; }
  }
  const link = document.querySelector('[data-booking="website"]');
  const eventUrl = publicEventUrl(config.websiteWorkshopUrl);
  if (link && eventUrl) {
    link.href = eventUrl;
    link.hidden = false;
  }
  const serviceSelect = document.querySelector('#inquiry-service');
  const service = new URLSearchParams(window.location.search).get('service');
  if (serviceSelect && Array.from(serviceSelect.options).some(option => option.value === service)) serviceSelect.value = service;
  document.querySelectorAll('[data-inquiry]').forEach(anchor => {
    anchor.addEventListener('click', () => {
      if (serviceSelect && Array.from(serviceSelect.options).some(option => option.value === anchor.dataset.inquiry)) serviceSelect.value = anchor.dataset.inquiry;
    });
  });
  // Preserve bookmarks from the former all-in-one page.
  if (document.querySelector('#workshops')) {
    const legacy = {
      '#linkedin-services': '/linkedin-services.html#linkedin-services',
      '#personal-help': '/consulting.html#personal-help',
      '#consulting': '/consulting.html#consulting',
      '#work': '/consulting.html#work',
      '#services': '/consulting.html#services',
      '#about': '/consulting.html#about',
      '#service-inquiry': '/contact.html#service-inquiry',
      '#contact': '/contact.html#service-inquiry'
    };
    if (legacy[window.location.hash]) {
      const destination = new URL(legacy[window.location.hash], window.location.origin);
      destination.search = window.location.search;
      window.location.replace(destination.href);
    }
  }
})();
