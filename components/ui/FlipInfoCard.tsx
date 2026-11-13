"use client";

import { useState } from "react";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { whyChooseUs } from "@/lib/data";

type FlipInfoCardProps = {
  index: number;
};

export function FlipInfoCard({ index }: FlipInfoCardProps) {
  const [flipped, setFlipped] = useState(false);
  const { title, description, detail, icon: Icon } = whyChooseUs[index];

  return (
    <div className="flip-scene group h-[300px] w-full">
      <div
        className="flip-inner h-full w-full"
        style={{ "--flip-angle": flipped ? "180deg" : "0deg" } as React.CSSProperties}
      >
        <div
          className="flip-face glow-card absolute inset-0 flex flex-col overflow-hidden p-6 hover:shadow-glow-lg"
          inert={flipped}
          aria-hidden={flipped}
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("button,a")) return;
            setFlipped(true);
          }}
        >
          <div className="flex items-start justify-between">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-mint text-forest-600 transition duration-500 group-hover:-rotate-6 group-hover:bg-forest group-hover:text-cream">
              <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="font-display text-2xl font-light text-forest/20">
              0{index + 1}
            </span>
          </div>

          <h3 className="mt-5 font-display text-[1.32rem] font-medium leading-[1.15] text-forest">
            {title}
          </h3>
          <p className="mt-2.5 text-[12.5px] leading-[1.65] text-muted">{description}</p>

          <button
            type="button"
            onClick={() => setFlipped(true)}
            className="mt-auto flex items-center justify-between border-t border-forest/10 pt-4 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-forest-600"
            aria-label={`Read more about ${title}`}
          >
            Read more
            <span className="inline-flex size-7 items-center justify-center rounded-full border border-forest/15 transition duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-cream">
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </span>
          </button>
        </div>

        <div
          className="flip-face flip-back absolute inset-0 flex flex-col overflow-hidden rounded-[26px] border border-forest/30 bg-forest-700 p-6 text-cream shadow-glow-lg"
          inert={!flipped}
          aria-hidden={!flipped}
        >
          <div
            className="pointer-events-none absolute -right-12 -top-14 size-40 rounded-full bg-sage/25 blur-2xl"
            aria-hidden="true"
          />
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-cream/10 text-gold-light ring-1 ring-cream/15">
            <Icon className="size-4.5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-display text-xl font-medium leading-tight text-cream">{title}</h3>
          <p className="mt-3 text-[12px] leading-[1.7] text-cream/70">{detail}</p>
          <button
            type="button"
            onClick={() => setFlipped(false)}
            className="mt-auto flex items-center gap-2 self-start rounded-full border border-cream/20 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-cream/75 transition hover:border-cream/45 hover:text-cream"
            aria-label={`Return to the front of the ${title} card`}
          >
            <RotateCcw className="size-3.5" aria-hidden="true" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
