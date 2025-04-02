// Layout.jsx
import Header from "./Header";
import Footer from "./Footer";
import "../Styles/Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
