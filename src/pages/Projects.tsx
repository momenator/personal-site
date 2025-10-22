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
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-16">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">PROJECTS</h1>
          <div className="w-20 h-1 bg-foreground"></div>
        </div>

        <div className="space-y-12 max-w-4xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-2 border-foreground p-8 brutalist-hover cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                  <span className="text-sm text-grey-500 font-mono">{project.year}</span>
                </div>
                
                <p className="text-grey-600 text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-foreground text-background text-xs font-mono uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
