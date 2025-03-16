import React from "react";

const categories = [
    { id: 1, name: "Sofathree", price: "Rp 2.500.000", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Lediana", price: "Rp 3.000.000", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Loolia", price: "Rp 2.800.000", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Resepio", price: "Rp 5.000.000", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Sofathree", price: "Rp 2.500.000", img: "https://via.placeholder.com/150" },
    { id: 6, name: "Lediana", price: "Rp 3.000.000", img: "https://via.placeholder.com/150" },
    { id: 7, name: "Loolia", price: "Rp 2.800.000", img: "https://via.placeholder.com/150" },
    { id: 8, name: "Resepio", price: "Rp 5.000.000", img: "https://via.placeholder.com/150" },
];

const Category = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-6">Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-500">{item.price}</p>
                        <button className="mt-2 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
