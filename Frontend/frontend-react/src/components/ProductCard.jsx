function ProductCard({ product }) {
    return (
      <div className="product-card">
        <h3>{product.name}</h3>
        <p>Цена: {product.price} ₽</p>
        <button>Добавить в корзину</button>
      </div>
    );
  }
  
  export default ProductCard;
  