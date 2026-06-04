import { categories } from "../data/categories.js";
import { projects } from "../data/projects.js";
import PlaceholderImage from "../components/PlaceholderImage.jsx";

export default function Works() {
  return (
    <main className="page works-page">
      <header className="page-heading">
        <p className="eyebrow">Works Archive</p>
        <h1>作品总览</h1>
        <p className="en-note">
          A complete index of identity, poster, exhibition, packaging and visual research projects.
        </p>
      </header>

      <section className="work-list" aria-label="作品类别">
        {categories.map((category) => (
          <a className="work-list-row" href={`/works/${category.slug}`} key={category.slug} data-link>
            <span className="row-number">
              {String(categories.indexOf(category) + 1).padStart(2, "0")}
            </span>
            <span>
              <strong>{category.title.zh}</strong>
              <small>{category.title.en}</small>
            </span>
            <span className="view-projects">查看项目 / View Projects</span>
            <span className="row-strip">
              {projects
                .filter((project) => project.category === category.slug)
                .slice(0, 2)
                .map((project) => (
                  <PlaceholderImage id={project.images[0]} key={project.slug} label={project.number} />
                ))}
            </span>
          </a>
        ))}
      </section>
    </main>
  );
}
