import Image from "next/image";
import ContactForm from "@/components/sections/ContactForm";
import { getHeroSrc } from "@/lib/site-assets";

function GuidanceIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}

function VirtualIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

const infoItems = [
  { icon: <GuidanceIcon />, text: "Personalized Recruiting Guidance" },
  { icon: <StrategyIcon />, text: "Individualized Recruiting Strategy" },
  { icon: <VirtualIcon />, text: "Virtual Consultations Available" },
  {
    icon: <EmailIcon />,
    text: "klm0027@yahoo.com",
    href: "mailto:klm0027@yahoo.com",
  },
  {
    icon: <PhoneIcon />,
    text: "(315) 256-5366",
    href: "tel:+13152565366",
  },
] as const;

function FinalCTABanner() {
  const heroSrc = getHeroSrc();

  return (
    <section className="relative min-h-[28rem] overflow-hidden lg:min-h-[32rem]">
      {heroSrc ? (
        <Image
          src={heroSrc}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" aria-hidden="true" />
      )}

      <div className="absolute inset-0 bg-navy/80" aria-hidden="true" />

      <div className="relative z-10 px-6 py-24 text-center lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Stay in the Play.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            The recruiting journey isn&apos;t always straightforward, but you
            don&apos;t have to navigate it alone. TrailCheck is here to help you
            take the next step with confidence.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex min-h-[3.5rem] items-center justify-center rounded-full bg-gold px-12 py-4 text-base font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-gold-hover hover:shadow-lg hover:shadow-gold/20 sm:text-lg"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <section id="contact" className="scroll-mt-16 bg-surface px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Start Your Recruiting Journey
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Every recruiting journey is unique. Whether you&apos;re just
              beginning to explore your options or already communicating with
              college coaches, TrailCheck is here to help you navigate the
              process with confidence.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  Let&apos;s Start the Conversation
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                  Every athlete&apos;s recruiting journey is different. We&apos;d
                  love to learn more about your goals, answer your questions, and
                  help you build a personalized recruiting strategy.
                </p>

                <ul className="mt-10 flex flex-col gap-5">
                  {infoItems.map((item) => (
                    <li key={item.text} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                        {item.icon}
                      </span>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          className="pt-2 text-base leading-relaxed text-navy transition-colors hover:text-gold"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="pt-2 text-base leading-relaxed text-navy">
                          {item.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="mt-12 border-l-2 border-gold/50 pl-6">
                <p className="text-lg italic leading-relaxed text-navy/80">
                  &ldquo;The first step toward your future starts with a
                  conversation.&rdquo;
                </p>
              </blockquote>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <FinalCTABanner />
    </>
  );
}
