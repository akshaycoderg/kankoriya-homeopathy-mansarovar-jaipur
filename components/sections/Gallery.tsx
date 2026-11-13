"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LeafSilhouette } from "@/components/ui/Botanical";

type GalleryItem = {
  src: string;
  title: string;
  caption: string;
  alt: string;
  className: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery-consultation.svg",
    title: "The Consultation Room",
    caption:
      "A quiet, unhurried space for conversation — the setting this practice aims to create for every visit.",
    alt: "Illustration of a calm homeopathic consultation room with a desk, chairs, plants and an arched window",
    className: "col-span-2 aspect-[5/4] sm:aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto",
  },
  {
    src: "/images/gallery-remedies.svg",
    title: "Homeopathic Remedies",
    caption:
      "Remedies are selected individually after a detailed consultation, never as a standard prescription for a diagnosis.",
    alt: "Illustration of homeopathic remedy bottles, a dropper and small white pills arranged on a wooden tray",
    className: "col-span-2 aspect-[16/10] lg:col-span-2 lg:aspect-auto",
  },
  {
    src: "/images/gallery-herbs.svg",
    title: "Botanical Ingredients",
    caption:
      "Homeopathic preparations are derived from plant, mineral and other natural sources, prepared according to established pharmacopoeial methods.",
    alt: "Illustration of fresh botanical herbs, leaves and flowers used in homeopathic preparations",
    className: "col-span-1 aspect-square lg:aspect-auto",
  },
  {
    src: "/images/gallery-waiting.svg",
    title: "A Calm Waiting Area",
    caption:
      "Comfortable seating, soft light and plants — small details that make a clinic visit feel less clinical.",
    alt: "Illustration of a warm clinic waiting area with a sofa, side table and potted plants",
    className: "col-span-1 aspect-square lg:aspect-auto",
  },
  {
    src: "/images/gallery-entrance.svg",
    title: "The Clinic Entrance",
    caption:
      "Located on Varun Path in Sector 3, Mansarovar — near Jain Mandir, with morning and evening consulting hours.",
    alt: "Illustration of a welcoming clinic entrance with a wooden door, steps and potted plants",
    className: "col-span-1 aspect-square lg:col-span-2 lg:aspect-auto",
  },
  {
    src: "/images/gallery-botanical.svg",
    title: "Rooted in Nature",
    caption:
      "A botanical motif runs through the clinic's identity — a reminder of the natural origins of homeopathic materia medica.",
    alt: "Illustration of a botanical still life with leaves, seed pods and a glass vial",
    className: "col-span-1 aspect-square lg:col-span-2 lg:aspect-auto",
  },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastTriggerIndex = useRef<number | null>(null);

  const close = useCallback(() => {
    setActiveIndex(null);
    const previous = lastTriggerIndex.current;
    if (previous !== null) {
      triggerRefs.current[previous]?.focus();
    }
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + galleryItems.length) % galleryItems.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % galleryItems.length,
    );
  }, []);

  const open = (index: number) => {
    lastTriggerIndex.current = index;
    setActiveIndex(index);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showNext, showPrevious]);

  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];

  return (
    <section id="gallery" className="relative overflow-hidden bg-ivory">
      <LeafSilhouette className="pointer-events-none absolute -right-36 top-24 h-[460px] w-[380px] rotate-[-18deg] text-sage/15" />
      <div className="pointer-events-none absolute -left-40 bottom-10 size-[440px] rounded-full bg-[radial-gradient(circle,rgba(233,223,201,0.7),transparent_65%)]" />

      <div className="container-page section relative">
        <Reveal>
          <SectionHeading
            eyebrow="A Glimpse of the Clinic"
            title={
              <>
                Calm Spaces, <span className="italic text-forest-600">Thoughtful Care</span>
              </>
            }
            description="A visual introduction to the atmosphere this practice aims to offer — quiet rooms, natural light and a little greenery."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[240px] lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.src}
              delay={(index % 4) * 70}
              className={`${item.className} min-h-0`}
            >
              <button
                ref={(node) => {
                  triggerRefs.current[index] = node;
                }}
                type="button"
                onClick={() => open(index)}
                aria-label={`Open larger view: ${item.title} — view illustration`}
                className="group relative block h-full min-h-full w-full overflow-hidden rounded-[20px] border border-white/70 shadow-glow transition duration-500 hover:-translate-y-1 hover:shadow-glow-lg sm:rounded-[24px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-forest/75 via-forest/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-90"
                  aria-hidden="true"
                />
                <span className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full border border-cream/30 bg-forest/35 text-cream opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand className="size-3.5" aria-hidden="true" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-5">
                  <span className="block font-display text-lg leading-tight text-cream sm:text-xl">
                    {item.title}
                  </span>
                  <span className="mt-1 flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-cream/60">
                    <span className="size-1 rounded-full bg-gold" aria-hidden="true" />
                    View illustration
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[11px] leading-5 text-muted/80">
            The images above are conceptual illustrations created for this website. They are not
            photographs of the actual clinic premises or of any patient.
          </p>
        </Reveal>
      </div>

      {activeItem && activeIndex !== null ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Illustration: ${activeItem.title}`}
          className="fixed inset-0 z-[130] flex items-center justify-center bg-forest/95 p-4 backdrop-blur-md sm:p-6"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close illustration viewer"
            className="absolute inset-0 cursor-zoom-out"
            tabIndex={-1}
          />

          <div className="relative z-10 flex h-full max-h-[92vh] w-full max-w-5xl flex-col">
            <div className="flex items-center justify-between gap-4 pb-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/70">
                Illustration {activeIndex + 1} of {galleryItems.length}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                className="inline-flex size-10 items-center justify-center rounded-full border border-cream/25 bg-cream/10 text-cream transition hover:bg-cream/20"
                aria-label="Close illustration viewer"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden rounded-[24px] border border-cream/15 bg-forest-700/60">
              <Image
                key={activeItem.src}
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-3 flex flex-col gap-3 rounded-2xl border border-cream/12 bg-cream/5 px-4 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-5">
              <div className="max-w-2xl">
                <p className="font-display text-xl leading-tight text-cream">{activeItem.title}</p>
                <p className="mt-1.5 text-[12px] leading-5 text-cream/65">{activeItem.caption}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-cream/25 text-cream transition hover:bg-cream/15"
                  aria-label="Previous illustration"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-cream/25 text-cream transition hover:bg-cream/15"
                  aria-label="Next illustration"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <p className="mt-2 text-center text-[10px] text-cream/65">
              Use the arrow keys to browse · Press Esc to close
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
