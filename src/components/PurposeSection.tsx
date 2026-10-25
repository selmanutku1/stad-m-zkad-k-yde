import React from 'react';
import { motion } from "motion/react";
import oldStadium from '/assets/aistudio/fenerabhce_stat_eski_a6d0e4c9.jpg';
import historyImage1 from '/assets/aistudio/images__11__92bbde02.jpeg';
import historyImage2 from '/assets/aistudio/images__10__316c2dbd.jpeg';
import landmarkImage from '/assets/aistudio/L_height_724d6324.webp';

export default function PurposeSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 px-6 bg-gray-50"
    >
      <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">Bu yalnızca bir stadyum meselesi değil.</h2>
      <div className="flex flex-col items-center mb-12">
        <h3 className="text-4xl font-extrabold text-yellow-400 mb-8 uppercase tracking-widest text-center shadow-lg">Papazın Çayırı'ndan Bugüne</h3>
        <div className="grid grid-cols-2 gap-4 max-w-4xl">
            <img src="/assets/aistudio/images__14__31739f92.jpeg" alt="Bugünkü Stadyum" className="rounded-lg shadow-xl w-full h-64 object-cover" />
            <img src="/assets/aistudio/images__15__e8a90056.jpeg" alt="Papazın Çayırı" className="rounded-lg shadow-xl w-full h-64 object-cover" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <img src={historyImage1} alt="Tarihi Görsel 1" className="rounded-lg shadow-md w-full h-64 object-cover" />
        <img src={historyImage2} alt="Tarihi Görsel 2" className="rounded-lg shadow-md w-full h-64 object-cover" />
        <img src={landmarkImage} alt="Simge Görsel" className="rounded-lg shadow-md w-full h-64 object-cover" />
      </div>
    </motion.section>
  );
}
