"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const credentials = [
  {
    value: "20+",
    label: "Years coaching at the college, high school, and club levels",
  },
  {
    value: "100+",
    label: "Athletes guided to collegiate lacrosse programs at every level",
  },
] as const;

const values = [
  {
    title: "Personalized guidance",
    description:
      "Every recruiting journey is different. TrailCheck builds strategy around each athlete's goals, strengths, and academic interests — not a one-size-fits-all playbook.",
  },
  {
    title: "Honest, experienced perspective",
    description:
      "With decades on the field and in the coaching ranks, Kevin brings real-world insight into what college programs look for and how families can navigate the process with clarity.",
  },
  {
    title: "The right fit matters",
    description:
      "TrailCheck helps athletes explore opportunities at every collegiate level and find schools that are the right fit academically, athletically, and personally.",
  },
] as const;

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

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="about"
      className="scroll-mt-16 border-y border-navy/5 bg-surface px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Built on Experience. Focused on Your Path.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            TrailCheck Lacrosse was founded to give student-athletes and
            families trusted, personalized guidance through the college recruiting
            process.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-16 lg:mt-20 ${
            visible ? "scroll-reveal-visible" : "scroll-reveal-hidden"
          }`}
        >
          <div className="scroll-reveal-item grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col">
              <div className="flex items-center justify-center lg:justify-start">
                <Image
                  src="/images/about/trailcheck-logo.png"
                  alt="TrailCheck Lacrosse"
                  width={192}
                  height={192}
                  unoptimized
                  className="h-28 w-28 object-contain sm:h-32 sm:w-32"
                />
              </div>
              <div className="mt-6 text-center lg:text-left">
                <h3 className="text-2xl font-bold tracking-tight text-navy">
                  Kevin Michaud
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                  Founder, TrailCheck Lacrosse
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Kevin Michaud brings more than two decades of lacrosse experience
                to every family he works with. A Le Moyne College lacrosse alum,
                Kevin has coached at the college, high school, and club levels —
                including two national championship teams at Le Moyne — and has
                helped guide 100+ athletes to collegiate lacrosse programs at
                every level.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                TrailCheck was built on that same persistence and preparation
                that defines the game. Recruiting is not a spectator sport, and
                families deserve a guide who understands the trail from every
                angle — as a player, a coach, and a mentor.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                Today, Kevin works directly with high school lacrosse players and
                their families to build recruiting strategy, strengthen
                communication with college programs, and find the right college
                fit at every level.
              </p>
            </div>
          </div>

          <div className="scroll-reveal-item mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:gap-8">
            {credentials.map((item, index) => (
              <div
                key={item.label}
                className="rounded-2xl border border-navy/10 bg-white p-8 text-center transition-all duration-300 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <p className="text-4xl font-bold tracking-tight text-navy">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="scroll-reveal-item mt-16 lg:mt-20">
            <h3 className="text-center text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              What TrailCheck Stands For
            </h3>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className="rounded-2xl border border-navy/10 bg-white p-8"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <h4 className="text-lg font-bold tracking-tight text-navy">
                    {value.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="scroll-reveal-item mx-auto mt-16 max-w-2xl rounded-2xl bg-navy px-8 py-10 text-center sm:px-12 lg:mt-20">
            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              No recruiting service can guarantee an outcome. TrailCheck
              provides honest strategy, personalized support, and the experience
              families need to make informed decisions every step of the way.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-gold px-10 py-4 text-base font-semibold tracking-wide text-navy transition-colors hover:bg-gold-hover"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
