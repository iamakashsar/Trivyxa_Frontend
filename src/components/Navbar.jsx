"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// ----------------- NAVIGATION DATA -----------------

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },

  {
    name: "Services",
    href: "/#features",
    current: false,
    submenu: [
      { name: "Features", href: "/#features" },
      { name: "Statistics", href: "/#stats" },
      { name: "Help & Support", href: "/#help-support" },
    ],
  },

  {
    name: "Solutions",
    href: "/",
    current: false,
    submenu: [
      { name: "FAQ", href: "/#faq" },
      { name: "Startup Plans", href: "/#features" },
    ],
  },

  {
    name: "Company",
    href: "/about",
    current: false,
    submenu: [
      { name: "About Us", href: "/about/#content" },
      { name: "Our Team", href: '/about/#team' },
      { name: "Company Values", href: "/about/#values" },
      { name: "Contact Info", href: "/contact" },
    ],
  },

  { name: "Contact", href: "/contact", current: false },
  { name: "Social Media", href: "/SocialMedia", current: false },
];

// ---------------------------------------------------

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Prevent body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  // FIXED ACTIVE ROUTE LOGIC
  const isActiveRoute = (href) => {
    const { pathname, hash } = location;

    // No hash → simple match
    if (!href.includes("#")) return pathname === href;

    // Has hash → split path and section
    const [base, section] = href.split("#");
    return pathname === base && hash === `#${section}`;
  };

  const scrollToSection = (href) => {
    if (href.startsWith("/#")) {
      const section = href.replace("/#", "#");
      const el = document.querySelector(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Top Color Bar */}
      <div className="h-1 bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600"></div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-slate-900 shadow-lg border-b border-gray-200 dark:border-slate-700"
            : "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-between px-6 lg:px-8">
            {/* ---------------- LOGO BLOCK ---------------- */}
            <div className="flex items-center">
              <Link to="/" className="group flex items-center">
                <div className="relative">
                  <img
                    src="/assets/logo/logo.png"
                    alt="Trivyxa Logo"
                    className="h-14 w-auto mix-blend"
                    // Fallback using placeholder if image fails to load (essential practice)
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/56x56/4f46e5/ffffff?text=LOGO";
                    }}
                  />
                </div>
              </Link>
            </div>
            {/* ------------------------------------------------ */}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-md transition ${
                        isActiveRoute(item.href) || activeDropdown === index
                          ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                        isActiveRoute(item.href)
                          ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-1 hidden group-hover:block w-56 bg-white dark:bg-slate-800 shadow-xl border border-gray-200 dark:border-slate-700 rounded-lg z-50">
                      <div className="py-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => scrollToSection(sub.href)}
                            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side CTA */}
            <div className="hidden lg:flex space-x-3">
              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md text-slate-700 dark:text-slate-200"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* ---------------- MOBILE MENU ---------------- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-slate-900 shadow-xl">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b dark:border-slate-700">
              <img
                src="/assets/logo/logo.png"
                alt="Trivyxa Logo"
                className="h-12"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md"
              >
                <XMarkIcon className="h-6 w-6 text-slate-700 dark:text-slate-200" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-6 space-y-2">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  {!item.submenu ? (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full flex justify-between px-4 py-3 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`h-4 w-4 transition ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeDropdown === index && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-6 border-t dark:border-slate-700">
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
