# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: the first-time care seeker.** An adult considering psychiatric care for the first time. They may not know what a psychiatrist does, how one differs from a therapist, whether they need a referral, or what a first appointment involves. Reaching out is itself a hurdle for them.

Other audiences the current site addresses, not confirmed as priorities: people who have tried treatment without enough relief, family members arranging care, and referring clinicians.

## Product Purpose

The website for Adam W. Awerbuch, MD, PC, a psychiatry practice in Santa Barbara, California. It explains who Dr. Awerbuch is, what he treats, how becoming a patient works, and how to reach the office.

Success is a visitor contacting the office. Phone, email, and the online request form are equally good outcomes; no channel is preferred over another.

## Positioning

**Undecided.** No differentiating claim has been chosen. Candidate angles present in the current copy, none confirmed as the lead:

- Options beyond medication for treatment-resistant depression, with TMS available in the same building.
- A solo practice where patients see the doctor himself for an extended first evaluation.
- Psychiatry and addiction medicine treated together.
- Training and hospital standing.

Future work should not promote one of these to a headline position without the owner choosing it.

## Operating Context

- Intake runs through the office: phone (805) 845-3046, email office@aawerbuchmd.com, or the request form on the contact page.
- The request form has no submission endpoint yet. It validates input, then asks the visitor to call.
- The office is at 351 Hitchcock Way, Suite B165, Santa Barbara, CA 93105.
- The site is intended for the practice domain aawerbuchmd.com. The office email runs on the same domain, so website DNS changes must leave mail records alone.
- The site is static with no build step: plain HTML, one stylesheet, one script, hostable on any static host. The header, crisis bar, and footer are duplicated in every HTML file, so shared details must be updated on every page.

## Capabilities and Constraints

**Existing pages:** home, about, conditions and treatment, new patients (steps, what to bring, insurance, FAQ), contact (address, map, hours, request form, crisis resources), and a 404 page.

**Constraints:**

- Crisis resources (988, 911, and the Santa Barbara County Behavioral Wellness 24/7 line at (888) 868-1649) appear in the top bar, footer, FAQ, and contact page. They stay in place. The site states it is not for emergencies.
- Any form that receives submissions must use a HIPAA-compliant provider that will sign a Business Associate Agreement.
- A Notice of Privacy Practices and a privacy policy are required before launch and do not exist yet.
- California restricts how board certification may be advertised. The site does not claim it.
- The Good Faith Estimate notice (No Surprises Act) is on the new-patients page.

**Confirmed facts (from the business card only):** practice name "Adam W. Awerbuch, MD, PC", the descriptor "Psychiatry", the address and suite, the phone number, the email address, and the logo.

**Unconfirmed, awaiting Dr. Awerbuch's sign-off.** Everything below comes from public sources (TheraMind Center, Cottage Health, provider directories, journal listings) and must be treated as provisional:

- Fax number (805) 845-9820.
- Office hours (Monday to Friday, 9 am to 5 pm).
- Biography: MD/MBA from the University of Miami Miller School of Medicine, psychiatry residency at University of Miami / Jackson Memorial Hospital, medical staff at Santa Barbara Cottage Hospital, publications on human trafficking.
- The relationship with TheraMind Center of Santa Barbara (Suite B170, same building) and how TMS availability is described.
- Board certification status.
- Patient age range (the site says "adults").
- Whether telehealth is offered.
- Which insurance plans are accepted.
- Whether addiction care includes prescribing medications for substance use disorders.
- Which TMS and neuromodulation options are available.
- Residency and training dates.
- Whether the canonical host is the apex domain or www.

## Brand Commitments

- Name: "Adam W. Awerbuch, MD, PC" with the descriptor "Psychiatry", as on the business card.
- Logo: the head-and-knot mark from the business card. `assets/img/logo-mark.svg` is a vector redraw from a photo of the card; the designer's original file should replace it if available.
- The card's aqua and teal colors and its Futura-style wordmark are the existing identity.

No voice or personality has been confirmed by the owner.

## Evidence on Hand

- Business card details (name, address, phone, email, logo).
- Logo and icon assets: `assets/img/logo-mark.svg`, `assets/img/favicon.svg`, `assets/img/apple-touch-icon.png`, `assets/img/og-image.png`.
- Public-source biography and publication references, listed with links in `README.md` under Sources. Unconfirmed.

**Absent. Do not fabricate:**

- No headshot. `assets/img/portrait-placeholder.svg` is a stand-in.
- No photographs of the office or building.
- No patient testimonials, reviews, ratings, or outcome statistics.
- No list of accepted insurance plans and no fees.
- No confirmed board certification.

## Product Principles

1. **Assume no prior knowledge.** The primary visitor has never seen a psychiatrist. Explain the process and the vocabulary rather than presuming either.
2. **Lower the cost of reaching out.** Contact is the goal and the hard part. Phone, email, and form are offered as equals; the visitor picks what feels manageable.
3. **Claim only what is confirmed.** Unverified facts stay marked as provisional until Dr. Awerbuch signs off, and nothing is invented to fill a gap.
4. **Safety is always within reach.** Crisis resources are present on every page, and the site never presents itself as a place to get urgent help.
5. **Protect what visitors share.** No health information moves through a channel that is not HIPAA-compliant.

## Accessibility & Inclusion

No formal standard has been set by the owner. The existing implementation already holds itself to WCAG AA contrast for buttons and text, and includes a skip link, semantic landmarks, visible focus states, an Escape-closable menu, `prefers-reduced-motion` support, and form errors announced to assistive technology. Future work should not regress these.
