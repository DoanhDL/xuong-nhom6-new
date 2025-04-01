// 📌 src/components/Footer.tsx
import React from "react";
import { ShieldCheck, Trophy, Package, Headphones } from "lucide-react";

const Footer = () => {
  return (
    <div className="font-sans">
      {/* Top Section */}
      <div className="bg-yellow-200 py-8 px-9 grid grid-cols-4 text-center border-b">
        <div className="flex flex-col items-center">
          <Trophy size={32} className="text-gray-700" />
          <p className="font-bold">High Quality</p>
          <p className="text-sm text-gray-600">crafted from top materials</p>
        </div>
        <div className="flex flex-col items-center">
          <ShieldCheck size={32} className="text-gray-700" />
          <p className="font-bold">Warranty Protection</p>
          <p className="text-sm text-gray-600">Over 2 years</p>
        </div>
        <div className="flex flex-col items-center">
          <Package size={32} className="text-gray-700" />
          <p className="font-bold">Free Shipping</p>
          <p className="text-sm text-gray-600">Order over 150$</p>
        </div>
        <div className="flex flex-col items-center">
          <Headphones size={32} className="text-gray-700" />
          <p className="font-bold">24 / 7 Support</p>
          <p className="text-sm text-gray-600">Dedicated support</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-8 px-8 grid grid-cols-4 gap-6 text-gray-700">
        {/* Logo & Address */}
        <div>
          <h2 className="text-2xl font-bold">Funiro.</h2>
          <p className="text-sm mt-2">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold">Links</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-bold">Help</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:underline">Payment Options</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold">Newsletter</h3>
          <div className="mt-2 flex border border-gray-400 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-2 py-1 w-full text-sm focus:outline-none"
            />
            <button className="bg-black text-white px-3 py-1">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-600 py-4 border-t">
        2023 Funiro. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
