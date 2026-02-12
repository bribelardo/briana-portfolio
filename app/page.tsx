import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="border-b border-black pb-16 md:pb-20 lg:pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
          <div className="max-w-3xl space-y-8">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em]">
              Placeholder positioning line
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              This is placeholder hero text for Briana&apos;s portfolio homepage.
            </h1>
            <p className="max-w-xl text-base leading-relaxed">
              Use this short paragraph to explain who Briana is, the kind of work
              she does, and why a visitor should care. Replace this with clear,
              direct copy that sets expectations in one or two sharp sentences.
            </p>
            <div className="mt-6">
              <a
                href="#homepage-newsletter"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-background transition-colors hover:bg-black"
              >
                Join the newsletter
              </a>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden border border-black md:max-w-xs">
            <Image
              src="/bri-pic.jpg"
              alt="Briana Mae Belardo"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-black py-16 md:py-20 lg:py-24">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-end">
          <div>
            <h2 className="font-heading text-2xl font-bold leading-tight md:text-3xl">
              About section preview placeholder.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Use this space to give a tight, high-level snapshot of Briana&apos;s
              background, focus, and the kind of work she does. The goal is to
              pull people into the full About page.
            </p>
            <p>
              Keep it focused on outcomes and perspective rather than a full
              biography. Replace this copy once you are ready.
            </p>
            <a
              href="/about"
              className="inline-flex text-xs font-semibold uppercase tracking-[0.28em] hover:text-accent"
            >
              Read the full story
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-black py-16 md:py-20 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.3em]">
              Selected work
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold leading-tight md:text-3xl">
              Placeholder headline for featured projects.
            </h2>
          </div>
          <a
            href="/projects"
            className="text-xs font-semibold uppercase tracking-[0.28em] hover:text-accent"
          >
            View all projects
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-black px-5 py-6">
            <h3 className="font-heading text-lg font-bold uppercase tracking-[0.18em]">
              Project One
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Project description placeholder. Use this space to briefly explain
              what the project is and why it matters.
            </p>
          </div>
          <div className="border border-black px-5 py-6">
            <h3 className="font-heading text-lg font-bold uppercase tracking-[0.18em]">
              Project Two
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Project description placeholder. Highlight outcomes, impact, or a
              sharp angle that makes this work memorable.
            </p>
          </div>
          <div className="border border-black px-5 py-6">
            <h3 className="font-heading text-lg font-bold uppercase tracking-[0.18em]">
              Project Three
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Project description placeholder. Keep this tight, specific, and
              easy to scan at a glance.
            </p>
          </div>
        </div>
      </section>

      <section
        id="homepage-newsletter"
        aria-labelledby="homepage-newsletter-heading"
        className="py-16 md:py-20 lg:py-24"
      >
        <div className="max-w-3xl space-y-6">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.3em]">
            Newsletter
          </p>
          <h2
            id="homepage-newsletter-heading"
            className="font-heading text-2xl font-bold leading-tight md:text-3xl"
          >
            Placeholder headline for Briana&apos;s weekly newsletter.
          </h2>
          <p className="text-sm leading-relaxed">
            Use this copy to spell out what shows up in someone&apos;s inbox,
            how often they&apos;ll hear from you, and the kind of value they
            can expect. Replace this with your own direct, no-fluff promise.
          </p>
        </div>
      </section>
    </>
  );
}
