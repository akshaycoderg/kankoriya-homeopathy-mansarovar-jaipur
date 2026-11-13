"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarDays, MapPin, Menu, Phone, X } from "lucide-react";
import { clinic, navLinks } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[90]">
      {/* top strip */}
      <div className="hidden bg-forest text-cream/85 lg:block">
        <div className="container-page flex h-9 items-center justify-between text-[11.5px] tracking-wide">
          <p className="flex items-center gap-2">
            <MapPin className="size-3.5 text-gold" aria-hidden="true" />
            Sector 3, Varun Path, Mansarovar, Jaipur
            <span className="ml-2 text-cream/35" aria-hidden="true">
              |
            </span>
            <span className="text-cream/65">Near Jain Mandir</span>
          </p>
          <div className="flex items-center gap-5">
            <p className="text-cream/65">Mon–Sat · 10 AM–1 PM &amp; 6–9 PM</p>
            <a
              href={clinic.contact.phoneHref}
              className="flex items-center gap-1.5 font-medium text-cream transition hover:text-gold-light"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {clinic.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-forest/10 bg-cream/90 shadow-[0_14px_40px_-30px_rgba(23,56,42,0.55)] backdrop-blur-xl"
            : "bg-cream/60 backdrop-blur-md"
        }`}
      >
        <div className="container-page flex h-[68px] items-center justify-between gap-4 lg:h-[78px]">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                className="group relative text-[13px] font-medium text-forest/80 transition-colors hover:text-forest"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={clinic.contact.phoneHref}
              className="hidden size-10 items-center justify-center rounded-full border border-forest/15 text-forest transition hover:border-forest/35 hover:bg-ivory sm:inline-flex"
              aria-label={`Call ${clinic.name} on ${clinic.contact.phoneDisplay}`}
            >
              <Phone className="size-4" aria-hidden="true" />
            </a>
            <Link
              href="/#appointment"
              className="hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-[12.5px] font-semibold leading-none text-cream shadow-[0_12px_26px_-16px_rgba(23,56,42,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-forest-700 sm:inline-flex"
            >
              <CalendarDays className="size-4" aria-hidden="true" />
              Book Appointment
            </Link>
            <a
              href={clinic.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full bg-whatsapp text-white transition hover:bg-whatsapp-dark sm:hidden"
              aria-label="Message the clinic on WhatsApp"
            >
              <WhatsAppIcon className="size-4.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-forest/15 text-forest transition hover:bg-ivory lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[100] transition duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <button
          type="button"
          className="absolute inset-0 bg-forest/55 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-label="Close navigation menu"
          tabIndex={open ? 0 : -1}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col bg-cream shadow-[-30px_0_80px_-30px_rgba(23,56,42,0.5)] transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between border-b border-forest/10 px-5 py-5">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-forest/15 text-forest transition hover:bg-ivory"
              aria-label="Close navigation menu"
              autoFocus={open}
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-col px-5 py-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-forest/8 py-4 font-display text-2xl text-forest transition hover:text-forest-600"
              >
                <span>{link.label}</span>
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-forest/35">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3 px-5 pb-6">
            <Link
              href="/#appointment"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-4 text-sm font-semibold text-cream"
            >
              <CalendarDays className="size-4" aria-hidden="true" />
              Book Appointment
            </Link>
            <a
              href={clinic.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp the Clinic
            </a>
            <div className="rounded-2xl border border-forest/10 bg-ivory/80 p-4 text-[12px] leading-6 text-muted">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-forest-600" aria-hidden="true" />
                {clinic.address.line1}, {clinic.address.line2} – {clinic.address.postalCode}
              </p>
              <p className="mt-1.5 flex items-center gap-2">
                <Phone className="size-3.5 text-forest-600" aria-hidden="true" />
                <a href={clinic.contact.phoneHref} className="font-medium text-forest">
                  {clinic.contact.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
