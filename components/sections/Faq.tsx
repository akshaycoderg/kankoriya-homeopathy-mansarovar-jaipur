"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { clinic } from "@/lib/site";
import { faqs } from "@/lib/data";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Sprig } from "@/components/ui/Botanical";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-cream">
      <SpriteDecor />

      <div className="container-page section relative">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                align="left"
                eyebrow="Questions, Answered"
                title={
                  <>
                    Before Your <span className="italic text-forest-600">Visit</span>
                  </>
                }
                description="Practical answers about appointments, timings and what to expect at the clinic. If something is not covered here, you are welcome to ask."
              />

              <div className="glow-card mt-8 p-5">
                <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-600">
                  <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                  Still have a question?
                </p>
                <p className="mt-2.5 text-[12.5px] leading-6 text-muted">
                  Message the clinic on WhatsApp or call during consulting hours. For appointment
                  requests, the form on this page is the quickest way to start.
                </p>
                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                  <ButtonLink href={clinic.contact.whatsapp} variant="whatsapp" size="sm" className="flex-1">
                    <WhatsAppIcon className="size-4" />
                    WhatsApp
                  </ButtonLink>
                  <ButtonLink
                    href={clinic.contact.phoneHref}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    Call Clinic
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-[20px] border transition duration-300 ${
                      isOpen
                        ? "border-forest/15 bg-ivory shadow-glow"
                        : "border-forest/10 bg-ivory/60 hover:border-forest/20 hover:bg-ivory"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                        id={`faq-button-${index}`}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left"
                      >
                        <span className="flex items-start gap-3.5">
                          <span className="mt-0.5 font-display text-[13px] text-forest/30">
                            {`${index + 1}`.padStart(2, "0")}
                          </span>
                          <span className="font-sans text-[13.5px] font-semibold leading-6 text-forest sm:text-sm">
                            {faq.question}
                          </span>
                        </span>
                        <span
                          className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                            isOpen
                              ? "border-forest bg-forest text-cream"
                              : "border-forest/20 text-forest-600"
                          }`}
                          aria-hidden="true"
                        >
                          {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                        </span>
                      </button>
                    </h3>

                    <div
                      className="faq-panel"
                      data-open={isOpen}
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      aria-hidden={!isOpen}
                    >
                      <div>
                        <p className="px-5 pb-5 pl-[3.4rem] pr-8 text-[12.5px] leading-[1.75] text-muted">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-[10.5px] leading-5 text-muted/75">
              The information above is general and does not replace a consultation or medical advice.
              For emergencies, contact local emergency services.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SpriteDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-32 top-24 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(222,233,218,0.65),transparent_65%)]"
        aria-hidden="true"
      />
      <Sprig className="pointer-events-none absolute right-8 top-20 hidden h-40 w-20 text-sage/25 animate-sway-slow lg:block" />
    </>
  );
}
