import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const cardContent = (
    <div className={`group backdrop-blur-xl bg-white/[0.02] border border-white/[0.1] rounded-xl p-6 hover:bg-white/[0.05] transition-all duration-300 hover:scale-101 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] cursor-pointer ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="font-bold text-xl mb-2 text-white/90 group-hover:text-[#55b291] transition-colors duration-200">
            {project.title}
          </div>
          <div className="text-white/70 text-sm leading-relaxed mb-2">
            {project.desc}
          </div>
        </div>
      </div>
    </div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return cardContent;
} 