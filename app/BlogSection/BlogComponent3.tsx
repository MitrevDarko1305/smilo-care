// components/blog/BlogArticleProcess.tsx

export default function BlogArticleProcess() {
  return (
    <article className=" text-[17px] bg-[#f8f9fb] leading-relaxed text-foreground  pt-16 pb-16 mx-auto">

      <div className=" max-w-3xl   px-6 space-y-16 leading-relaxed text-foreground text-[17px]">
      {/* Section 1 */}
      <section className="space-y-4 ">
        <header className="text-start">
          <h1 className="text-3xl font-semibold text-foreground mb-6">Your treatment journey</h1>
        </header>
        <div className="space-y-1">
          <h2 className="text-md font-bold text-foreground">
          Clear steps. No surprises. Support every step of the way.
          </h2>
      <div className=" text-md space-y-1">
        <p className="leading-normal text-[15px]  text-foreground/50">
           Beginning dental treatment can feel uncertain — especially if you don’t know
            what to expect. Our approach is designed to make the journey clear, structured,
          and comfortable from the very first visit.
        </p>

        <p className="pt-6 md:pt-6 font-bold">
         Your treatment journey typically includes:
        </p>

        <ul className="space-y-1 pl-5 text-foreground/50 text-[15px] leading-tight">
          <li className="list-disc">Initial consultation and assessment</li>
          <li className="list-disc">Clear explanation of findings and options</li>
          <li className="list-disc">A personalized treatment plan</li>
          <li className="list-disc">Carefully paced treatment and follow-up</li>
        </ul>

       
        </div>

        <div className=" text-md space-y-1">
        <p className="leading-normal text-[15px]  text-foreground/50">
         You are never rushed into decisions, and nothing moves forward without your
         full understanding and agreement.
        </p>

        <p className="pt-6 md:pt-6 font-bold">
          Throughout the process, we make sure:
        </p>

        <ul className="space-y-1 pl-5 text-foreground/50 text-[15px] leading-tight">
          <li className="list-disc">You always know what is happening and what comes next</li>
          <li className="list-disc">Questions are welcomed and answered clearly</li>
          <li className="list-disc">Your comfort and confidence remain a priority</li>
        </ul>

        <p className="text-[15px] text-foreground/50">
        A well-guided treatment journey builds trust, reduces anxiety, and leads to
        better long-term outcomes — both clinically and personally.
        </p>
        </div>
        </div>
      </section>

      
      </div>
    </article>
 
  );
}