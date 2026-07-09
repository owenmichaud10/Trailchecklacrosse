import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-navy px-6 py-24">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Off the trail.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
          This page doesn&apos;t exist. Head back to the homepage or start a
          conversation about your recruiting journey.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-hover"
          >
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-gold/50 hover:text-gold"
          >
            Contact TrailCheck
          </Link>
        </div>
      </div>
    </section>
  );
}
