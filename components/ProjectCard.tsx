import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
};

export function ProjectCard({ title, description, href }: ProjectCardProps) {
  const Wrapper = href ? Link : "div";
  const wrapperProps = href
    ? { href, className: "block h-full" }
    : { className: "block h-full" };

  return (
    <article className="group flex h-full flex-col border-2 border-[#473144] bg-background px-5 py-6 transition-all duration-300 hover:bg-[#FFCAD4] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#473144]/20">
      <Wrapper {...(wrapperProps as any)}>
        <h3 className="font-heading text-lg font-bold uppercase tracking-[0.18em] text-[#473144] transition-colors group-hover:text-[#473144]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground transition-colors group-hover:text-[#473144]">
          {description}
        </p>
        {href && (
          <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#473144] transition-colors group-hover:text-[#473144]">
            View project
          </span>
        )}
      </Wrapper>
    </article>
  );
}

