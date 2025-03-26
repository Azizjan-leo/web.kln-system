import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-container">
      <div className="hero-section">
        <h1>Добро пожаловать в магазин!</h1>
        <p>Откройте для себя лучшие товары по отличным ценам.</p>
        <button className="shop-now" onClick={() => navigate("/shop")}>Перейти в каталог</button>
      </div>
    </main>
  );
}

export default Home;