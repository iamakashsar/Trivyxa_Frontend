'use client'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'



const navigation = [
  { 
    name: 'Home', 
    href: '/', 
    current: true 
  },
  { 
    name: 'About', 
    href: '/about', 
    current: false 
  },
  { 
    name: 'Services', 
    href: '/#features', 
    current: false,
    submenu: [
      { name: 'Features', href: '/#features' },
      { name: 'Statistics', href: '/#stats' },
      { name: 'Testimonials', href: '/#testimonials' },
      { name: 'Help & Support', href: '/#help-support' }
    ]
  },
  { 
    name: 'Solutions', 
    href: '/', 
    current: false,
    submenu: [
      { name: 'FAQ', href: '/#faq' },
      { name: 'Enterprise', href: '/#pricing' },
      { name: 'Startup Plans', href: '/#features' }
    ]
  },
  { 
    name: 'Company', 
    href: '/about', 
    current: false,
    submenu: [
      { name: 'About Us', href: '/about/#content' },
      { name: 'Our Team', href: '' },
      { name: 'Company Values', href: '/about/#values' },
      { name: 'Contact Info', href: '/about/' } // Note: This submenu item still points to /about for 'Contact Info'
    ]
  },
  // Added a dedicated top-level Contact link
  { 
    name: 'Contact', 
    href: '/contact', 
    current: false 
  },
  { 
    name: 'social media', 
    href: '/SocialMedia', 
    current: false 
  }
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])



  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const isActiveRoute = (href) => {
    // If the path is a root-relative link like /contact
    if (!href.startsWith('/#')) {
        // Simple path comparison
        return location.pathname === href
    }
    // Handle hash links (only active on the home page)
    if (href === '/') {
      return location.pathname === '/'
    }
    // Handle hash links on the current page
    return location.pathname === '/' && location.hash === href.substring(1)
  }

  const scrollToSection = (href) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600"></div>
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200 dark:bg-slate-900 dark:border-slate-700' 
          : 'bg-white/95 backdrop-blur-sm dark:bg-slate-900/95'
      }`}>
        <nav className="mx-auto max-w-7xl">
          {/* Main navigation container */}
          <div className="flex h-16 items-center justify-between px-6 lg:px-8">
            
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="group flex items-center">
                <div className="relative">
                  <img 
                    src="/assets/logo/logo.png" 
                    alt="Trivyxa Logo" 
                    className="h-14 w-auto mix-blend"
                    // Fallback using placeholder if image fails to load (essential practice)
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/56x56/4f46e5/ffffff?text=LOGO" }}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                        isActiveRoute(item.href) || activeDropdown === index
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                        isActiveRoute(item.href)
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className={`absolute top-full left-0 mt-1 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}>
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => {
                              if (subItem.href.startsWith('/#')) {
                                scrollToSection(subItem.href)
                              }
                            }}
                            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              
              {/* Desktop CTA buttons */}
              <div className="hidden lg:flex lg:items-center lg:space-x-3">
                {/*<Link
                  to="/contact" // FIX: Link updated to /contact
                  className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </Link>*/}
                <Link
                  to="/contact"
                  onClick={() => scrollToSection('/#pricing')}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md btn-professional"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                  aria-label="Open main menu"
                >
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)} 
          />
          
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-slate-900 shadow-2xl">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src="/assets/logo/logo.png" 
                  alt="Trivyxa Logo" 
                  className="h-12 w-auto"
                  // Fallback using placeholder if image fails to load
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/48x48/4f46e5/ffffff?text=LOGO" }}
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                aria-label="Close menu"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            
            {/* Mobile navigation */}
            <div className="p-6">
              <div className="space-y-1">
                {navigation.map((item, index) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(index)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left text-base font-medium rounded-lg transition-colors duration-200 ${
                            isActiveRoute(item.href) || activeDropdown === index
                              ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                              : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile submenu */}
                        {activeDropdown === index && (
                          <div className="mt-2 ml-4 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => {
                                  setMobileMenuOpen(false)
                                  if (subItem.href.startsWith('/#')) {
                                    setTimeout(() => scrollToSection(subItem.href), 100)
                                  }
                                }}
                                className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-md transition-colors duration-200"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false)
                          if (item.href.startsWith('/#')) {
                            setTimeout(() => scrollToSection(item.href), 100)
                          }
                        }}
                        className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                          isActiveRoute(item.href)
                            ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 space-y-3">
                <Link
                  to="/contact" // FIX: Link updated to /contact
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center px-6 py-3 text-base font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <Link
                  to="/#pricing"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setTimeout(() => scrollToSection('/#pricing'), 100)
                  }}
                  className="flex w-full items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm btn-professional"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
