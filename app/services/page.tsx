"use client"

import PartnerCTA from "../CTASection/CTA";
import FaqImage from "../FrequentlyAskedQuestionsSection/FAQImage";
import Footer from "../Footer/FooterBasic";
import { HeroFullBackground } from "../HeroSection/HeroComponent";
import Navbar from "../Navbar/Navbar";
import ServicesGrid6 from "../ServiceSection/ReusableServiceSection";
import SmoothScroll from "../Animations/LenisSmoothAnimation";


const services = [
  {
    title: "General Dentristry",
    description: "Comprehensive dental care focused on prevention, early detection, and long-term oral health. Our general dentistry services help keep your teeth and gums healthy, comfortable, and problem-free through every stage of life.",
    href: "/services/general",
    iconKey: "stethoscope",
    image: "/FAQ-Smilo.jpg",
    features: ["Routine exams and professional cleanings", "Tooth fillings and cavity treatments", "Personalized preventive care systems"],
  },
  {
    title: "Cosmetic Dentistry",
    description: "Personalized cosmetic dental care focused on improving the look, harmony, and confidence of your smile. Our cosmetic dentistry services enhance color, shape, and symmetry, creating natural-looking results that help you smile with confidence through every stage of life.",
    href: "/services/cosmetic",
    iconKey: "sparkles",
    image: "/Smilo-Services-Hero2.jpg",
    features: ["Professional teeth whitening", "Custom porcelain veneers", "Personalized smile design"],
  },
  {
    title: "Orthodontics",
    description: "Personalized orthodontic care, designed to align your teeth, improve bite balance, and create a confident healthy smile at any age, Using modern techniques for comfortable treatment and lasting results.",
    href: "/services/orthodontics",
    iconKey: "alignCenter",
    image: "/ServicesCard3.jpg",
    features: ["Clear aligners", "Braces", "Bite correction"],
  },
  {
    title: "Dental Implants",
    description: "Advanced dental implant solutions that restore missing teeth with natural-looking strength, function, and long-term confidence, designed to support your oral health and enhance your smile for years to come.",
    href: "/services/implants",
    iconKey: "shield",
    image: "/Servicescard4.webp",
    features: ["Natural feel", "Stable bite", "Durable solution"],
  },
  {
    title: "Hygiene & Cleaning",
    description: "Professional hygiene and cleaning services designed to protect your oral health, prevent disease, and keep your smile fresh, healthy, and confident every day.",
    href: "/services/hygiene",
    iconKey: "heartPulse",
    image: "/Servicescard-5.webp",
    features: ["Scale & polish", "Gum health maintenance", "Fresh breath care"],
  },
  {
    title: "Emergency Care",
    description: "Prompt and compassionate emergency dental care focused on relieving pain, addressing urgent concerns, and restoring comfort and peace of mind when you need it most.",
    href: "/services/emergency",
    iconKey: "smile",
    image: "/Services-Card6.jpg",
    features: ["Tooth pain", "Broken or damaged tooth", "Urgent dental evaluation"],
  },
] as const;

export default function Page() {
  return (
    <>
         <main className="p-0 text-gray-600">
         <Navbar/>
        <HeroFullBackground 
        backgroundImage="Smilo-CTA3.jpg"
        kicker="trusted dental clinic"
        titleBefore="Smilo-Care —"
        highlight="Trusted"
        titleAfter="Dental Services"
        description="Comprehensive dental care focused on your comfort"
        primaryButton={{ label: "Book Appointment", href: "/" }}
        secondaryButton={{ label: "See how it works", href: "/" }}/>
        <ServicesGrid6
         items={services}
         kicker="Trusted care for every stage of your smile."
         headingBefore="Our"
         headingHighlight="Treatments"
         showImages={true}
         showFeatures={true}/>
         <FaqImage/>
        <PartnerCTA/>
        <Footer/>
        </main>
    </>
  );
}
