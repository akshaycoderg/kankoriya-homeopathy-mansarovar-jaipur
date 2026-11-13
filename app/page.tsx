import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Treatments } from "@/components/sections/Treatments";
import { ExploreCards } from "@/components/sections/ExploreCards";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ConsultationApproach } from "@/components/sections/ConsultationApproach";
import { Doctor } from "@/components/sections/Doctor";
import { Gallery } from "@/components/sections/Gallery";
import { Appointment } from "@/components/sections/Appointment";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { clinic, mapsSearchUrl, siteDescription, siteUrl } from "@/lib/site";
import { faqs, treatments } from "@/lib/data";

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "13:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "18:00",
    closes: "21:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: "10:00",
    closes: "13:00",
  },
];

const structuredData: Array<Record<string, unknown>> = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteUrl}/#clinic`,
    name: clinic.name,
    alternateName: clinic.alternateNames,
    description: siteDescription,
    url: siteUrl,
    telephone: clinic.contact.phoneHref.replace("tel:", ""),
    image: [`${siteUrl}/images/og-image.jpg`],
    logo: `${siteUrl}/icon.svg`,
    hasMap: mapsSearchUrl,
    medicalSpecialty: "Homeopathy",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
      addressLocality: "Jaipur",
      addressRegion: clinic.address.state,
      postalCode: clinic.address.postalCode,
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "Place", name: "Mansarovar, Jaipur" },
    ],
    openingHoursSpecification: openingHours,
    employee: {
      "@type": "Physician",
      name: clinic.doctor.name,
      honorificPrefix: "Dr.",
      jobTitle: "Homeopathic Physician",
      medicalSpecialty: "Homeopathy",
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "BHMS" },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "MD (Homoeopathy)",
        },
      ],
      identifier: clinic.doctor.registration,
    },
    availableService: treatments.map((treatment) => ({
      "@type": "MedicalTherapy",
      name: treatment.title,
      description: treatment.summary,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: clinic.name,
    url: siteUrl,
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Hero />
      <About />
      <Treatments />
      <ExploreCards />
      <WhyChooseUs />
      <ConsultationApproach />
      <Doctor />
      <Gallery />
      <Appointment />
      <Contact />
      <Faq />
    </>
  );
}
