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
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* DESKTOP BUTTON */}
        <Link
          href="/quote"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Get Quote
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 text-gray-700">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <Link
            href="/quote"
            onClick={() => setOpen(false)}
            className="bg-blue-600 text-white text-center py-2 rounded"
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
