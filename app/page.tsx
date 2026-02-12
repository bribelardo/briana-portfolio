import Image from "next/image";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Home() {
  return (
    <>
      <section className="border-b-2 border-[#473144] pb-16 md:pb-20 lg:pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
          <div className="max-w-3xl space-y-8">
            <p className="font-heading text-sm font-semibold tracking-tight text-[#473144]">
              Hi, I am Briana Mae Belardo
            </p>
            <h1 className="font-heading text-5xl font-bold leading-[0.95] text-[#473144] md:text-6xl lg:text-7xl">
              UI Designer
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[#473144]">
              Passionate about building accessible, beautiful, and high-performing
              digital products from the ground up.
            </p>
            <div className="mt-6">
              <a
                href="#homepage-newsletter"
                className="inline-flex items-center rounded-full bg-[#FFCAD4] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#473144] transition-all hover:bg-[#473144] hover:text-[#FFCAD4] hover:border-2 hover:border-[#FFCAD4] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#473144]/30"
              >
                Get In Touch
              </a>
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
      </section>

      <section className="border-b-2 border-[#473144] py-16 md:py-20 lg:py-24">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-end">
          <div>
            <h2 className="font-heading text-2xl font-bold leading-tight md:text-3xl">
              Driven by Design. Defined by Purpose.
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              I am a graduating Information Technology student at Our Lady of
              Fatima University dedicated to building intuitive, user-centered
              digital experiences.
            </p>
            <p>
              Currently, I am honing my skills in web automation and UI design
              through my OJT, where I focus on solving real-world challenges with
              creative efficiency.
            </p>
            <a
              href="/about"
              className="inline-flex text-xs font-semibold uppercase tracking-[0.28em] text-[#473144] transition-colors hover:text-[#FFCAD4]"
            >
              Read the full story
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
              Systems built with purpose, strategy, and real-world impact.
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
              Project One · I-Promote
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              A capstone marketing platform designed to connect businesses with
              digital audiences through structured promotion workflows.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Built with a full system architecture, including user management,
              campaign tools, and administrative controls—designed with
              scalability, usability, and structured deployment in mind.
            </p>
          </div>
          <div className="border border-black px-5 py-6">
            <h3 className="font-heading text-lg font-bold uppercase tracking-[0.18em]">
              Project Two · Sunshine K-Collectibles
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              An e-commerce platform built for K-pop fans, focused on seamless
              browsing, secure checkout, and centralized inventory management.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Developed with a full SDLC approach, integrating product catalogs,
              user authentication, and order tracking into one streamlined
              system.
            </p>
          </div>
          <div className="border border-black px-5 py-6">
            <h3 className="font-heading text-lg font-bold uppercase tracking-[0.18em]">
              Project Three · Lumina Haven
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              A hotel booking website concept designed to deliver a refined
              digital hospitality experience.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Features include room browsing, availability checking, booking
              integration, media galleries, testimonials, and promotional
              packages—built to enhance direct reservations and customer trust.
            </p>
          </div>
        </div>
      </section>

      <section
        id="homepage-newsletter"
        aria-labelledby="homepage-newsletter-heading"
        className="bg-[#FFCAD4] py-16 md:py-20 lg:py-24"
      >
        <div className="max-w-3xl space-y-6">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-[#473144]">
            Newsletter
          </p>
          <h2
            id="homepage-newsletter-heading"
            className="font-heading text-2xl font-bold leading-tight text-[#473144] md:text-3xl"
          >
            Placeholder headline for Briana&apos;s weekly newsletter.
          </h2>
          <p className="text-sm leading-relaxed text-[#473144]">
            Use this copy to spell out what shows up in someone&apos;s inbox,
            how often they&apos;ll hear from you, and the kind of value they
            can expect. Replace this with your own direct, no-fluff promise.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
