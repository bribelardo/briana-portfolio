import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-black">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12 lg:px-8 lg:py-16">
        <section
          id="newsletter"
          aria-labelledby="footer-newsletter-heading"
          className="max-w-xl"
        >
          <h2
            id="footer-newsletter-heading"
            className="font-heading text-sm font-bold tracking-[0.3em] uppercase"
          >
            Weekly Signal
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            This is placeholder copy for Briana&apos;s newsletter. Use this
            space to clearly state who the newsletter is for and what readers
            can expect each week.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </section>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-black pt-6 text-xs text-foreground/80 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Briana Mae Belardo. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/about"
              className="uppercase tracking-[0.2em] hover:text-accent"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="uppercase tracking-[0.2em] hover:text-accent"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

