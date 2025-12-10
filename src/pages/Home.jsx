'use client'

import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import HelpSupport from '../components/HelpSupport';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="help-support">
        <HelpSupport />
      </section>
      <section id="faq">
        <FAQ />
      </section>
    </div>
  );
}
