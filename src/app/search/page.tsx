"use client";
import { useState, useEffect } from "react";
import { Search, X, SlidersHorizontal, ChevronRight, Gauge, DollarSign } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Dummy Data - Aap isse NeonDB se bhi fetch kar sakte hain
const ALL_CARS = [
  { id: 1, name: "Lamborghini Aventador", brand: "Lamborghini", price: 517000, speed: "350 km/h", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800" },
  { id: 2, name: "Ferrari SF90", brand: "Ferrari", price: 625000, speed: "340 km/h", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800" },
  { id: 3, name: "Porsche 911 Turbo", brand: "Porsche", price: 216000, speed: "330 km/h", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800" },
  { id: 4, name: "Rolls Royce Phantom", brand: "Rolls Royce", price: 450000, speed: "250 km/h", img: "https://images.unsplash.com/photo-1631214503951-37510075f778?q=80&w=800" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(ALL_CARS);

  // Live Search Logic
  useEffect(() => {
    const filtered = ALL_CARS.filter(car => 
      car.name.toLowerCase().includes(query.toLowerCase()) || 
      car.brand.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 relative overflow-hidden">
      <Navbar />
      {/* Background VIP Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Search Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black italic tracking-tighter mb-4">FIND YOUR <span className="text-red-600">BEAST</span></h1>
          <p className="text-gray-500 tracking-[0.3em] text-xs">GLOBAL VIP INVENTORY SEARCH</p>
        </div>

        {/* VIP Search Bar */}
        <div className="relative max-w-3xl mx-auto mb-20 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-[30px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative flex items-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-2">
            <Search className="ml-6 text-gray-500" size={24} />
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by brand, model or keyword..."
              className="w-full bg-transparent border-none py-5 px-6 text-xl outline-none text-white placeholder:text-gray-600"
            />
            {query && (
              <button onClick={() => setQuery("")} className="p-4 text-gray-500 hover:text-white">
                <X size={20} />
              </button>
            )}
            <button className="bg-red-600 hover:bg-red-700 p-5 rounded-[22px] transition-all">
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.length > 0 ? (
            results.map((car) => (
              <Link href={`/shop/${car.id}`} key={car.id}>
                <div className="group flex items-center gap-6 bg-white/5 border border-white/5 p-4 rounded-[40px] hover:bg-white/10 transition-all cursor-pointer">
                  <div className="w-48 h-32 overflow-hidden rounded-[30px]">
                    <img src={car.img} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold italic">{car.name}</h3>
                    <div className="flex gap-4 mt-3">
                      <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        <Gauge size={12} className="text-red-600" /> {car.speed}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        <DollarSign size={12} className="text-red-600" /> {car.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pr-6">
                    <ChevronRight className="text-gray-700 group-hover:text-red-600 transition-colors" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-2 text-center py-20 opacity-40">
              <p className="text-2xl font-bold italic tracking-widest">NO MATCHES FOUND FOR "{query}"</p>
              <p className="mt-2">Try searching "Lamborghini" or "Ferrari"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}