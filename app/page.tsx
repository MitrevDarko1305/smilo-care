import ColumnPosts from "./BlogSection/PremiumBlog";
import PartnerCTA from "./CTASection/CTA";
import FaqImage from "./FAQ/FAQImage";
import Footer from "./Footer/FooterBasic";
import { HeroFullBackground } from "./HeroSection/HeroComponent";
import Navbar from "./Navbar/Navbar";
import ProcessSteps from "./ProcessSection/Process";
import ServiceBasic from "./ServiceSection/ServiceBasic";
import WhyTrustUs from "./WhyUsSection/WhyTrustUs";


export default function Page() {
  return (
    <>
      <main className="p-0 text-gray-600">
        <Navbar/>
        <HeroFullBackground/>
        <ServiceBasic/>
        <ProcessSteps/>
        <WhyTrustUs/>
        <FaqImage/>
        <PartnerCTA/>
        <ColumnPosts/>
        <Footer/>
      </main>
    </>
  );
}


{/*
   <div className="flex-1 relative">
        <div
          className="h-full bg-cover bg-center bg-no-repeat flex items-center text-white pl-[137px]"
          style={{
            backgroundImage:
             "url('Smilo-Care-Hero.jpeg')",
          }}
        >
              <div className="absolute rounded-xl inset-0 md:inset-20 bg-black/35 z-10" />

          
         
          <div className="flex z-20 flex-col">
            <div className="text-sm text-white/40 leading-16 tracking-wide">
              software that keeps dental 
            </div>

            <div className="text-[56px] font-medium mb-4">
              Clinics <span className="text-primary">Run</span> Smoothly
            </div>

            <p className="w-[397px] mb-[40px]">
              Smilo-Care helps dental clinics manage appointments, patients, and daily operations in one reliable system.
            </p>

            <div className="flex gap-[16px]">
              <a
                href="https://mitrevdarko.dev"
                target="_blank"
              >
                <button className="rounded-md  cursor-pointer p-[12px] bg-primary  hover:bg-primary-hover transition-colors  text-white border-white/70 font-medium text-sm">
                  Request a demo 
                </button>
              </a>

              <button className="cursor-pointer  rounded-md p-[12px] text-white/40  text-sm  font-medium">
                See how it works
              </button>
            </div>
          </div>
      </div>


          
      </div> */}