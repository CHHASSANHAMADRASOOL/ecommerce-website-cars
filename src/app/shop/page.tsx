"use client";
import { useState } from "react";
import { Filter, Search, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
// Dummy Data for VIP Cars
const CAR_DATA = [
  { id: 1, brand: "Lamborghini", model: "Aventador SVJ", price: 517000, img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800", category: "Supercar" },
  { id: 2, brand: "Rolls Royce", model: "Phantom VII", price: 450000, img: "https://tse4.mm.bing.net/th/id/OIP._AiCk5x0nBr88a-63vnR4gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", category: "Luxury" },
  { id: 3, brand: "Porsche", model: "911 Turbo S", price: 216000, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800", category: "Sport" },
  { id: 4, brand: "Ferrari", model: "SF90 Stradale", price: 625000, img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800", category: "Supercar" },
  { id: 5, brand: "Mercedes", model: "G63 AMG", price: 179000, img: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&q=80&w=800", category: "SUV" },
  { id: 6, brand: "Bentley", model: "Continental GT", price: 235000, img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800", category: "Luxury" },
];

export default function InventoryPage() {
  const [filter, setFilter] = useState("All");

  const filteredCars = filter === "All" ? CAR_DATA : CAR_DATA.filter(car => car.category === filter);

  return (
    
    <div className="min-h-screen bg-black text-white pt-28 pb-10">
    <Navbar /> 
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black -z-10"></div>

      <div className="max-w-[1600px] mx-auto px-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter">THE <span className="text-red-600">COLLECTION</span></h1>
            <p className="text-gray-500 mt-2 font-medium tracking-widest text-sm underline decoration-red-600 underline-offset-8">AVAILABLE WORLDWIDE</p>
          </div>
          
          {/* Search Bar VIP */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search model, brand..." 
              className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-2xl focus:border-red-600 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-8">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold mb-6 italic"><Filter size={18}/> FILTERS</h3>
              <div className="space-y-3">
                {["All", "Supercar", "Luxury", "Sport", "SUV"].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`w-full text-left px-6 py-3 rounded-xl font-bold transition-all ${filter === cat ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-white/5 hover:bg-white/10 text-gray-400'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-red-600/10 border border-red-600/20 rounded-3xl">
              <h4 className="font-bold text-red-500 mb-2 italic">VIP ASSISTANCE</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Need help finding a specific rare car? Our agents are online 24/7.</p>
              <button className="mt-4 text-xs font-black underline hover:text-red-500">TALK TO AGENT</button>
            </div>
          </aside>

          {/* Car Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div key={car.id} className="group relative bg-[#0d0d0d] border border-white/5 rounded-[32px] overflow-hidden hover:border-red-600/40 transition-all duration-500">
                {/* Image Section */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={car.img} 
                    alt={car.model} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black tracking-widest border border-white/10">
                    {car.category.toUpperCase()}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-red-600 text-xs font-black tracking-widest">{car.brand.toUpperCase()}</p>
                      <h3 className="text-2xl font-bold mt-1">{car.model}</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-6">
                    <div>
                      <p className="text-gray-500 text-[10px] font-bold tracking-widest">PRICE</p>
                      <p className="text-xl font-black">${car.price.toLocaleString()}</p>
                    </div>
                    <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:translate-x-1">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}