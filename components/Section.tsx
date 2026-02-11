import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  align?: "left" | "center";
  children: ReactNode;
};

export function Section({
  eyebrow,
  title,
  align = "left",
  children,
}: SectionProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <section className="border-t border-black py-16 first:border-t-0 first:pt-0 md:py-20 lg:py-24">
      <div className={`flex flex-col gap-6 ${alignment}`}>
        {(eyebrow || title) && (
          <header className="max-w-2xl">
            {eyebrow && (
              <p className="font-heading text-xs font-bold uppercase tracking-[0.3em]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-heading text-2xl font-bold leading-tight md:text-3xl">
                {title}
              </h2>
            )}
          </header>
        )}
        <div className="max-w-3xl">{children}</div>
      </div>
    </section>
  );
}

