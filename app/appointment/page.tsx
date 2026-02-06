    import { Main } from "next/document";
import { RequestFormLayout } from "../ApointmentSection/ApointmentReusableForm";
import Navbar from "../Navbar/Navbar";
import FaqImage from "../FrequentlyAskedQuestionsSection/FAQImage";
import PartnerCTA from "../CTASection/CTA";
import Footer from "../Footer/FooterBasic";

export function AppointmentRequestForm() {
  return (
    <RequestFormLayout
      title="Request Appointment"
      subtitle="Submit your details and preferred time. Our team will contact you to confirm."
      submitLabel="Book now"
      disclaimer="This is an appointment request. We’ll contact you to confirm availability."
    >
      {/* clinic-specific fields */}
      <input className="text-foreground/50 placeholder:text-foreground/40" placeholder="Full name" />
      <input className="text-foreground/50 placeholder:text-foreground/40" placeholder="Email" />
      <input className="text-foreground/50 placeholder:text-foreground/40" placeholder="Phone" />
      <input className="text-foreground/50 placeholder:text-foreground/40" type="date" />
    </RequestFormLayout>
  );
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#f8f9fb] py-24">
          <div className="max-w-3xl mx-auto px-4">
            <AppointmentRequestForm />
          </div>
        </section>
        <FaqImage/>
        <PartnerCTA/>
        <Footer/>

      </main>
    </>
  );
}