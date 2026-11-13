import { ArrowUpRight } from "lucide-react";
import { treatments } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LeafSilhouette } from "@/components/ui/Botanical";

export function Treatments() {
  return (
    <section id="treatments" className="relative overflow-hidden bg-cream">
      <LeafSilhouette className="pointer-events-none absolute -left-32 bottom-0 h-[500px] w-[400px] rotate-[24deg] text-sage/15" />
      <div className="pointer-events-none absolute right-1/4 top-10 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(222,233,218,0.6),transparent_65%)]" />

      <div className="container-page section relative">
        <Reveal>
          <SectionHeading
            eyebrow="Our Treatments"
            title={
              <>
                Comprehensive <span className="italic text-forest-600">Homeopathic Care</span>
              </>
            }
            description="Consultation areas that are approached thoughtfully and individually. Each concern is discussed in context — never as a one-size-fits-all prescription."
          />
        </Reveal>

        <div className="no-scrollbar mask-fade-x -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:-mx-7 sm:px-7 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-3 xl:grid-cols-5">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <Reveal
                key={treatment.id}
                delay={index * 80}
                className="min-w-[80%] snap-start sm:min-w-[46%] md:min-w-0"
              >
                <a
                  href="#explore"
                  className="glow-card glow-card-hover group relative flex h-full min-h-[318px] flex-col overflow-hidden p-6"
                >
                  <div
                    className={`pointer-events-none absolute -right-14 -top-16 size-40 rounded-full bg-gradient-to-br ${treatment.coverClass} opacity-80 blur-2xl transition duration-700 group-hover:scale-125`}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-forest text-cream shadow-[0_12px_24px_-14px_rgba(23,56,42,0.75)] transition duration-500 group-hover:-translate-y-0.5 group-hover:bg-forest-600">
                      <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl font-light text-forest/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="relative mt-5 font-display text-[1.3rem] font-medium leading-[1.15] text-forest">
                    {treatment.shortTitle}
                  </h3>
                  <p className="relative mt-2.5 text-[12.5px] leading-[1.6] text-muted">
                    {treatment.summary}
                  </p>

                  <span className="relative mt-auto flex items-center justify-between border-t border-forest/10 pt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-600">
                    Explore details
                    <span className="inline-flex size-7 items-center justify-center rounded-full border border-forest/15 transition duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-cream">
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <ButtonLink href="/#appointment" variant="primary" withArrow>
              Explore All Treatments
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <p className="max-w-xl text-[11px] leading-5 text-muted/80">
              These are areas for consultation, not claims of cure. Suitability of homeopathic care
              is discussed individually, and appropriate medical evaluation is encouraged where
              needed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
