import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { clinic, mapsDirectionsUrl, mapsEmbedUrl, mapsSearchUrl } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { LeafSilhouette } from "@/components/ui/Botanical";

const timingRows = [
  { day: "Monday – Saturday", hours: "10:00 AM – 1:00 PM & 6:00 PM – 9:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 1:00 PM" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 top-20 size-[480px] rounded-full bg-[radial-gradient(circle,rgba(222,233,218,0.8),transparent_65%)]" />
        <div className="absolute -left-32 bottom-0 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(233,223,201,0.6),transparent_65%)]" />
        <LeafSilhouette className="absolute -left-24 top-32 h-[380px] w-[320px] rotate-[210deg] text-mint/40" />
      </div>

      <div className="container-page section relative">
        <Reveal>
          <SectionHeading
            eyebrow="Visit the Clinic"
            title={
              <>
                Find Us in <span className="italic text-forest-600">Mansarovar</span>
              </>
            }
            description="The clinic is on Varun Path in Sector 3, Mansarovar — near Jain Mandir. Call or message ahead to confirm availability."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
          <div className="space-y-4">
            <Reveal>
              <div className="glow-card glow-card-hover p-6">
                <div className="flex items-start gap-4">
                  <span className="icon-tile">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-forest">Clinic Address</h3>
                    <address className="mt-2 text-[13px] not-italic leading-6 text-muted">
                      {clinic.address.line1},
                      <br />
                      {clinic.address.line2}, {clinic.address.state} – {clinic.address.postalCode}
                    </address>
                    <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-mint/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-forest-600">
                      <span className="size-1 rounded-full bg-forest-600" aria-hidden="true" />
                      {clinic.address.landmark}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href={mapsSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-3.5 py-2 text-[11.5px] font-semibold text-forest transition hover:bg-cream"
                      >
                        <MapPin className="size-3.5" aria-hidden="true" />
                        Open in Maps
                      </a>
                      <a
                        href={mapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-3.5 py-2 text-[11.5px] font-semibold text-forest transition hover:bg-cream"
                      >
                        <Navigation className="size-3.5" aria-hidden="true" />
                        Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="glow-card glow-card-hover p-6">
                <div className="flex items-start gap-4">
                  <span className="icon-tile">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-medium text-forest">Talk to the Clinic</h3>
                    <a
                      href={clinic.contact.phoneHref}
                      className="mt-2 block text-[15px] font-semibold text-forest transition hover:text-forest-600"
                    >
                      {clinic.contact.phoneDisplay}
                    </a>
                    <p className="mt-1 text-[11.5px] leading-5 text-muted">
                      Call during consulting hours, or send a WhatsApp message any time.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href={clinic.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-3.5 py-2 text-[11.5px] font-semibold text-white transition hover:bg-whatsapp-dark"
                      >
                        <WhatsAppIcon className="size-3.5" />
                        WhatsApp
                      </a>
                      <a
                        href={clinic.contact.phoneHref}
                        className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-3.5 py-2 text-[11.5px] font-semibold text-forest transition hover:bg-cream"
                      >
                        <Phone className="size-3.5" aria-hidden="true" />
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="glow-card glow-card-hover p-6">
                <div className="flex items-start gap-4">
                  <span className="icon-tile">
                    <Clock className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-medium text-forest">Consulting Hours</h3>
                    <dl className="mt-3 space-y-3">
                      {timingRows.map((row) => (
                        <div key={row.day} className="border-b border-forest/8 pb-3 last:border-0 last:pb-0">
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-forest-600">
                            {row.day}
                          </dt>
                          <dd className="mt-1 text-[12px] leading-5 text-muted">{row.hours}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-3 text-[10.5px] leading-5 text-muted/75">
                      Timings may change on public holidays. Please call ahead to confirm.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="min-h-[420px]">
            <div className="glow-card relative flex h-full flex-col overflow-hidden p-2.5">
              <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[20px] bg-cream-deep">
                <iframe
                  title={`Google Maps location of ${clinic.name}, ${clinic.address.full}`}
                  src={mapsEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-col gap-3 px-3 pb-2 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-lg leading-tight text-forest">{clinic.name}</p>
                  <p className="mt-0.5 text-[11px] leading-5 text-muted">
                    {clinic.address.line1}, {clinic.address.line2} – {clinic.address.postalCode}
                  </p>
                </div>
                <ButtonLink
                  href={mapsDirectionsUrl}
                  variant="outline"
                  size="sm"
                  className="shrink-0 self-start sm:self-auto"
                >
                  <Navigation className="size-3.5" aria-hidden="true" />
                  Get Directions
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <p className="mt-6 text-center text-[10.5px] leading-5 text-muted/75">
            Map data is provided by Google Maps. The pin is based on the clinic&apos;s published
            address — please call the clinic if you need help finding the entrance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
