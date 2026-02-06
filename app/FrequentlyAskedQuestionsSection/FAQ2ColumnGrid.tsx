"use client";

import React, { useMemo, useState } from "react";
import RevealOnScroll from "../Animations/RevealOnScroll";

export type FaqItem = {
  id?: string;
  question: React.ReactNode;
  answer: React.ReactNode;
};

export type FaqTwoColsProps = {
  items: FaqItem[];

  titleBefore?: React.ReactNode;
  titleHighlight?: React.ReactNode;
  titleAfter?: React.ReactNode;
  description?: React.ReactNode;

  allowMultipleOpen?: boolean;
  defaultOpenIndexes?: number[];
  columnsMd?: 1 | 2;

  className?: string;
  cardClassName?: string;
  highlightClassName?: string;
};

export default function FaqTwoCols({
  items,
  titleBefore,
  titleHighlight,
  titleAfter,
  description,
  allowMultipleOpen = false,
  defaultOpenIndexes = [],
  columnsMd = 2,
  className = "w-full flex flex-col bg-[#f9f8fb] items-center justify-center py-24 px-4",
  cardClassName = "text-left bg-transparent p-3.5 rounded-lg cursor-pointer transition-all duration-300 border border-slate-200 hover:bg-white/50",
  highlightClassName = "text-primary",
}: FaqTwoColsProps) {
  // normalize defaults (dedupe + keep only valid indexes)
  const defaultSet = useMemo(() => {
    const valid = defaultOpenIndexes.filter((i) => i >= 0 && i < items.length);
    return new Set(valid);
  }, [defaultOpenIndexes, items.length]);

  const [openSet, setOpenSet] = useState<Set<number>>(defaultSet);

  const isOpen = (i: number) => openSet.has(i);

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);

      if (allowMultipleOpen) {
        next.has(i) ? next.delete(i) : next.add(i);
        return next;
      }

      // single-open mode
      if (next.has(i)) return new Set();
      return new Set([i]);
    });
  };

  const showHeader =
    Boolean(titleBefore) || Boolean(titleHighlight) || Boolean(titleAfter) || Boolean(description);

  return (
    <section className={className}>
      <div className="w-full max-w-6xl">
        {showHeader && (
          <RevealOnScroll>
          <div className="mb-10">
            {(titleBefore || titleHighlight || titleAfter) && (
              <RevealOnScroll>
              <h2 className="text-[45px] font-medium text-foreground text-center md:text-start mb-4">
                {titleBefore}{" "}
                <span  className={highlightClassName}>{titleHighlight}</span>{" "}
                {titleAfter}
              </h2>
              </RevealOnScroll>
            )}
            <RevealOnScroll>
            {description && (
              <p className="text-foreground/50 text-sm text-center md:text-start mx-auto md:mx-0">
                {description}
              </p>
            )}
            </RevealOnScroll>
          </div>
          </RevealOnScroll>
        )}

        <div className=" w-full  md:w-1/2 mx-auto md:mx-0">
        <div
          className={[
            "grid grid-cols-1  gap-x-8 gap-y-4",
            columnsMd === 2 ? "md:grid-cols-1" : "md:grid-cols-1",
          ].join(" ")}
        >
          {items.map((faq, i) => {
            const open = isOpen(i);
            const key = faq.id ?? (typeof faq.question === "string" ? faq.question : i);

            return (
              <button
                key={String(key)}
                type="button"
                onClick={() => toggle(i)}
                className={[cardClassName, open ? "row-span-0" : ""].join(" ")}
                aria-expanded={open}
              >
                <div className="flex items-center justify-between gap-4">
                  <RevealOnScroll>
                  <span className="text-sm font-semibold text-foreground">
                    {faq.question}
                  </span>
                  </RevealOnScroll>
                  <RevealOnScroll>
                  <div
                    className={[
                      "text-primary p-1 rounded transition-colors",
                      open ? "bg-foreground text-primary" : "",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {open ? (
                      <RevealOnScroll>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      </RevealOnScroll>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    )}
                  </div>
                  </RevealOnScroll>
                </div>

                <div
                  className={[
                    "grid transition-all duration-300",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                 
                  <div className="overflow-hidden">
                    <RevealOnScroll>
                    <div className="text-sm text-foreground/50 leading-relaxed mt-4">
                      {faq.answer}
                    </div>
                    </RevealOnScroll>
                  </div>
                 
                </div>
              </button>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}

