import { categories } from "../data/categories.js";
import { site } from "../data/site.js";

const navItems = [
  { href: "/works", label: "作品", helper: "Works" },
  { href: "/about", label: "关于", helper: "About" },
  { href: "/contact", label: "联系", helper: "Contact" },
];

export default function Header({ currentPath }) {
  return (
    <header className="site-header">
      <a className="site-wordmark" href="/" data-link>
        <span>{site.name.zh}</span>
        <small>{site.name.en}</small>
      </a>
      <nav className="primary-nav" aria-label="主导航">
        {navItems.map((item) => (
          <a
            className={currentPath.startsWith(item.href) ? "is-active" : ""}
            href={item.href}
            key={item.href}
            data-link
          >
            <span>{item.label}</span>
            <small>{item.helper}</small>
          </a>
        ))}
      </nav>
      <nav className="category-nav" aria-label="作品分类">
        {categories.map((category) => (
          <a
            className={
              currentPath === `/works/${category.slug}` ? "is-active" : ""
            }
            href={`/works/${category.slug}`}
            key={category.slug}
            data-link
          >
            {category.title.zh}
            <small>{category.title.en}</small>
          </a>
        ))}
      </nav>
    </header>
  );
}
