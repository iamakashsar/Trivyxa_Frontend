'use client'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      {/* Background Images */}
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover not-dark:hidden"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=fff&sat=-100&exp=15&blend-mode=overlay"
        className="absolute inset-0 -z-10 size-full object-cover opacity-10 dark:hidden"
      />
      
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      
      {/* Main content */}
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:py-24">
          {/* Badge - Hidden on mobile, shown on small screens and up */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-gray-100/10 hover:ring-gray-400 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
              🚀 Professional Digital Services.{' '}
              <a href="#features" className=" text-blue-600 dark:text-blue-400">
                <span aria-hidden="true" className="absolute inset-0" />
                View Services <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          
          {/* Hero content */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl md:text-6xl lg:text-7xl  dark:text-white">
              Elevate Your Brand with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Digital Services
              </span>
            </h1>
            <p className="mt-6 text-base font-medium text-pretty text-gray-400 sm:mt-8 sm:text-lg md:text-xl/8 dark:text-gray-400">
              Comprehensive digital solutions including web development, design, photography, and social media management. 
              We help businesses thrive in the modern digital landscape.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-x-6">
              <a
                href="/contact"
                className="w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm text-white shadow-lg hover:from-blue-700 hover:to-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-400 dark:hover:to-purple-400 dark:focus-visible:outline-blue-500 transition-all duration-200 sm:w-auto sm:px-3.5 sm:py-2.5"
              >
                Get Started
              </a>
              <a 
                href="#features" 
                className="w-full text-center text-sm/6  text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors sm:w-auto"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </div>
  )
}
