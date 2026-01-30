const projects = [
  {
    title: "Project Alpha",
    year: "2024",
    description: "A brutalist approach to modern web design",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Beta",
    year: "2024",
    description: "Minimalist e-commerce platform",
    tech: ["Next.js", "Supabase", "Stripe"],
  },
  {
    title: "Project Gamma",
    year: "2023",
    description: "Portfolio management system",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-20 md:space-y-28">
        {/* Header */}
        <header className="space-y-6">
          <span className="label-stark">Selected Work</span>
          <h1 className="text-display-lg font-display text-monumental">PROJECTS</h1>
        </header>

        {/* Project list - Architectural divider style */}
        <div className="max-w-4xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border-t border-foreground/10 py-10 md:py-14 cursor-pointer transition-colors hover:bg-foreground/[0.02]"
            >
              <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Index number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="font-mono text-xs text-grey-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="col-span-10 md:col-span-7 space-y-3">
                  <h2 className="text-xl md:text-2xl font-medium tracking-tight group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h2>
                  <p className="text-sm text-grey-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="col-span-12 md:col-span-4 flex flex-wrap gap-x-4 gap-y-2 md:justify-end items-start pt-2 md:pt-0">
                  <span className="text-xs font-mono text-grey-400">{project.year}</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono uppercase tracking-widest text-grey-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-foreground/10"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
