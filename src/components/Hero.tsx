import React, { useState, useEffect } from 'react';

const images = [
  '/assets/aistudio/images__10__316c2dbd.jpeg',
  '/assets/aistudio/images__11__92bbde02.jpeg',
  '/assets/aistudio/L_height_724d6324.webp',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ana-sayfa" className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt="Stadyum Arkaplan"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-blue-950/70" />
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">STADIMIZ KADIKÖY'DE</h1>
        <p className="text-xl md:text-2xl mb-8 font-light">Bazı yerler sadece bir stadyum değildir. Anılarımızın, tarihimizin ve aidiyetimizin adresidir.</p>
        <div className="flex gap-4 justify-center">
          <a href="#destek" className="bg-yellow-400 text-blue-950 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500">Ben de Destekliyorum</a>
        </div>
      </div>
    </section>
  );
}
