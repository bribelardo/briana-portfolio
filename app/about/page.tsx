import { NewsletterForm } from "@/components/NewsletterForm";

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-black pb-12 md:pb-16 lg:pb-20">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.35em]">
          About
        </p>
        <h1 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          Placeholder headline for Briana&apos;s about page.
        </h1>
      </header>

      <section className="border-b border-black py-12 md:py-16 lg:py-20">
        <h2 className="font-heading text-sm font-bold uppercase tracking-[0.3em]">
          Background
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed">
          <p>
            This is placeholder background text. Use this section to briefly
            cover where Briana comes from, the path she&apos;s taken, and the
            context that shapes how she works today.
          </p>
          <p>
            Replace this copy with a sharp narrative that feels truthful,
            specific, and easy to scan. Avoid jargon and write like a clear,
            confident human.
          </p>
        </div>
      </section>

      <section className="border-b border-black py-12 md:py-16 lg:py-20">
        <h2 className="font-heading text-sm font-bold uppercase tracking-[0.3em]">
          Experience
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed">
          <p>
            Experience section placeholder. Use this space to highlight key
            roles, projects, and patterns in Briana&apos;s work. Focus less on
            job titles and more on the kind of problems she solves.
          </p>
          <p>
            You can structure this section as short paragraphs, tight bullet
            clusters, or themed blocks once you add real content.
          </p>
        </div>
      </section>

      <section className="border-b border-black py-12 md:py-16 lg:py-20">
        <h2 className="font-heading text-sm font-bold uppercase tracking-[0.3em]">
          Philosophy
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed">
          <p>
            Philosophy section placeholder. This is where you can capture how
            Briana approaches work, decision-making, and collaboration.
          </p>
          <p>
            Think in terms of principles, non‑negotiables, and the lens she
            brings to new projects. Replace this with concise, grounded
            statements.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="about-newsletter-heading"
        className="py-12 md:py-16 lg:py-20"
      >
        <div className="max-w-3xl space-y-6">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.3em]">
            Stay in the loop
          </p>
          <h2
            id="about-newsletter-heading"
            className="font-heading text-2xl font-bold leading-tight md:text-3xl"
          >
            Newsletter call-to-action placeholder.
          </h2>
          <p className="text-sm leading-relaxed">
            Use this section to connect the dots between Briana&apos;s story and
            what people will get by subscribing. Replace this with your own
            focused invitation.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}

