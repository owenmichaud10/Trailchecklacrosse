type SystemPillar = {
  title: string;
  tagline: string;
  body: string[];
  action: string;
};

const pillars: SystemPillar[] = [
  {
    title: "The Pursuit",
    tagline: "Persistence is the pace on the trail.",
    body: [
      "In lacrosse, a trail check is an effort play. You may appear beat, but you chase the play and refuse to give up.",
      "TrailCheck brings that same mindset to the recruiting process.",
    ],
    action:
      "Recruiting is not a spectator sport. If you wait to be found, you'll get lost along the way. Stay active, take ownership of your journey, and keep pursuing your summit. TrailCheck is here to help you keep the pace.",
  },
  {
    title: "The Guide",
    tagline: "Flexibility on the trail is a strength, not a compromise.",
    body: [
      "The recruiting trail is rarely a straight line. There will be steep climbs, unexpected turns, and opportunities you never saw coming.",
    ],
    action:
      "Stay open-minded. The right college may be somewhere you haven't considered yet. TrailCheck provides the compass to help you navigate every decision with confidence.",
  },
  {
    title: "The Trailhead",
    tagline: "We provide the trail map. You choose the path.",
    body: [
      "Every college career begins with a single decision—the choice to stop waiting and start moving.",
      "This is your journey. Not your teammate's, your coach's, or anyone else's. You are the one who will put in the work, both on the field and in the classroom.",
    ],
    action:
      "TrailCheck helps you evaluate your options, refine your plan, and confidently take each step toward your summit.",
  },
];

export default function TheTrailCheckSystem() {
  return (
    <section className="scroll-mt-16 bg-navy px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Philosophy
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The TrailCheck System
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            The recruiting journey is unique for every athlete. The TrailCheck
            System provides the mindset, guidance, and structure needed to
            confidently navigate the path to college lacrosse.
          </p>
        </div>

        <div className="relative mt-16 lg:mt-24">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent lg:left-1/2 lg:block lg:-translate-x-px"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-16 lg:gap-24">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`relative flex flex-col lg:w-[calc(50%-3rem)] ${
                  index % 2 === 0
                    ? "lg:mr-auto lg:pr-8 lg:text-right"
                    : "lg:ml-auto lg:pl-8 lg:text-left"
                }`}
              >
                <div
                  className={`absolute top-2 hidden h-3 w-3 rounded-full border-2 border-gold bg-navy lg:block ${
                    index % 2 === 0 ? "lg:-right-[calc(3rem+5px)]" : "lg:-left-[calc(3rem+5px)]"
                  }`}
                  aria-hidden="true"
                />

                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:items-end" : "lg:items-start"
                  }`}
                >
                  <span className="text-sm font-medium text-gold/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-base italic leading-relaxed text-gold sm:text-lg">
                    {pillar.tagline}
                  </p>

                  {pillar.body.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className={`max-w-lg text-base leading-relaxed text-white/70 ${
                        paragraphIndex === 0 ? "mt-5" : "mt-3"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}

                  <p
                    className={`mt-5 max-w-lg text-base leading-relaxed text-white/85 ${
                      index % 2 === 0
                        ? "border-l-2 border-gold/50 pl-5 lg:border-l-0 lg:border-r-2 lg:pr-5 lg:pl-0 lg:text-right"
                        : "border-l-2 border-gold/50 pl-5"
                    }`}
                  >
                    {pillar.action}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
