export const projects = [
  {
    slug: "archive-identity-system",
    number: "001",
    title: { zh: "档案式品牌识别系统", en: "Archive Identity System" },
    year: "2026",
    category: "brand-identity",
    role: { zh: "品牌识别 / 视觉指导", en: "Identity Design / Art Direction" },
    brief: {
      zh: "以字体、间距和档案编号建立克制的品牌识别系统。",
      en: "A restrained identity system built around typography, spacing and archival rhythm.",
    },
    images: ["brand-identity-01", "brand-identity-02"],
    featured: true,
  },
  {
    slug: "museum-mark-study",
    number: "002",
    title: { zh: "美术馆标识研究", en: "Museum Mark Study" },
    year: "2025",
    category: "brand-identity",
    role: { zh: "标志 / 字体系统", en: "Mark / Type System" },
    brief: {
      zh: "为虚构公共美术馆建立低声量、高识别度的标志和文字系统。",
      en: "A quiet but recognizable mark and type system for a fictional public museum.",
    },
    images: ["brand-identity-03", "brand-identity-04"],
    featured: false,
  },
  {
    slug: "city-poster-sequence",
    number: "003",
    title: { zh: "城市海报序列", en: "City Poster Sequence" },
    year: "2026",
    category: "poster-design",
    role: { zh: "海报 / 版式", en: "Poster / Layout" },
    brief: {
      zh: "以街区地图、时间标记和留白关系构成一组公共文化海报。",
      en: "A public culture poster series composed with maps, time marks and white space.",
    },
    images: ["poster-design-01", "poster-design-02"],
    featured: true,
  },
  {
    slug: "type-field-posters",
    number: "004",
    title: { zh: "文字场海报", en: "Type Field Posters" },
    year: "2025",
    category: "poster-design",
    role: { zh: "字体实验 / 海报", en: "Type Experiment / Poster" },
    brief: {
      zh: "以密度、尺度和网格偏移测试文字作为图像的可能性。",
      en: "A study of type as image through density, scale and grid displacement.",
    },
    images: ["poster-design-03", "poster-design-04"],
    featured: false,
  },
  {
    slug: "quiet-room-exhibition",
    number: "005",
    title: { zh: "静室展览系统", en: "Quiet Room Exhibition" },
    year: "2026",
    category: "exhibition-design",
    role: { zh: "展览视觉 / 导视", en: "Exhibition Visuals / Wayfinding" },
    brief: {
      zh: "为小型当代展览建立标题墙、作品标签和路径导视规范。",
      en: "Wall titles, labels and wayfinding standards for a small contemporary exhibition.",
    },
    images: ["exhibition-design-01", "exhibition-design-02"],
    featured: true,
  },
  {
    slug: "archive-wall-study",
    number: "006",
    title: { zh: "档案墙研究", en: "Archive Wall Study" },
    year: "2024",
    category: "exhibition-design",
    role: { zh: "空间图形 / 信息层级", en: "Spatial Graphics / Information Hierarchy" },
    brief: {
      zh: "将时间线、文件编号和图片索引转化为空间中的阅读秩序。",
      en: "Timelines, file codes and image indexes translated into spatial reading order.",
    },
    images: ["exhibition-design-03", "exhibition-design-04"],
    featured: false,
  },
  {
    slug: "object-label-packaging",
    number: "007",
    title: { zh: "物件标签包装", en: "Object Label Packaging" },
    year: "2026",
    category: "packaging-design",
    role: { zh: "包装 / 标签系统", en: "Packaging / Label System" },
    brief: {
      zh: "以档案标签逻辑处理包装正面信息和材料触感。",
      en: "Packaging front information and material tactility shaped by archive labels.",
    },
    images: ["packaging-design-01", "packaging-design-02"],
    featured: true,
  },
  {
    slug: "paper-box-system",
    number: "008",
    title: { zh: "纸盒系统", en: "Paper Box System" },
    year: "2025",
    category: "packaging-design",
    role: { zh: "结构 / 包装视觉", en: "Structure / Packaging Visuals" },
    brief: {
      zh: "用黑白比例、压线和编号系统构建一组产品包装语言。",
      en: "A product packaging language built with black-white ratio, folds and codes.",
    },
    images: ["packaging-design-03", "packaging-design-04"],
    featured: false,
  },
  {
    slug: "grid-memory-study",
    number: "009",
    title: { zh: "网格记忆研究", en: "Grid Memory Study" },
    year: "2026",
    category: "visual-experiment",
    role: { zh: "视觉研究 / 版式实验", en: "Visual Research / Layout Experiment" },
    brief: {
      zh: "从建筑立面、展墙和页面边界中提取网格变体。",
      en: "Grid variants extracted from facades, exhibition walls and page margins.",
    },
    images: ["visual-experiment-01", "visual-experiment-02"],
    featured: true,
  },
  {
    slug: "index-image-system",
    number: "010",
    title: { zh: "索引图像系统", en: "Index Image System" },
    year: "2024",
    category: "visual-experiment",
    role: { zh: "图像系统 / 符号实验", en: "Image System / Symbol Experiment" },
    brief: {
      zh: "通过重复、裁切和编号建立图像档案的另一种观看方式。",
      en: "Another way of viewing image archives through repetition, cropping and numbering.",
    },
    images: ["visual-experiment-03", "visual-experiment-04"],
    featured: false,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(categorySlug) {
  return projects.filter((project) => project.category === categorySlug);
}
