"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, User, Gauge, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll effect for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "INVENTORY", href: "/shop" },
    { name: "VIP SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
    { name: "SEARCHBAR", href: "/search" },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
        ? "bg-black/70 backdrop-blur-2xl border-b border-red-600/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
        : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 flex justify-between items-center">
        
        {/* LOGO - Speed & Luxury Branding */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-red-600 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative w-12 h-12 bg-black border border-white/10 rounded-lg flex items-center justify-center">
               <Gauge className="text-red-600 group-hover:rotate-[360deg] transition-transform duration-1000" size={28} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white italic">
              WILD<span className="text-red-600">WONDERS</span>
            </span>
            <div className="flex items-center gap-1">
               <Zap size={10} className="text-red-600 fill-red-600" />
               <span className="text-[9px] tracking-[0.3em] text-gray-400 font-bold uppercase">Ultimate Garage</span>
            </div>
          </div>
        </Link>

        {/* CENTER LINKS - Premium Minimalist */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-[11px] font-black tracking-[0.25em] transition-all duration-300 relative group ${
                pathname === link.href ? "text-red-600" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-red-600 transition-all duration-300 ${
                pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          ))}
        </div>

        {/* RIGHT ACTIONS - Cart & VIP Access */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Cart Icon with Notification */}
          <Link href="/cart" className="relative text-gray-300 hover:text-red-600 transition-colors transform hover:scale-110">
            <ShoppingCart size={22} strokeWidth={2.5} />
            <span className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-black border-2 border-black">
              2
            </span>
          </Link>

          {/* VIP Access Button */}
          <Link 
            href="/auth" 
            className="group relative overflow-hidden px-8 py-3 rounded-full bg-white/5 border border-white/10 transition-all hover:border-red-600/50"
          >
            <div className="absolute inset-0 bg-red-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-2">
              <User size={16} className="text-red-600 group-hover:text-white transition-colors" />
              <span className="text-[11px] font-black tracking-widest text-white">VIP ACCESS</span>
            </div>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE DRAWER - App Like Experience */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-black/95 backdrop-blur-3xl z-[150] p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
               <span className="text-xl font-black italic">MENU</span>
               <button onClick={() => setIsOpen(false)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                 <X size={24} />
               </button>
            </div>
            
            <div className="flex flex-col gap-10">
              {navLinks.map((link, idx) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-black text-white hover:text-red-600 transition-all flex items-center gap-4 group"
                >
                  <span className="text-red-600 text-sm font-mono">0{idx + 1}</span>
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <Link 
                href="/cart" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-5 border border-white/10 rounded-2xl font-bold"
              >
                <ShoppingCart size={20} /> VIEW CART
              </Link>
              <Link 
                href="/auth" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-5 bg-red-600 rounded-2xl font-black text-lg"
              >
                VIP LOGIN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}