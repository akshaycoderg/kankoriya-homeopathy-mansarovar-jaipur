import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bone,
  Brain,
  Droplets,
  Flame,
  Flower2,
  HeartPulse,
  Leaf,
  Stethoscope,
  Utensils,
  Wind,
} from "lucide-react";

export type Treatment = {
  id: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  concerns: string[];
  consultation: string;
  coverClass: string;
  accent: string;
};

export const treatments: Treatment[] = [
  {
    id: "skin-hair",
    title: "Skin & Hair Care",
    shortTitle: "Skin & Hair",
    icon: Flower2,
    summary:
      "Support for recurring skin and scalp concerns with an individualised homeopathic approach.",
    concerns: [
      "Acne and pimples",
      "Eczema",
      "Ringworm",
      "Psoriasis",
      "Skin allergies",
      "Hair fall concerns",
    ],
    consultation:
      "Consultations begin with a detailed history of your skin or scalp concern, its triggers, and your general health. Advice is individualised, and appropriate medical evaluation is encouraged where needed.",
    coverClass: "from-[#eef3e8] via-[#f7f2e6] to-[#eadfc8]",
    accent: "#7e9a82",
  },
  {
    id: "joint",
    title: "Joint & Musculoskeletal Concerns",
    shortTitle: "Joint Pain",
    icon: Bone,
    summary:
      "A considered approach to joint discomfort, stiffness and mobility-related concerns.",
    concerns: [
      "Arthritis",
      "Knee pain",
      "Muscle stiffness",
      "Joint discomfort",
    ],
    consultation:
      "The consultation reviews your symptoms, movement, lifestyle and medical history. Homeopathic support is discussed alongside appropriate orthopaedic or rheumatological evaluation when required.",
    coverClass: "from-[#efe9d9] via-[#f7f2e6] to-[#e2e9dc]",
    accent: "#a98f5f",
  },
  {
    id: "respiratory",
    title: "Respiratory Concerns",
    shortTitle: "Respiratory",
    icon: Wind,
    summary:
      "Consultation support for recurrent respiratory symptoms and seasonal allergies.",
    concerns: [
      "Asthma (supportive consultation)",
      "Chronic cough",
      "Frequent colds",
      "Respiratory allergies",
    ],
    consultation:
      "Respiratory concerns are assessed with attention to triggers, frequency and severity. Homeopathic consultation does not replace emergency care or prescribed inhalers and medication.",
    coverClass: "from-[#e7eee9] via-[#f7f2e6] to-[#e9e2cf]",
    accent: "#5f8272",
  },
  {
    id: "digestive",
    title: "Digestive Concerns",
    shortTitle: "Digestive",
    icon: Utensils,
    summary:
      "Personalised consultation for acidity, digestion and gastrointestinal discomfort.",
    concerns: [
      "Acidity",
      "Digestive complaints",
      "Piles",
      "Gastrointestinal concerns",
    ],
    consultation:
      "Your consultation includes diet, routine, bowel patterns and symptom history. Where symptoms need investigation, the clinic will advise an appropriate medical review.",
    coverClass: "from-[#f1ead8] via-[#f7f2e6] to-[#e3ebdf]",
    accent: "#b08d58",
  },
  {
    id: "wellness",
    title: "General Wellness",
    shortTitle: "General Wellness",
    icon: Leaf,
    summary:
      "Consultation for thyroid, metabolic, migraine, fatigue and lifestyle-related concerns.",
    concerns: [
      "Hypothyroidism",
      "Diabetes-related concerns",
      "Kidney stones",
      "Migraine",
      "Seasonal fevers",
      "Fatigue",
      "Paediatric consultation",
      "Lifestyle and wellness consultation",
    ],
    consultation:
      "Wellness consultations look at the whole person — sleep, stress, diet and medical history. Homeopathic care is complementary and does not replace prescribed treatment or regular medical monitoring.",
    coverClass: "from-[#e8f0e4] via-[#f7f2e6] to-[#eee4d0]",
    accent: "#6f8f72",
  },
];

export const whyChooseUs = [
  {
    title: "Experienced Practitioner",
    icon: Stethoscope,
    description:
      "Dr. Anshuman Kankoriya brings 11+ years of clinical experience and is an Assistant Professor at Homoeopathy University.",
    detail:
      "Consultations are grounded in classical homeopathic case-taking, with a focus on understanding the whole person rather than a single symptom.",
  },
  {
    title: "Personalised Consultation",
    icon: HeartPulse,
    description:
      "Every consultation begins with listening — your history, lifestyle and concerns guide the discussion.",
    detail:
      "There is no one-size-fits-all prescription. The clinic takes time to understand your context before discussing a care plan.",
  },
  {
    title: "Patient-Centred Approach",
    icon: Activity,
    description:
      "Clear explanations, unhurried conversations and respect for the treatment choices you already follow.",
    detail:
      "You are encouraged to ask questions. Existing prescriptions should not be stopped without advice from your treating doctor.",
  },
  {
    title: "Convenient Location",
    icon: Droplets,
    description:
      "Located in Sector 3, Varun Path, Mansarovar — near Jain Mandir, with morning and evening timings.",
    detail:
      "Appointments can be requested by phone or WhatsApp, with clinic timings designed to fit around work and family.",
  },
];

export const consultationApproach = [
  {
    title: "We listen first",
    icon: HeartPulse,
    description:
      "A consultation starts with your story — symptoms, history, sleep, stress, digestion and what matters to you.",
  },
  {
    title: "We individualise",
    icon: Brain,
    description:
      "Homeopathic care is matched to the individual, not just the name of a condition. Your plan is discussed openly.",
  },
  {
    title: "We follow through",
    icon: Leaf,
    description:
      "Follow-up consultations help review progress. If symptoms need another medical opinion, we will say so.",
  },
];

export const faqs = [
  {
    question: "Where exactly is the clinic located?",
    answer:
      "Kankoriya Homeopathy is at Shop No. 3/304, Sector 3, Varun Path, Mansarovar, Jaipur, Rajasthan 302020. The clinic is near Jain Mandir. You can use the directions button in the contact section for a Google Maps route.",
  },
  {
    question: "What are the consulting hours?",
    answer:
      "Monday to Saturday, consultations are available from 10:00 AM to 1:00 PM and 6:00 PM to 9:00 PM. On Sundays, the clinic consults from 10:00 AM to 1:00 PM only. Timings can change on public holidays, so calling ahead is always a good idea.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can send a request using the appointment form on this page, message the clinic on WhatsApp, or call +91 84479 34977. The form prepares a WhatsApp message with your preferred date, time and concern — you can review it before sending.",
  },
  {
    question: "Is my appointment confirmed as soon as I submit the form?",
    answer:
      "No. The form is an appointment request, not a booking. Your appointment is confirmed only after the clinic responds to confirm availability. Please wait for that confirmation before travelling to the clinic.",
  },
  {
    question: "What happens during the first consultation?",
    answer:
      "The first consultation is a conversation. The doctor will ask about your current concern, its history, your general health, sleep, digestion, stress and any medication you take. This helps build an individual picture rather than prescribing for a diagnosis alone. Bring any recent reports or prescriptions you would like to discuss.",
  },
  {
    question: "Should I stop my current medication before visiting?",
    answer:
      "No. Please do not stop, start or change any prescribed medication without advice from the doctor who prescribed it. Homeopathic consultation is offered as a complementary approach, and any changes to ongoing treatment should be discussed with your treating doctor.",
  },
  {
    question: "Is homeopathy suitable for children and older adults?",
    answer:
      "Homeopathic consultations can be requested for children and older adults, with a parent or guardian present for minors. Suitability and the care plan are discussed individually. Children and older adults with ongoing medical conditions should continue their regular medical monitoring.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Bring a list of your current medicines, any recent test reports or prescriptions, and a note of when your symptoms started and what seems to trigger them. If you have previously taken homeopathic treatment, sharing those details is helpful too.",
  },
] as const;

export const concernIcons: Record<string, LucideIcon> = {
  general: Stethoscope,
  respiratory: Wind,
  digestive: Flame,
  wellness: Leaf,
};
