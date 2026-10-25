import React, { useState } from 'react';

export default function SupportSection() {
  const [showShare, setShowShare] = useState(false);
  const shareText = "Stadımızın evi Kadıköy, desteğinle daha güçlü. Stadımız Kadıköy'de kalmalı!";
  const shareUrl = window.location.href;

  return (
    <section id="destek" className="py-16 px-6 bg-blue-950 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Stadımızın evi Kadıköy, desteğinle daha güçlü.</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">Desteğini paylaş, kampanyayı çevrenle paylaş ve Fenerbahçe’nin stadyumunun geleceğine ilişkin görüşünü görünür kıl.</p>
      <div className="flex gap-4 justify-center flex-wrap relative">
        <button className="bg-yellow-400 text-blue-950 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500">Desteğimi Paylaş</button>
        <button onClick={() => setShowShare(!showShare)} className="bg-white text-blue-950 px-6 py-3 rounded-md font-semibold hover:bg-gray-200">Kampanyayı Paylaş</button>
        
        {showShare && (
            <div className="absolute top-full mt-2 bg-white p-4 rounded-md shadow-lg flex flex-col gap-2 z-10 w-48 text-blue-950">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="hover:text-yellow-500">X'te Paylaş</a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="hover:text-yellow-500">Facebook'ta Paylaş</a>
                <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} target="_blank" rel="noreferrer" className="hover:text-yellow-500">WhatsApp'ta Paylaş</a>
                <button onClick={() => alert("Instagram paylaşımı için ekran görüntüsü alıp paylaşabilirsiniz!")} className="hover:text-yellow-500 text-left">Instagram'da Paylaş</button>
            </div>
        )}
      </div>
    </section>
  );
}
