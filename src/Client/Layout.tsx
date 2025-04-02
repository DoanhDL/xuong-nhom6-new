import React from "react";

const FurnitureLanding = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center px-10">
        <h1 className="text-2xl font-bold text-gray-800">Furniro</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-600">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section - Full Image Banner */}
      <section className="w-full h-[500px]">
        <img 
          src="https://printgo.vn/uploads/media/792227/banner-quang-cao-tra-sua-1_1623309813.jpg" 
          alt="Furniture Banner" 
          className="w-full h-full object-cover"
        />
      </section>
      
      {/* Categories Section */}
      <section className="py-16 px-10 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Browse The Range</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="https://source.unsplash.com/400x250/?livingroom" alt="Living Room" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="https://source.unsplash.com/400x250/?bedroom" alt="Bedroom" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="https://source.unsplash.com/400x250/?kitchen" alt="Kitchen" className="w-full h-48 object-cover" />
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 px-10 bg-white text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Products</h3>
        <div className="grid grid-cols-4 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md bg-white p-4 text-center">
            <img src="https://source.unsplash.com/300x200/?sofa" alt="Modern Sofa" className="w-full h-48 object-cover mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">Modern Sofa</h4>
            <p className="text-yellow-500 font-bold">$499</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md bg-white p-4 text-center">
            <img src="https://source.unsplash.com/300x200/?chair" alt="Stylish Chair" className="w-full h-48 object-cover mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">Stylish Chair</h4>
            <p className="text-yellow-500 font-bold">$199</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md bg-white p-4 text-center">
            <img src="https://source.unsplash.com/300x200/?table" alt="Wooden Table" className="w-full h-48 object-cover mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">Wooden Table</h4>
            <p className="text-yellow-500 font-bold">$299</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md bg-white p-4 text-center">
            <img src="https://source.unsplash.com/300x200/?bed" alt="Cozy Bed" className="w-full h-48 object-cover mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">Cozy Bed</h4>
            <p className="text-yellow-500 font-bold">$699</p>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16 px-10 bg-gray-50 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">50+ Beautiful Rooms Inspiration</h3>
        <p className="text-gray-600 mb-6">Discover our carefully curated collection of stunning interiors.</p>
        <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600">
          Explore More
        </button>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-10 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">#FurnitureLovers</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="https://source.unsplash.com/400x300/?interior" alt="Interior 1" className="w-full h-40 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="https://source.unsplash.com/400x300/?modern-room" alt="Interior 2" className="w-full h-40 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="https://source.unsplash.com/400x300/?home-design" alt="Interior 3" className="w-full h-40 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="https://source.unsplash.com/400x300/?scandinavian" alt="Interior 4" className="w-full h-40 object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-10">
        <p>&copy; 2025 Furniro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FurnitureLanding;
