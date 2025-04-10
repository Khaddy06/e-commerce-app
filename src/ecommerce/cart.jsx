import React, { useContext } from "react";
import { ProductContext } from "../App";
import { Link } from "react-router-dom";

function cart() {
  const { cart, addToCart, removeFromCart } = useContext(ProductContext);
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
  
    {cart.length === 0 ? (
      <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-2xl border shadow-md flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {product.title}
            </h2>
            <p className="text-blue-700 text-lg font-semibold mb-1">
              ${product.price}
            </p>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-sm mb-1">Seller: {product.name}</p>
            <p className="text-sm mb-1">Quantity: {product.quantity}</p>
            <p className="text-sm font-medium mb-4">
              Total: ${(product.price * product.quantity).toFixed(2)}
            </p>
  
            <div className="flex justify-between mt-auto gap-2">
              <button
                className="bg-red-500 text-white px-3 py-2 rounded-xl w-full hover:bg-red-400 transition"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
              <button
                className="bg-blue-600 text-white px-3 py-2 rounded-xl w-full hover:bg-blue-500 transition"
                onClick={() => addToCart(product)}
              >
                Add One More
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  
    {cart.length > 0 && (
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    )}
  
    <Link
      to="/"
      className="text-blue-600 underline mt-6 block text-center hover:text-blue-800 transition"
    >
      ← Back to Products
    </Link>
  </div>
  
  );
}

export default cart;
