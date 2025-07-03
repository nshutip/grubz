import React from "react";

export function GrubzLandingPage() {
  return (
    <main className="bg-[#F9F9F9] text-[#212121] font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#FF6D00] mb-4">Grubz</h1>
        <p className="text-xl md:text-2xl font-medium mb-2">Savor the taste of convenience 🍽️</p>
        <p className="text-base md:text-lg mb-6 max-w-xl">
          Your go-to food app for campus life, offices & community spaces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#FF6D00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Join the Waitlist
          </button>
          <button className="border border-[#FF6D00] text-[#FF6D00] px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition">
            Get Early Access
          </button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-12 px-4">
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

      {/* Coming Soon Section */}
      <section className="py-16 px-4 text-center bg-[#FFF6ED]">
        <h2 className="text-3xl font-bold mb-4">Launching soon at USIU - Africa 🎉</h2>
        <p className="text-lg">More campuses and communities coming soon!</p>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 text-center bg-white">
        <h3 className="text-2xl font-semibold mb-2">Be the first to know when Grubz drops</h3>
        <p className="mb-4">Join our early access list & get exclusive launch deals!</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-full sm:w-2/3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6D00]"
          />
          <button className="bg-[#FF6D00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Join Waitlist
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#F9F9F9] py-6 text-center text-sm text-[#6B7280]">
        <p>&copy; {new Date().getFullYear()} Grubz. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Partner with Grubz</a>
        </div>
      </footer>
    </main>
  );
}