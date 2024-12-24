import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navber() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-6" />
        <h1 className="text-xl font-bold">Furniro</h1>
      </div>

  
      <div className="flex space-x-6 text-lg">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        <Link href="/shop" className="hover:text-gray-700">Shop</Link>
        <Link href="/about" className="hover:text-gray-700">About</Link>
        <Link href="/contact" className="hover:text-gray-700">Contact</Link>
      </div>

      <div className="flex items-center space-x-4 text-2xl">
        <AiOutlineUser className="hover:text-gray-700 cursor-pointer" />
        <FiSearch className="hover:text-gray-700 cursor-pointer" />
        <AiOutlineHeart className="hover:text-gray-700 cursor-pointer" />
        <AiOutlineShoppingCart className="hover:text-gray-700 cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navber;
