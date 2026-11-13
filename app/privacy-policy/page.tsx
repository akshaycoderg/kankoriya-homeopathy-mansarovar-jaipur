import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { clinic } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Kankoriya Homeopathy handles information when you use this website, contact the clinic or request an appointment.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden bg-cream pt-[120px]">
      <div className="pointer-events-none absolute -right-40 top-10 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(222,233,218,0.6),transparent_65%)]" />

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
            Legal
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-tight text-forest">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[12px] text-muted">
            Last updated: 13 November 2026
          </p>

          <div className="prose-clinic mt-8">
            <p>
              This Privacy Policy explains how {clinic.name} (&ldquo;the clinic&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) handles information in connection with this website. This is a
              information-only website for a homeopathic clinic in Mansarovar, Jaipur.
            </p>

            <h2>Information you choose to share</h2>
            <p>
              The appointment form on this website does not send your details to a server operated by
              the clinic, and the clinic does not store form entries on this website. When you submit
              the form, your browser opens WhatsApp with a pre-written message containing the details
              you entered. You can review, edit or cancel that message before sending it. If you send
              it, the message is delivered through WhatsApp and is subject to WhatsApp&rsquo;s own
              privacy terms.
            </p>
            <p>
              If you contact the clinic by phone, WhatsApp or in person, the clinic may receive your
              name, contact number and the information you choose to share about your health. This is
              used to respond to your enquiry, arrange appointments and provide care.
            </p>

            <h2>Information collected automatically</h2>
            <p>
              Like most websites, this site may be hosted on infrastructure that records basic
              technical information such as your IP address, browser type, device type, pages visited
              and the time of your visit. This information is used for security, reliability and
              understanding general site usage. It is not used to identify you personally.
            </p>

            <h2>Embedded maps and third-party services</h2>
            <p>
              The contact section embeds a Google Maps view. Loading the map may allow Google to set
              cookies or receive technical information such as your IP address, in accordance with
              Google&rsquo;s privacy policy. Links to WhatsApp, Google Maps and telephone links take
              you to services operated by third parties, which have their own privacy policies.
            </p>

            <h2>How information is used</h2>
            <ul>
              <li>To respond to appointment requests and general enquiries.</li>
              <li>To arrange and provide consultations at the clinic.</li>
              <li>To maintain the security and proper functioning of this website.</li>
              <li>To comply with applicable legal and professional obligations.</li>
            </ul>
            <p>
              The clinic does not sell your personal information. Information is not shared for
              advertising purposes.
            </p>

            <h2>How long information is kept</h2>
            <p>
              Information shared with the clinic is kept only for as long as needed for the purposes
              described above, or as required by applicable law and professional record-keeping
              requirements. Website technical logs are retained according to the hosting
              provider&rsquo;s standard practices.
            </p>

            <h2>Your choices</h2>
            <p>
              You can choose not to send a WhatsApp message, and you can ask the clinic about the
              information it holds about you. To make a request, contact the clinic using the details
              below. Please do not include sensitive medical information in an initial message unless
              it is necessary for your enquiry.
            </p>

            <h2>Children</h2>
            <p>
              This website is not directed at children. Appointment requests for minors should be made
              by a parent or guardian.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              This policy may be updated from time to time. The date at the top of this page shows when
              it was last revised.
            </p>

            <h2>Contact</h2>
            <p>
              {clinic.name}
              <br />
              {clinic.address.line1}, {clinic.address.line2}, {clinic.address.state} &ndash;{" "}
              {clinic.address.postalCode}
              <br />
              Phone:{" "}
              <a href={clinic.contact.phoneHref}>{clinic.contact.phoneDisplay}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
