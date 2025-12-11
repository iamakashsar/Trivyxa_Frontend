"use client";

import {
  ShieldCheckIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Terms() {
  return (
    <main className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* LEFT SIDE STICKY IMAGE WITH FIXED SIZE */}
        <div className="relative w-full md:w-[50vw] h-[500px] md:h-[100vh] md:sticky md:top-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
            alt="Terms Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0  flex items-center justify-center" style={{backgroundColor: "rgb(67 56 202 / 35%)"}}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center px-4">
              Terms & Conditions
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT (50%) */}
        <div className="px-6 py-16 max-w-3xl mx-auto">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 text-center md:text-left">
            Last updated: 11 December 2025
          </p>

          <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed animate-fadeIn">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                    <section.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
                  </span>

                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>

                {/* Content */}
                {Array.isArray(section.content) ? (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2">{section.content}</p>
                )}

                {/* Extra (for contact section) */}
                {section.extra && <div className="mt-3">{section.extra}</div>}
              </div>
            ))}

            {/* Disclaimer Box */}
            <div className="border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-4 rounded-md shadow">
              <p className="text-sm text-yellow-900 dark:text-yellow-200">
                <strong>Disclaimer:</strong> This is a general template and
                should not be considered legal advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const sections = [
  {
    title: "1. Introduction",
    icon: ShieldCheckIcon,
    content: `These Terms govern your access to and use of Trivyxa Digital Services.
      By using our website or services, you agree to comply with these Terms.`,
  },
  {
    title: "2. Eligibility",
    icon: DocumentTextIcon,
    content: `You must be at least 18 years old to use our services. If acting on behalf 
      of a company, you confirm you have authority to bind the organization.`,
  },
  {
    title: "3. Our Services",
    icon: DocumentTextIcon,
    content: `We provide web development, branding, UI/UX design, and digital solutions.
      Service details may be defined in separate contracts or proposals.`,
  },
  {
    title: "4. Use of Website",
    icon: ExclamationTriangleIcon,
    content: [
      "You agree to lawful and non-harmful usage of our website.",
      "You may not attempt to breach or disable our systems.",
      "Automated scraping or data extraction is forbidden without permission.",
    ],
  },
  {
    title: "5. Payments & Refunds",
    icon: DocumentTextIcon,
    content: [
      "Project payments may require upfront or milestone-based billing.",
      "Refunds are not issued once work has begun or deliverables are approved.",
      "Extra work outside project scope is billed separately.",
    ],
  },
  {
    title: "6. Intellectual Property",
    icon: ShieldCheckIcon,
    content: `All website content is owned or licensed by Trivyxa. Client project rights
      depend on specific agreements. We may use non-sensitive work for portfolio 
      purposes unless otherwise agreed.`,
  },
  {
    title: "7. Third-Party Services",
    icon: ExclamationTriangleIcon,
    content: `We are not responsible for third-party tools, websites, or service policies used during the project.`,
  },
  {
    title: "8. Disclaimer",
    icon: ExclamationTriangleIcon,
    content: `Our services are provided “as is” without guarantees of uninterrupted 
      performance, accuracy, or security.`,
  },
  {
    title: "9. Limitation of Liability",
    icon: ShieldCheckIcon,
    content: `We are not liable for indirect, incidental, or consequential damages. 
      Liability is limited to the amount you paid for the services.`,
  },
  {
    title: "10. Indemnification",
    icon: DocumentTextIcon,
    content: `You agree to indemnify Trivyxa Digital Services against any loss or damage 
      resulting from misuse of our services or breach of these Terms.`,
  },
  {
    title: "11. Changes to Terms",
    icon: DocumentTextIcon,
    content: `We may update these Terms at any time. Continued use after changes means you agree to the revised version.`,
  },
  {
    title: "12. Governing Law",
    icon: ShieldCheckIcon,
    content: `These Terms are governed by Indian law. Any disputes fall under courts with jurisdiction in India.`,
  },
  {
    title: "13. Contact Us",
    icon: DocumentTextIcon,
    content: `For questions about these Terms, contact us at:`,
    extra: (
      <div>
        <p>
          Email:{" "}
          <a href="mailto:trivyxatech@gmail.com" className="text-indigo-600">
            trivyxatech@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+918530402845" className="text-indigo-600">
            +91 8530402845
          </a>
        </p>
      </div>
    ),
  },
];
