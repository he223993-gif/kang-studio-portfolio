import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function Layout({ children, currentPath, onNavigate }) {
  return (
    <div className="site-shell" onClick={onNavigate}>
      <Header currentPath={currentPath} />
      {children}
      <Footer />
    </div>
  );
}
