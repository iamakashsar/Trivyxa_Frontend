'use client'

const stats = [
  { id: 1, name: 'Projects Completed', value: '500+' },
  { id: 2, name: 'Client Satisfaction', value: '98%' },
  { id: 3, name: 'Years of Experience', value: '5+' },
  { id: 4, name: 'Digital Solutions Delivered', value: '200+' },
]

export default function Stats() {
  return (
    <div className="relative bg-white dark:bg-gray-900">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2 dark:bg-gray-800"
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base/8 font-semibold text-indigo-600 dark:text-indigo-400">Our track record</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Trusted by businesses for digital excellence
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              We've been helping businesses of all sizes establish their digital presence, enhance their brand identity, 
              and achieve their growth goals with our comprehensive digital services.
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 dark:border-white/10"
                >
                  <dt className="text-sm/6 text-gray-600 dark:text-gray-400">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
