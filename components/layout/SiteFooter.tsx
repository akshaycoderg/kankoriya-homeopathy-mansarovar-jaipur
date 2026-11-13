import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { clinic, mapsDirectionsUrl, mapsSearchUrl } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { FooterCurve, Sprig } from "@/components/ui/Botanical";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Doctor", href: "/#doctor" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

const treatmentLinks = [
  { label: "Skin & Hair Care", href: "/#explore" },
  { label: "Joint & Musculoskeletal", href: "/#explore" },
  { label: "Respiratory Concerns", href: "/#explore" },
  { label: "Digestive Concerns", href: "/#explore" },
  { label: "General Wellness", href: "/#explore" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-forest text-cream">
      <FooterCurve className="pointer-events-none absolute inset-x-0 top-0 h-14 w-full rotate-180 text-cream sm:h-16" />

      <SpriteSway />

      <div className="container-page relative pt-28 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[13.5px] leading-6 text-cream/65">
              A homeopathic clinic in Mansarovar, Jaipur, led by Dr. Anshuman Kankoriya. We offer
              personal, unhurried consultations focused on understanding you — not just a diagnosis.
            </p>
            <a
              href={clinic.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-cream/10 px-4 py-2.5 text-[12.5px] font-semibold text-cream ring-1 ring-cream/20 transition hover:bg-cream/15"
            >
              <WhatsAppIcon className="size-4 text-sage-light" />
              Book via WhatsApp
            </a>
            <p className="mt-5 flex items-start gap-2 text-[11.5px] leading-5 text-cream/60">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              Consultation enquiries only. An appointment is confirmed after the clinic responds.
            </p>
          </div>

          <nav aria-label="Footer quick links" className="lg:col-span-2">
            <h2 className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold-light">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-cream/65 transition hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Treatment categories" className="lg:col-span-3">
            <h2 className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold-light">
              Consultation Areas
            </h2>
            <ul className="mt-5 space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-cream/65 transition hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold-light">
              Visit the Clinic
            </h2>
            <ul className="mt-5 space-y-4 text-[13px] leading-6 text-cream/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sage-light" aria-hidden="true" />
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cream"
                >
                  {clinic.address.line1},<br />
                  {clinic.address.line2}, {clinic.address.state} – {clinic.address.postalCode}
                  <span className="mt-1 block text-[11.5px] text-cream/60">
                    Landmark: {clinic.address.landmark}
                  </span>
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-sage-light" aria-hidden="true" />
                <a href={clinic.contact.phoneHref} className="transition hover:text-cream">
                  {clinic.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-sage-light" aria-hidden="true" />
                <span>
                  Mon–Sat: 10 AM–1 PM &amp; 6–9 PM
                  <br />
                  Sunday: 10 AM–1 PM
                </span>
              </li>
            </ul>

            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-gold-light underline decoration-gold/40 underline-offset-4 transition hover:text-cream"
            >
              Get directions
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/12 py-7">
          <div className="flex flex-col items-start justify-between gap-3 text-[11.5px] text-cream/60 sm:flex-row sm:items-center">
            <p>
              © {year} {clinic.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link href="/privacy-policy" className="transition hover:text-cream">
                Privacy Policy
              </Link>
              <Link href="/medical-disclaimer" className="transition hover:text-cream">
                Medical Disclaimer
              </Link>
              <span>Serving Mansarovar, Jaipur</span>
            </div>
          </div>
          <p className="mt-4 max-w-4xl text-[10.5px] leading-5 text-cream/60">
            Information on this website is for general awareness and does not replace medical advice.
            Homeopathic consultation is offered as a complementary approach and is not a guarantee of
            cure. Please do not start, stop or change prescribed medication without advice from your
            treating doctor.
          </p>
        </div>
      </div>

      <SpriteSway bottom />
    </footer>
  );
}

function SpriteSway({ bottom = false }: { bottom?: boolean }) {
  return (
    <>
      <Sprig
        className={`pointer-events-none absolute right-6 hidden h-48 w-24 text-sage/25 animate-sway-slow md:block lg:right-16 ${
          bottom ? "-bottom-2 rotate-[168deg]" : "top-24"
        }`}
      />
      <Sprig
        className={`pointer-events-none absolute right-20 hidden h-32 w-16 text-cream/10 animate-sway md:block lg:right-28 ${
          bottom ? "-bottom-4 rotate-[150deg]" : "top-40"
        }`}
      />
    </>
  );
}
