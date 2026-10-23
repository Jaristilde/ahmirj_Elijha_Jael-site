# Website preview notes

## Current offer

The owner confirmed the Nov 5, 2026 free demo and Dec 5, 2026 paid website workshop. See SITE_PLAN.md for the complete approved titles, times, prices, and 50-seat class capacity. These replace both previous app/marketing class cards and the prior draft schedule.

Free demo registration: https://luma.com/upvxjs5y

Paid Eventbrite link is pending. The paid button is hidden, with no placeholder URL or fake checkout. The nearby free-demo button explicitly leads to the free demo. Add the published Eventbrite event URL to websiteWorkshopUrl in booking-config.js when available.

## Preserved integrations

- Existing Netlify workshop-notify form and contact/social links retained.
- Google Meet is the platform. No calendar account settings were changed.
- Calendly discovery/personal links remain unconfigured pending verified public links and paid-session terms. Email inquiries remain available.
- UTM attribution values are forwarded only to validated configured booking destinations. No arbitrary personal query data is forwarded.
- No analytics provider existed. Completed paid registrations must be counted from actual orders, not outbound clicks.
- No real bookings, payments, or lead submissions are used in verification.

## Review requirements

No merge to main or production release. Review https://deploy-preview-1--ahmirjael.netlify.app/ first.
Confirm the published Eventbrite listing matches the approved dates, prices, capacity, fees and refund terms. Calendly/Google Calendar sync and Netlify form processing still require provider-side verification.
No testimonials are displayed. An inert template uses [REAL QUOTE NEEDED]. No income claims are added. Public copy uses no em dashes.

## Requested follow-ups

Added a three-step How it works section above the cards. All Luma buttons open a new tab with noopener/noreferrer. Paid-card fallback says Join the free demo first with Black Friday Special tickets open soon. Page and social titles explicitly feature the free Nov 5 demo. PR 1 remains unmerged.
