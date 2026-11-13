import Image from "next/image";
import { ArrowRight, HeartHandshake, Leaf, MessagesSquare, UserRound, CalendarDays } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { CornerLeaves, LeafSilhouette, Sprig } from "@/components/ui/Botanical";

const points = [
  {
    icon: UserRound,
    title: "Individualised case-taking",
    text: "Your history, routine and lived experience guide the consultation.",
  },
  {
    icon: Leaf,
    title: "A gentle, supportive approach",
    text: "Care is discussed carefully, with realistic expectations.",
  },
  {
    icon: MessagesSquare,
    title: "Clear, honest guidance",
    text: "You will know what homeopathy can and cannot offer.",
  },
  {
    icon: HeartHandshake,
    title: "Care for the whole family",
    text: "Consultations for adults, children and everyday wellbeing.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory">
      <LeafSilhouette className="pointer-events-none absolute -right-24 top-24 h-[420px] w-[340px] rotate-[-16deg] text-mint/70" />

      <div className="container-page section relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="max-w-xl">
            <p className="eyebrow">
              <span className="inline-block h-px w-7 bg-gold" aria-hidden="true" />
              About Our Clinic
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-medium leading-[1.06] text-forest">
              Healing with
              <span className="italic text-forest-600"> Nature&apos;s Wisdom</span>
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-muted">
              Kankoriya Homeopathy is a homeopathic clinic in Sector 3, Varun Path, Mansarovar,
              Jaipur. Established in February 2019 by Dr. Anshuman Kankoriya, the clinic was created
              with a simple intention — to offer careful, individualised consultations in a calm and
              welcoming setting.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              We take time to understand your health history, lifestyle and concerns before
              discussing a plan. Homeopathic care here is complementary, and never a substitute for
              emergency care or treatment prescribed by your doctor.
            </p>

            <ul className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {points.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.title} className="flex gap-3.5">
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-mint text-forest-600">
                      <Icon className="size-4" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[13px] font-semibold text-forest">
                        {point.title}
                      </span>
                      <span className="mt-1 block text-[12px] leading-5 text-muted">
                        {point.text}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink href="/#doctor" variant="primary" withArrow>
                Learn More
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <span className="text-[11.5px] text-muted">
                Serving Mansarovar &amp; nearby Jaipur neighbourhoods
              </span>
            </div>
          </Reveal>

          <Reveal delay={140} className="relative mx-auto w-full max-w-[470px]">
            <div
              className="absolute -inset-3 rounded-[260px_260px_40px_40px] border border-gold/30"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[250px_250px_32px_32px] border border-white/80 bg-cream shadow-glow-lg">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/about-wellness.svg"
                  alt="Botanical still life with a wooden mortar and pestle, homeopathic remedy bottles and fresh herbs"
                  fill
                  sizes="(min-width: 1024px) 470px, (min-width: 640px) 70vw, 88vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-forest/20 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="glow-card absolute -left-3 bottom-10 flex items-center gap-3 px-4 py-3.5 sm:-left-8">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-forest text-cream">
                <CalendarDays className="size-4.5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-lg leading-none text-forest">
                  Since 2019
                </span>
                <span className="mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.15em] text-muted">
                  Established in Mansarovar
                </span>
              </span>
            </div>

            <div className="glow-card absolute -right-2 top-10 max-w-[150px] px-4 py-3 sm:-right-6">
              <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-forest-600">
                <Leaf className="size-3.5 text-gold" aria-hidden="true" />
                Whole-person focus
              </p>
              <p className="mt-1.5 text-[11px] leading-5 text-muted">
                Understanding the person behind the symptoms.
              </p>
            </div>

            <CornerLeaves className="absolute -bottom-8 -right-6 h-20 w-20 text-sage/60" />
            <Sprig className="absolute -right-10 -top-6 hidden h-36 w-16 rotate-[155deg] text-sage/50 animate-sway lg:block" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
