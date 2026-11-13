import Image from "next/image";
import { BadgeCheck, CalendarDays, MapPin, Phone, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DottedArc, LeafSilhouette, Sprig } from "@/components/ui/Botanical";
import { clinic } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-[96px] lg:pt-[136px]">
      {/* organic backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 top-24 size-[560px] rounded-full bg-[radial-gradient(circle,rgba(222,233,218,0.9),transparent_65%)]" />
        <div className="absolute -right-32 top-0 size-[620px] rounded-full bg-[radial-gradient(circle,rgba(233,223,201,0.75),transparent_62%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory to-transparent" />
        <LeafSilhouette className="absolute -left-24 bottom-[-80px] h-[520px] w-[420px] text-sage/30" />
        <LeafSilhouette className="absolute -right-32 top-10 h-[460px] w-[380px] rotate-[172deg] text-sage/20" />
        <svg
          className="absolute left-1/2 top-24 hidden h-[520px] w-[520px] -translate-x-1/2 text-forest/5 lg:block"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="84" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 8" />
          <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="0.7" />
        </svg>
      </div>

      <div className="container-page relative grid items-center gap-12 pb-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:pb-24">
        <div className="relative z-10 max-w-2xl text-center lg:text-left">
          <p className="eyebrow justify-center lg:justify-start">
            <span className="inline-block h-px w-7 bg-gold" aria-hidden="true" />
            Classical Homeopathy · Mansarovar, Jaipur
          </p>

          <h1 className="mt-6 font-display text-[clamp(2.9rem,7.2vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.02em] text-forest text-shadow-soft">
            Natural Healing,
            <span className="relative mt-1 block italic text-forest-600">
              Lasting Wellness
              <svg
                className="absolute -bottom-2 left-0 h-3 w-[78%] text-gold/70 md:-bottom-3"
                viewBox="0 0 300 16"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 11c58-8 122-9 190-4 34 2 68 6 106 2"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-md text-[15.5px] leading-7 text-muted lg:mx-0 lg:text-base">
            Personalised homeopathic consultation for your health and wellbeing — with time to
            listen, understand and care for the whole person.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <ButtonLink href="/#appointment" size="lg" withArrow>
              <CalendarDays className="size-4" aria-hidden="true" />
              Book Consultation
            </ButtonLink>
            <ButtonLink href={clinic.contact.phoneHref} variant="outline" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </ButtonLink>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11.5px] font-medium text-forest/70 lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-forest-600" aria-hidden="true" />
              11+ years&apos; experience
            </span>
            <span className="hidden h-3 w-px bg-forest/15 sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="size-4 text-gold" aria-hidden="true" />
              BHMS · MD (Homoeopathy)
            </span>
            <span className="hidden h-3 w-px bg-forest/15 sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-forest-600" aria-hidden="true" />
              Near Jain Mandir
            </span>
          </div>
        </div>

        {/* portrait composition */}
        <div className="relative mx-auto w-full max-w-[430px] lg:max-w-[446px]">
          <DottedArc className="absolute -left-8 -top-8 size-28 text-forest/20 animate-[spin_40s_linear_infinite]" />
          <div
            className="absolute -right-6 top-16 size-24 rounded-full border border-gold/35"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-8 top-8 h-full rounded-[240px_240px_40px_40px] bg-sage/15 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative rounded-[240px_240px_36px_36px] border border-white/80 bg-gradient-to-b from-ivory to-beige/50 p-3 shadow-glow-lg">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[228px_228px_28px_28px] bg-cream-deep">
              <Image
                src="/images/dr-anshuman-kankoriya.webp"
                alt="Dr. Anshuman Kankoriya, BHMS, MD (Homoeopathy), consultant at Kankoriya Homeopathy, Jaipur"
                fill
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 70vw, 88vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-cream/25 bg-forest/55 px-4 py-3 text-cream backdrop-blur-md">
                <p className="font-display text-lg leading-tight">Dr. Anshuman Kankoriya</p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-cream/70">
                  BHMS · MD (Homoeopathy)
                </p>
              </div>
            </div>
          </div>

          <div className="glow-card absolute -left-2 top-[22%] flex items-center gap-3 px-4 py-3 sm:-left-8">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-forest text-cream">
              <BadgeCheck className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-xl leading-none text-forest">11+</span>
              <span className="mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.16em] text-muted">
                Years of practice
              </span>
            </span>
          </div>

          <div className="glow-card absolute -bottom-5 right-2 flex items-center gap-3 px-4 py-3 sm:-right-4">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-mint text-forest-600">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[11px] font-semibold text-forest">Personalised care</span>
              <span className="mt-0.5 block text-[10px] text-muted">Unhurried consultations</span>
            </span>
          </div>

          <Sprig className="absolute -left-12 bottom-24 hidden h-40 w-20 text-sage/60 animate-sway lg:block" />
          <Sprig className="absolute -right-10 top-6 hidden h-32 w-16 rotate-[168deg] text-gold/40 animate-sway-slow lg:block" />
        </div>
      </div>

      <div className="container-page relative">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-forest/10 py-6 text-[10.5px] uppercase tracking-[0.2em] text-forest/50 sm:justify-between">
          <span>Sector 3 · Varun Path · Mansarovar</span>
          <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" aria-hidden="true" />
          <span>Mon–Sat: 10 AM–1 PM &amp; 6–9 PM</span>
          <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" aria-hidden="true" />
          <span>Sunday: 10 AM–1 PM</span>
        </div>
      </div>
    </section>
  );
}
