import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://backend/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Ошибка загрузки:", error));
  }, []);

  return (
    <main>
      <h1>🛍 Магазин</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Shop;
