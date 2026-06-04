import ProjectGrid from "../components/ProjectGrid.jsx";
import { categories } from "../data/categories.js";
import { getProjectsByCategory } from "../data/projects.js";

export default function CategoryPage({ slug }) {
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <main className="page page-narrow">
        <p className="eyebrow">Category Not Found</p>
        <h1>分类未找到</h1>
        <p className="en-note">The requested category does not exist.</p>
      </main>
    );
  }

  const categoryProjects = getProjectsByCategory(slug);

  return (
    <main className="page category-page">
      <header className="page-heading">
        <p className="eyebrow">{category.title.en}</p>
        <h1>{category.title.zh}</h1>
        <p>{category.description.zh}</p>
        <p className="en-note">{category.description.en}</p>
      </header>
      <ProjectGrid projects={categoryProjects} />
    </main>
  );
}
