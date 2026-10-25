import React, { useState } from 'react';
import { motion } from "motion/react";

const comments = [
  { name: 'F. K', text: 'Kimse yokken Fenerbahçe vardı!' },
  { name: 'Ali V.', text: 'Stadımız Kadıköy’de kalmalı, başka yolu yok!' },
  { name: 'Ayşe Y.', text: 'Çocukluğum bu tribünlerde geçti.' },
  { name: 'Mehmet K.', text: 'Kadıköy Fenerbahçe’dir, Fenerbahçe Kadıköy’dür.' },
  { name: 'Caner D.', text: 'Tarihimize sahip çıkalım.' },
  { name: 'Zeynep S.', text: 'Stadımızın ruhu burada.' },
  { name: 'Ahmet B.', text: 'Kadıköy bizim evimiz!' },
];

export default function FansVoiceSection() {
  const [formData, setFormData] = useState({ name: '', text: '', city: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
        const response = await fetch('/api/submit-opinion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert('Görüşünüz başarıyla iletildi!');
          setFormData({ name: '', text: '', city: '' });
        } else {
          alert('Bir hata oluştu, lütfen tekrar deneyin.');
        }
      } catch (error) {
        alert('Bir hata oluştu, lütfen tekrar deneyin.');
      } finally {
        setLoading(false);
      }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="gorusler" 
      className="py-16 px-6 bg-blue-950"
    >
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">Bu hikâye hepimizin.</h2>
      <div className="max-w-2xl mx-auto bg-blue-900 p-8 rounded-lg shadow-md mb-12">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Adınız" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="p-3 bg-blue-800 text-white border border-blue-700 rounded-md" 
                required
            />
            <textarea 
                placeholder="Kısa görüşünüz..." 
                value={formData.text}
                onChange={e => setFormData({...formData, text: e.target.value})}
                className="p-3 bg-blue-800 text-white border border-blue-700 rounded-md h-32" 
                required
            />
            <input 
                type="text" 
                placeholder="Şehir (İsteğe bağlı)" 
                value={formData.city}
                onChange={e => setFormData({...formData, city: e.target.value})}
                className="p-3 bg-blue-800 text-white border border-blue-700 rounded-md" 
            />
            <button 
                type="submit" 
                disabled={loading}
                className={`px-6 py-3 rounded-md font-semibold ${loading ? 'bg-gray-500' : 'bg-yellow-400 hover:bg-yellow-500'} text-blue-950`}
            >
                {loading ? 'Gönderiliyor...' : 'Görüşümü Paylaş'}
            </button>
        </form>
      </div>

      <div className="overflow-hidden">
        <motion.div 
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...comments, ...comments].map((comment, index) => (
            <div key={index} className="bg-blue-900 p-6 rounded-lg shadow-md min-w-[300px]">
              <p className="text-gray-200 mb-4">"{comment.text}"</p>
              <p className="text-yellow-400 font-bold">- {comment.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
