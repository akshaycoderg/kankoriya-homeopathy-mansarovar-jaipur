"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Check, MoveHorizontal, RotateCcw, Stethoscope } from "lucide-react";
import { treatments } from "@/lib/data";
import { clinic } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type TreatmentFlipCardProps = {
  index: number;
};

export function TreatmentFlipCard({ index }: TreatmentFlipCardProps) {
  const treatment = treatments[index];

  const sceneRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    base: 0,
    moved: 0,
    width: 360,
  });
  const [flipped, setFlipped] = useState(false);
  const [dragAngle, setDragAngle] = useState<number | null>(null);

  const angle = dragAngle ?? (flipped ? 180 : 0);
  const bookingHref = `${clinic.contact.whatsapp}?text=${encodeURIComponent(
    `Hello Kankoriya Homeopathy, I would like to know more about consultations for ${treatment.title.toLowerCase()}.`,
  )}`;

  function toggle() {
    setFlipped((current) => !current);
    setDragAngle(null);
  }

  function onPointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      base: flipped ? 180 : 0,
      moved: 0,
      width: sceneRef.current?.offsetWidth ?? 360,
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setDragAngle(flipped ? 180 : 0);
  }

  function onPointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    const drag = dragRef.current;
    if (!drag.active) return;
    const deltaX = event.clientX - drag.startX;
    drag.moved = Math.max(drag.moved, Math.abs(deltaX));
    const direction = flipped ? -1 : 1;
    const next = drag.base + (deltaX / Math.max(drag.width, 260)) * 180 * direction;
    setDragAngle(Math.min(360, Math.max(0, next)));
  }

  function onPointerUp() {
    const drag = dragRef.current;
    if (!drag.active) return;
    drag.active = false;

    if (drag.moved < 8) {
      toggle();
      return;
    }

    const travelled = Math.abs((dragAngle ?? drag.base) - drag.base);
    if (travelled > 48) {
      setFlipped((current) => !current);
    }
    setDragAngle(null);
  }

  const Icon = treatment.icon;

  return (
    <div
      ref={sceneRef}
      className="flip-scene group relative h-[486px] w-full select-none sm:h-[500px]"
      data-dragging={dragAngle !== null ? "true" : "false"}
      data-flipped={flipped ? "true" : "false"}
    >
      <div
        className="flip-inner h-full w-full"
        style={{ "--flip-angle": `${angle}deg` } as React.CSSProperties}
      >
        {/* FRONT */}
        <div
          className={`flip-face absolute inset-0 flex flex-col overflow-hidden rounded-[30px] border border-white/80 bg-gradient-to-br ${treatment.coverClass} p-6 shadow-glow transition-shadow duration-500 group-hover:shadow-glow-lg sm:p-7`}
          inert={flipped}
          aria-hidden={flipped}
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a,button")) return;
            toggle();
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-ivory/80 text-forest-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_-18px_rgba(23,56,42,0.5)]">
              <Icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="font-display text-3xl font-light text-forest/25">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-6 font-display text-[1.65rem] font-medium leading-[1.12] text-forest">
            {treatment.title}
          </h3>
          <p className="mt-3 text-[13.5px] leading-6 text-ink/70">{treatment.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Common concerns">
            {treatment.concerns.slice(0, 4).map((concern) => (
              <li
                key={concern}
                className="rounded-full border border-forest/10 bg-ivory/65 px-3 py-1.5 text-[11.5px] font-medium text-forest-600"
              >
                {concern}
              </li>
            ))}
            {treatment.concerns.length > 4 ? (
              <li className="rounded-full border border-forest/10 bg-ivory/40 px-3 py-1.5 text-[11.5px] font-medium text-forest/60">
                +{treatment.concerns.length - 4} more
              </li>
            ) : null}
          </ul>

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-forest/10 pt-5">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onClick={(event) => {
                  // Keyboard activation only; pointer taps are resolved on pointerup.
                  if (event.detail === 0) toggle();
                }}
                aria-label={`Drag or press to reveal more about ${treatment.title}`}
                className="inline-flex size-10 cursor-grab touch-none items-center justify-center rounded-full bg-forest text-cream shadow-[0_10px_22px_-12px_rgba(23,56,42,0.8)] transition duration-300 hover:scale-105 hover:bg-forest-700 active:cursor-grabbing"
                style={{ touchAction: "none" }}
              >
                <MoveHorizontal className="size-4" aria-hidden="true" />
              </button>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-forest/60">
                Drag to explore
              </span>
            </div>

            <button
              type="button"
              onClick={toggle}
              className="inline-flex size-9 items-center justify-center rounded-full border border-forest/15 bg-ivory/60 text-forest transition duration-300 hover:border-forest/35 hover:bg-ivory"
              aria-label={`Read details about ${treatment.title}`}
            >
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* BACK */}
        <div
          className="flip-face flip-back absolute inset-0 flex flex-col overflow-hidden rounded-[30px] border border-forest/20 bg-forest p-6 text-cream shadow-glow-lg sm:p-7"
          inert={!flipped}
          aria-hidden={!flipped}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-sage/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 size-56 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-light">
              Consultation notes
            </span>
            <span className="inline-flex size-9 items-center justify-center rounded-full border border-cream/20 text-cream/70">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="relative mt-4 font-display text-[1.55rem] font-medium leading-[1.15] text-cream">
            {treatment.title}
          </h3>

          <div className="relative mt-4 min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-width:thin]">
            <ul className="space-y-1.5">
              {treatment.concerns.map((concern) => (
                <li key={concern} className="flex items-start gap-2 text-[12.5px] leading-5 text-cream/80">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-sage-light" aria-hidden="true" />
                  {concern}
                </li>
              ))}
            </ul>

            <p className="mt-4 border-t border-cream/15 pt-4 text-[12px] leading-[1.65] text-cream/70">
              {treatment.consultation}
            </p>

            <p className="mt-3 flex items-start gap-2 text-[10.5px] leading-4 text-cream/65">
              <Stethoscope className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              Consultation is not a guarantee of cure. Do not stop prescribed medication without
              your treating doctor&apos;s advice.
            </p>
          </div>

          <div className="relative mt-4 flex items-center justify-between gap-2 border-t border-cream/15 pt-4">
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2.5 text-[12px] font-semibold text-forest transition duration-300 hover:bg-white"
            >
              <WhatsAppIcon className="size-4" />
              Ask the clinic
            </a>
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center gap-1.5 rounded-full border border-cream/25 px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream/80 transition duration-300 hover:border-cream/50 hover:text-cream"
              aria-label={`Return to the front of the ${treatment.title} card`}
            >
              <RotateCcw className="size-3.5" aria-hidden="true" />
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
