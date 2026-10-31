# AstroWorld — Advanced Vedic Kundli

This is a Vite-based bilingual (English/Tamil) website starter. It uses the `@af/sweph-wasm` browser package for sidereal planetary positions and Lagna using Lahiri ayanamsa. It generates:
- Rasi (D1) and Navamsa (D9) chart layouts
- Moon Nakshatra and Pada
- Vimshottari Mahadasha and Antardasha timelines
- Traditional marriage, career, finance and general-life interpretation prompts
- Print-to-PDF Kundli report

## Run locally
Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build:

```bash
npm run build
```

## Deploy to GitHub Pages
1. Upload the **contents** of this project to the root of your `astroworld` GitHub repository (including `package.json`, `vite.config.js`, `src/`, and `.github/`).
2. In `vite.config.js`, change `base: '/astroworld/'` if your repository has a different name. For a `username.github.io` repository, use `base: '/'`.
3. In GitHub, open Settings → Pages → Build and deployment → Source: **GitHub Actions**.
4. Push/commit to `main`. The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the site and deploys `dist/`.
5. Open the Pages URL shown in the Actions deployment.

## Accuracy, conventions and review notes
- The app requests the Swiss-Ephemeris-backed `@af/sweph-wasm` calculation package, Lahiri ayanamsa (`ayanamsa: 1`), and whole-sign house mapping based on the sidereal Ascendant.
- The app requires birth date, local birth time, birthplace latitude/longitude and IANA time zone. Place lookup uses Open-Meteo Geocoding. Confirm the suggested place and historical time zone before calculation.
- The API interface is based on the package's published examples (`createSweph`, `calculatePlanets`, `calculateLagna`). Package API changes may require adapting `src/main.js`. This source has not been built or validated in this environment; run `npm install` and `npm run build`, then verify several charts against a trusted reference calculator before public launch.
- Dasha timing uses the standard 120-year Vimshottari sequence and the Moon's Nakshatra fraction. It uses 365.2425 days per year as an implementation convention; some software uses other year-length conventions and may differ slightly.
- Marriage, career and finance text is a traditional interpretive prompt, not a deterministic prediction or professional advice. It should be reviewed by a qualified Jyotish practitioner before being represented as expert guidance.
- The chart display is a South Indian-style sign grid. Verify sign placement and chart orientation with test cases before public release.

## Privacy
Birth details are processed in the visitor's browser and are not posted to an AstroWorld server. The optional place-search button sends only the entered place name to Open-Meteo's geocoding service. The browser downloads the astrology calculation package as part of the app. Do not add analytics or server-side storage without a privacy notice and consent.

## Licensing
This app depends on an open-source Swiss Ephemeris-derived package. Review the dependency's current license and the upstream Swiss Ephemeris licensing terms before distributing the site. The source dependency selected by this starter may impose reciprocal source-disclosure obligations. Keep dependency notices with the project.
