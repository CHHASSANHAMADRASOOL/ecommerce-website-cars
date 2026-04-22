"use client";
import { useState } from "react";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";


export default function CartPage() {
  // Dummy Cart Data (Real app mein yeh Context ya Redux se aayega)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      brand: "Lamborghini",
      model: "Aventador SVJ",
      price: 517000,
      img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=300",
      qty: 1
    },
    {
      id: 2,
      brand: "Porsche",
      model: "911 Turbo S",
      price: 216000,
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=300",
      qty: 1
    }
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.05; // 5% VIP Tax
  const total = subtotal + tax;

  const updateQty = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      
      {/* Background Car Silhouette */}
      <div className="fixed bottom-0 right-0 opacity-10 -z-10">
        <h1 className="text-[20vw] font-black italic leading-none select-none">CART</h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black italic mb-10 flex items-center gap-4">
          <ShoppingBag className="text-red-600" size={40} /> YOUR SELECTION
        </h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="group bg-white/5 border border-white/10 p-6 rounded-[30px] flex flex-col md:flex-row items-center gap-6 hover:border-red-600/30 transition-all">
                  <img src={item.img} alt={item.model} className="w-40 h-28 object-cover rounded-2xl" />
                  
                  <div className="flex-1">
                    <p className="text-red-600 font-bold text-xs tracking-widest">{item.brand}</p>
                    <h3 className="text-xl font-bold">{item.model}</h3>
                    <p className="text-gray-400 mt-1 font-mono">${item.price.toLocaleString()}</p>
                  </div>

                  <div className="flex items-center gap-4 bg-black/40 p-2 rounded-full border border-white/10">
                    <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center hover:text-red-600"><Minus size={16}/></button>
                    <span className="font-bold w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center hover:text-red-600"><Plus size={16}/></button>
                  </div>

                  <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-red-600 transition-colors p-2">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] backdrop-blur-xl sticky top-32">
                <h2 className="text-2xl font-bold mb-8 italic">SUMMARY</h2>
                
                <div className="space-y-4 border-b border-white/10 pb-6 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="text-white font-mono">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>VIP Luxury Tax (5%)</span>
                    <span className="text-white font-mono">${tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span className="text-green-500 font-bold tracking-widest text-xs italic">FREE (VIP)</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-10">
                  <span className="text-lg font-bold">TOTAL</span>
                  <span className="text-3xl font-black text-red-600 font-mono">${total.toLocaleString()}</span>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 group transition-all transform active:scale-95 shadow-xl shadow-red-600/20">
                  PROCEED TO CHECKOUT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>

                <p className="text-[10px] text-gray-500 text-center mt-6 tracking-widest uppercase">
                  Secure Encrypted VIP Transaction
                </p>
              </div>
            </div>

          </div>
        ) : (
          /* Empty Cart State */
          <div className="text-center py-40 bg-white/5 border border-dashed border-white/10 rounded-[50px]">
            <h2 className="text-3xl font-bold text-gray-500">Your garage is empty.</h2>
            <Link href="/shop" className="inline-block mt-6 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all">
              BROWSE CARS
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}