
// components/blog/BlogArticle.tsx

export default function BlogArticle() {
  return (
    <article className=" text-[17px] bg-[#f8f9fb] leading-relaxed text-foreground  pt-16 pb-16 mx-auto">

      <div className=" max-w-3xl   px-6 space-y-16 leading-relaxed text-foreground text-[17px]">
      {/* Section 1 */}
      <section className="space-y-4 ">
        <header className="text-start">
          <h1 className="text-3xl font-semibold text-foreground mb-6">Dental treatment options</h1>
        </header>
        <div className="space-y-1">
          <h2 className="text-md font-bold text-foreground">
          Every smile is different, your treatment should be too
          </h2>
      <div className=" text-md space-y-1">
        <p className="leading-normal text-[15px]  text-foreground/50">
          At Smilo-Care, we understand that dental treatment isn’t one-size-fits-all. That’s why we offer a range of options tailored to your unique needs and goals. Whether you’re looking for a simple cleaning, a cosmetic enhancement, or a restorative procedure, we have solutions designed to fit your lifestyle and budget.
        </p>

        <p className="pt-6 md:pt-6 font-bold">
          Before recommending anything, we focus on three things:
        </p>

        <ul className="space-y-1 pl-5 text-foreground/50 text-[15px] leading-tight">
          <li className="list-disc">What problem are you experiencing right now?</li>
          <li className="list-disc">What outcome are you hoping for?</li>
          <li className="list-disc">What is the most effective and sustainable solution</li>
        </ul>

        <p className="text-[15px] text-foreground/50">
          From preventive care to advanced procedures, every option we offer has a purpose — to restore function, improve aesthetics, and protect your smile for the future.
        </p>
        </div>

        <div className=" text-md space-y-1">
        <p className="leading-normal text-[15px]  text-foreground/50">
          At Smilo-Care, we understand that dental treatment isn’t one-size-fits-all. That’s why we offer a range of options tailored to your unique needs and goals. Whether you’re looking for a simple cleaning, a cosmetic enhancement, or a restorative procedure, we have solutions designed to fit your lifestyle and budget.
        </p>

        <p className="pt-6 md:pt-6 font-bold">
          Before any treatment starts, we make sure:
        </p>

        <ul className="space-y-1 pl-5 text-foreground/50 text-[15px] leading-tight">
          <li className="list-disc">You fully understand what is happening and why</li>
          <li className="list-disc">All questions and concerns are addressed and answered without pressure</li>
          <li className="list-disc">You feel comfortable and confident in your treatment plan</li>
        </ul>

        <p className="text-[15px] text-foreground/50">
        Dental care should feel calm, transparent, and considered — never rushed or
    uncertain.
        </p>
        </div>
        </div>
      </section>

      
      </div>
    </article>
  );
}
