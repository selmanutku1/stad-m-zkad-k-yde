import React from 'react';
import { motion } from "motion/react";

const timelineEvents = [
  { year: '1907', title: 'Fenerbahçe’nin Doğuşu', description: 'Kulübümüzün temelleri atıldı.' },
  { year: '1933', title: 'Stadyumun İnşası', description: 'Kadıköy’deki ilk stadyum yapısı.' },
  { year: '1999', title: 'Modernizasyon Başlangıcı', description: 'Stadyumun bugünkü formuna kavuşma süreci.' },
  { year: '2006', title: 'Tam Kapasite', description: 'Stadyum modern yüzüyle taraftarına kavuştu.' },
  { year: '2026', title: 'Dün, Bugün, Yarın', description: 'Fenerbahçe ve Kadıköy’ün ortak geleceği.' },
];

export default function TimelineSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 px-6 bg-blue-950"
    >
      <h2 className="text-4xl font-black text-yellow-400 text-center mb-16 uppercase tracking-widest">Tarihten Bir Kesit</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {timelineEvents.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-6 items-center"
          >
            <div className="text-2xl font-black text-yellow-400 min-w-[100px]">{event.year}</div>
            <div className="bg-blue-900 p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{event.title}</h3>
              <p className="text-gray-200">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
