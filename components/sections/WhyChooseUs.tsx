import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FlipInfoCard } from "@/components/ui/FlipInfoCard";
import { LeafSilhouette, Sprig } from "@/components/ui/Botanical";

const stats = [
  { value: "11+", label: "Years of clinical experience" },
  { value: "2019", label: "Clinic established" },
  { value: "6", label: "Days a week" },
  { value: "302020", label: "Mansarovar, Jaipur" },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-cream-deep/60">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <LeafSilhouette className="absolute -left-28 top-10 h-[420px] w-[330px] rotate-[18deg] text-sage/20" />
        <div className="absolute -right-40 top-24 size-[460px] rounded-full bg-[radial-gradient(circle,rgba(255,251,240,0.9),transparent_65%)]" />
      </div>

      <div className="container-page section relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why Choose Kankoriya?"
              title={
                <>
                  Your Health, <span className="italic text-forest-600">Our Priority</span>
                </>
              }
              description="Care that begins with listening, respects your choices, and stays honest about what homeopathy can offer."
            />
          </Reveal>
          <Reveal delay={120} className="shrink-0">
            <ButtonLink href="/#appointment" variant="primary" withArrow>
              <CalendarDays className="size-4" aria-hidden="true" />
              Book Appointment
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <FlipInfoCard index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="relative mt-12 overflow-hidden rounded-[28px] border border-white/70 bg-ivory/80 px-6 py-7 shadow-glow backdrop-blur sm:px-9">
            <Sprig className="pointer-events-none absolute -right-3 -top-6 h-40 w-20 rotate-[160deg] text-sage/25" />
            <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="relative px-2 text-center sm:px-5">
                  <p className="font-display text-[2.1rem] font-medium leading-none text-forest">
                    {stat.value}
                  </p>
                  <p className="mx-auto mt-2 max-w-[130px] text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col items-center justify-center gap-2 border-t border-forest/10 pt-5 text-center sm:flex-row sm:gap-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-forest/70">
                <MapPin className="size-3.5 text-forest-600" aria-hidden="true" />
                Sector 3, Varun Path, Mansarovar
              </span>
              <span className="hidden size-1 rounded-full bg-gold sm:block" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-forest/70">
                <Sparkles className="size-3.5 text-gold" aria-hidden="true" />
                Morning &amp; evening consultations
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
