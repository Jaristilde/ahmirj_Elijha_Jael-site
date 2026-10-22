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
  const workshopUrl = publicUrl(config.websiteWorkshopUrl, 'eventbrite.com');
  if (workshopUrl) {
    const link = document.querySelector('[data-booking="website"]');
    link.href = workshopUrl;
    link.hidden = false;
    document.querySelector('[data-details="website"]').textContent = 'Register on Eventbrite. Check the listing for ticket fees and refund terms before paying.';
  }
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
