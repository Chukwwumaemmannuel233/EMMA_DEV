import Chip from "@/components/ui/Chip";
import GlassCard from "@/components/ui/GlassCard";
import type { Project } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  variant?: "strip" | "grid";
  delay?: number;
}

export default function ProjectCard({
  project,
  variant = "grid",
  delay = 0,
}: ProjectCardProps) {
  const widthClass =
    variant === "strip"
      ? "w-[280px] md:w-[320px] max-w-[320px] snap-start shrink-0 grow-0"
      : "w-full";

  return (
    <GlassCard
      className={`p-5 group flex flex-col ${widthClass}`}
      animate
      delay={delay}
    >
      <div className="aspect-video mb-5 rounded-xl overflow-hidden bg-surface-container-highest shrink-0">
        <div
          className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-110 duration-500"
          style={{ backgroundImage: `url('${project.image}')` }}
          role="img"
          aria-label={project.title}
        />
      </div>
      <span className="text-primary font-code text-xs mb-2 block">
        {project.category}
      </span>
      <h4 className="font-headline-md text-headline-md mb-2">
        {project.title}
      </h4>
      <p className="text-on-surface-variant text-sm mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
        {project.stack.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary text-sm font-bold"
      >
        View Project <ExternalLink size={14} />
      </a>
    </GlassCard>
  );
}
