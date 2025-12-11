"use client";

import {
  LockClosedIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function PrivacyPolicy() {
  return (
    <main className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* TWO COLUMN LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* LEFT SIDE — CONTENT */}
        <div className="px-6 py-16 max-w-3xl mx-auto order-2 md:order-1">
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 text-center md:text-left">
            Last updated: 11 December 2025
          </p>

          <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed animate-fadeIn">

            {/* 1 — Information We Collect */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <LockClosedIcon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </span>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  1. Information We Collect
                </h2>
              </div>

              <p>
                We collect your name, email address, phone number, project details, 
                and any information you provide while requesting services on our platform.
              </p>
            </div>

            {/* 2 — How We Use Your Data */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <EnvelopeIcon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </span>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  2. How We Use Your Data
                </h2>
              </div>

              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to inquiries and deliver digital services.</li>
                <li>To improve website performance and user experience.</li>
                <li>To send updates, newsletters, and service notifications.</li>
              </ul>
            </div>

            {/* 3 — Data Protection */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <ShieldCheckIcon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </span>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  3. Data Protection
                </h2>
              </div>

              <p>
                Your personal information is stored securely using modern encryption 
                practices.  
                <br /><br />
                We do NOT sell, trade, or misuse your personal data.
              </p>
            </div>

            {/* 4 — Contact */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <EnvelopeIcon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </span>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  4. Contact Us
                </h2>
              </div>

              <p>
                For any privacy-related questions or concerns, reach out to us at:
              </p>

              <p className="mt-3 text-purple-700 dark:text-purple-300 font-medium">
                Email:{" "}
                <a
                  href="mailto:trivyxatech@gmail.com"
                  className="underline hover:text-purple-900 dark:hover:text-purple-200"
                >
                  trivyxatech@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — STICKY IMAGE */}
        <div className="relative w-full md:w-[50vw] h-[400px] md:h-[100vh] md:sticky md:top-0 order-1 md:order-2 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80"
            alt="Privacy Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay with title */}
          <div className="absolute inset-0 bg-purple-700/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
              Privacy Policy
            </h1>
          </div>
        </div>

      </div>
    </main>
  );
}
