# Kankoriya Homeopathy — Mansarovar, Jaipur

A production-ready, single-page website for **Kankoriya Homeopathy**, a homeopathic clinic in Mansarovar, Jaipur, led by **Dr. Anshuman Kankoriya, BHMS, MD (Homoeopathy)**.

The site is designed around a warm, editorial visual language: cream and forest-green tones, serif display type, botanical accents, soft glow shadows and rounded cards. It is fully responsive, keyboard accessible and built with the Next.js App Router.

## Live Site

Production URL: _add the deployed Vercel URL here after the first deployment._

## Features

- **Hero and clinic introduction** with verified clinic details, registration number and timings.
- **Treatment overview** covering skin and hair, joint and musculoskeletal, respiratory, digestive and general wellness consultations.
- **Interactive 3D treatment cards** — drag the arrow, click, tap or use the keyboard to flip each card and read the consultation notes on the reverse.
- **Why choose us** with flip cards and plain-language explanations.
- **Consultation approach** section (in place of unverified patient testimonials).
- **Doctor profile** using the portrait supplied by the clinic, with qualifications and academic association shown as provided.
- **Illustrated gallery with accessible lightbox** — arrow-key navigation, Escape to close, focus management and a clear note that the images are conceptual illustrations, not clinic photographs.
- **Appointment request form** with client-side validation, preferred date and time selection, and a prefilled WhatsApp message. The form does not store data on the site, and it states clearly that an appointment is **not confirmed** until the clinic responds.
- **Contact section** with address, phone, WhatsApp, consulting hours, directions and an embedded Google Map.
- **FAQ accordion** with keyboard support and animated panels.
- **SEO and sharing metadata**: canonical URL, Open Graph and Twitter cards, sitemap, robots policy, and `MedicalClinic`, `WebSite` and `FAQPage` structured data.
- **Accessibility**: skip link, semantic landmarks, labelled form fields, visible focus states, reduced-motion support and correctly labelled interactive controls.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) icons
- Google Fonts via `next/font` — Cormorant Garamond (display) and Manrope (body)

No UI component library, animation library or database is used. Animations are CSS-based and scroll reveals use `IntersectionObserver`.

## Project Structure

```
app/
  layout.tsx            Root layout, fonts, metadata, header/footer
  page.tsx              Home page and JSON-LD structured data
  globals.css           Design tokens, utilities and animations
  robots.ts             robots.txt
  sitemap.ts            sitemap.xml
  not-found.tsx         Custom 404 page
  privacy-policy/       Privacy policy
  medical-disclaimer/   Medical disclaimer
components/
  layout/               Header, footer, floating actions
  sections/             Page sections (hero, about, treatments, gallery, form, contact, FAQ)
  ui/                   Reusable cards, buttons, botanical artwork, reveal wrapper
  seo/                  JSON-LD renderer
lib/
  site.ts               Clinic details, URLs, WhatsApp message builder
  data.ts               Treatment, approach and FAQ content
public/
  images/               Doctor portrait, custom illustrations and OG image
```

## Getting Started

Requires Node.js 20.9 or newer (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |

## Clinic Details

| | |
| --- | --- |
| Clinic | Kankoriya Homeopathy |
| Doctor | Dr. Anshuman Kankoriya, BHMS, MD (Homoeopathy) |
| Registration | RJ/9257 (Rajasthan) |
| Experience | 11+ years |
| Academic association | Assistant Professor at Homoeopathy University |
| Established | February 2019 |
| Address | Shop No. 3/304, Sector 3, Varun Path, Mansarovar, Jaipur, Rajasthan 302020 (Near Jain Mandir) |
| Phone / WhatsApp | +91 84479 34977 |
| Timings | Mon–Sat 10 AM–1 PM & 6–9 PM; Sun 10 AM–1 PM |

All clinic details live in [`lib/site.ts`](lib/site.ts) so they can be updated in one place.

## Content and Medical Disclaimer

- The doctor portrait is the photograph supplied by the clinic. No AI-generated doctor photograph is used.
- All other imagery is custom SVG illustration created for this project. The gallery explicitly states that these are not photographs of the actual premises.
- There are no invented patient reviews, star ratings, patient counts or clinical success claims. The patient-experience section is replaced with a description of the consultation approach.
- Treatment descriptions are consultation areas, not claims of cure. The site repeatedly notes that homeopathic care is complementary and does not replace prescribed medication or emergency care.
- Published qualifications, registration number, experience and association are shown as provided by the clinic and should be verified with the practitioner.

See the site's [Medical Disclaimer](/app/medical-disclaimer/page.tsx) and [Privacy Policy](/app/privacy-policy/page.tsx) pages for the full text.

## Deployment

The project is configured for [Vercel](https://vercel.com/):

```bash
npm install -g vercel
vercel
```

Set the production domain in the `NEXT_PUBLIC_SITE_URL` environment variable so canonical URLs, Open Graph tags and the sitemap use the correct origin. If the variable is not set, the fallback in `lib/site.ts` is used.

## License

This website and its content are proprietary to Kankoriya Homeopathy. The source code is published for the clinic's own deployment and maintenance.
