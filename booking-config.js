/* Add only verified public links and matching event details. Never add account credentials.
   Empty entries leave honest update/inquiry links in place. See PREVIEW_NOTES.md. */
window.AJ_BOOKING = {
  workshops: {
    app: null,
    marketing: null
    // Example structure, using the actual event listing's details:
    // app: { url: 'PUBLIC_EVENTBRITE_EVENT_URL', details: 'Confirmed date, start–end time, timezone, fees and refund terms', price: '$100', format: '4 hours · 8 seats · Live on Zoom' }
  },
  discovery: null,
  // discovery: { url: 'PUBLIC_CALENDLY_EVENT_URL' }
  personal: null
  // personal: { url: 'PUBLIC_PAID_CALENDLY_EVENT_URL', confirmed: true, terms: 'Confirmed session length, price, and payment instructions' }
};
