"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, CalendarDays, Phone } from "lucide-react";
import { clinic } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* desktop floating actions */}
      <div className="fixed bottom-7 right-6 z-[80] hidden flex-col items-center gap-3 lg:flex">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`inline-flex size-11 items-center justify-center rounded-full border border-forest/15 bg-cream/95 text-forest shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-ivory ${
            showTop ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          aria-label="Back to top"
          tabIndex={showTop ? 0 : -1}
        >
          <ArrowUp className="size-4" aria-hidden="true" />
        </button>

        <a
          href={clinic.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_18px_40px_-16px_rgba(21,122,77,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-whatsapp-dark"
          aria-label="Chat with Kankoriya Homeopathy on WhatsApp"
        >
          <span
            className="absolute inset-0 rounded-full bg-whatsapp/40 animate-pulse-ring"
            aria-hidden="true"
          />
          <WhatsAppIcon className="relative size-7" />
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-forest px-3.5 py-2 text-[11px] font-semibold text-cream opacity-0 shadow-lg transition group-hover:opacity-100">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* mobile sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-forest/10 bg-cream/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-3 gap-2 px-3 py-2.5">
          <a
            href={clinic.contact.phoneHref}
            className="flex flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-forest/75 transition hover:bg-forest/5"
          >
            <Phone className="size-4.5 text-forest-600" aria-hidden="true" />
            Call
          </a>
          <a
            href={clinic.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-forest/75 transition hover:bg-forest/5"
          >
            <WhatsAppIcon className="size-4.5 text-whatsapp" />
            WhatsApp
          </a>
          <Link
            href="/#appointment"
            className="flex items-center justify-center gap-1.5 rounded-full bg-forest px-3 py-3 text-[11.5px] font-semibold text-cream shadow-[0_8px_20px_-12px_rgba(23,56,42,0.8)]"
          >
            <CalendarDays className="size-4" aria-hidden="true" />
            Book
          </Link>
        </div>
      </div>
    </>
  );
}
