import Image from "next/image";
import { getLogoSrc } from "@/lib/site-assets";

export default function Hero() {
  const logoSrc = getLogoSrc();

  return (
    <section className="relative min-h-[32rem] overflow-hidden bg-gradient-to-b from-navy via-navy-light to-navy lg:min-h-[36rem]">

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center sm:py-24 lg:py-28">
        <h1 className="hero-animate text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Stay in the Play.
        </h1>

        <p className="hero-animate hero-animate-delay-1 mt-5 max-w-2xl text-lg font-light leading-relaxed text-white/90 sm:text-xl lg:mt-6 lg:text-2xl">
          Navigate the Recruiting Trail.
        </p>

        <div className="hero-animate hero-animate-delay-2 mt-10 lg:mt-12">
          <a
            href="#contact"
            className="inline-flex min-h-[3.5rem] items-center justify-center rounded-full bg-gold px-12 py-4 text-base font-semibold tracking-wide text-navy transition-colors hover:bg-gold-hover sm:text-lg"
          >
            Start Your Journey
          </a>
        </div>

        {logoSrc ? (
          <div className="hero-animate hero-animate-delay-3 mt-12 lg:mt-14">
            <Image
              src={logoSrc}
              alt="TrailCheck Lacrosse"
              width={160}
              height={160}
              priority
              unoptimized
              className="mx-auto h-20 w-auto object-contain sm:h-24 lg:h-28"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
