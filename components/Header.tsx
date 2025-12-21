"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          Gill Cleaning Services
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* DESKTOP BUTTON */}
        <Link
          href="/quote"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Get Quote
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="hover:text-blue-600">Services</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-blue-600">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-blue-600">Contact</Link>

          <Link
            href="/quote"
            onClick={() => setOpen(false)}
            className="bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
