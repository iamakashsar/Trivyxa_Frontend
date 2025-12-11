'use client'

import Terms from '../components/Terms';
import PrivacyPolicy from '../components/PrivacyPolicy';

export default function LegalInformation() {
  return (
    <main className="bg-white dark:bg-gray-900 pb-20">
      <div className="mx-auto py-16 lg:py-24 ">
        
        <h1 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white text-center">
          Legal Information
        </h1>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="#terms"
            className="px-5 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white transition"
          >
            Terms & Conditions
          </a>

          <a
            href="#privacy"
            className="px-5 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition"
          >
            Privacy Policy
          </a>
        </div>

        {/* TERMS SECTION */}
        <section id="terms" className="scroll-mt-24">
          <Terms />
        </section>

        {/* ADD SPACING BETWEEN SECTIONS */}
        <div className="h-20"></div>

        {/* PRIVACY SECTION */}
        <section id="privacy" className="scroll-mt-24">
          <PrivacyPolicy />
        </section>

      </div>
    </main>
  );
}
