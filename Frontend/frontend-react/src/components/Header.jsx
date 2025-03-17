import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">🏠 Главная</Link>
        <Link to="/shop">🛍 Магазин</Link>
        <Link to="/cart">🛒 Корзина</Link>
      </nav>
    </header>
  );
}

export default Header;
