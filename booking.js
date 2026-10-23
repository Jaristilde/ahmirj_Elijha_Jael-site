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
  document.querySelectorAll('[data-inquiry]').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('#inquiry-service').value = link.dataset.inquiry;
    });
  });
})();
