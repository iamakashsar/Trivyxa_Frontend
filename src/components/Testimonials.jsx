'use client'

import { useState } from 'react'
import { StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    body: "The team delivered an exceptional website that perfectly captures our brand. The design is modern, responsive, and has significantly improved our online presence and customer engagement.",
    author: {
      name: 'Sarah Chen',
      handle: 'CEO, DigitalCraft Studio',
      imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 5,
    service: 'Web Development'
  },
  {
    body: "Their UI/UX design work transformed our app's user experience. The intuitive interface and beautiful design have increased our user retention by 45% and improved customer satisfaction.",
    author: {
      name: 'Michael Rodriguez',
      handle: 'Product Manager, TechFlow',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 5,
    service: 'UI/UX Design'
  },
  {
    body: "The social media management services have been incredible. Our brand presence has grown exponentially, and the creative content consistently engages our audience. Highly professional team!",
    author: {
      name: 'Emily Watson',
      handle: 'Marketing Director, GrowthCo',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    rating: 5,
    service: 'Social Media'
  },
]

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div id="testimonials" className="relative py-24 sm:py-32">

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
            <StarIcon className="h-4 w-4 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white mb-6">
            Trusted by businesses for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              digital excellence
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover what our clients say about their experience working with our team to transform their digital presence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto max-w-6xl">
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="h-4 w-4 text-white" />
                  </div>

                  {/* Service Badge */}
                  <div className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 mb-6">
                    {testimonial.service}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    "{testimonial.body}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img 
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-900" 
                        src={testimonial.author.imageUrl} 
                        alt={testimonial.author.name} 
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.author.handle}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                                                 {/* Quote Icon */}
                         <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                           <ChatBubbleLeftRightIcon className="h-4 w-4 text-white" />
                         </div>

                        {/* Service Badge */}
                        <div className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 mb-6">
                          {testimonial.service}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                          "{testimonial.body}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center">
                          <div className="relative">
                            <img 
                              className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-900" 
                              src={testimonial.author.imageUrl} 
                              alt={testimonial.author.name} 
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
                          </div>
                          <div className="ml-4">
                            <div className="font-semibold text-gray-900 dark:text-white">
                              {testimonial.author.name}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {testimonial.author.handle}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTestimonial === index
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-gray-50 dark:bg-gray-800 px-6 py-3 text-sm text-gray-600 dark:text-gray-400">
            <StarIcon className="h-4 w-4 mr-2 text-yellow-400" />
            Join 200+ satisfied clients who trust us with their digital success
          </div>
        </div>
      </div>
    </div>
  )
}
