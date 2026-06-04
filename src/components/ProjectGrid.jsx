import ProjectCard from "./ProjectCard.jsx";

export default function ProjectGrid({ projects, compact = false }) {
  return (
    <div className={compact ? "project-grid is-compact" : "project-grid"}>
      {projects.map((project) => (
        <ProjectCard compact={compact} key={project.slug} project={project} />
      ))}
    </div>
  );
}
