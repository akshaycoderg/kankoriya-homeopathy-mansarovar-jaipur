export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://kankoriya-homeopathy-mansarovar-jaipur.vercel.app";

export const clinic = {
  name: "Kankoriya Homeopathy",
  alternateNames: ["Kankoriya's Homoeopathy", "Kankoriya Homoeopathic Clinic"],
  tagline: "Classical Homeopathy in Mansarovar, Jaipur",
  doctor: {
    name: "Dr. Anshuman Kankoriya",
    qualifications: "BHMS, MD (Homoeopathy)",
    shortQualifications: ["BHMS", "MD (Homoeopathy)"],
    registration: "RJ/9257 (Rajasthan)",
    experience: "11+ years",
    association: "Assistant Professor at Homoeopathy University",
    established: "February 2019",
  },
  contact: {
    phoneDisplay: "+91 84479 34977",
    phoneHref: "tel:+918447934977",
    whatsapp: "https://wa.me/918447934977",
    whatsappDisplay: "+91 84479 34977",
  },
  address: {
    line1: "Shop No. 3/304, Sector 3, Varun Path",
    line2: "Mansarovar, Jaipur",
    state: "Rajasthan",
    postalCode: "302020",
    landmark: "Near Jain Mandir",
    full: "Shop No. 3/304, Sector 3, Varun Path, Mansarovar, Jaipur, Rajasthan 302020",
  },
  timings: {
    weekdays: [
      { label: "Morning", value: "10:00 AM – 1:00 PM" },
      { label: "Evening", value: "6:00 PM – 9:00 PM" },
    ],
    weekdaysLabel: "Monday – Saturday",
    sunday: "10:00 AM – 1:00 PM",
  },
} as const;

const addressQuery = encodeURIComponent(
  `${clinic.name}, ${clinic.address.full}, ${clinic.address.landmark}`,
);

/** Search link generated from the verified full address (no unverified place ID). */
export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${clinic.address.full}, ${clinic.address.landmark}`,
)}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${addressQuery}&output=embed`;

export const siteDescription =
  "Kankoriya Homeopathy is a homeopathic clinic in Mansarovar, Jaipur, led by Dr. Anshuman Kankoriya, BHMS, MD (Homoeopathy). Personalised consultations for skin, hair, joint, respiratory, digestive and general wellness concerns.";

export const ogImage = "/images/og-image.jpg";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Doctor", href: "#doctor" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const appointmentConcerns = [
  "Skin & Hair Concerns",
  "Joint & Musculoskeletal Concerns",
  "Respiratory Concerns",
  "Digestive Concerns",
  "General Wellness",
  "Hypothyroidism",
  "Diabetes-related Concerns",
  "Kidney Stones",
  "Migraine",
  "Seasonal Fever",
  "Fatigue",
  "Paediatric Consultation",
  "Lifestyle & Wellness Consultation",
  "Other / Not Sure",
] as const;

export const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
] as const;

/** Builds a prefilled WhatsApp enquiry. Appointment is confirmed only after the clinic replies. */
export function appointmentWhatsAppUrl(details: {
  patientName: string;
  mobileNumber: string;
  concern: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}) {
  const lines = [
    `Hello Kankoriya Homeopathy, I would like to request an appointment.`,
    ``,
    `Name: ${details.patientName}`,
    `Mobile: ${details.mobileNumber}`,
    `Concern: ${details.concern}`,
    `Preferred date: ${details.preferredDate}`,
    `Preferred time: ${details.preferredTime}`,
  ];

  if (details.message?.trim()) {
    lines.push(`Message: ${details.message.trim()}`);
  }

  lines.push(
    ``,
    `Please confirm availability. I understand the appointment is not confirmed until the clinic responds.`,
  );

  return `${clinic.contact.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function formatDateForMessage(value: string) {
  if (!value) return "";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
