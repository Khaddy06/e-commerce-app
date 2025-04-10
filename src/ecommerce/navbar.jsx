import React, { useContext } from 'react';
import { ProductContext } from '../App';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi2';

function Navbar() {
  const { cart } = useContext(ProductContext);
  const cartItemCount = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md px-4 sm:px-10 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        
      
        <div className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-wide text-center sm:text-left">
          Pre-Order
          <span className="block text-blue-500 -mt-1">Anything</span>
        </div>

        
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center text-white text-lg font-medium text-center">
          <Link
            to="/"
            className="hover:text-blue-400 hover:underline underline-offset-4 transition duration-200"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-400 hover:underline underline-offset-4 transition duration-200"
          >
         
          </Link>

       
          <div className="relative">
            <Link to="/cart" className="text-3xl hover:text-blue-400 transition">
              <HiOutlineShoppingCart />
            </Link>

            {cartItemCount > 0 && (
              <div className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md animate-bounce">
                {cartItemCount}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
