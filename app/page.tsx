import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Home() {
  return (
    <>
      <section className="border-b-2 border-[#473144]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
            <div className="max-w-3xl space-y-8">
              <div>
                <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-[#473144]">
                  Hi, I&apos;m Briana Mae
                </p>
                <div className="mt-3 h-[2px] w-16 bg-[#FFCAD4]" />
              </div>
              <h1 className="font-heading text-4xl font-bold leading-tight text-[#473144] md:text-5xl lg:text-6xl">
                Designing intelligent systems
                <br className="hidden md:block" />
                and meaningful digital experiences.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-[#473144] md:text-base">
                I build thoughtful software solutions powered by data, design, and
                innovation—combining structure, usability, and modern technology
                to solve real problems.
              </p>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full bg-[#473144] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all hover:bg-black hover:-translate-y-0.5"
                >
                  Learn More About Me
                </Link>
              </div>
            </div>
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden border-2 border-[#473144] md:max-w-xs">
              <Image
                src="/pic-homepage.png"
                alt="Briana Mae Belardo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#473144] bg-[#FFF4F7] py-16 md:py-20 lg:py-24">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-end">
          <div>
            <h2 className="font-heading text-2xl font-bold leading-tight md:text-3xl">
              Hi, I&apos;m Briana Mae
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              I am a passionate developer focused on building efficient,
              user-centered systems. My work combines clean design, structured
              development practices, and intelligent technologies such as machine
              learning and analytics.
            </p>
            <p>
              I enjoy turning complex problems into practical and elegant
              solutions that feel intuitive to use and dependable in production.
            </p>
            <a
              href="/projects"
              className="inline-flex text-xs font-semibold uppercase tracking-[0.28em] text-[#473144] transition-colors hover:text-[#FFCAD4]"
            >
              View My Projects
            </a>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-[#473144] py-16 md:py-20 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.3em]">
              Selected work
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold leading-tight md:text-3xl">
              Featured Projects
            </h2>
          </div>
          <a
            href="/projects"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[#473144] transition-colors hover:text-[#FFCAD4]"
          >
            View all projects →
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-black px-5 py-6">
            <h3 className="font-heading text-lg font-bold uppercase tracking-[0.18em]">
              I-Promote · Marketing Campaign Platform
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              A machine learning-powered HR decision support system designed to
              analyze employee performance and assist organizations in promotion
              planning.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Built with predictive modeling and explainable AI, it helps ensure
              fair, data-driven promotion decisions via an interactive dashboard.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#473144]">
              Python · XGBoost · SHAP · Web Dashboard
            </p>
            <button className="mt-4 inline-flex items-center rounded-full bg-[#FFCAD4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#473144]">
              View Project
            </button>
          </div>
          <div className="border border-black px-5 py-6">
            <h3 className="font-heading text-lg font-bold uppercase tracking-[0.18em]">
              Sunshine K-Collectibles · E-commerce Experience
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              An intelligent platform that analyzes skills, job trends, and user
              resumes to recommend personalized career growth paths.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Includes skill extraction, job matching, and application tracking to
              help users understand and plan their next career steps.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#473144]">
              Python · Machine Learning · API Integration · Web App
            </p>
            <button className="mt-4 inline-flex items-center rounded-full bg-[#FFCAD4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#473144]">
              View Project
            </button>
          </div>
          <div className="border border-black px-5 py-6">
            <h3 className="font-heading text-lg font-bold uppercase tracking-[0.18em]">
              Lumina Haven · Hotel Booking Concept
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              A barangay inquiry chatbot that streamlines resident questions about
              permits, certifications, and local services.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Uses natural language processing to automate responses, reduce
              manual workload, and improve service efficiency for local staff.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#473144]">
              Python · NLP · Web Integration
            </p>
            <button className="mt-4 inline-flex items-center rounded-full bg-[#FFCAD4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#473144]">
              View Project
            </button>
          </div>
        </div>
      </section>

      {/* Contact / newsletter section removed per request */}
    </>
  );
}
