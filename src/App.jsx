import { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Works from "./pages/Works.jsx";

function getRoute(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return { name: "home" };
  if (path === "/works") return { name: "works" };
  if (path.startsWith("/works/")) {
    return { name: "category", slug: path.replace("/works/", "") };
  }
  if (path.startsWith("/projects/")) {
    return { name: "project", slug: path.replace("/projects/", "") };
  }
  if (path === "/about") return { name: "about" };
  if (path === "/contact") return { name: "contact" };
  return { name: "not-found" };
}

function renderRoute(route) {
  switch (route.name) {
    case "home":
      return <Home />;
    case "works":
      return <Works />;
    case "category":
      return <CategoryPage slug={route.slug} />;
    case "project":
      return <ProjectDetail slug={route.slug} />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    default:
      return (
        <main className="page page-narrow">
          <p className="eyebrow">Not Found</p>
          <h1>页面未找到</h1>
          <p className="en-note">The requested archive page does not exist.</p>
        </main>
      );
  }
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const route = useMemo(() => getRoute(pathname), [pathname]);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  function navigate(event) {
    const link = event.target.closest("a[data-link]");
    if (!link) return;
    const url = new URL(link.href);
    if (url.origin !== window.location.origin) return;
    event.preventDefault();
    window.history.pushState({}, "", url.pathname);
    setPathname(url.pathname);
  }

  return (
    <Layout currentPath={pathname} onNavigate={navigate}>
      {renderRoute(route)}
    </Layout>
  );
}
