"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Who is TrailCheck for?",
    answer:
      "TrailCheck is designed for high school lacrosse players and their families who want personalized guidance through the college recruiting process. Whether you're just getting started or already speaking with college coaches, TrailCheck helps you navigate each step with confidence.",
  },
  {
    question: "When should I start the recruiting process?",
    answer:
      "Every athlete's journey is different, but starting early gives you more time to build relationships, improve your recruiting profile, and create a thoughtful plan.",
  },
  {
    question: "Does TrailCheck guarantee college recruitment?",
    answer:
      "No. No recruiting service can guarantee an outcome. TrailCheck provides personalized guidance, strategy, and support to help athletes make informed decisions and maximize their opportunities.",
  },
  {
    question: "What makes TrailCheck different from other recruiting services?",
    answer:
      "TrailCheck believes every athlete's recruiting journey is unique. Instead of a one-size-fits-all approach, every family receives personalized guidance based on the athlete's goals, strengths, academic interests, and long-term aspirations.",
  },
  {
    question: "Do you work with athletes at every position?",
    answer:
      "Yes. TrailCheck provides recruiting guidance for athletes at every position and tailors the recruiting strategy to each individual athlete.",
  },
  {
    question: "Is TrailCheck only for athletes who want to play Division I lacrosse?",
    answer:
      "No. TrailCheck helps athletes explore opportunities at every collegiate level and identify schools that are the right overall fit both academically and athletically.",
  },
  {
    question: "Will TrailCheck help me communicate with college coaches?",
    answer:
      "Yes. TrailCheck provides guidance on professional communication, recruiting timelines, and building meaningful relationships with college programs.",
  },
  {
    question: "Can parents be involved in the recruiting process?",
    answer:
      "Absolutely. Recruiting is a family decision. TrailCheck encourages parents to stay informed while helping athletes take ownership of their own recruiting journey.",
  },
  {
    question: "What if I'm just starting the recruiting process?",
    answer:
      "That's completely okay. Many athletes begin without knowing where to start. TrailCheck helps build a personalized roadmap and explains every step along the way.",
  },
  {
    question: "What if I'm already talking with college coaches?",
    answer:
      "TrailCheck can help you organize your recruiting process, evaluate opportunities, and make confident decisions as new options develop.",
  },
  {
    question: "How do I know which colleges are the right fit?",
    answer:
      "Choosing a college is about much more than lacrosse. TrailCheck helps athletes evaluate academics, campus culture, coaching philosophy, athletic opportunities, location, and long-term goals to find the best overall fit.",
  },
  {
    question: "How do I get started?",
    answer:
      "The first step is scheduling an introductory conversation. We'll learn about your goals, answer your questions, and discuss how TrailCheck can help guide your recruiting journey.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-16 bg-surface px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Learn more about the TrailCheck process and what to expect as you
            begin your recruiting journey.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-4 lg:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-gold/30 shadow-md shadow-navy/5"
                    : "border-navy/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-navy transition-colors hover:text-navy/80"
                >
                  <span className="text-base leading-snug sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-gold/10 text-gold"
                        : "bg-navy/5 text-navy"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`faq-accordion-panel ${isOpen ? "faq-accordion-open" : ""}`}
                >
                  <div className="faq-accordion-content">
                    <div className="border-t border-navy/5 px-6 pb-6 pt-4">
                      <p className="text-base leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-navy px-8 py-10 text-center sm:px-12 sm:py-12 lg:mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Still Have Questions?
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            Every recruiting journey is different. We&apos;d love to learn more
            about your goals and help you navigate the recruiting process with
            confidence.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-gold px-10 py-4 text-base font-semibold tracking-wide text-navy transition-colors hover:bg-gold-hover sm:text-lg"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
