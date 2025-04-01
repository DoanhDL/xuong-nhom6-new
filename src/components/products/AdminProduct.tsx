import React, { useState } from "react";
import { Search, Edit, Trash2, PlusCircle, Save, XCircle } from "lucide-react";

const adminProducts = [
  { id: 1, name: "Syitherine", type: "Stylish chair", price: "Rp 2.500.000", image: "path/to/image1.jpg" },
  { id: 2, name: "Leviosa", type: "Luxury chair", price: "Rp 2.600.000", image: "path/to/image2.jpg" },
  { id: 3, name: "Lolito", type: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", image: "path/to/image3.jpg" },
  { id: 4, name: "Respira", type: "Outdoor table and stool", price: "Rp 500.000", image: "path/to/image4.jpg" },
];

const AdminProductManagement = () => {
  const [products, setProducts] = useState(adminProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", type: "", price: "", oldPrice: "", image: "" });

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
      setProducts(products.filter((product) => product.id !== id));
      alert("Xóa sản phẩm thành công!");
    }
  };

  const handleEdit = (product) => {
    setEditingProduct({ ...product });
  };

  const handleSave = () => {
    setProducts(
      products.map((product) =>
        product.id === editingProduct.id ? editingProduct : product
      )
    );
    setEditingProduct(null);
    alert("Cập nhật sản phẩm thành công!");
  };

  const handleAdd = () => {
    const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    setProducts([...products, { id: newId, ...newProduct }]);
    setNewProduct({ name: "", type: "", price: "", oldPrice: "", image: "" });
    setShowAddModal(false);
    alert("Thêm sản phẩm thành công!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin - Quản lý Sản phẩm</h1>
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow flex items-center" onClick={() => setShowAddModal(true)}>
          <PlusCircle size={20} className="mr-2" /> Thêm sản phẩm
        </button>
      </div>

      {/* Bảng quản lý sản phẩm */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Tên sản phẩm</th>
            <th className="border border-gray-300 p-2">Loại</th>
            <th className="border border-gray-300 p-2">Giá</th>
            <th className="border border-gray-300 p-2">Hình ảnh</th>
            <th className="border border-gray-300 p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => (
            <tr key={product.id} className="text-center border border-gray-300">
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">{product.type}</td>
              <td className="border border-gray-300 p-2">{product.price}</td>
              <td className="border border-gray-300 p-2">
                {product.image && <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />}
              </td>
              <td className="border border-gray-300 p-2 flex justify-center space-x-2">
                <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEdit(product)}><Edit size={18} /></button>
                <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(product.id)}><Trash2 size={18} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal thêm sản phẩm */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Thêm sản phẩm mới</h2>
            <input className="border p-2 w-full mb-2" placeholder="Tên sản phẩm" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            <input className="border p-2 w-full mb-2" placeholder="Loại" value={newProduct.type} onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })} />
            <input className="border p-2 w-full mb-2" placeholder="Giá" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            <input className="border p-2 w-full mb-2" type="file" accept="image/*" onChange={handleImageChange} />
            <div className="flex justify-end space-x-2">
              <button className="bg-gray-500 text-white px-4 py-2 rounded shadow" onClick={() => setShowAddModal(false)}>
                <XCircle size={18} className="mr-1" /> Hủy
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded shadow" onClick={handleAdd}>
                <Save size={18} className="mr-1" /> Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductManagement;
