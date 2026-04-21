"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (res.ok) setStatus("Message Sent Successfully!");
    else setStatus("Error sending message.");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-20 px-4">
      <Navbar />
      {/* Background VIP Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover grayscale-[50%]" 
          alt="Contact Background"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" type="text" placeholder="Your Name" className="bg-white/5 border border-white/20 p-4 rounded-xl text-white outline-none focus:border-red-500" required />
          <input name="email" type="email" placeholder="Email Address" className="bg-white/5 border border-white/20 p-4 rounded-xl text-white outline-none focus:border-red-500" required />
          <textarea name="message" placeholder="Describe your dream car..." className="md:col-span-2 bg-white/5 border border-white/20 p-4 rounded-xl text-white h-40 outline-none focus:border-red-500" required></textarea>
          <button type="submit" className="md:col-span-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all">
            {status || "Send VIP Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}