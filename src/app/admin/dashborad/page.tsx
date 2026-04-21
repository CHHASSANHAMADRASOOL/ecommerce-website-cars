"use client";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cars fetch karne ka function
  useEffect(() => {
    fetch('/api/cars').then(res => res.json()).then(data => {
      setCars(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-bold tracking-tighter">VIP <span className="text-red-600">INVENTORY</span></h1>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-bold transition-all">
            + Add New Car
          </button>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading VIP Assets...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.map((car: any) => (
              <div key={car.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src={car.image} alt={car.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{car.brand} {car.model}</h3>
                  <p className="text-red-500 font-mono text-lg mt-2">${car.price.toLocaleString()}</p>
                  <div className="flex gap-4 mt-6">
                    <button className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded-lg text-sm">Edit</button>
                    <button className="flex-1 bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white py-2 rounded-lg text-sm transition-all">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}