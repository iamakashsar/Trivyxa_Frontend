export default function ValuesSection() {
  const values = [
    {
      name: "Digital Excellence",
      description:
        "We strive for excellence in every project, delivering high-quality digital experiences.",
    },
    {
      name: "Innovation & Creativity",
      description: "We use modern technologies to stay ahead of digital trends.",
    },
    {
      name: "Client Partnership",
      description:
        "We build long-term relationships and deliver solutions that match business goals.",
    },
  ];

  return (
    <section id="values" className="pt-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our Values
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value) => (
            <div
              key={value.name}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow hover:scale-[1.02] transition"
            >
              <h3 className="text-lg font-bold text-indigo-600">
                {value.name}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
