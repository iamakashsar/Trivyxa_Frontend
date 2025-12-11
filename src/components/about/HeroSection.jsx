'use client'

import React from "react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative isolate bg-white dark:bg-gray-900">
      
      {/* BACKGROUND GRID */}
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[40rem] w-full stroke-gray-200 dark:stroke-white/10 
        [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      >
        <defs>
          <pattern
            id="hero-grid"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
            x="50%"
            y={-1}
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#hero-grid)"></rect>
      </svg>

      {/* COLORED BACKGROUND BLUR */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -translate-x-1/3 blur-3xl"
      >
        <div
          className="w-[50rem] h-[40rem] opacity-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        ></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-32">
        <div className="mx-auto max-w-2xl lg:flex lg:max-w-none lg:items-center gap-x-14">

          {/* LEFT TEXT SIDE */}
          <div className="relative lg:max-w-xl xl:max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 dark:text-white">
              We're transforming businesses through digital excellence
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              We are a team of passionate digital professionals dedicated to 
              helping businesses thrive in the modern digital landscape.
            </p>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="hidden lg:flex mt-14 justify-end gap-8">

            <div className="w-44 space-y-8">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&h=528&q=80"
                className="rounded-xl shadow-lg aspect-[2/3] object-cover"
                alt="Team"
              />
            </div>

            <div className="w-44 space-y-8 mt-36">
              <img
                src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&h=528&q=80"
                className="rounded-xl shadow-lg aspect-[2/3] object-cover"
                alt="Meeting"
              />
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&h=528&q=80"
                className="rounded-xl shadow-lg aspect-[2/3] object-cover"
                alt="Designer"
              />
            </div>

            <div className="w-44 space-y-8">
              <img
                src="https://images.unsplash.com/photo-1670272504528-790c24957dda?auto=format&fit=crop&h=528&q=80"
                className="rounded-xl shadow-lg aspect-[2/3] object-cover"
                alt="Development"
              />
              <img
                src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?auto=format&fit=crop&h=528&q=80"
                className="rounded-xl shadow-lg aspect-[2/3] object-cover"
                alt="Strategy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
