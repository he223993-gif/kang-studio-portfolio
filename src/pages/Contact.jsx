import { site } from "../data/site.js";

export default function Contact() {
  return (
    <main className="page contact-page">
      <header className="page-heading">
        <p className="eyebrow">Contact</p>
        <h1>联系</h1>
        <p>后续可在这里替换真实邮箱、社交链接和合作说明。</p>
        <p className="en-note">
          Replace this archive contact with a real email, social links and collaboration note later.
        </p>
      </header>

      <section className="contact-panel">
        <div>
          <p className="eyebrow">Email</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div>
          <p className="eyebrow">Note</p>
          <p>适合品牌识别、海报、展览、包装与视觉研究相关项目。</p>
          <p className="en-note">
            Available for identity, poster, exhibition, packaging and visual research projects.
          </p>
        </div>
      </section>
    </main>
  );
}
