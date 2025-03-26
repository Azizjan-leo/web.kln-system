import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Онлайн-Магазин. Все права защищены.</p>
        <nav className="footer-links">
          <a href="/about">О нас</a>
          <a href="/contact">Контакты</a>
          <a href="/terms">Условия использования</a>
          <a href="/privacy">Политика конфиденциальности</a>
        </nav>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;