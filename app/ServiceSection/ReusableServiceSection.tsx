"use client";

import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Smile,
  AlignCenter,
  HeartPulse,
  Shield,
  Sparkles,
} from "lucide-react";
import RevealOnScroll from "../Animations/RevealOnScroll";

const ICONS = {
  stethoscope: Stethoscope,
  smile: Smile,
  alignCenter: AlignCenter,
  heartPulse: HeartPulse,
  shield: Shield,
  sparkles: Sparkles,
} as const;

export type IconKey = keyof typeof ICONS;

export type ServiceCardItem = {
  title: string;
  description: string;
  href: string;

  // ✅ server-safe: string key instead of component
  iconKey?: IconKey;

  // optional extras for future pages
  image?: string; // show image banner at top of card
  features?: readonly string[]; // bullet list
};

type ServicesGrid6Props = {
  kicker?: string;
  headingBefore?: string;
  headingHighlight?: string;
  headingAfter?: string;

  items: readonly ServiceCardItem[]; // ideally 6 items
  showImages?: boolean;
  showFeatures?: boolean;

  sectionClassName?: string;
};

export default function ServicesGrid6({
  kicker = "Explore our full range of dental care.",
  headingBefore = "All",
  headingHighlight = "Services",
  headingAfter = "",
  items,
  showImages = true,
  showFeatures = true,
  sectionClassName = "bg-foreground py-24",
}: ServicesGrid6Props) {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:py-4">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <RevealOnScroll>
            <h2 className="text-white/50 font-medium leading-7">{kicker}</h2>
            </RevealOnScroll>

            <RevealOnScroll>
            <p className="mt-2 text-[45px] font-medium text-white">
              {headingBefore}{" "}
              <span className="text-primary">{headingHighlight}</span>{" "}
              {headingAfter}
            </p>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
            {items.slice(0, 6).map((item) => {
              const Icon = item.iconKey ? ICONS[item.iconKey] : null;

              return (
                <RevealOnScroll key={item.title}>
                  <div className=" cursor-pointer flex h-full flex-col rounded-xl border border-white/10 p-5
                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5 hover:shadow-xl hover:border-white/20">
                    {/* Optional image */}
                    {showImages && item.image ? (
                      <div
                        className="mb-6 h-40 w-full rounded-lg bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    ) : null}
                  <RevealOnScroll>
                    <dt className="text-lg font-medium text-white">
                      {Icon ? (
                        <div className="mb-3 flex h-5 w-5 items-center justify-center rounded-lg bg-transparent shadow-sm">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                      ) : null}

                      {item.title}
                    </dt>
                     </RevealOnScroll>

                    
                    <dd className="mt-3 flex flex-auto flex-col text-sm leading-6 text-white/50">
                     <p className="flex-auto">{item.description}</p> 

                      {/* Optional features */}
                      <RevealOnScroll>
                      {showFeatures && item.features?.length ? (
                        <ul className="mt-6 space-y-0 text-sm text-white/50">
                          {item.features.slice(0, 3).map((f, idx) => (
                            <li key={idx}>• {f}</li>
                          ))}
                        </ul>
                      ) : null}
                     </RevealOnScroll>
                     
                    </dd>
                  
                  </div>
                </RevealOnScroll>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
