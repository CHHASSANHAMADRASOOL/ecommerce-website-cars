"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <Navbar />

      {/* Background Car Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl p-10 rounded-[40px] border border-white/20 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white tracking-widest">{isLogin ? "WELCOME BACK" : "JOIN VIP CLUB"}</h2>
          <p className="text-gray-400 mt-2">{isLogin ? "Enter details to access your garage" : "Create account for exclusive access"}</p>
        </div>

        <form className="space-y-5">
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-red-600" />
          )}
          <input type="email" placeholder="Email Address" className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-red-600" />
          <input type="password" placeholder="Password" className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-red-600" />
          
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-600/20 transition-all transform active:scale-95">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-8 cursor-pointer hover:text-white transition-all" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign up" : "Already a member? Login"}
        </p>
      </div>
    </div>
  );
}