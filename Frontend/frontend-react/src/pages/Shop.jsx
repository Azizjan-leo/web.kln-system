import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import kurtka from '../assets/kurtka.jpeg';
import '../Styles/Shop.css';

function Shop() {
  const [expandedId, setExpandedId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [products] = useState ([
    {
      id: 1,
      name: "Winter Jacket",
      image: kurtka,
      price: 2500,
      description: "Warm and comfortable winter jacketWarm m and comfortable winter jacketand comfortable winter jacketWarm and comfortable winter jacket.",
    },
    {
      id: 2,
      name: "Winter Jacket",
      image: kurtka,
      price: 2500,
      description: "Warm and comfortable winter jacketm and comfortable winter jacketm and comfortable winter jacket.",
    },
    {
      id: 3,
      name: "Winter Jacket",
      image: kurtka,
      price: 2500,
      description: "Warm and comfortable winter jacket.",
    },
    {
      id: 4,
      name: "Winter Jacket",
      image: kurtka,
      price: 2500,
      description: "Warm and comfortable winter jacket.",
    },
    {
      id: 5,
      name: "Winter Jacket",
      image: kurtka,
      price: 2500,
      description: "Warm and comfortable winter jacket.",
    },
    {
      id: 6,
      name: "Winter Jacket",
      image: kurtka,
      price: 2500,
      description: "Warm and comfortable winter jacket.",
    },
    {
      id: 7,
      name: "Winter Jacket",
      image: kurtka,
      price: 2500,
      description: "Warm and comfortable winter jacket.",
    },
    {
      id: 8,
      name: "Winter Jacket",
      image: kurtka,
      price: 2500,
      description: "Warm and comfortable winter jacketarm and comfortable winter jacketarm and comfortable winter jacketarm and comfortable winter jacket.",
    },
    {
      id: 9,
      name: "Winter Jacket",
      image: kurtka,
      price: 2500,
      description: "Warm and comfortable winter jacketarm and comfortable winter jacketarm and comfortable winter jacket.",
    },
    {
      id: 10,
      name: "Winter Jacket",
      image: kurtka,
      price: 2500,
      description: "Warm and comfortable winter jacketarm and comfortable winter jacket.",
    },
  ]);

  return (
    <main>
      <div className="header2">
        <div className="hamburger-wrapper">
          <div
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
          {menuOpen && (
            <div className="dropdown-right">
              <a href="/contact">📞 Contact</a>
              <a href="/about">ℹ About Us</a>
              <a href="/others">📦 And Others</a>
            </div>
          )}
        </div>
        <input type="text" className="search-input" placeholder="type text" />
      </div>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id + Math.random()} // добавляем уникальность, так как раньше id повторялись
            product={product}
            isExpanded={expandedId === product.id}
            onToggle={() =>
              setExpandedId((prevId) => (prevId === product.id ? null : product.id))
            }
          />
        ))}
      </div>
    </main>
  );
}

export default Shop;
