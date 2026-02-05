"use client";

export function HeroFullBackground() {
  return (
    <section className="relative h-screen">
      <div
        className="h-full bg-cover bg-center bg-no-repeat flex items-center  text-white pl-[137px]"
        style={{
          backgroundImage: "url('Smilo-Care-hero3.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="flex z-20 flex-col">
          <div className="text-sm text-white/40 tracking-wide">
            trusted dental clinic
          </div>

          <div className="text-[45px] font-medium mb-4 text-white">
            Smilo-Care — <span className="text-primary">Beautiful</span> Smiles
          </div>

          <p className="w-[397px] mb-[40px] text-sm text-white">
            Smilo-Care helps dental clinics manage appointments, patients,
            and daily operations in one reliable system.
          </p>

          <div className="flex gap-[16px]">
            <button className="rounded-md p-[12px] cursor-pointer bg-primary hover:bg-foreground transition-colors text-white text-sm font-medium">
              Book Appointment
            </button>

            <button className="rounded-md p-[12px] cursor-pointer text-white/60 hover:text-white text-sm font-medium">
              See how it works
            </button>
          </div>
        </div>
      </div>

      {/* KEEP THIS — Navbar relies on it */}
      <div
        id="hero-sentinel"
        className="absolute bottom-0 left-0 h-px w-full"
      />
    </section>
  );
}



{/*
  text-[15px] px-[20px] py-[20px] bg-white flex justify-between items-center tracking-wide 
  
   {/* Navbar */}
   
    