import React from "react";
import { Plus, Edit, Trash2, Menu } from "lucide-react";

const CategoryPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* Sidebar */}


      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}


        {/* Content */}
        <main className="p-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Form thêm danh mục */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Nhập danh mục mới..."
                className="border p-2 flex-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-1 hover:bg-blue-700">
                <Plus size={18} /> Thêm
              </button>
            </div>

            {/* Bảng danh mục */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border">#</th>
                    <th className="py-2 px-4 border">Tên danh mục</th>
                    <th className="py-2 px-4 border">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td className="py-2 px-4 text-center">1</td>
                    <td className="py-2 px-4">Điện tử</td>
                    <td className="py-2 px-4 flex justify-center gap-2">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 flex items-center gap-1">
                        <Edit size={16} /> Sửa
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 flex items-center gap-1">
                        <Trash2 size={16} /> Xóa
                      </button>
                    </td>
                  </tr>
                  <tr className="border">
                    <td className="py-2 px-4 text-center">2</td>
                    <td className="py-2 px-4">Thời trang</td>
                    <td className="py-2 px-4 flex justify-center gap-2">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 flex items-center gap-1">
                        <Edit size={16} /> Sửa
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 flex items-center gap-1">
                        <Trash2 size={16} /> Xóa
                      </button>
                    </td>
                  </tr>
                  <tr className="border">
                    <td className="py-2 px-4 text-center">3</td>
                    <td className="py-2 px-4">Đồ gia dụng</td>
                    <td className="py-2 px-4 flex justify-center gap-2">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 flex items-center gap-1">
                        <Edit size={16} /> Sửa
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 flex items-center gap-1">
                        <Trash2 size={16} /> Xóa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;