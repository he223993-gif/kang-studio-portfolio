import ProjectGrid from "../components/ProjectGrid.jsx";
import { categories } from "../data/categories.js";
import { projects } from "../data/projects.js";
import { site } from "../data/site.js";
import PlaceholderImage from "../components/PlaceholderImage.jsx";

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 5);

  return (
    <main className="page home-page">
      <section className="home-hero archive-hero">
        <div className="archive-hero-copy">
          <p className="eyebrow">{site.title.en}</p>
          <h1>精选作品集</h1>
          <p className="home-title-en">Selected Works</p>
          <div className="category-mini-list">
            {categories.slice(0, 3).map((category) => (
              <p key={category.slug}>
                {category.title.zh}
                <span>{category.title.en}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="archive-hero-image">
          <PlaceholderImage id="home-archive-hero" label="00" />
        </div>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">Selected Works</p>
            <h2>精选项目</h2>
          </div>
          <a className="text-link" href="/works" data-link>
            查看全部作品 / View all
          </a>
        </div>
        <ProjectGrid compact projects={featured} />
      </section>
    </main>
  );
}
