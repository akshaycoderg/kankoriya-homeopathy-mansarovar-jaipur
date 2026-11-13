import Image from "next/image";
import { CalendarDays, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { clinic, mapsSearchUrl } from "@/lib/site";
import { Sprig } from "@/components/ui/Botanical";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const steps = [
  {
    title: "Send your request",
    description: "Fill in the form or message the clinic directly on WhatsApp.",
  },
  {
    title: "The clinic responds",
    description: "You will hear back about availability for your preferred date and time.",
  },
  {
    title: "Visit the clinic",
    description: "Once confirmed, arrive a few minutes early with your current prescriptions.",
  },
];

export function Appointment() {
  return (
    <section id="appointment" className="relative overflow-hidden bg-forest text-cream">
      <Image
        src="/images/appointment-bg.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(194,162,101,0.16),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-forest via-forest/85 to-forest/60"
        aria-hidden="true"
      />

      <div className="container-page section relative">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              tone="light"
              eyebrow="Book a Consultation"
              title={
                <>
                  Request Your <span className="italic text-gold-light">Appointment</span>
                </>
              }
              description="Share a few details and the clinic will respond on WhatsApp to confirm availability. Appointment requests are not confirmed automatically."
            />

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3.5 rounded-2xl border border-cream/12 bg-cream/[0.06] p-4 backdrop-blur-sm">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-cream/10 text-gold-light">
                  <Clock className="size-4.5" aria-hidden="true" />
                </span>
                <div className="text-[12.5px] leading-6 text-cream/70">
                  <p className="font-semibold text-cream">Consulting hours</p>
                  <p className="mt-0.5">
                    {clinic.timings.weekdaysLabel}: {clinic.timings.weekdays[0].value} &amp;{" "}
                    {clinic.timings.weekdays[1].value}
                  </p>
                  <p>Sunday: {clinic.timings.sunday} only</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={clinic.contact.phoneHref}
                  className="flex items-center gap-3 rounded-2xl border border-cream/12 bg-cream/[0.06] p-4 text-cream transition hover:border-cream/25 hover:bg-cream/10"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-cream/10 text-gold-light">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[9.5px] font-semibold uppercase tracking-[0.16em] text-cream/65">
                      Call the clinic
                    </span>
                    <span className="mt-1 block text-[12.5px] font-semibold">
                      {clinic.contact.phoneDisplay}
                    </span>
                  </span>
                </a>

                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-cream/12 bg-cream/[0.06] p-4 text-cream transition hover:border-cream/25 hover:bg-cream/10"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-cream/10 text-gold-light">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[9.5px] font-semibold uppercase tracking-[0.16em] text-cream/65">
                      Find the clinic
                    </span>
                    <span className="mt-1 block text-[12.5px] font-semibold">Mansarovar, Jaipur</span>
                  </span>
                </a>
              </div>
            </div>

            <ol className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-3.5">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-gold/40 font-display text-[13px] text-gold-light">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[12.5px] font-semibold text-cream">{step.title}</p>
                    <p className="mt-0.5 text-[11.5px] leading-5 text-cream/65">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-7 flex items-start gap-2.5 rounded-2xl border border-cream/10 bg-forest/30 px-4 py-3 text-[10.5px] leading-5 text-cream/65">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-sage-light" aria-hidden="true" />
              Please do not use this form for emergencies. For urgent symptoms, contact local
              emergency services or visit the nearest hospital.
            </p>

            <Sprig className="pointer-events-none absolute -bottom-4 left-6 hidden h-40 w-20 text-sage/20 animate-sway lg:block" />
          </Reveal>

          <Reveal delay={140} className="relative">
            <div className="absolute -inset-2 rounded-[30px] border border-cream/10" aria-hidden="true" />
            <AppointmentForm />

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10.5px] text-cream/65">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                Morning &amp; evening slots
              </span>
              <span className="inline-flex items-center gap-1.5">
                <WhatsAppIcon className="size-3.5" />
                Replies via WhatsApp
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
