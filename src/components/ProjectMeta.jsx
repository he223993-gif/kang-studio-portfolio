import { categories } from "../data/categories.js";

export default function ProjectMeta({ project }) {
  const category = categories.find((item) => item.slug === project.category);
  const rows = [
    { label: "项目标题", helper: "Project Title", value: project.title.zh, en: project.title.en },
    { label: "年份", helper: "Year", value: project.year },
    { label: "类别", helper: "Category", value: category?.title.zh, en: category?.title.en },
    { label: "负责内容", helper: "Role", value: project.role.zh, en: project.role.en },
    { label: "简要说明", helper: "Brief", value: project.brief.zh, en: project.brief.en },
  ];

  return (
    <dl className="project-meta-list">
      {rows.map((row) => (
        <div key={row.helper}>
          <dt>
            {row.label}
            <small>{row.helper}</small>
          </dt>
          <dd>
            <span>{row.value}</span>
            {row.en ? <small>{row.en}</small> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
