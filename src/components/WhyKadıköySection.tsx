import React from 'react';

export default function WhyKadıköySection() {
  return (
    <section id="neden-kadikoy" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">Kadıköy, hikâyemizin bir parçası.</h2>
        <p className="text-lg text-gray-700 mb-8">
          Fenerbahçe ile Kadıköy arasındaki bağ, yalnızca bir adres ilişkisinden ibaret değildir. Maç günlerinin heyecanı, tribünlerde yaşanan anılar, semtin sokakları ve kuşaktan kuşağa aktarılan taraftarlık kültürü bu ilişkinin önemli parçalarıdır.
        </p>
        <div className="text-center">
            <a href="#" className="bg-yellow-400 text-blue-950 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500">Hikâyemizi Keşfet</a>
        </div>
      </div>
    </section>
  );
}
