import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { clinic } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important information about the general nature of content on the Kankoriya Homeopathy website and the limits of homeopathic consultation.",
  alternates: { canonical: "/medical-disclaimer" },
};

export default function MedicalDisclaimerPage() {
  return (
    <section className="relative overflow-hidden bg-cream pt-[120px]">
      <div className="pointer-events-none absolute -left-40 top-16 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(233,223,201,0.7),transparent_65%)]" />

      <div className="container-page relative py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-forest-600 transition hover:text-forest"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            Back to homepage
          </Link>

          <p className="eyebrow mt-6">
            <span className="h-px w-7 bg-gold" aria-hidden="true" />
            Important Information
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-tight text-forest">
            Medical Disclaimer
          </h1>
          <p className="mt-3 text-[12px] text-muted">Last updated: 13 November 2026</p>

          <div className="mt-8 flex items-start gap-3.5 rounded-2xl border border-gold/30 bg-beige/40 p-5">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-forest-600" aria-hidden="true" />
            <p className="text-[13px] leading-6 text-forest/80">
              This website provides general information only. It is not medical advice, a diagnosis or
              a treatment plan, and it does not create a doctor&ndash;patient relationship. Always
              consult a qualified healthcare professional about your individual situation.
            </p>
          </div>

          <div className="prose-clinic mt-8">
            <h2>General information only</h2>
            <p>
              The content on this website describes the services and approach of {clinic.name}. It is
              intended for general awareness. It should not be used to self-diagnose or self-treat any
              condition, and it is not a substitute for an in-person consultation.
            </p>

            <h2>No guarantee of results</h2>
            <p>
              Homeopathic care, like any healthcare approach, affects individuals differently. This
              website does not promise or guarantee a cure, specific results or a particular outcome.
              Any discussion of treatment during a consultation is individual and provisional.
            </p>

            <h2>Complementary, not a replacement</h2>
            <p>
              Homeopathic consultation is offered as a complementary approach. It does not replace
              emergency care, prescribed medication, surgery or regular monitoring for ongoing medical
              conditions. Do not stop, start or change any prescribed medicine without advice from the
              doctor who prescribed it.
            </p>

            <h2>Emergencies</h2>
            <p>
              This website and the appointment form are not monitored continuously and must not be used
              for emergencies. If you experience chest pain, difficulty breathing, severe bleeding,
              sudden weakness, a severe allergic reaction or any other urgent symptom, contact local
              emergency services or go to the nearest hospital immediately.
            </p>

            <h2>Accuracy of information</h2>
            <p>
              Clinic details, timings, qualifications and registration information are published in
              good faith based on details provided by the clinic. Timings may change on public
              holidays. Please call the clinic to confirm current details before travelling. If you
              notice an error on this website, please let the clinic know.
            </p>

            <h2>External links</h2>
            <p>
              Links to Google Maps, WhatsApp and other third-party services are provided for
              convenience. The clinic does not control and is not responsible for the content or
              privacy practices of those services.
            </p>

            <h2>Questions</h2>
            <p>
              If you have questions about this disclaimer or would like to discuss whether a
              consultation is appropriate for your situation, contact the clinic at{" "}
              <a href={clinic.contact.phoneHref}>{clinic.contact.phoneDisplay}</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
