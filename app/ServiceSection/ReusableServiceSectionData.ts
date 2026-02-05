 import type { ServiceCardItem } from "./ReusableServiceSection"


export const services: readonly ServiceCardItem[] = [
  {
    title: "General its not working",
    description: "Check-ups, cleanings, fillings, and preventive care.",
    href: "/services/general",
    iconKey: "stethoscope",
    image: "/images/services/general.webp",
    features: ["Exams & cleanings", "Fillings", "Preventive care"],
  },
  {
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, and smile enhancement.",
    href: "/services/cosmetic",
    iconKey: "sparkles",
    image: "/images/services/cosmetic.webp",
    features: ["Whitening", "Veneers", "Smile design"],
  },
  {
    title: "Orthodontics",
    description: "Braces and aligners for all ages.",
    href: "/services/orthodontics",
    iconKey: "alignCenter",
    image: "/images/services/orthodontics.webp",
    features: ["Clear aligners", "Braces", "Bite correction"],
  },
  {
    title: "Dental Implants",
    description: "Permanent replacement for missing teeth.",
    href: "/services/implants",
    iconKey: "shield",
    image: "/images/services/implants.webp",
    features: ["Natural feel", "Stable bite", "Long-lasting"],
  },
  {
    title: "Hygiene & Cleaning",
    description: "Professional cleaning for healthy gums and enamel.",
    href: "/services/hygiene",
    iconKey: "heartPulse",
    image: "/images/services/hygiene.webp",
    features: ["Scale & polish", "Gum care", "Fresh breath"],
  },
  {
    title: "Emergency Care",
    description: "Immediate help when pain or accidents occur.",
    href: "/services/emergency",
    iconKey: "smile",
    image: "/images/services/emergency.webp",
    features: ["Tooth pain", "Broken tooth", "Urgent care"],
  },
];
