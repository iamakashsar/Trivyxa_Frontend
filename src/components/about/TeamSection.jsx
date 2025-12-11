export default function TeamSection() {
  const team = [
    { name: "Rohan Shinde", role: "CEO & Founder" },
    { name: "Arko Kayal", role: "COO & Social Media Manager" },
    { name: "Akash Sar", role: "Director & Backend Developer" },
  ];

  return (
    <section id="team" className="pt-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our Team
        </h2>

        {/* TEAM GRID */}
        <ul className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 text-center">
          {team.map((person) => (
            <li key={person.name}>
              <div className="mx-auto size-24 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
                {person.name.charAt(0)}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                {person.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{person.role}</p>
            </li>
          ))}
        </ul>

        {/* TEXT + BUTTON */}
        <div className="mt-16 max-w-xl">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Learn more about our team and explore our past work.
          </p>

          <a
            href="/portfolio-main/index.html"
            target="_blank"
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500"
          >
            View Our Portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}
