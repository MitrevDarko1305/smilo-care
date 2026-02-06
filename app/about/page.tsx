import AboutSection from "../AboutUsSection/AboutUsBasic";
import PartnerCTA from "../CTASection/CTA";
import FaqImage from "../FAQ/FAQImage";
import Footer from "../Footer/FooterBasic";
import { HeroFullBackground } from "../HeroSection/HeroComponent";
import Navbar from "../Navbar/Navbar";
import TeamSection from "../TeamSection/TeamSectionReusable";



export default function Page() {
    return (
         <>
         <main>
        <Navbar/>
        <HeroFullBackground
         backgroundImage="Hero-AboutUs-2.jpg"
         kicker="trusted dental clinic"
         titleBefore="Trusted"
         highlight="Care."
         titleAfter="Caring people"
         description="We believe  great dental care starts with trust, clear communication, and people who genuinely care about the patients they serve "
         primaryButton={{ label: "Book Appointment", href: "/book" }}
         secondaryButton={{ label: "See how it works", href: "/how-it-works" }}/>
        <AboutSection/>
        <TeamSection 
        subtitle="Our team"
        title="Meet the"
        highlight="Team"
        description="Experienced professionals focused on comfort, clarity, and patient-first care."
        members={[
        { name: "Dr. Sara K.", role: "Dentist", imageUrl: "/Lina.S-Assistant.png" },
        { name: "Dr. Amir M.", role: "Dentist", imageUrl: "/Dr.Amir.png" },
        { name: "Lina S.", role: "Dental Assistant", imageUrl: "/Dr.Sara.png" },
        ]}
        sectionClassName="bg-[#f9f8fb]"
        headerClassName="text-foreground"
        highlightClassName="text-teal-400"
        cardClassName="bg-white/5 text-white border border-white/10"
        imageClassName="h-64 object-cover"
        columns={3}
        showSocials={false}/>
        <FaqImage/>
        <PartnerCTA/>
        <Footer/>
         </main>
         
         </>
    )
} 