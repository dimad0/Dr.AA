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
| `index.html` | Home: hero, credentials, areas of focus, approach, meet the doctor, TMS spotlight, call to action |
| `about.html` | Full bio, philosophy of care, training timeline, clinical interests, publications |
| `services.html` | Conditions treated, services, TMS details |
| `new-patients.html` | Getting started, what to bring, insurance and Good Faith Estimate notice, FAQ |
| `contact.html` | Address, phone, fax, hours, map, appointment request form, crisis resources |
| `404.html` | Not-found page |

```
assets/
  css/styles.css                  design tokens and all styles
  js/main.js                      mobile menu, scroll effects, form handling
  img/logo-mark.svg               practice logo (vector recreation of the business-card mark)
  img/favicon.svg                 simplified logo for browser tabs
  img/apple-touch-icon.png        home-screen icon
  img/og-image.png                preview image for links shared on social media and messaging
  img/santa-barbara-arch.svg      hero illustration
  img/portrait-placeholder.svg    stand-in for Dr. Awerbuch's headshot
sitemap.xml, robots.txt           search-engine files (point to https://aawerbuchmd.com)
```

## Preview locally

```bash
python3 -m http.server 8080
# then open http://localhost:8080
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
- [ ] **Headshot.** Replace `assets/img/portrait-placeholder.svg`, which is used in `index.html` and `about.html`. Use a portrait-orientation (4:5) photo; the arch frame crops it automatically.
- [ ] **Board certification.** Third-party directories describe him as board-certified, but this hasn't been confirmed from a primary source, so the site doesn't claim it yet. If he is certified (e.g. ABPN, Psychiatry), add it to the credentials strip and the training timeline. California limits how board certification may be advertised.
- [ ] **Scope of practice.** Confirm the following:
  - the patient age range (the site says "adults")
  - whether telehealth is offered
  - which insurance plans are accepted
  - whether addiction care includes prescribing medications for substance use disorders (the site says "when appropriate")
  - which TMS and neuromodulation options TheraMind offers him
- [ ] **Training dates.** Add residency years to the timeline on `about.html` if desired.
- [ ] **Appointment form.** The form in `contact.html` currently validates input and then asks visitors to call. To receive submissions, set `data-endpoint="…"` on the `<form class="request-form">`. Use a HIPAA-compliant form provider that will sign a Business Associate Agreement (BAA).
- [ ] **Privacy notices.** HIPAA requires a covered provider with a website to post its Notice of Privacy Practices on the site, and California (CalOPPA) requires a privacy policy for sites that collect personal information. Add both pages and link them in the footer.
- [ ] **www or not.** Canonical URLs, the sitemap and the social preview image use `https://aawerbuchmd.com/` (without www). If the site will live at `www.aawerbuchmd.com` instead, update those URLs to match.

## Editing notes

- The header, crisis bar and footer are repeated in each HTML file. When you change shared details such as the phone number, email, address or hours, update every page:
  ```bash
  grep -rn "845-3046\|aawerbuchmd\|B165" *.html
  ```
  These details also appear in the JSON-LD block in `index.html` and in `data-phone`/`data-email` on the contact form.
- Colors, fonts and spacing are defined as CSS custom properties at the top of `assets/css/styles.css`. The `--brand-*` colors come from the logo: aqua `#6cc4d6` and cyan `#0fa0c8` are for decoration, while `#08739a` and `#08617f` are used for buttons and text because they meet WCAG AA contrast.
- Fonts are Jost (wordmark), Fraunces (headings) and Inter (body), loaded from Google Fonts.
- Accessibility features:
  - skip link
  - semantic landmarks
  - visible focus states
  - menu that closes with the Escape key
  - support for `prefers-reduced-motion`
  - form errors announced to assistive technology
- Crisis resources (988, 911, and the Santa Barbara County Behavioral Wellness 24/7 line at (888) 868-1649) appear in the top bar, the footer, the FAQ and the contact page. Keep them in place.

## Sources

- TheraMind Center of Santa Barbara: [Dr. Adam Awerbuch, M.D.](https://theramind-sb.com/dr-adam-awerbuch-m-d/) and [TheraMind Center of Santa Barbara Welcomes Dr. Adam W. Awerbuch](https://theramind-sb.com/theramind-center-of-santa-barbara-welcomes-dr-adam-w-awerbuch/)
- Cottage Health: [Psychiatry and Addiction Medicine — Medical Staff](https://www.cottagehealth.org/services/psychiatry-and-addiction-medicine/medical-staff/)
- Publications: [Trauma, Violence, & Abuse (2020)](https://doi.org/10.1177/1524838018809729) and [International Journal of Human Rights in Healthcare 13(2), 2020](https://www.emerald.com/ijhrh/article/13/2/159/126327/Raising-awareness-of-human-trafficking-in-key)
- Practice name, address, phone, email and logo: Dr. Awerbuch's business card
- Fax: public NPI and provider directory listings
