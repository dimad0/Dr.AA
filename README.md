# Adam W. Awerbuch, MD, PC — Psychiatry

Website for Dr. Adam W. Awerbuch's psychiatric practice in Santa Barbara, California. It is built for the practice domain, **aawerbuchmd.com**.

The branding follows the practice's business card: the head-and-knot logo, aqua and teal colors, and a Futura-style wordmark (Jost).

| | |
| --- | --- |
| Address | 351 Hitchcock Way, Suite B165, Santa Barbara, CA 93105 |
| Phone | (805) 845-3046 |
| Email | office@aawerbuchmd.com |

It is a static site with no build step and no dependencies: plain HTML, one CSS file and one small JavaScript file. It can be hosted anywhere that serves static files (GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any web host).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home, written for someone seeking psychiatric care for the first time: hero with call and email, what happens when you reach out, first-visit questions, conditions list, short bio |
| `about.html` | Full bio, philosophy of care, training timeline, clinical interests, publications |
| `services.html` | Conditions treated, services, TMS details |
| `new-patients.html` | Getting started, what to bring, insurance and Good Faith Estimate notice, FAQ |
| `contact.html` | Call and email options, what happens next, address, hours, fax, map, crisis resources |
| `404.html` | Not-found page |

```
assets/
  css/styles.css                  design tokens and all styles
  js/main.js                      mobile menu, scroll effects
  img/logo-mark.svg               practice logo (vector recreation of the business-card mark)
  img/favicon.svg                 simplified logo for browser tabs
  img/apple-touch-icon.png        home-screen icon
  img/og-image.png                preview image for links shared on social media and messaging
  img/santa-barbara-arch.svg      hero illustration
sitemap.xml, robots.txt           search-engine files (point to https://aawerbuchmd.com)
```

## Preview locally

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

On a Mac without the Xcode command-line tools, `python3` will not run. Use the built-in Ruby server instead:

```bash
ruby -run -e httpd . -p 8080
```

## Deploy

**GitHub Pages:** in the repository, go to Settings → Pages, choose "Deploy from a branch", then select the branch and `/ (root)`. Enter `aawerbuchmd.com` as the custom domain in the same screen, then point the domain's DNS at GitHub Pages.

> **Keep email working.** office@aawerbuchmd.com runs on this domain. When changing DNS, edit only the website records (the `A`/`ALIAS` records for the apex and the `CNAME` for `www`). Do not touch the `MX`, `TXT` (SPF/DKIM/DMARC) or other mail records, or email to the office will stop arriving.

**Netlify / Vercel / Cloudflare Pages:** import the repository. There is no build command, and the publish directory is the repository root.

## Before launch: confirm with Dr. Awerbuch

The content comes from public sources (listed below). Before going live, confirm or fill in these items:

- [ ] **Fax.** The site lists (805) 845-9820, taken from public provider directories. It isn't on the business card, so confirm it or remove it.
- [ ] **TheraMind relationship.** The site says Dr. Awerbuch also practices at TheraMind Center of Santa Barbara (Suite B170, same building) and that TMS is available there. Confirm this is still accurate and how he wants it described.
- [ ] **Logo file.** `assets/img/logo-mark.svg` was redrawn from a photo of the business card. If the designer has the original vector file, use it instead.
- [ ] **Office hours.** The site shows Monday–Friday, 9 am–5 pm (TheraMind Center's listed hours).
- [ ] **Headshot.** The site shows no portrait until a real one exists. When a photo is available, add it to the left column of the bio on `about.html` (a comment marks the spot). A portrait-orientation (4:5) photo suits that column.
- [ ] **Board certification.** Third-party directories describe him as board-certified, but this hasn't been confirmed from a primary source, so the site doesn't claim it yet. If he is certified (e.g. ABPN, Psychiatry), add it to the training timeline on `about.html`. California limits how board certification may be advertised.
- [ ] **What happens after someone reaches out.** The contact options say the office gathers basic information, answers questions about fit and insurance, and schedules a first visit. Confirm that, and add who answers, how quickly email gets a reply, and whether voicemail is left, if the office can commit to them.
- [ ] **Scope of practice.** Confirm the following:
  - the patient age range (the site says "adults")
  - whether telehealth is offered
  - which insurance plans are accepted
  - whether addiction care includes prescribing medications for substance use disorders (the site says "when appropriate")
  - which TMS and neuromodulation options TheraMind offers him
- [ ] **Training dates.** Add residency years to the timeline on `about.html` if desired.
- [ ] **Appointment form.** The site has no online request form. The earlier one could not send, so it was removed, and visitors are asked to call or email instead. To add one back, use a HIPAA-compliant form provider that will sign a Business Associate Agreement (BAA), and keep it short: name, one contact method and an optional note. The removed form is in git history (commit `2abd283`, `contact.html`).
- [ ] **Privacy notices.** HIPAA requires a covered provider with a website to post its Notice of Privacy Practices on the site, and California (CalOPPA) requires a privacy policy for sites that collect personal information. Add both pages and link them in the footer.
- [ ] **www or not.** Canonical URLs, the sitemap and the social preview image use `https://aawerbuchmd.com/` (without www). If the site will live at `www.aawerbuchmd.com` instead, update those URLs to match.

## Editing notes

- The header, crisis bar and footer are repeated in each HTML file. When you change shared details such as the phone number, email, address or hours, update every page:
  ```bash
  grep -rn "845-3046\|aawerbuchmd\|B165" *.html
  ```
  These details also appear in the JSON-LD block in `index.html`. The phone number and email are repeated in the header call button and in each "Call the office / Email the office" block.
- The navigation collapses to a menu at 1080px and below. That width is set in two places that must match: the media query in `assets/css/styles.css` and `NAV_BREAKPOINT` in `assets/js/main.js`.
- Colors, fonts and spacing are defined as CSS custom properties at the top of `assets/css/styles.css`. The `--brand-*` colors come from the logo: aqua `#6cc4d6` and cyan `#0fa0c8` are for decoration, while `#08739a` and `#08617f` are used for buttons and text because they meet WCAG AA contrast.
- Fonts are Jost (wordmark), Fraunces (headings) and Inter (body), loaded from Google Fonts.
- Accessibility features:
  - skip link
  - semantic landmarks
  - visible focus states, with a light ring on dark areas
  - menu that closes with the Escape key and keeps keyboard focus out of the page behind it
  - support for `prefers-reduced-motion`
  - links that open a new tab say so to screen readers
- Crisis resources (988, 911, and the Santa Barbara County Behavioral Wellness 24/7 line at (888) 868-1649) appear in the top bar, the footer, the FAQ and the contact page. Keep them in place.

## Sources

- TheraMind Center of Santa Barbara: [Dr. Adam Awerbuch, M.D.](https://theramind-sb.com/dr-adam-awerbuch-m-d/) and [TheraMind Center of Santa Barbara Welcomes Dr. Adam W. Awerbuch](https://theramind-sb.com/theramind-center-of-santa-barbara-welcomes-dr-adam-w-awerbuch/)
- Cottage Health: [Psychiatry and Addiction Medicine — Medical Staff](https://www.cottagehealth.org/services/psychiatry-and-addiction-medicine/medical-staff/)
- Publications: [Trauma, Violence, & Abuse (2020)](https://doi.org/10.1177/1524838018809729) and [International Journal of Human Rights in Healthcare 13(2), 2020](https://www.emerald.com/ijhrh/article/13/2/159/126327/Raising-awareness-of-human-trafficking-in-key)
- Practice name, address, phone, email and logo: Dr. Awerbuch's business card
- Fax: public NPI and provider directory listings
