(() => {
  'use strict';
  const config = window.AJ_BOOKING || {};
  const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  function publicUrl(value, provider) {
    try {
      const url = new URL(value);
      const host = url.hostname.toLowerCase();
      const hostMatches = host === provider || host === `www.${provider}`;
      if (url.protocol !== 'https:' || !hostMatches || url.username || url.password) return null;
      if (provider === 'calendly.com' && (!/^\/[^/]+\/[^/]+\/?$/.test(url.pathname) || /^\/(app|login|signup|integrations|oauth)(\/|$)/i.test(url.pathname))) return null;
      if (provider === 'eventbrite.com' && !/^\/e\/.+-\d+\/?$/.test(url.pathname)) return null;
      const incoming = new URLSearchParams(window.location.search);
      for (const key of campaignKeys) {
        if (!url.searchParams.has(key) && incoming.has(key)) url.searchParams.set(key, incoming.get(key));
      }
      return url.href;
    } catch { return null; }
  }
  const hasText = value => typeof value === 'string' && value.trim().length > 0;
  let activeWorkshops = 0;
  for (const key of ['app', 'marketing']) {
    const offer = config.workshops?.[key];
    const url = offer && publicUrl(offer.url, 'eventbrite.com');
    if (!url || !['details', 'price', 'format'].every(field => hasText(offer[field]))) continue;
    const link = document.querySelector(`[data-booking="${key}"]`);
    link.href = url;
    link.textContent = 'Save my seat on Eventbrite';
    document.querySelector(`[data-details="${key}"]`).textContent = offer.details;
    document.querySelector(`[data-price="${key}"]`).textContent = offer.price;
    document.querySelector(`[data-format="${key}"]`).textContent = offer.format;
    activeWorkshops += 1;
  }
  if (activeWorkshops) document.querySelector('#workshops .section-intro').textContent = 'Choose a practical skill and build alongside me. See the confirmed event details below, or get updates about future workshops.';
  const discoveryUrl = config.discovery && publicUrl(config.discovery.url, 'calendly.com');
  if (discoveryUrl) {
    document.querySelectorAll('[data-booking="discovery"]').forEach(link => {
      link.href = discoveryUrl;
      link.textContent = 'Book a free discovery call';
    });
    document.querySelectorAll('[data-details="discovery"]').forEach(note => {
      note.textContent = 'Choose a time on Calendly. Check the timezone shown before confirming.';
    });
  }
  const personal = config.personal;
  const personalUrl = personal && publicUrl(personal.url, 'calendly.com');
  const sameEvent = personalUrl && discoveryUrl && new URL(personalUrl).pathname.replace(/\/$/, '') === new URL(discoveryUrl).pathname.replace(/\/$/, '');
  if (personalUrl && personal.confirmed === true && hasText(personal.terms) && !sameEvent) {
    const link = document.querySelector('[data-booking="personal"]');
    link.href = personalUrl;
    link.textContent = 'Book personal AI help';
    document.querySelector('#personal-terms').textContent = personal.terms;
  }
})();
