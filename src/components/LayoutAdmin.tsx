import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Menu, ShoppingCart, Users, Settings, Bell, Grid } from "lucide-react";

const data = [
  { name: "Jan", current: 4000, previous: 3200 },
  { name: "Feb", current: 3000, previous: 2700 },
  { name: "Mar", current: 5000, previous: 4100 },
  { name: "Apr", current: 4500, previous: 3900 },
  { name: "May", current: 6000, previous: 5100 },
  { name: "Jun", current: 7000, previous: 6500 },
];
type LayoutAdmin={
  children: React.ReactNode;
};

const LayoutAdmin = ({children}: LayoutAdmin) => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="bg-white shadow-md h-screen p-4 w-64 flex flex-col">
        <div className="flex items-center space-x-2 pb-4 border-b">
          <Menu className="w-6 h-6 cursor-pointer" />
          <h1 className="text-xl font-bold">Flowbite</h1>
        </div>
        <nav className="mt-4 space-y-2 flex-1">
          <Link to="/" className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded">
            <Grid className="w-5 h-5" /> Dashboards
          </Link>
          <Link to="/category" className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded">
            <ShoppingCart className="w-5 h-5" /> Category
          </Link>
          <Link to="/users" className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded">
            <Users className="w-5 h-5" /> Users
          </Link>
          <Link to="/settings" className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>
        <input
          type="text"
          placeholder="Search..."
          className="mt-4 p-2 border rounded-md w-full focus:outline-none"
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 cursor-pointer" />
            <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>  


        </header>
      
           {children}
        

        {/* Stats Section */}

        {/* Chart */}
     
      </main>
    </div>
  );
};

export default LayoutAdmin;