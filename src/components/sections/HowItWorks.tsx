"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function ConsultationIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m0 0H6.75m2.25 0h2.25M9 15v2.25m0-2.25h2.25M15 6.75V9m0 0h2.25M15 9v6.75m0-2.25h2.25M15 15h2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function JourneyIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6.75v8.25m.503-13.5h3.375c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125H6.375c-.621 0-1.125-.504-1.125-1.125V9.75c0-.621.504-1.125 1.125-1.125h3.375m0 0V6.75A2.25 2.25 0 0111.25 4.5h1.5a2.25 2.25 0 012.25 2.25V8.25m-6 0h6" />
    </svg>
  );
}

function FitIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
    </svg>
  );
}

const steps: Step[] = [
  {
    title: "Schedule a Consultation",
    description:
      "Meet with TrailCheck to discuss your goals, academic interests, athletic aspirations, and where you currently are in the recruiting process.",
    icon: <ConsultationIcon />,
  },
  {
    title: "Build Your Strategy",
    description:
      "Develop a personalized recruiting plan based on your strengths, timeline, target schools, and long-term goals.",
    icon: <StrategyIcon />,
  },
  {
    title: "Navigate the Journey",
    description:
      "Receive ongoing guidance as you communicate with coaches, evaluate opportunities, and make informed recruiting decisions.",
    icon: <JourneyIcon />,
  },
  {
    title: "Find the Right Fit",
    description:
      "Confidently choose the college that best aligns with your athletic, academic, and personal goals.",
    icon: <FitIcon />,
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function HowItWorks() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 border-y border-navy/5 bg-white px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Process
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Every athlete&apos;s recruiting journey is unique, but our process is
            designed to provide clarity, direction, and personalized support
            every step of the way.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-16 lg:mt-20 ${visible ? "scroll-reveal-visible" : "scroll-reveal-hidden"}`}
        >
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div
                className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
                aria-hidden="true"
              />

              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="scroll-reveal-item relative flex flex-col items-center text-center"
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/30 bg-white text-navy shadow-sm transition-colors duration-300">
                      {step.icon}
                    </div>
                    <span className="mt-4 text-xs font-semibold tracking-widest text-gold">
                      Step {index + 1}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden">
            <div className="relative flex flex-col gap-12">
              <div
                className="absolute bottom-0 left-8 top-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent"
                aria-hidden="true"
              />

              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="scroll-reveal-item relative flex gap-6 pl-2"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold/30 bg-white text-navy shadow-sm">
                    {step.icon}
                  </div>
                  <div className="pt-1">
                    <span className="text-xs font-semibold tracking-widest text-gold">
                      Step {index + 1}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
