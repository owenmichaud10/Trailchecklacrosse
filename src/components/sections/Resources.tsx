"use client";

import { useEffect, useRef, useState } from "react";

type Resource = {
  title: string;
  description: string;
  includes: string[];
  buttonText: string;
  icon: React.ReactNode;
};

function RoadmapIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.513 3.517c.354.166.75.258 1.153.258 1.183 0 2.14-.967 2.14-2.16 0-.75-.38-1.41-1.003-1.8a2.25 2.25 0 11-3.75 0 2.25 2.25 0 01-1.003 1.8c-.623.39-1.003 1.05-1.003 1.8 0 1.193.957 2.16 2.14 2.16.403 0 .799-.092 1.153-.258m-9.513 3.517c.354.166.75.258 1.153.258 1.183 0 2.14-.967 2.14-2.16 0-.75-.38-1.41-1.003-1.8a2.25 2.25 0 11-3.75 0 2.25 2.25 0 01-1.003 1.8c-.623.39-1.003 1.05-1.003 1.8 0 1.193.957 2.16 2.14 2.16.403 0 .799-.092 1.153-.258" />
    </svg>
  );
}

function CommunicationIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function SelectionIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  );
}

function InsightsIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

const resources: Resource[] = [
  {
    title: "Recruiting Roadmap",
    description:
      "A step-by-step guide showing athletes and families what to focus on throughout each stage of the recruiting process.",
    includes: [
      "Freshman recruiting priorities",
      "Sophomore recruiting checklist",
      "Junior year recruiting strategy",
      "Senior year decision process",
      "Important recruiting milestones",
    ],
    buttonText: "Get Personalized Guidance",
    icon: <RoadmapIcon />,
  },
  {
    title: "College Coach Communication",
    description:
      "Learn how to effectively communicate with college coaches and create meaningful recruiting relationships.",
    includes: [
      "Email templates",
      "Coach outreach strategy",
      "Follow-up timing",
      "What coaches look for",
      "Common communication mistakes",
    ],
    buttonText: "Get Personalized Guidance",
    icon: <CommunicationIcon />,
  },
  {
    title: "Recruiting Profile Guide",
    description:
      "Build a recruiting profile that presents your academic, athletic, and personal strengths to college programs.",
    includes: [
      "Highlight video checklist",
      "Player bio template",
      "Academic information",
      "Athletic achievements",
      "What makes a player stand out",
    ],
    buttonText: "Get Personalized Guidance",
    icon: <ProfileIcon />,
  },
  {
    title: "College Selection Resources",
    description:
      "Make informed decisions when evaluating schools and finding the right college fit.",
    includes: [
      "School research checklist",
      "Questions to ask coaches",
      "Campus visit preparation",
      "Athletic vs academic fit",
      "Scholarship and roster considerations",
    ],
    buttonText: "Get Personalized Guidance",
    icon: <SelectionIcon />,
  },
  {
    title: "Recruiting Insights",
    description:
      "Stay informed with expert advice, recruiting trends, and information about the college lacrosse landscape.",
    includes: [
      "Recruiting updates",
      "Coach perspectives",
      "Recruiting landscape insights",
      "Recruiting myths explained",
      "Parent and athlete resources",
    ],
    buttonText: "Get Personalized Guidance",
    icon: <InsightsIcon />,
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

export default function Resources() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="resources"
      className="scroll-mt-16 border-y border-navy/5 bg-white px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Resources
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Recruiting Resources
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Tools, guides, and insights to help student-athletes navigate the
            college lacrosse recruiting process with confidence. Work with
            TrailCheck for hands-on guidance tailored to your goals.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 ${
            visible ? "scroll-reveal-visible" : "scroll-reveal-hidden"
          }`}
        >
          {resources.map((resource, index) => (
            <article
              key={resource.title}
              className="scroll-reveal-item group flex flex-col rounded-2xl border border-navy/10 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold">
                {resource.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-navy">
                {resource.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {resource.description}
              </p>

              <div className="mt-5 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy/60">
                  Includes
                </p>
                <ul className="mt-3 space-y-2">
                  {resource.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-snug text-muted"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex min-h-[2.75rem] w-full items-center justify-center rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 hover:text-gold"
              >
                {resource.buttonText}
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-navy px-8 py-10 text-center sm:px-12 sm:py-12 lg:mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to take control of your recruiting process?
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            TrailCheck provides the strategy, resources, and guidance
            student-athletes need to maximize their opportunities at the next
            level.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-gold px-10 py-4 text-base font-semibold tracking-wide text-navy transition-colors hover:bg-gold-hover sm:text-lg"
          >
            Start Your Recruiting Journey
          </a>
        </div>
      </div>
    </section>
  );
}
