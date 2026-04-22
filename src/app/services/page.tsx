"use client";
import { ShieldCheck, Gauge, PenTool, Zap, Car, HelpCircle } from "lucide-react";

const services = [
  {
    title: "EXOTIC RENTAL",
    desc: "Drive the world's most exclusive supercars for a day or a month. No limits.",
    icon: <Car className="w-10 h-10 text-red-600" />,
  },
  {
    title: "VIP MAINTENANCE",
    desc: "Expert mechanics trained in Italy and Germany for your high-performance engines.",
    icon: <PenTool className="w-10 h-10 text-red-600" />,
  },
  {
    title: "ARMORED SECURITY",
    desc: "Full vehicle bulletproofing and security upgrades for high-profile clients.",
    icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
  },
  {
    title: "PERFORMANCE TUNING",
    desc: "Stage 1 to Stage 3 remapping to unlock your car's true horsepower potential.",
    icon: <Gauge className="w-10 h-10 text-red-600" />,
  },
  {
    title: "GLOBAL DELIVERY",
    desc: "Air-freight shipping to any country in the world within 72 hours.",
    icon: <Zap className="w-10 h-10 text-red-600" />,
  },
  {
    title: "24/7 ROADSIDE",
    desc: "Anywhere you are, our helicopter rescue team is just a call away.",
    icon: <HelpCircle className="w-10 h-10 text-red-600" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-black text-white pt-32 pb-20 px-6 overflow-hidden">
    
      {/* Background VIP Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img 
          src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover opacity-30 scale-110 blur-sm"
          alt="Luxury Garage"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h4 className="text-red-600 font-bold tracking-[0.5em] mb-4">EXCLUSIVE PRIVILEGES</h4>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter">
            VIP <span className="text-red-600">SOLUTIONS</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div 
              key={index}
              className="group relative p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-red-600/50 transition-all duration-500 cursor-pointer"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-red-600 rounded-[40px] opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-extrabold mb-4 group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Arrow indicator */}
                <div className="mt-8 flex items-center text-sm font-bold text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  BOOK SERVICE <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 p-12 rounded-[50px] bg-gradient-to-r from-red-900/40 to-transparent border border-red-600/20 text-center">
          <h2 className="text-3xl font-bold mb-6 italic">NEED A CUSTOM VIP PACKAGE?</h2>
          <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-full font-black tracking-widest text-lg transition-all transform hover:scale-110 active:scale-95 shadow-2xl shadow-red-600/40">
            CONTACT CONCIERGE
          </button>
        </div>
      </div>
    </div>
  );
}