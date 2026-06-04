import { categories } from "../data/categories.js";
import PlaceholderImage from "./PlaceholderImage.jsx";

export default function ProjectCard({ project, compact = false }) {
  const category = categories.find((item) => item.slug === project.category);

  return (
    <article className={compact ? "project-card is-compact" : "project-card"}>
      <a href={`/projects/${project.slug}`} data-link>
        <PlaceholderImage id={project.images[0]} label={project.number} />
        <div className="project-card-meta">
          <span>{project.number}</span>
          <span>{project.year}</span>
          <span>{category?.title.zh}</span>
        </div>
        <h3>{project.title.zh}</h3>
        <p className="en-note">{project.title.en}</p>
      </a>
    </article>
  );
}
