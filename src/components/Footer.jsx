import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>{site.name.zh}</p>
      <p className="en-note">{site.name.en}</p>
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <p className="en-note">Archive updated 2026</p>
    </footer>
  );
}
