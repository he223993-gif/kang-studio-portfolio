import PlaceholderImage from "../components/PlaceholderImage.jsx";
import ProjectMeta from "../components/ProjectMeta.jsx";
import { getProjectBySlug } from "../data/projects.js";

export default function ProjectDetail({ slug }) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="page page-narrow">
        <p className="eyebrow">Project Not Found</p>
        <h1>项目未找到</h1>
        <p className="en-note">The requested project archive does not exist.</p>
      </main>
    );
  }

  return (
    <main className="page detail-page">
      <header className="detail-header">
        <div>
          <p className="eyebrow">Project Detail</p>
          <h1>{project.title.zh}</h1>
          <p className="en-note">{project.title.en}</p>
        </div>
        <span>{project.number}</span>
      </header>

      <section className="detail-layout">
        <ProjectMeta project={project} />
        <div className="detail-images" aria-label="作品图 Images">
          <PlaceholderImage id={project.images[0]} label={`${project.number}.0`} />
          {project.images.map((imageId, index) => (
            <PlaceholderImage
              id={imageId}
              key={imageId}
              label={`${project.number}.${index + 1}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
