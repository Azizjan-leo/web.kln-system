// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import kurtka from '../assets/kurtka.jpeg';

// const ProductCard = ({ productId }) => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`https://api.example.com/products/${productId}`);
//         setProduct(response.data);
//       } catch (error) {
//         setError(error.response?.data?.message || "Error in loading of data");
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchProduct();
//   }, [productId]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!product) return <p>Product not found</p>;



//   return ( 
//     <div className='product-card'>
//       <h3>{product.name}</h3>
//       <img src={kurtka} alt={product.name} />
//       <p>Price: {product.price || 2000}</p>
//       <p>Description: {product.description} || "sdvnsjdvnsndjkvnsnvsjk"</p>
//       <button>Add to Basket</button>
//     </div>
//   );
// };

// export default ProductCard;


import React from "react";
import "../Styles/ProductCard.css";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price} $</p>
      <p>Description: {product.description}</p>
      <button>Add to Basket</button>
    </div>
  );
};

export default ProductCard;
