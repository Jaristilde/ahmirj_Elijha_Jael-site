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

## LinkedIn Services

Added the owner-provided email-only LinkedIn Services for Job Seekers section and navigation link. Includes two written services, a shared three-step process, delivery times, reviewer details, privacy text, and [REAL QUOTE NEEDED]. Both Stan Store buttons stay hidden without URLs and show Opening soon. No resume upload form, credential collection, guarantees, testimonials, or checkout was created. The short intake form will belong to the eventual service purchase flow. Employer/credential copy is owner-supplied; no endorsement logos were added. Existing live workshop offers are separate from these written services.

## Heading and inquiry fixes

All headings and price display type now use upright Inter instead of Fraunces/Newsreader. Personal-help and business inquiry buttons lead to #service-inquiry and preselect the appropriate request. Discovery-call copy was replaced with written business-project inquiries. The form uses Netlify Forms with the name service-inquiry, honeypot, required email/message, and a dedicated success destination. No custom backend, third-party form tool, or payment handling was added.

Before launch, verify that Netlify form detection is enabled, that service-inquiry appears in Forms, and that submission notification emails reach the owner. No fake lead was submitted. The deployed HTML can confirm detection but cannot prove owner email delivery. Checkout still requires published Eventbrite and Stan Store purchase links and confirmed personal-help pricing if offered as a paid purchase. PR remains unmerged pending review and checkout readiness.

## Eventbrite link connected

Owner supplied the public Eventbrite link for event 2003754609978. Verified the public page lists December 5, 10 AM to 2 PM EST, Google Meet, 50 seats, $99 Black Friday through November 30, then $149, with an available Get tickets button. Paid workshop CTA is now visible and opens Eventbrite in a new tab. The link works without JavaScript as well. The discount condition concerning a feedback form and permission to quote genuine feedback is disclosed beside the button. No purchase was made. The two Stan Store links are still pending. PR remains unmerged.
