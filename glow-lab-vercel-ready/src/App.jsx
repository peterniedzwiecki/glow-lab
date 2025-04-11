import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function GlowLabStorefront() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold">GLOW LAB</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full h-[500px] bg-gray-100 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-light mb-4">Science-Driven Skincare</h2>
        <p className="text-gray-600 max-w-xl mb-6">Clean formulations, powerful results. Discover skincare solutions for every skin concern.</p>
        <Button className="rounded-2xl px-6 py-3 text-base">Shop Now</Button>
      </section>

      {/* Product Grid */}
      <section className="px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="rounded-2xl shadow-sm border border-gray-200">
            <CardContent className="p-4">
              <div className="h-60 bg-gray-200 rounded mb-4" />
              <h3 className="text-lg font-medium mb-1">Hydration Serum</h3>
              <p className="text-sm text-gray-600 mb-2">Lightweight, hyaluronic acid-based hydration.</p>
              <Button variant="outline" className="w-full rounded-xl">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Email Signup */}
      <section className="bg-gray-50 py-10 text-center px-6">
        <h3 className="text-xl font-medium mb-2">Join the Glow</h3>
        <p className="text-sm text-gray-600 mb-4">Get skincare tips and product updates straight to your inbox.</p>
        <input type="email" placeholder="Your email" className="border border-gray-300 rounded-l px-4 py-2 w-64" />
        <Button className="rounded-r px-6 py-2">Subscribe</Button>
      </section>

      {/* Footer */}
      <footer className="text-xs text-gray-500 text-center py-6 border-t border-gray-200">
        © {new Date().getFullYear()} GLOW LAB. All rights reserved.
      </footer>
    </div>
  );
}
