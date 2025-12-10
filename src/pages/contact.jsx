// 'use client' is usually only necessary in the App Router, but kept for compatibility.

import { EnvelopeIcon } from "@heroicons/react/24/outline";

// FIX: Adjusted path by explicitly adding the '.jsx' extension to help the compiler resolve the module.
// We are now using '../../components/ContactForm.jsx'
import ContactForm from '../components/ContactForm.jsx' 

// This component serves as the dedicated contact page at the /contact route.
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* Header */}
      {/*<header className="py-6 border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white flex items-center">
            <EnvelopeIcon className="h-8 w-8 mr-3 text-indigo-600 dark:text-indigo-400" />
            Get in Touch
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
      </header>*/}

      {/* Main Content Area: Renders the ContactForm */}
      <main>
        {/*
          The ContactForm component is expected to contain all the form layout, state, and API logic.
        */}
        <ContactForm />
      </main>

      {/* Footer (Simple placeholder, adjust as needed) */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/*<p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Your Company Name.
          </p>*/}
        </div>
      </footer>
    </div>
  )
}
