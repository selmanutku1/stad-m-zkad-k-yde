import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-900 shadow-sm sticky top-0 z-50">
      <img src="/assets/aistudio/48b672de-e5fe-42fa-8c9c-18be48bce3cd_7ffcfa01.png" alt="Stadımız Kadıköy'de" className="h-14 sm:h-16 md:h-20" />
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-yellow-400 font-medium">
        <a href="#ana-sayfa">Ana Sayfa</a>
        <a href="#gorusler">Görüşler</a>
        <a href="#destek">Destek Ol</a>
      </div>

      {/* Hamburger Button */}
      <button className="md:hidden text-yellow-400" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="md:hidden absolute top-full left-0 w-full bg-blue-950 p-6 flex flex-col gap-4 text-yellow-400"
          >
            <a href="#ana-sayfa" onClick={() => setIsOpen(false)}>Ana Sayfa</a>
            <a href="#gorusler" onClick={() => setIsOpen(false)}>Görüşler</a>
            <a href="#destek" onClick={() => setIsOpen(false)}>Destek Ol</a>
          </motion.div>
        )}
      </AnimatePresence>

      <button className="bg-yellow-400 text-blue-950 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 hidden md:block">
        Desteğini Göster
      </button>
    </nav>
  );
}
