"use client";

import React, { useState } from "react";
import Link from "next/link"
import RevealOnScroll from "../Animations/RevealOnScroll";


export default function FaqImage() {
  const faqs = [
    {
      question: "How do we get started with Smilo-Care?",
      answer:
        "Smilo Care helps you take the next step in your care journey by making the process clear and straightforward. From your first contact, we guide you through what to expect and help connect you with the right support.",
    },
    {
      question: "How do I book an appointment or get in touch?",
      answer:
        "You can contact us directly through our website. Once you reach out, our team will follow up to help you with the next steps and answer any questions you may have.",
    },
    {
      question: "How quickly will I hear back?",
      answer: "We aim to respond within 24 hours. Our team is here to make sure you’re not left waiting and that your questions are handled promptly.",
    },
    {
      question: "Is my information kept private?",
      answer:
        "Yes. We take privacy seriously and handle all personal information with care. Your details are kept confidential and used only to support your care.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-center  gap-8 px-4 md:px-0 py-24">
      <RevealOnScroll>
      <img
        className="max-w-lg w-full rounded-xl h-auto"
        src="/Smilo-FAQ.png"
        alt="FAQ illustration"
      />
      </RevealOnScroll>
      <RevealOnScroll>
      <div>
       <RevealOnScroll> <p className="text-white text-sm font-medium">FAQ&apos;s</p> </RevealOnScroll>
        <RevealOnScroll> <h1 className=" mt-2 text-[32px] mix-w-0 text-foreground font-medium tracking-tight">Answers to your most common questions</h1> </RevealOnScroll>
       <RevealOnScroll>
        <p className=" text-foreground/50 mt-2 pb-4">
         Everything you need to know before getting started
        </p>
        </RevealOnScroll>

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-slate-200 py-4 cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <RevealOnScroll>
                <div className="flex items-center justify-between">
                  <RevealOnScroll>
                  <h3 className="text-foreground/50 font-medium">{faq.question}</h3>
                  </RevealOnScroll>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#59770dff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                    </RevealOnScroll>
                <p
                  className={[
                    "text-sm text-foreground transition-all duration-500 ease-in-out max-w-md",
                    isOpen
                      ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                      : "opacity-0 max-h-0 -translate-y-2 pt-0",
                  ].join(" ")}
                >
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>

          <RevealOnScroll>
        <div className="text-sm text-foreground/50 mt-10">
        Still got questions left?{" "}
        <Link
         href="/FAQ" target="_blank"
         className="font-medium text-primary hover:text-foreground ml-1  underline-offset-4 hover:no-underline"
        >
        Contact us
        </Link>
        </div>
          </RevealOnScroll>
      </div>
      </RevealOnScroll>
    </div>
  );
}