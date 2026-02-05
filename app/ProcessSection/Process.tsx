import RevealOnScroll from "../Animations/RevealOnScroll";

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20 sm:py-24">
      <RevealOnScroll>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <RevealOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll>
          <span className="inline-flex items-center rounded-full border border-foreground/20 px-3 py-1 text-xs  dark:text-foreground/60">
            process
          </span>
          </RevealOnScroll>

          <RevealOnScroll>
          <h2 className="mt-2 text-[45px] font-medium mb-4  tracking-tight text-foreground sm:text-4xl">
            How it works 
          </h2>
          </RevealOnScroll>

          <RevealOnScroll>
          <p className="mt-4  text-foreground/50">
           Three simple steps to get your perfect smile.
          </p>
          </RevealOnScroll>
        </div>
        </RevealOnScroll>

        {/* Steps */}
        <RevealOnScroll>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Step 1 */}
          <RevealOnScroll>
          <div className="rounded-2xl border border-foreground p-6  dark:bg-foreground">
            <RevealOnScroll>
            <div className="flex items-start gap-4">
              <RevealOnScroll>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border  bg-primary text-sm text-white font-medium dark:border-primary">
                01
              </div>
              </RevealOnScroll>
              <RevealOnScroll>
              <div>
                <RevealOnScroll>
                <h3 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                  Get in touch
                </h3>
                </RevealOnScroll>
                <RevealOnScroll>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  Reach out and tell us what medical threatment you looking for.
                </p>
                </RevealOnScroll>
              </div>
              </RevealOnScroll>
            </div>
            </RevealOnScroll>
          </div>
          </RevealOnScroll>

          {/* Step 2 */}
          <RevealOnScroll>
          <div className="rounded-2xl  p-6 border border-foreground p-6  dark:bg-foreground">
            <RevealOnScroll>
            <div className="flex items-start gap-4">

              <RevealOnScroll>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary bg-primary text-sm text-white font-medium  dark:bg-primary">
                02
              </div>
              </RevealOnScroll>
              <RevealOnScroll>
              <div>

                <RevealOnScroll>
                <h3 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                  We prepare a plan
                </h3>
                </RevealOnScroll>
                <RevealOnScroll>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  We define the best approach based on your needs.
                </p>
                </RevealOnScroll>
              </div>
              </RevealOnScroll>
            </div>
            </RevealOnScroll>
          </div>
          </RevealOnScroll>

          {/* Step 3 */}
          <RevealOnScroll>
          <div className="rounded-2xl p-6 border border-foreground p-6  dark:bg-foreground">
            <RevealOnScroll>
            <div className="flex items-start gap-4">
              <RevealOnScroll>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary bg-primary text-sm font-medium  text-white">
                03
              </div>
              </RevealOnScroll>
              <RevealOnScroll>
              <div>
                <RevealOnScroll>
                <h3 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                  We deliver
                </h3>
                </RevealOnScroll>
                <RevealOnScroll>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  Execution, follow-up, and ongoing support if needed.
                </p>
                </RevealOnScroll>
              </div>
              </RevealOnScroll>
            </div>
            </RevealOnScroll>
          </div>
          </RevealOnScroll>
        </div>
        </RevealOnScroll>
      </div>
      </RevealOnScroll>
    </section>
  );
}