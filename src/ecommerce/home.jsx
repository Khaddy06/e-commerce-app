import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../App";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const {addToCart, cart } = useContext(ProductContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    localStorage.setItem("products", JSON.stringify(result));
    setItems(result);
    setLoading(false);
  };

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    if (savedProducts) {
      setItems(savedProducts);
    }
    getProducts();
  }, []);

  if (loading && items.length === 0) {
    return (
      <div className="container bg-white h-screen max-w-full">
        <h1 className="text-center font-bold text-3xl text-black pt-4">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        <span className="inline-block border-b-4 border-blue-500 pb-1">
          Product List
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((product) => {
        
          const isInCart = cart.some((item)=> item.id===product.id)

          return (
            <div
              key={product.id}
              className="bg-white border p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <Link
                to={`/${product.id}`}
                className="flex flex-col items-center text-center flex-grow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 object-contain mb-6 transition-transform duration-300 hover:scale-105"
                />
                <h2 className="font-semibold text-xl mb-1 text-gray-800">{product.title}</h2>
                <p className="text-blue-600 font-semibold mb-2">${product.price}</p>
              </Link>

              
              
                {isInCart && (
                  <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-medium px-2 py-1 
                rounded-full shadow-xl">
                  In Cart
                </div>)}
             

            
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white py-2 px-4 rounded-xl mt-4 hover:bg-blue-500 transition-all duration-200 font-medium"
              >
              Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
