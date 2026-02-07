// components/blog/BlogArticleClarity.tsx

export default function BlogArticleClarity() {
  return (
    <article className=" text-[17px] bg-[#f8f9fb] leading-relaxed text-foreground  py-16 mx-auto">

      <div className=" max-w-3xl   px-6 space-y-16 leading-relaxed text-foreground text-[17px]">
      {/* Section 1 */}
      <section className="space-y-4 ">
        <header className="text-start">
          <h1 className="text-2xl font-bold text-foreground mb-6">Aftercare & Recovery</h1>
        </header>
        <div className="space-y-1">
          <h2 className="text-md font-semibold text-foreground">
          Ongoing care that supports healing and long-term oral health
          </h2>
      <div className=" text-md space-y-1">
        <p className="leading-normal text-[15px]  text-foreground/50">
          Treatment doesn’t end when you leave the chair. Proper aftercare plays a key
          role in healing, comfort, and the long-term success of your results.
        </p>

        <p className="pt-6 md:pt-6 font-bold">
          After your treatment, we focus on:
        </p>

        <ul className="space-y-1 pl-5 text-foreground/50 text-[15px] leading-tight">
          <li className="list-disc">Clear aftercare instructions tailored to your procedure</li>
          <li className="list-disc">Managing comfort and supporting proper healing</li>
          <li className="list-disc">Preventing complications via proactive guidance</li>
        </ul>

        <p className="text-[15px] text-foreground/50">
           You’ll know what to expect during recovery, what’s normal, and when to reach
            out if something  <br />  doesn’t feel right.
        </p>
        </div>

        <div className=" text-md space-y-1">
       

        <p className="pt-6 md:pt-6 font-bold">
          Our aftercare approach ensures:
        </p>

        <ul className="space-y-1 pl-5 text-foreground/50 text-[15px] leading-tight">
          <li className="list-disc">You feel supported even after treatment is complete</li>
          <li className="list-disc">Your results are protected for the long-term</li>
        </ul>

        <p className="text-[15px] text-foreground/50">
       Thoughtful aftercare helps ensure your treatment heals well, feels right, and
  continues to support a healthy, confident smile.
        </p>
        </div>
        </div>
      </section>

      
      </div>
    </article>
  );
}