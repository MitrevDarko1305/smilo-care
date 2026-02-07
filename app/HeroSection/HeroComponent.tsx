"use client";

type HeroButton = {
  label: string;
  href?: string; // use if you navigate
  onClick?: () => void; // use if you trigger modal/scroll
  variant?: "primary" | "secondary";
};

type HeroFullBackgroundProps = {
  backgroundImage: string;
  kicker?: string;
  titleBefore: string;
  highlight?: string; // optional highlighted word/phrase
  titleAfter:string;
  description?: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
};

export function HeroFullBackground({
  backgroundImage,
  kicker = "trusted dental clinic",
  titleBefore,
  highlight = "Great Smiles",
  titleAfter,
  description,
  primaryButton,
  secondaryButton,
}: HeroFullBackgroundProps) {
  const renderButton = (btn?: HeroButton) => {
    if (!btn) return null;

    const base =
      "rounded-md p-[12px] cursor-pointer transition-colors text-sm font-medium";
    const primary =
      "bg-primary hover:bg-foreground text-white";
    const secondary =
      "text-white/60 hover:text-white";

    const className =
      `${base} ${btn.variant === "secondary" ? secondary : primary}`;

    // Link button
    if (btn.href) {
      return (
        <a href={btn.href} className={className}>
          {btn.label}
        </a>
      );
    }

    // Action button
    return (
      <button onClick={btn.onClick} className={className}>
        {btn.label}
      </button>
    );
  };

  return (
    <section className="relative h-screen">
      <div
        className="h-full bg-cover bg-center bg-no-repeat flex items-center text-white pr-[5%] md:pr-[5%] md:pl-[5%] pl-[5%]"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="flex z-20 flex-col">
          {kicker && (
            <div className="text-sm text-white/40 tracking-wide">
              {kicker}
            </div>
          )}

          <div className="text-[45px] font-medium mb-4 text-white">
          {titleBefore}
        {highlight && (
          <span className="text-primary"> {highlight} </span>
        )}
        {titleAfter}
        </div>


          {description && (
            <p className=" w-full md:max-w-[397px] mb-[40px] text-sm text-white">
              {description}
            </p>
          )}

          <div className="flex gap-[16px]">
            {renderButton(
              primaryButton
                ? { ...primaryButton, variant: "primary" }
                : undefined
            )}
            {renderButton(
              secondaryButton
                ? { ...secondaryButton, variant: "secondary" }
                : undefined
            )}
          </div>
        </div>
      </div>

      {/* KEEP THIS — Navbar relies on it */}
      <div id="hero-sentinel" className="absolute bottom-0 left-0 h-px w-full" />
    </section>
  );
}


   
    