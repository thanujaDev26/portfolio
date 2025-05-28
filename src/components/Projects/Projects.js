export default function Example() {
  return (
    <section className="bg-black py-24 sm:py-32 text-white" id="projects">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center text-green-400 font-bold tracking-wider mb-10 text-2xl">
          PROJECTS
        </div>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          You can explore my recent projects
        </p>
        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Card 1 */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-black lg:rounded-l-[2rem] border border-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)] bg-black">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Simple and Responsive User Interfaces
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Designed to work seamlessly across all devices, ensuring a smooth experience on different platforms.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute overflow-hidden bottom-0 rounded-md">
                  <img
                    className="w-full h-full object-cover object-bottom rounded-md user-select-none select-none pointer-events-none"
                    src={require('../../asserts/images/mobile_1.jpg')}
                    alt="Mobile friendly UI"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 ring-white lg:rounded-l-[2rem]"></div>
          </div>

          {/* Card 2 */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-black max-lg:rounded-t-[2rem] border border-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] bg-black">
              <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Every project is performance optimized through techniques like server side rendering for faster initial loads, load balancing to handle high traffic, and database tuning to eliminate slow queries. Additionally, SEO-friendly practices ensure visibility and accessibility across search engines.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 ring-white max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* Card 3 */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-black border border-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] bg-black">
              <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  All applications are built with a strong focus on security, incorporating token based authentication, data validation, and encrypted API communication. I also ensure source code integrity through secure repositories, manage access control in CI/CD pipelines, and conduct regular vulnerability assessments (VA Reports) and testing across different environments.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 ring-white"></div>
          </div>

          {/* Card 4 */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-black max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] border border-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] bg-black">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Integrated with secure, RESTful APIs that enhance scalability and enable seamless data exchange between services.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-12 overflow-hidden rounded-md">
                  <img
                    src={require('../../asserts/images/python_ss.png')}
                    alt="Code snippet"
                    className="w-full h-full object-cover rounded-md user-select-none select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 ring-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
