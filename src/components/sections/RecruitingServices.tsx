"use client";

import { useEffect, useRef, useState } from "react";

type Service = {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  icon: React.ReactNode;
};

function StrategyIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  );
}

const services: Service[] = [
  {
    title: "Recruiting Evaluation & Strategy",
    description:
      "Understand where you stand in the recruiting process and create a personalized plan to reach your college goals.",
    features: [
      "Player evaluation",
      "Recruiting timeline guidance",
      "Target school strategy",
      "Position-specific feedback",
      "Next-step recommendations",
    ],
    buttonText: "Learn More",
    icon: <StrategyIcon />,
  },
  {
    title: "Player Profile Development",
    description:
      "Build a professional recruiting presence that helps coaches understand who you are as a student-athlete.",
    features: [
      "Recruiting profile creation",
      "Highlight video guidance",
      "Athletic and academic presentation",
      "Player story development",
      "Resume/profile optimization",
    ],
    buttonText: "Learn More",
    icon: <ProfileIcon />,
  },
  {
    title: "College Recruiting Support",
    description:
      "Get guidance throughout the recruiting journey with support communicating with programs and managing the process.",
    features: [
      "Coach communication strategy",
      "School research",
      "Recruiting conversations",
      "Visit preparation",
      "Decision support",
    ],
    buttonText: "Start Your Recruiting Journey",
    icon: <SupportIcon />,
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
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function RecruitingServices() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="scroll-mt-16 bg-surface px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Our Recruiting Services
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Helping lacrosse players maximize their opportunities and navigate
            the path to playing at the next level.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-3 ${
            visible ? "scroll-reveal-visible" : "scroll-reveal-hidden"
          }`}
        >
          {services.map((service, index) => (
            <article
              key={service.title}
              className="scroll-reveal-item group flex flex-col rounded-2xl border border-navy/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-navy">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {service.description}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-navy/80"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${
                  service.buttonText === "Start Your Recruiting Journey"
                    ? "bg-gold text-navy hover:bg-gold-hover hover:shadow-md hover:shadow-gold/20"
                    : "border-2 border-navy text-navy hover:border-gold hover:bg-gold hover:text-navy"
                }`}
              >
                {service.buttonText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
