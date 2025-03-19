import React, { useState } from "react";

const categories = [
    { id: 1, name: "Sofathree", price: "Rp 2.500.000", img: "https://source.unsplash.com/150x150/?sofa" },
    { id: 2, name: "Lediana", price: "Rp 3.000.000", img: "https://source.unsplash.com/150x150/?chair" },
    { id: 3, name: "Loolia", price: "Rp 2.800.000", img: "https://source.unsplash.com/150x150/?table" },
    { id: 4, name: "Resepio", price: "Rp 5.000.000", img: "https://source.unsplash.com/150x150/?furniture" },
    { id: 5, name: "Sofathree", price: "Rp 2.500.000", img: "https://source.unsplash.com/150x150/?couch" },
    { id: 6, name: "Lediana", price: "Rp 3.000.000", img: "https://source.unsplash.com/150x150/?armchair" },
    { id: 7, name: "Loolia", price: "Rp 2.800.000", img: "https://source.unsplash.com/150x150/?desk" },
    { id: 8, name: "Resepio", price: "Rp 5.000.000", img: "https://source.unsplash.com/150x150/?home" },
];

export default function ShopPage() {
    const [itemsPerPage, setItemsPerPage] = useState(16);
    const [sortBy, setSortBy] = useState("default");

    return (
        <div className="font-sans">
            {/* Header */}
            <header className="flex justify-between items-center p-4 shadow-md bg-white">
                <h1 className="text-2xl font-bold">Furniro</h1>
                <nav className="flex space-x-6 justify-center flex-1">
                    <a href="#" className="text-gray-700">Home</a>
                    <a href="#" className="text-gray-700">Shop</a>
                    <a href="#" className="text-gray-700">About</a>
                    <a href="#" className="text-gray-700">Contact</a>
                </nav>
                <div className="flex space-x-4">
                    <span>👤</span>
                    <span>🔍</span>
                    <span>❤️</span>
                    <span>🛒</span>
                </div>
            </header>

            {/* Banner */}
            <div className="relative h-56 flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1200x300/?furniture')" }}>
                <h2 className="text-3xl font-bold text-white">Shop</h2>
                <p className="absolute bottom-4 text-gray-200">Home &gt; Shop</p>
            </div>

            {/* Filter and Sorting */}
            <div className="flex justify-between items-center p-4 bg-gray-50">
                <button className="flex items-center space-x-2 text-gray-700">
                    <span>Filter</span>
                </button>
                <p>Showing 1-{itemsPerPage} of 32 results</p>
                <div className="flex items-center space-x-4">
                    <label>Show</label>
                    <input
                        type="number"
                        className="w-12 border px-2"
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(e.target.value)}
                    />
                    <label>Short by</label>
                    <select
                        className="border px-2"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="price">Price</option>
                        <option value="popularity">Popularity</option>
                    </select>
                </div>
            </div>

            {/* Categories */}
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
        </div>
    );
}
