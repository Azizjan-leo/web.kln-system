import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import kurtka from '../assets/kurtka.jpeg'

function Shop() {
 const [products] = useState ([
   {
     id: 1,
     name: "Winter Jacket",
     image: kurtka,
     price: 2500,
     description: "Warm and comfortable winter jacket.",
   },
   {
     id: 2,
     name: "Winter Jacket",
     image: kurtka,
     price: 2500,
     description: "Warm and comfortable winter jacket.",
   },
   {
     id: 3,
     name: "Winter Jacket",
     image: kurtka,
     price: 2500,
     description: "Warm and comfortable winter jacket.",
   },
 ]);

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
