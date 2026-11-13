import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { clinic } from "@/lib/site";
import { LeafSilhouette } from "@/components/ui/Botanical";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-cream pt-[120px]">
      <LeafSilhouette className="pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[340px] text-sage/20" />
      <div className="pointer-events-none absolute -right-32 top-20 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(222,233,218,0.75),transparent_65%)]" />

      <div className="container-page relative py-20 text-center">
        <p className="font-display text-[clamp(4rem,12vw,7rem)] font-medium leading-none text-forest/15">
          404
        </p>
        <h1 className="mt-2 font-display text-[clamp(2rem,4.5vw,3rem)] font-medium text-forest">
          This page could not be found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[14px] leading-7 text-muted">
          The page may have moved, or the link may be incorrect. You can return to the homepage or
          contact the clinic directly.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" variant="primary">
            <Home className="size-4" aria-hidden="true" />
            Back to Homepage
          </ButtonLink>
          <ButtonLink href={clinic.contact.phoneHref} variant="outline">
            <Phone className="size-4" aria-hidden="true" />
            Call the Clinic
          </ButtonLink>
        </div>
        <Link
          href="/#contact"
          className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold text-forest-600 underline decoration-gold/50 underline-offset-4"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          View clinic address and timings
        </Link>
      </div>
    </section>
  );
}
