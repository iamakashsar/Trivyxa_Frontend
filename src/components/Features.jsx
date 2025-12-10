'use client'

import { 
  CodeBracketIcon, 
  ComputerDesktopIcon, 
  PaintBrushIcon, 
  PhotoIcon,
  VideoCameraIcon,
  ShareIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Software Development',
    description: 'User-centered web development with React, JavaScript, Tailwind CSS, and Spring Boot — delivering responsive UIs, secure APIs, scalable architecture, and seamless performance for modern businesses.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Website Design',
    description: 'Creating responsive, visually stunning websites with HTML, CSS, JavaScript, and more, designed to reflect your brand and engage users effectively.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Custom UI/UX Design',
    description: 'Crafting user-focused, visually engaging, and scalable designs using Figma, tailored to enhance your brand and user experience.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Graphic Design Services',
    description: 'We create professional posters, brochures, YouTube thumbnails, and more using Photoshop and advanced tools.',
    icon: PhotoIcon,
  },
  {
    name: 'Photography & Videography Services',
    description: 'Offering professional photo editing, video editing, photoshoots, and videography services to capture and enhance your brand\'s story.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Social Media Services',
    description: 'We manage and grow your brand across Instagram, Facebook, LinkedIn, and more with professional strategies and creative content.',
    icon: ShareIcon,
  },
]

export default function Features() {
  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Features & Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <service.icon className="h-5 w-5 flex-none text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    {/* UPDATED: Link now passes the service name as a URL parameter */}
                    <a 
                      href={`/contact?service=${encodeURIComponent(service.name)}`} 
                      className="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                    >
                      Get Started <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
