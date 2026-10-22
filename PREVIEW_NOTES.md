# Workshop sales preview — October 22, 2026

Local branch: `workshop-sales-preview`. No production deployment, external event edits, payments, calendar changes, or form submissions.

## Integration inventory

- Static `index.html`, no build system, redirect configuration, embedded calendars, payment SDK, or existing analytics found.
- Two Eventbrite purchase links and one Calendly discovery link were `#` placeholders. No public event URLs exist in the repository or SITE_PLAN.md.
- Existing Netlify form retained: `workshop-notify`, POST, `data-netlify="true"`, hidden `form-name`, required email. Hosting-side processing is not verifiable locally.
- Original contact, LinkedIn, GitHub, consulting mail links, photos, and section anchor targets retained.
- Calendly account management link opens a login screen. Google Calendar connection, checked calendars, destination calendar, availability, buffers, limits, payment settings, and actual appointment types cannot be verified without account access.
- No booking provider or payment provider has been replaced. Inquiry links and workshop update signup are honest fallbacks, not a new purchase flow.

## Changes

- Shorter beginner-focused opening; featured app workshop appears immediately after it. Website-only teaching was not substituted for the current app curriculum.
- Outcomes, instructor, and personal-help sections precede broader consulting.
- $100 / four hours / eight seats / Google Meet remain the existing advertised workshop terms, not externally verified facts. Event dates and final fees are explicitly pending.
- Personal-help section provides an email inquiry; proposed $149 / 90-minute terms are kept in an inert owner-review template until confirmed.
- No invented booking dates, remaining-seat counts, testimonials, recordings, purchase conversions, public product links, or guarantees.
- Numeric portfolio claims and conflicting founder details have been removed from visible copy pending evidence. Original content remains recoverable in Git history. Review: $1.2M savings, 10K+ interactions/day, 11 apps, eight vs ten years of experience, sub-100ms response, product store availability, and credentials. SITE_PLAN.md itself documents conflicting numbers; it is a draft, not external verification.
- Mobile grid minimums fixed, short mobile navigation, visible keyboard focus, skip link, reduced-motion support, larger tap targets, and darker terracotta text for contrast.
- Existing titles/social metadata updated to reflect workshops; social image paths made absolute.

## Required before paid launch

1. Supply the public Eventbrite event URLs. Confirm curriculum, dates/year, start/end times, timezone, final prices/fees, capacity, required software costs, materials, joining instructions, and refund terms against each listing.
2. Resolve the conflict between the current $100 cards and SITE_PLAN.md's draft $99/$149 and November 21 offer. Do not treat the draft dates as active events.
3. Supply the public Calendly discovery-event link. Confirm whether its duration remains 30 minutes (current site) or 20 minutes (draft plan).
4. Confirm the paid personal session's terms and separate booking/payment sequence. Proposed: 90 minutes / $149. Never use the free discovery event as its paid event.
5. In Calendly, sign in and review Google Calendar connection: conflict calendars, calendar receiving events, timezone, availability, buffers, limits, and existing payment settings. The management URL must never appear as a website booking destination.
6. Choose how to serve ten paid students/weekend: one supported ten-person cohort or multiple sessions. Current capacity remains eight per class. Do not advertise fake scarcity or change the live capacity silently.
7. Verify Netlify form handling in the hosting configuration, the Eventbrite payment/confirmation flow, and Calendly/Google Calendar sync using provider settings or an authorized test workflow. No real test booking or payment has been made.

## Connecting verified links

Edit `booking-config.js`. Empty values keep update/inquiry fallbacks. Workshop activation requires a public Eventbrite URL plus confirmed details, price and format. Calendly activation accepts individual public event links, not management/login pages. Personal booking also requires confirmed terms and a different URL from discovery. Review all config copy before deployment. The configuration does not provision events or connect Google Calendar.

Only UTM campaign keys are forwarded to supported booking links. Existing destination query parameters, including Eventbrite affiliation values, are preserved. No contact data or arbitrary URL query parameters are copied. If a provider uses a different legitimate domain/URL format, review the validator instead of substituting an unrelated URL.

No analytics provider existed to reuse. Do not report outbound clicks as paid registrations. Use actual Eventbrite order reports for revenue and paid-seat counts; add analytics only after choosing an existing supported measurement setup.

## Review and release

Serve this directory with a local static server, review desktop/mobile, and review the Git diff. Keep this branch separate from main. Pushing or merging to the production branch may trigger Netlify publication. No hosting workflow configuration was present, so a hosted deploy preview cannot be assumed.

## Completed validation

- Desktop 1280px and mobile 390px visually reviewed; also checked 320px for horizontal overflow. None found.
- Browser reported no JavaScript errors. Primary workshop and signup anchors reach the intended sections.
- Static checks passed: all original section anchors, existing contact/social links and Netlify form markup retained; one H1; no dead `#` purchase links.
- Booking logic checks passed for valid event activation, incomplete config fallback, rejection of management/invalid destinations, paid/free event separation, preserving existing campaign values, and excluding arbitrary private query parameters.
- Payment, provider confirmation emails, Google Calendar synchronization, and Netlify form processing remain unverified; no external submissions were made.

Meeting platform confirmed by the owner: Google Meet, using the existing Google Workspace subscription. Website copy and configuration examples reflect Google Meet. No calendar or account settings were changed.
