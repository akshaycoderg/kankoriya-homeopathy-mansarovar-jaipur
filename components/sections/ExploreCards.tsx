import { CalendarDays, Hand, Keyboard, MoveHorizontal } from "lucide-react";
import { treatments } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentFlipCard } from "@/components/ui/TreatmentFlipCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LeafSilhouette, Sprig } from "@/components/ui/Botanical";

const hints = [
  { icon: MoveHorizontal, label: "Drag the arrow" },
  { icon: Hand, label: "Tap to flip" },
  { icon: Keyboard, label: "Keyboard friendly" },
];

export function ExploreCards() {
  return (
    <section id="explore" className="relative overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-forest/15 to-transparent" />
        <div className="absolute -left-40 top-40 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(222,233,218,0.85),transparent_65%)]" />
        <div className="absolute -right-40 bottom-0 size-[460px] rounded-full bg-[radial-gradient(circle,rgba(233,223,201,0.8),transparent_65%)]" />
        <LeafSilhouette className="absolute -right-28 top-24 h-[440px] w-[350px] rotate-[-24deg] text-mint/60" />
        <Sprig className="absolute left-4 top-40 hidden h-40 w-20 text-sage/30 animate-sway lg:block" />
      </div>

      <div className="container-page section relative">
        <Reveal>
          <SectionHeading
            eyebrow="Interactive Treatment Guide"
            title={
              <>
                Turn the Card. <span className="italic text-forest-600">Go Deeper.</span>
              </>
            }
            description="A closer look at what each consultation area covers. Drag the arrow across a card, or tap it, to read the consultation notes on the reverse."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full border border-forest/10 bg-cream/70 px-5 py-3 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-forest/55 shadow-soft backdrop-blur">
            {hints.map((hint) => {
              const Icon = hint.icon;
              return (
                <span key={hint.label} className="inline-flex items-center gap-2">
                  <Icon className="size-3.5 text-forest-600" aria-hidden="true" />
                  {hint.label}
                </span>
              );
            })}
          </div>
        </Reveal>

        <div className="no-scrollbar mask-fade-x -mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-7 sm:px-7 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:gap-6 xl:grid-cols-3">
          {treatments.map((treatment, index) => (
            <Reveal
              key={treatment.id}
              delay={(index % 3) * 90}
              className="min-w-[86%] snap-center sm:min-w-[62%] md:min-w-0"
            >
              <TreatmentFlipCard index={index} />
            </Reveal>
          ))}

          <Reveal delay={120} className="min-w-[86%] snap-center sm:min-w-[62%] md:min-w-0">
            <div className="relative flex h-[486px] flex-col justify-between overflow-hidden rounded-[30px] border border-forest/10 bg-gradient-to-br from-[#e8f0e4] via-[#f7f2e6] to-[#eadfc8] p-7 shadow-glow sm:h-[500px]">
              <div
                className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-sage/25 blur-3xl"
                aria-hidden="true"
              />
              <Sprig className="pointer-events-none absolute -right-2 bottom-16 h-44 w-24 rotate-[168deg] text-forest/15" />

              <div className="relative">
                <span className="eyebrow text-[10px]">Not sure where to begin?</span>
                <h3 className="mt-4 font-display text-[1.9rem] font-medium leading-[1.1] text-forest">
                  A conversation is a good first step.
                </h3>
                <p className="mt-3 max-w-xs text-[13px] leading-6 text-ink/70">
                  You do not need to label your concern before visiting. Share what you have been
                  experiencing, and the clinic will guide you on the appropriate next step.
                </p>

                <ul className="mt-5 space-y-2.5 text-[12px] text-forest/70">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                    Unhurried, private consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                    Morning and evening appointments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                    Clear guidance on what to expect
                  </li>
                </ul>
              </div>

              <div className="relative mt-6 flex flex-col gap-2.5">
                <ButtonLink href="/#appointment" variant="primary" withArrow>
                  <CalendarDays className="size-4" aria-hidden="true" />
                  Request a Consultation
                </ButtonLink>
                <p className="text-center text-[10.5px] leading-4 text-muted">
                  Appointment requests are confirmed by the clinic.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-center text-[10.5px] leading-5 text-muted/80 md:hidden">
          Swipe to see more cards
        </p>
      </div>
    </section>
  );
}
