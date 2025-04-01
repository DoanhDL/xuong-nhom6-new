import React, { useState } from "react";
import { Search, Share2, Shuffle, Heart } from "lucide-react";
import Footer from "./../Footer";
import Header from "../header";


const products = [
  { id: 1, name: "Syitherine", type: "Stylish chair", price: "Rp 2.500.000", img: "https://picsum.photos/2000/500", discount: "30%" },
  { id: 2, name: "Leviosa", type: "Luxury chair", price: "Rp 2.600.000", img: "https://picsum.photos/2000/500" },
  { id: 3, name: "Lolito", type: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", img: "https://picsum.photos/2000/500", discount: "50%" },
  { id: 4, name: "Respira", type: "Outdoor table and stool", price: "Rp 500.000", img: "https://picsum.photos/2000/500", tag: "New" },
  { id: 5, name: "Aurora", type: "Modern sofa", price: "Rp 5.200.000", img: "https://picsum.photos/2000/500", discount: "20%" },
  { id: 6, name: "Nimbus", type: "Classic chair", price: "Rp 3.800.000", img: "https://picsum.photos/2000/500" },
  { id: 7, name: "Velaris", type: "Office desk", price: "Rp 4.700.000", oldPrice: "Rp 6.500.000", img: "https://picsum.photos/2000/500", discount: "40%" },
  { id: 8, name: "Celestia", type: "Wooden stool", price: "Rp 900.000", img: "https://picsum.photos/2000/500", tag: "New" },
];

const ShopPage = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto font-sans">
      <Header />

      {/* Banner */}
      <div className="banner">
        <img src="https://picsum.photos/2000/500" alt="Banner" />
      </div>

      {/* Tìm kiếm & Câu Quote */}
      <div className="flex justify-between items-center mt-6 px-10">
        <div className="text-gray-600 italic text-lg">
          🥤 "Mỗi ly trà sữa là một niềm vui - hãy tìm hương vị dành riêng cho bạn!"
        </div>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="grid grid-cols-4 gap-6 px-6 py-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => ( 
            <div
              key={product.id}
              className="border p-4 bg-white shadow-md relative overflow-hidden group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Giảm giá & Tag */}
              {product.discount && (
                <div className="absolute top-2 left-2 z-10 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                  {product.discount}
                </div>
              )}
              {product.tag && (
                <div className="absolute top-2 right-2 z-10 bg-green-500 text-white px-2 py-1 text-xs font-bold">
                  {product.tag}
                </div>
              )}

              {/* Hình ảnh sản phẩm */}
              <div className="relative">
                <img src={product.img} alt={product.name} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" />
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 transition-opacity duration-300 z-20">
                    <button className="bg-white text-black font-semibold px-4 py-2 rounded mb-2">Add to cart</button>
                    <div className="flex space-x-4 text-white">
                      <button className="flex items-center space-x-1 hover:text-gray-300">
                        <Share2 size={16} /> <span>Share</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-gray-300">
                        <Shuffle size={16} /> <span>Compare</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-gray-300">
                        <Heart size={16} /> <span>Like</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Thông tin sản phẩm */}
              <div className="mt-4">
                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.type}</p>
                <p className="text-md font-semibold text-gray-900">{product.price}</p>
                {product.oldPrice && <p className="text-sm line-through text-gray-500">{product.oldPrice}</p>}
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">Không tìm thấy sản phẩm</p>
        )}
      </div>

      {/* Phân trang */}
      <div className="flex justify-center space-x-2 py-6">
        <button className="px-3 py-1 bg-yellow-600 text-white rounded">1</button>
        <button className="px-3 py-1 border rounded">2</button>
        <button className="px-3 py-1 border rounded">3</button>
        <button className="px-3 py-1 border rounded">Next</button>
      </div>
      
      <Footer />
    </div>
  );
};

export default ShopPage;
