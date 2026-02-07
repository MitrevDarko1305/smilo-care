import React from "react";
import RevealOnScroll from "../Animations/RevealOnScroll";

interface PartnerCTAProps {
  title?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  imageSrc?: string;
  imageAlt?: string;
}

const PartnerCTA: React.FC<PartnerCTAProps> = ({
  title = "Ready to take the next step toward a healtier smile?",
  description = "Clear guidance, trusted care, and a team ready to help at every step",
  primaryAction = {
    label: "Book your appointment",
    href: "#",
  },
  secondaryAction = {
    label: "Get in touch",
    href: "#",
  },
  imageSrc = "/Smilo-CTA.avif",
  imageAlt = "Dental-Clinic-Screenshot",
}) => {
  return (
   <section className="relative overflow-hidden bg-foreground py-8 sm:py-24">
  {/* Background glow */}
  <div
    aria-hidden="true"
    className="absolute right-0 top-0 -z-10 aspect-square w-full max-w-3xl translate-x-3/4 rounded-full bg-black blur-[10rem] lg:-top-[40rem] lg:left-1/2 lg:-translate-x-1/2"
  />

  <div className="mx-auto max-w-full px-6 lg:px-8">
    <div className="relative lg:flex lg:items-center lg:gap-x-12">
      
      {/* Text content */}
      <RevealOnScroll>
      <div className="max-w-md lg:flex-auto py-16 lg:py-12 text-center lg:text-left lg:-translate-y-12">
        <RevealOnScroll>
        <h2 className="tracking-tight leading-tight text-white text-[45px] font-medium mb-4  sm:text-4xl">
          {title}
        </h2>
        </RevealOnScroll>
        <RevealOnScroll>
        <p className="mt-6 text-base text-gray-300">
          {description}
        </p>
        </RevealOnScroll>

        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
         <RevealOnScroll>
          <a
            href={primaryAction.href}
            className="rounded-md bg-primary px-3.5 py-4 text-sm font-semibold text-white hover:bg-foreground"
          >
            {primaryAction.label}
          </a>
          </RevealOnScroll>
          <RevealOnScroll>
          <a
            href={secondaryAction.href}
            className="text-sm font-semibold text-white/40 bg-transparent hover:bg-foreground hover:text-white leading-6 text-white"
          >
            {secondaryAction.label}
          </a>
          </RevealOnScroll>
        </div>
      </div>
      </RevealOnScroll>

      {/* Image */}
      <div className="relative mt-16  lg:mt-0 lg:flex-1 h-80 lg:h-auto lg:-translate-y-[9.5rem] translate-x-[-14rem] translate-y-[-2rem  md:translate-x-0 md:translate-y-0] ">
       <RevealOnScroll>
        <img
          src={imageSrc}
          alt={imageAlt}
          width={1920}
          height={1139}
          className="absolute left-0 top-0 w-[62rem] max-w-none rounded-2xl bg-white/5 ring-1 ring-white/10 lg:top-14"
        />
        </RevealOnScroll>
      </div>

    </div>
  </div>
</section>

  );
};

export default PartnerCTA;