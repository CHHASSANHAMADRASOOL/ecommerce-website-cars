import Link from 'next/link';
import Navbar from '@/components/Navbar';
export default function HomePage() {

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <Navbar />
      {/* Background Video or High-Res Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920" 
          alt="VIP Car Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-6">
          DRIVE <span className="text-red-600">LUXURY</span>
        </h1>
        <p className="text-gray-300 text-xl max-w-2xl mb-8">
          Experience the pinnacle of automotive excellence. Secure your dream car today with our VIP collection.
        </p>
        <div className="flex gap-4">
          <Link href="/shop" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
            View Inventory
          </Link>
          <Link href="/contact" className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
            Contact VIP Sales
 
          </Link>
 
        </div>
      </main>
    </div>
  );
}