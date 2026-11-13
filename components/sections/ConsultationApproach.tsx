import { HeartHandshake, Info, Quote } from "lucide-react";
import { consultationApproach } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LeafSilhouette } from "@/components/ui/Botanical";

export function ConsultationApproach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-ivory">
      <LeafSilhouette className="pointer-events-none absolute -right-24 top-0 h-[440px] w-[350px] rotate-[-20deg] text-mint/60" />
      <div className="container-page section relative">
        <Reveal>
          <SectionHeading
            eyebrow="Patient Experiences"
            title={
              <>
                Care That Begins With <span className="italic text-forest-600">Listening</span>
              </>
            }
            description="A consultation at Kankoriya Homeopathy is a conversation — unhurried, private and focused on understanding you as a whole person."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-forest p-7 text-cream shadow-glow-lg">
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-sage/20 blur-3xl"
                aria-hidden="true"
              />
              <div>
                <Quote
                  className="size-9 text-gold-light/70"
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
                <p className="mt-5 font-display text-[1.7rem] font-medium leading-[1.2] text-cream">
                  &ldquo;No invented reviews. No borrowed ratings.&rdquo;
                </p>
                <p className="mt-4 text-[12.5px] leading-6 text-cream/65">
                  We do not publish patient testimonials or star ratings until genuine feedback can
                  be verified and shared with explicit consent. What we can share honestly is how a
                  consultation works.
                </p>
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-cream/15 bg-cream/5 p-4">
                <HeartHandshake className="mt-0.5 size-4 shrink-0 text-sage-light" aria-hidden="true" />
                <p className="text-[11px] leading-5 text-cream/60">
                  If you are an existing patient and would like to share feedback, please speak with
                  the clinic directly.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-8">
            {consultationApproach.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 90}>
                  <article className="glow-card glow-card-hover group relative flex h-full min-h-[260px] flex-col overflow-hidden p-6">
                    <div
                      className="pointer-events-none absolute -right-10 -top-12 size-32 rounded-full bg-mint/70 blur-2xl transition duration-700 group-hover:scale-125"
                      aria-hidden="true"
                    />
                    <span className="relative inline-flex size-11 items-center justify-center rounded-2xl bg-mint text-forest-600 transition duration-500 group-hover:bg-forest group-hover:text-cream">
                      <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <p className="relative mt-5 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-gold">
                      Step 0{index + 1}
                    </p>
                    <h3 className="relative mt-2 font-display text-[1.35rem] font-medium leading-[1.15] text-forest">
                      {item.title}
                    </h3>
                    <p className="relative mt-2.5 text-[12.5px] leading-[1.65] text-muted">
                      {item.description}
                    </p>
                    <span
                      className="relative mt-auto pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-forest/30"
                      aria-hidden="true"
                    >
                      Kankoriya Homeopathy
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2.5 text-center text-[11px] leading-5 text-muted">
            <Info className="mt-0.5 size-3.5 shrink-0 text-forest-600" aria-hidden="true" />
            Individual experiences vary. Homeopathic consultation is not a guarantee of cure, and
            no clinical success rates are claimed on this website.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
