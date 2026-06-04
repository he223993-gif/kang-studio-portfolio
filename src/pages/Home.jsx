import ProjectGrid from "../components/ProjectGrid.jsx";
import { categories } from "../data/categories.js";
import { projects } from "../data/projects.js";
import { site } from "../data/site.js";
import PlaceholderImage from "../components/PlaceholderImage.jsx";

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 5);
  const practices = [
    {
      zh: "视觉识别与品牌系统",
      en: "Visual identity and brand systems",
    },
    {
      zh: "文化海报与印刷档案",
      en: "Cultural posters and printed archives",
    },
    {
      zh: "展览图形与空间信息",
      en: "Exhibition graphics and spatial information",
    },
    {
      zh: "包装、标签与物件系统",
      en: "Packaging, labels and object systems",
    },
  ];

  return (
    <main className="page home-page">
      <section className="home-hero archive-hero">
        <div className="archive-hero-copy">
          <p className="section-index">01 Hero</p>
          <h1>精选作品集</h1>
          <p className="home-title-en">Selected Works</p>
          <div className="home-role">
            <p>视觉设计师与创意指导</p>
            <p className="en-note">Visual Designer & Creative Director</p>
          </div>
          <div className="home-statement">
            <p>{site.description.zh}</p>
            <p className="en-note">{site.description.en}</p>
          </div>
        </div>
        <div className="archive-hero-image">
          <PlaceholderImage id="home-archive-hero" label="00" />
        </div>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <div>
            <p className="section-index">02 Featured Projects</p>
            <h2>精选项目</h2>
          </div>
          <a className="text-link" href="/works" data-link>
            查看全部作品 / View all
          </a>
        </div>
        <ProjectGrid compact projects={featured} />
      </section>

      <section className="section-block practice-section">
        <div className="section-title-row">
          <div>
            <p className="section-index">03 Practice</p>
            <h2>实践方向</h2>
          </div>
        </div>
        <div className="practice-list">
          {practices.map((practice, index) => (
            <article key={practice.en}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{practice.zh}</h3>
              <p className="en-note">{practice.en}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-title-row">
          <div>
            <p className="section-index">04 Categories</p>
            <h2>项目分类</h2>
          </div>
        </div>
        <section className="category-index" aria-label="项目分类">
          {categories.map((category) => (
            <a href={`/works/${category.slug}`} key={category.slug} data-link>
              <span>{category.title.zh}</span>
              <small>{category.title.en}</small>
            </a>
          ))}
        </section>
      </section>

      <section className="section-block home-contact">
        <div className="section-title-row">
          <div>
            <p className="section-index">05 Footer</p>
            <h2>联系信息</h2>
          </div>
        </div>
        <div className="home-contact-grid">
          <p>后续可替换真实邮箱、社交账号和合作说明。</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p className="en-note">
            Contact information for future project inquiries and archive updates.
          </p>
        </div>
      </section>
    </main>
  );
}
