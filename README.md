# Mauli AcuPhysio Center — final static site

## Implemented
- Mobile-first responsive static HTML/CSS/JS.
- Accessible navigation, skip link, keyboard focus, semantic headings, reduced-motion support, large tap targets.
- Approved clinic facts only.
- Eight approved physiotherapy categories.
- Acupuncture presented only as available; no unsupported indications/outcomes.
- FAQPage JSON-LD is included for machine-readable content, without promising a Google FAQ rich result.
- LocalBusiness/MedicalBusiness JSON-LD uses only verified clinic details available in the brief.
- No guessed opening hours, fees, insurance, parking, testimonials, practitioner biography, or medical outcomes.
- No fabricated coordinates or Place ID.
- No invented production domain.

## Launch blockers requiring approval
1. Exact production domain, so absolute canonical URLs, sitemap URLs, robots Sitemap directive, OG URLs, and absolute social preview assets can be finalized.
2. Original approved logo asset, if the current text lockup is to be replaced by the exact artwork.
3. Opening hours, if the clinic wants them published; they were not supplied in the approved brief.
4. Exact map coordinates / approved Google Maps Place ID, if the clinic wants precise map/directions markup rather than the safe name-search link.

## Deployment notes
- Set the approved domain in every absolute SEO URL before launch.
- Generate `sitemap.xml` with the final absolute URLs.
- Add the final absolute sitemap URL to `robots.txt`.
- Add `rel=canonical` and Open Graph/Twitter absolute URLs after the domain is approved.
- Run a production crawl and validate structured data after deployment.
