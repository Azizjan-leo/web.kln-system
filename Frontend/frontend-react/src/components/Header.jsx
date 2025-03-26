import { Link } from "react-router-dom";
import dodo from "../assets/dodo.png";
import "../Styles/Header.css"; // Подключаем стили

function Header() {
  return (
    <header className="header">
      <img src={dodo} alt="Dodo Logo" className="logo" />
      <nav>
        <Link to="/" className="nav-link">🏠 Главная</Link>
        <Link to="/shop" className="nav-link">🛍 Магазин</Link>
        <Link to="/cart" className="nav-link">🛒 Корзина</Link>
        <Link to="/contact" className="nav-link">📞 Контакты</Link>
        <Link to="/about" className="nav-link">ℹ О нас</Link>
      </nav>
      <div className="auth-buttons">
        <Link to="/login" className="nav-link login">🔑 Войти</Link>
        <Link to="/signup" className="nav-link signup">📝 Регистрация</Link>
      </div>
    </header>
  );
}

export default Header;

