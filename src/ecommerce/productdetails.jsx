import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductContext } from "../App";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadProduct = async () => {
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (response.ok) {
      const data = await response.json();
      setProduct(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  if (loading) {
    return <p className="text-black text-xl text-center py-10">Loading...</p>;
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white to-gray-50 px-4 sm:px-6 py-10 flex flex-col items-center">
    <h1 className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-700 mb-10 tracking-tight">
      Product Details
    </h1>
  
    {product && (
      <div className="w-full max-w-md sm:max-w-lg md:max-w-3xl bg-white p-6 sm:p-8 rounded-3xl border shadow-xl text-gray-700">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-contain mx-auto mb-6 transition-transform hover:scale-105 duration-300 max-h-72"
        />
  
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-center">
          {product.title}
        </h2>
  
        <p className="text-lg sm:text-xl md:text-2xl text-blue-700 mb-4 font-bold text-center">
          ${product.price}
        </p>
  
        <p className="mb-6 text-sm sm:text-base md:text-lg text-gray-600 text-center leading-relaxed">
          {product.description}
        </p>
  
        <div className="flex justify-center">
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white py-3 px-6 rounded-full text-base sm:text-lg font-medium shadow-md hover:bg-blue-500 transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    )}
  
    <Link
      to="/"
      className="text-blue-600 underline block mt-10 text-center hover:text-blue-800 text-sm sm:text-base md:text-lg transition"
    >
      ← Back to Products
    </Link>
  </div>
  
  );
}

export default ProductDetails;
