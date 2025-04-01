import React, {useState, useContext, createContext } from 'react';

// Tạo context
const ProductContext = createContext();

// Provider để cung cấp sản phẩm cho các component khác
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Syitherine", type: "Stylish chair", price: "Rp 2.500.000", image: "path/to/image1.jpg" },
    { id: 2, name: "Leviosa", type: "Luxury chair", price: "Rp 2.600.000", image: "path/to/image2.jpg" },
    { id: 3, name: "Lolito", type: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", image: "path/to/image3.jpg" },
    { id: 4, name: "Respira", type: "Outdoor table and stool", price: "Rp 500.000", image: "path/to/image4.jpg" },
  ]);

  // Hàm để cập nhật sản phẩm
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider value={{ products, updateProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook để sử dụng context
export const useProducts = () => useContext(ProductContext);
