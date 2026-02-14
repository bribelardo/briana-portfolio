Yimport { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Project One",
    description:
      "Project description placeholder. Replace this with a concise overview of the work and why it matters.",
  },
  {
    title: "Project Two",
    description:
      "Project description placeholder. Focus on the outcome, the constraints, or the insight behind the work.",
  },
  {
    title: "Project Three",
    description:
      "Project description placeholder. Keep this specific, concrete, and easy to scan at a glance.",
  },
  {
    title: "Project Four",
    description:
      "Project description placeholder. You can later link this to a detailed case study or external write‑up.",
  },
  {
    title: "Project Five",
    description:
      "Project description placeholder. Use this slot for a representative or flagship piece of work.",
  },
  {
    title: "Project Six",
    description:
      "Project description placeholder. Feel free to reorder, remove, or rename these once you add real projects.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <header className="border-b-2 border-[#473144] pb-12 md:pb-16 lg:pb-20">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.35em]">
          Projects
        </p>
        <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-[#473144] md:text-4xl lg:text-5xl">
          Placeholder headline for Briana&apos;s projects.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed">
          Use this intro to frame how you want people to read Briana&apos;s work:
          what ties these projects together, what they represent, and what they
          say about how she operates.
        </p>
      </header>

      <section className="border-b-2 border-[#473144] py-12 md:py-16 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              href="#"
            />
          ))}
        </div>
      </section>
    </>
  );
}

