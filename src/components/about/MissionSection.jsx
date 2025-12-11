export default function MissionSection() {
  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years of Experience", value: "5+" },
  ];

  return (
    <section
      id="content"
      className="pt-20 sm:pt-24 lg:pt-32 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Our Mission
          </h2>

          <div className="mt-6 flex flex-col lg:flex-row gap-x-8 gap-y-20">
            {/* LEFT CONTENT */}
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our mission is to empower businesses and entrepreneurs with
                cutting-edge digital solutions that drive growth and
                innovation. We specialize in creating responsive websites,
                dynamic frontend applications, and robust full-stack solutions
                that transform ideas into powerful digital experiences.
              </p>

              <p className="mt-10 max-w-xl text-base text-gray-700 dark:text-gray-400">
                With expertise in modern technologies like React, Spring Boot,
                and responsive design, we deliver scalable, high-performance
                applications that meet the evolving needs of today's digital
                landscape. Our commitment to quality, innovation, and client
                success drives everything we do, ensuring that every project we
                undertake becomes a catalyst for business transformation and
                digital excellence.
              </p>
            </div>

            {/* RIGHT STATS */}
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
