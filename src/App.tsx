/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PurposeSection from './components/PurposeSection';
import TimelineSection from './components/TimelineSection';
import FansVoiceSection from './components/FansVoiceSection';
import SupportSection from './components/SupportSection';

export default function App() {
  return (
    <div className="min-h-screen bg-blue-950">
      <Navbar />
      <Hero />
      <PurposeSection />
      <TimelineSection />
      <FansVoiceSection />
      <SupportSection />
      <footer className="py-6 text-center text-gray-200">© 2026 Stadımız Kadıköy'de</footer>
    </div>
  );
}

