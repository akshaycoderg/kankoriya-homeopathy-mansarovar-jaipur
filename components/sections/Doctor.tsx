import Image from "next/image";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  GraduationCap,
  Leaf,
  Phone,
  Stethoscope,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { clinic } from "@/lib/site";
import { CornerLeaves, Sprig } from "@/components/ui/Botanical";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const credentials = [
  { icon: GraduationCap, label: "BHMS", sub: "Bachelor of Homoeopathic Medicine & Surgery" },
  { icon: Award, label: "MD (Homoeopathy)", sub: "Postgraduate qualification" },
  { icon: BadgeCheck, label: "RJ/9257", sub: "Rajasthan registration number" },
  { icon: CalendarDays, label: "11+ years", sub: "Clinical experience" },
];

const highlights = [
  "Classical, individualised homeopathic case-taking",
  "Consultation for everyday and long-standing concerns",
  "Assistant Professor at Homoeopathy University",
  "Clear, respectful communication with every patient",
];

export function Doctor() {
  return (
    <section id="doctor" className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 top-10 size-[480px] rounded-full bg-[radial-gradient(circle,rgba(222,233,218,0.9),transparent_65%)]" />
        <div className="absolute -right-24 bottom-0 size-[380px] rounded-full bg-[radial-gradient(circle,rgba(233,223,201,0.8),transparent_65%)]" />
      </div>

      <div className="container-page section relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[430px]">
            <div
              className="absolute -inset-3 rounded-[240px_240px_36px_36px] border border-gold/35"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[230px_230px_28px_28px] border border-white/80 bg-beige/40 p-2.5 shadow-glow-lg">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[220px_220px_22px_22px]">
                <Image
                  src="/images/dr-anshuman-kankoriya.jpg"
                  alt="Portrait of Dr. Anshuman Kankoriya, homeopathic doctor in Mansarovar, Jaipur"
                  fill
                  sizes="(min-width: 1024px) 430px, (min-width: 640px) 70vw, 88vw"
                  className="object-cover object-[42%_center]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-cream/25 bg-forest/50 px-4 py-3 text-cream backdrop-blur-md">
                  <p className="font-display text-lg leading-tight">{clinic.doctor.name}</p>
                  <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.17em] text-cream/70">
                    {clinic.doctor.qualifications}
                  </p>
                </div>
              </div>
            </div>

            <div className="glow-card absolute -right-3 top-10 flex items-center gap-3 px-4 py-3 sm:-right-7">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-mint text-forest-600">
                <Stethoscope className="size-4.5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[11.5px] font-semibold text-forest">Since 2019</span>
                <span className="mt-0.5 block text-[9.5px] uppercase tracking-[0.13em] text-muted">
                  Mansarovar, Jaipur
                </span>
              </span>
            </div>

            <CornerLeaves className="absolute -bottom-7 -left-6 h-20 w-20 rotate-90 text-sage/50" />
            <Sprig className="absolute -left-10 bottom-28 hidden h-36 w-16 text-sage/40 animate-sway lg:block" />
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">
              <span className="inline-block h-px w-7 bg-gold" aria-hidden="true" />
              Meet Your Doctor
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.2vw,3.35rem)] font-medium leading-[1.05] text-forest">
              Dr. Anshuman
              <span className="italic text-forest-600"> Kankoriya</span>
            </h2>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-forest-600/80">
              BHMS · MD (Homoeopathy)
            </p>

            <p className="mt-6 text-[15px] leading-7 text-muted">
              Dr. Anshuman Kankoriya is a homeopathic practitioner with over 11 years of clinical
              experience. He consults at Kankoriya Homeopathy in Mansarovar, Jaipur, and is an
              Assistant Professor at Homoeopathy University. His approach centres on careful
              case-taking, individualised care and an honest conversation about what to expect.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {credentials.map((credential) => {
                const Icon = credential.icon;
                return (
                  <div
                    key={credential.label}
                    className="flex items-start gap-3 rounded-2xl border border-forest/8 bg-ivory/70 px-4 py-3.5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-mint text-forest-600">
                      <Icon className="size-3.5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[12px] font-semibold text-forest">
                        {credential.label}
                      </span>
                      <span className="mt-0.5 block text-[10px] leading-4 text-muted">
                        {credential.sub}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>

            <ul className="mt-7 space-y-2.5">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-[13px] leading-6 text-forest/75">
                  <Leaf className="mt-1 size-3.5 shrink-0 text-gold" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={clinic.contact.whatsapp} variant="primary" size="lg">
                <WhatsAppIcon className="size-4.5" />
                Consult Now
              </ButtonLink>
              <ButtonLink href={clinic.contact.phoneHref} variant="outline" size="lg">
                <Phone className="size-4" aria-hidden="true" />
                Call Clinic
              </ButtonLink>
            </div>

            <p className="mt-5 max-w-xl text-[10.5px] leading-5 text-muted/80">
              Qualifications, registration number, experience and academic association are shown as
              provided by the clinic. Please verify current registration and credentials with the
              practitioner before beginning treatment. Homeopathic care does not replace prescribed
              medication or emergency medical attention.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
