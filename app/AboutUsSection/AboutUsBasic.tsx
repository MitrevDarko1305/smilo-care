import RevealOnScroll from "../Animations/RevealOnScroll";

export default function AboutSection() {
  return (
    <section id="about" className="bg-foreground py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <RevealOnScroll>
          <p className="text-sm font-medium text-white/50">
            Our approach
          </p>
          </RevealOnScroll>
          <RevealOnScroll>
          <h2 className="mt-3 text-[45px] font-medium  text-white  sm:text-4xl">
            About Smilo-Care
          </h2>
          </RevealOnScroll>
          <RevealOnScroll>
          <p className="mt-5 text-md leading-relaxed text-white/50">
            Our approach to dental care is built on trust, transparency, and <br /> people who take the time to truly care for their patients.
          </p>
          </RevealOnScroll>
        </div>

        {/* Main Content */}
        <div className="mt-14 rounded-2xl border border-white/10 
                      bg-transparent p-8 shadow-sm   sm:p-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <RevealOnScroll>
            <div>
              <RevealOnScroll>
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                Our Practice
              </h3>
              </RevealOnScroll>

              <div className="mt-6 space-y-4 text-white/50">
              <RevealOnScroll>
                <p className="text-md leading-relaxed">
                  Founded with a clear focus on patient care, Smilo-Care is built around experienced professionals, transparent communication, and reliable standards.
                </p>
                </RevealOnScroll>

                <RevealOnScroll>
                <p className="text-md leading-relaxed">
                  We believe that great dental care goes beyond procedures – its about listening, explaining clearly, and creating an environment
                  where patients feel comfortable and confident in their care.
                </p>
                </RevealOnScroll>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { value: "10+", label: " Years clinical experience" },
                  { value: "5000+", label: "Patients treated" },
                  { value: "", label: "Patient first care" },
                  { value: "", label: "Experienced Team" },
                ].map((stat) => (
                  <RevealOnScroll
                   key={stat.label}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-center dark:border-neutral-800 dark:bg-neutral-900/40"
                  >
                  <div>
                    <div className="text-3xl font-semibold text-neutral-950 dark:text-neutral-50">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                      {stat.label}
                    </div>
                  </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
            </RevealOnScroll>

            {/* Image Placeholder */}
            <RevealOnScroll>
            <div className="overflow-hidden  border border-white/10 bg-[#f5f5f5]">
              
                <div className="relative h-[350px]">
                    <img src="/AboutUs-Image.webp" alt="team-image" className="w-full h-full object-cover"/>
                </div>
             
            </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}