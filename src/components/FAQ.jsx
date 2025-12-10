'use client'

import { useState } from 'react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What digital services do you offer?",
    answer:
      "We offer comprehensive digital solutions including web development, custom UI/UX design, graphic design, photography & videography, and social media management. Our services are designed to help businesses establish a strong online presence and engage their audience effectively.",
  },
  {
    question: 'How long does a typical project take to complete?',
    answer:
      'Project timelines vary depending on scope and complexity. A simple website design might take 2-3 weeks, while a full-stack development project could take 6-8 weeks. We provide detailed timelines during project planning and keep you updated throughout the process.',
  },
  {
    question: 'Do you work with businesses of all sizes?',
    answer:
      'Yes! We work with startups, small businesses, and large enterprises. We tailor our services and approach to meet your specific needs and budget. Whether you need a simple website or comprehensive digital transformation, we have solutions for you.',
  },
  {
    question: 'What kind of support do you provide during and after projects?',
    answer:
      'We provide comprehensive support throughout your project including regular updates, feedback sessions, and post-launch support. We offer maintenance packages and are always available to help with questions or updates to your digital assets.',
  },
  {
    question: "Can you work with my existing brand and design guidelines?",
    answer:
      'Absolutely! We work closely with your existing brand identity and design guidelines to ensure consistency. We can also help refresh or evolve your brand if needed. Our goal is to enhance your brand while maintaining its core identity.',
  },
  {
    question: 'Do you provide ongoing services after project completion?',
    answer:
      'Yes, we offer ongoing services including website maintenance, social media management, content updates, and performance optimization. We can create custom maintenance packages to keep your digital presence current and effective.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10 dark:divide-white/10">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="group flex w-full items-start justify-between text-left text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {openIndex === index ? (
                        <MinusSmallIcon aria-hidden="true" className="size-6" />
                      ) : (
                        <PlusSmallIcon aria-hidden="true" className="size-6" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
