import Navbar from "../Navbar/Navbar";
import { HeroFullBackground } from "../HeroSection/HeroComponent";
import FaqTwoCols from "../FrequentlyAskedQuestionsSection/FAQ2ColumnGrid"
import { FaqItem } from "../FrequentlyAskedQuestionsSection/FAQ2ColumnGrid";
import PartnerCTA from "../CTASection/CTA";
import Footer from "../Footer/FooterBasic";

const faqs: FaqItem[] = [
  {
    question: "Do you accept new patients?",
    answer:
      "Yes, we’re always happy to welcome new patients. You can book an appointment online or contact our clinic directly to get started.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "Appointments can be booked online through our website or by calling our clinic during opening hours.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Please bring a valid ID, your insurance details (if applicable), and any relevant medical or dental records.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we work with most major dental insurance providers. If you’re unsure about your coverage, our reception team will be happy to assist you.",
  },
  {
    question: "What treatments do you offer?",
    answer:
      "We offer a wide range of dental services, including routine check-ups, cleanings, cosmetic dentistry, and advanced treatments. Please contact us for specific treatment enquiries.",
  },
  {
    question: "How often should i visit the dentist?",
    answer:
      "We usually recommend dental check-ups every six months.Your dentist may suggest a different schedule depending on your oral health needs.",
  },
   {
    question: "What if i need to cancel or reschedule my appointment?",
    answer:
      "If you need to change your appointment, Please let us know as soon as possible so we can offer the time to another patient.",
  },
];



export default function Page() {
   return (
        <>
         <main>
        <Navbar/>
         <HeroFullBackground
          backgroundImage="Smilo-Care-FAQ.webp"
          kicker="patient support"
          titleBefore="Answers for —"
          highlight="Common"
          titleAfter="Questions"
          description="Everything you need to know before your visit — appointments, insurance, treatments, and care."
          primaryButton={{ label: "Book Appointment", href: "/book" }}
          secondaryButton={{ label: "See how it works", href: "/how-it-works" }}/>
          <FaqTwoCols
           items={faqs}
           titleBefore=" Most"
           titleHighlight="Common"
           titleAfter="Questions"
           description="Clear answers about appointments, treatments, and what to expect at Smilo-Care."
           allowMultipleOpen={false}
           defaultOpenIndexes={[0]}
           columnsMd={2}
         />
         <PartnerCTA/>
         <Footer/>
         </main>
        </>
   )
}