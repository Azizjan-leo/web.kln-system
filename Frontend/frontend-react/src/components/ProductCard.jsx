
import React, { useState } from "react";
import "../Styles/ProductCard.css";

const ProductCard = ({ product, isExpanded, onToggle }) => {
  if (!product) return null;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: {product.price} $</p>
      <p className={`description ${isExpanded ? "expanded" : ""}`}>
        {product.description}
      </p>
      <div className="btn-container">
        <button onClick={onToggle} className="toggle-btn">
          {isExpanded ? "Скрыть" : "Читать дальше"}
        </button>
        <button className="add-to-basket">Add to Basket</button>
      </div>
    </div>
  );
};

export default ProductCard;