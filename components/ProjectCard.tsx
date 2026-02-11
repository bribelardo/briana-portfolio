import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
};

export function ProjectCard({ title, description, href }: ProjectCardProps) {
  const Wrapper = href ? Link : "div";
  const wrapperProps = href
    ? { href, className: "block h-full transition-colors hover:text-accent" }
    : { className: "block h-full" };

  return (
    <article className="flex h-full flex-col border border-black px-5 py-6">
      <Wrapper {...(wrapperProps as any)}>
        <h3 className="font-heading text-lg font-bold uppercase tracking-[0.18em]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed">{description}</p>
        {href && (
          <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.25em]">
            View project
          </span>
        )}
      </Wrapper>
    </article>
  );
}

