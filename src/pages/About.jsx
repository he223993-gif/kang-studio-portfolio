const directions = [
  {
    zh: "建筑事务所式的秩序",
    en: "Architectural order",
  },
  {
    zh: "当代画廊式的留白",
    en: "Gallery-like white space",
  },
  {
    zh: "设计档案式的索引",
    en: "Archive-based indexing",
  },
];

const capabilities = [
  { zh: "品牌识别系统", en: "Brand identity systems" },
  { zh: "海报与印刷物", en: "Posters and printed matter" },
  { zh: "展览视觉与导视", en: "Exhibition visuals and wayfinding" },
  { zh: "包装与标签系统", en: "Packaging and label systems" },
  { zh: "视觉实验与图像研究", en: "Visual experiments and image research" },
];

export default function About() {
  return (
    <main className="page about-page">
      <header className="page-heading">
        <p className="eyebrow">About Kang Studio</p>
        <h1>关于</h1>
        <p>
          康工作室是一个用于整理视觉作品、设计研究和项目档案的个人作品集。
        </p>
        <p className="en-note">
          Kang Studio is a personal portfolio for visual works, design research and project archives.
        </p>
      </header>

      <section className="text-columns">
        <div>
          <p className="eyebrow">Direction</p>
          <h2>视觉方向</h2>
        </div>
        <div className="archive-list">
          {directions.map((item) => (
            <article key={item.en}>
              <h3>{item.zh}</h3>
              <p className="en-note">{item.en}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="text-columns">
        <div>
          <p className="eyebrow">Capabilities</p>
          <h2>内容范围</h2>
        </div>
        <div className="archive-list">
          {capabilities.map((item) => (
            <article key={item.en}>
              <h3>{item.zh}</h3>
              <p className="en-note">{item.en}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
