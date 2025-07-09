import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { addToWaitlist } from "../api/waitlist";

export function GrubzLandingPage() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      document.documentElement.setAttribute("data-theme", "light");
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Please enter an email.");
    setLoading(true);

    try {
      const data = await addToWaitlist(email);
      alert("✅ Successfully joined the waitlist!");
      setEmail(""); // reset input
    } catch (error: any) {
      alert("❌ Failed to join: " + (error.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#F9F9F9] dark:bg-[#121212] text-[#212121] dark:text-white font-sans transition-colors duration-300">
      {/* Toggle Theme Button */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300 hover:bg-gray-300/80 dark:hover:bg-gray-600/80 transition-all duration-200 backdrop-blur-sm border border-gray-300/50 dark:border-gray-600/50"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#FFF5EB] dark:bg-[#2B2B2B] relative overflow-hidden">
        <motion.img
          src="/grubz-high-logo-t2.png"
          alt="Grubz Logo"
          className="w-[24rem] h-32 md:w-[36rem] md:h-40 mb-8 z-10 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-[#00BFA6] mb-6 z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Your next meal, just a tap away 🍽️
        </motion.h2>
        <motion.p
          className="text-base md:text-xl max-w-xl mb-8 text-gray-700 dark:text-gray-300 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          From campus cafeterias to your neighborhood favorites — Grubz brings the food you love, right where you are.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF8D00] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition"
                onClick={() => {
                formRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
            >
                🚀 Join the Waitlist
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#FF8D00] text-[#FF8D00] px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 dark:hover:bg-[#3A3A3A] transition"
            >
                ✨ Get Early Access
            </motion.button>
          </motion.div>
        <div className="absolute -bottom-20 -left-20 w-[150%] h-96 bg-[#FF8D00]/10 rounded-full blur-3xl z-0"></div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white dark:bg-[#1E1E1E] py-12 px-4">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 text-center">
          <div>
            <p className="text-4xl">🍔</p>
            <h3 className="text-xl font-semibold mt-2">All Your Favorite Spots</h3>
            <p className="mt-1">Order from your campus cafeteria or favorite local restaurants in one place.</p>
          </div>
          <div>
            <p className="text-4xl">⏱️</p>
            <h3 className="text-xl font-semibold mt-2">Skip the Lines</h3>
            <p className="mt-1">Pre-order, pay, and pick up — hassle-free.</p>
          </div>
          <div>
            <p className="text-4xl">🏡</p>
            <h3 className="text-xl font-semibold mt-2">Smart Food Access</h3>
            <p className="mt-1">Bringing modern food ordering to schools, offices, and gated communities.</p>
          </div>
        </div>
      </section>

      {/* Sneak Peek Section */}
      <section className="py-16 px-4 text-center bg-[#FFF6ED] dark:bg-[#2B2B2B]">
        <h2 className="text-3xl font-bold mb-4">Sneak Peek 👀</h2>
        <p className="text-lg mb-8">Here’s a little taste of what we’re building for you...</p>
        <div className="relative mx-auto max-w-md h-[1000px] w-full rounded-2xl overflow-hidden shadow-xl border border-[#FF8D00]/20 dark:border-gray-700 bg-white dark:bg-[#1E1E1E]">
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/50 dark:bg-[#121212]/50 flex items-center justify-center text-xl text-gray-600 dark:text-gray-300 font-medium z-10">
            Coming Soon...
          </div>
          <img
            src="/sneak-preview-placeholder.png"
            alt="Grubz App Preview"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 text-center bg-[#FFF6ED] dark:bg-[#2B2B2B]">
        <h2 className="text-3xl font-bold mb-4">Launching soon at USIU - Africa 🎉</h2>
        <p className="text-lg">More campuses and communities coming soon!</p>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 text-center bg-white dark:bg-[#1E1E1E]">
        <h3 className="text-2xl font-semibold mb-2">Be the first to know when Grubz drops</h3>
        <p className="mb-4">Join our early access list & get exclusive launch deals!</p>
        <form
          ref={formRef}
          onSubmit={handleJoinWaitlist}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 w-full sm:w-2/3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF8D00]"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#FF8D00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition disabled:opacity-50"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#F9F9F9] dark:bg-[#121212] py-6 text-center text-sm text-[#6B7280] dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Grubz. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Partner with Grubz</a>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://instagram.com/getgrubz" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8D00] transition">
            <span className="text-xl">📸</span> <span className="sr-only">Instagram</span>
          </a>
          <a href="https://twitter.com/getgrubz" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8D00] transition">
            <span className="text-xl">🐦</span> <span className="sr-only">Twitter</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
