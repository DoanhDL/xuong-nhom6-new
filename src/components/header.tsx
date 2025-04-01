import React from "react";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 border-b bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">Furniro</div>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-700 font-bold">Home</a>
        <a href="#" className="text-gray-700 font-bold">Shop</a>
        <a href="#" className="text-gray-700 font-bold">About</a>
        <a href="#" className="text-gray-700 font-bold">Contact</a>
      </div>
      <div className="flex space-x-4">
        <User className="text-gray-700 cursor-pointer hover:text-black" />
        <Search className="text-gray-700 cursor-pointer hover:text-black" />
        <Heart className="text-gray-700 cursor-pointer hover:text-black" />
        <ShoppingCart className="text-gray-700 cursor-pointer hover:text-black" />
      </div>
    </nav>
  );
};

export default Header;
