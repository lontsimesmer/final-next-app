import Image from "next/image";

export default function Home() {
  return (
    <main className="font-Matter">
      <div className="bg-indigo-500 fixed flex h-20 items-center justify-between px-60 top-0 w-full z-20">
        <p className="font-bold text-white text-3xl">reef.</p>
        <div className="flex gap-2">
          <button className="h-10 rounded-md text-white w-24">Sign up</button>
          <button className="bg-purple-600 h-10 hover:bg-purple-700 rounded-lg text-white w-40">
            Request a demo
          </button>
        </div>
      </div>
      <div className="flex gap-20 justify-center mx-auto mb-20 mt-40 w-3/4">
        <div className="w-1/2">
          <h1 className="font-black leading-snug pb-3 text-indigo-900 text-5xl tracking-wide">
            Plug into a better way to manage international <br /> teams
          </h1>
          <img
            className="h-auto max-w-xl rounded-xl"
            src="https://assets-global.website-files.com/6050f2ad3687cc808784a212/623a8ab1426dcf979ccc8d8c_grow.jpeg"
            alt="image description"
          />
          <p className="font-medium pt-6 text-lg text-indigo-900 tracking-tight">
            Tap into better team management tools with plugins for PTO, Org
            Charts, and much more to build a stronger company culture, increase
            team collaboration, and automate more processes. Give employees the
            tools to connect their growth to competencies so their progression
            turns into business impact.
          </p>
        </div>
        <div className="bg-gray-50 max-w-screen-sm h-4/5 p-8 rounded-2xl w-full">
          <form className="bg-white px-10 pt-12 pb-8 rounded-lg shadow-2xl">
            <div>
              <h2 className="font-bold mb-5 text-indigo-900 text-3xl tracking-tight">
                Request a Demo
              </h2>
              <label
                className="block font-bold leading-none mb-1 text-indigo-900 text-sm tracking-tight"
                htmlFor="firstname"
              >
                <small>First Name:</small>
              </label>
              <input
                className="border border-gray-300 h-10 leading-tight mb-3 py-2 px-3 rounded w-full text-indigo-900"
                id="firstname"
                type="text"
              />
            </div>
            <div className="mb-6">
              <label
                className="block font-bold leading-none mb-1 text-indigo-900 text-sm tracking-tight"
                htmlFor="lastname"
              >
                <small>Last Name:</small>
              </label>
              <input
                className="border border-gray-300 h-10 py-2 px-3 rounded w-full text-indigo-900 mb-3 leading-tight"
                id="lastname"
                type="text"
              />
              <label
                className="block font-bold leading-none mb-1 text-indigo-900 text-sm"
                htmlFor="username"
              >
                <small>Email Address:</small>
              </label>
              <input
                className="border border-gray-300 py-2 px-3 rounded w-full text-indigo-900 mb-3 leading-tight"
                id="username"
                type="text"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-purple-600 bg-gradient-to-br font-medium font-serif from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-3 rounded shadow-lg text-white w-full"
                type="button"
              >
                Get Started
              </button>
            </div>
            <p className="font-sans leading-none mt-3 text-left text-gray-900 text-xs">
              <small>
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply. By submitting your
                information, you agree to Lattice's Terms of Service and Privacy
                Policy. You can opt out anytime.
              </small>
            </p>
          </form>
        </div>
      </div>
      <section className="bg-indigo-50">
        <div className="flex gap-20 items-center justify-center mx-auto py-32 w-3/4">
          <div className="flex flex-col gap-6 w-2/5">
            <h1 className="font-black leading-snug text-indigo-900 text-5xl tracking-wide">
              Reef's the only team management platform with everything you need,
              for everyone
            </h1>
            <p className="font-normal text-lg text-gray-900 tracking-normal">
              Reef Engage is designed to keep your team connected and engaged,
              regardless of location. With a 92% adoption rate within the first
              week, our platform integrates seamlessly with Slack to ensure
              efficient communication, engagement monitoring, and more.
            </p>
            <button className="bg-purple-600 h-10 hover:bg-purple-700 rounded-lg text-white w-36">
              Book a demo
            </button>
          </div>
          <img
            className="h-auto max-w-xl rounded-xl"
            src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/OOO.jpg"
            alt="image description"
            style={{ height: 600 }}
          />
        </div>
      </section>
      <section className="flex flex-col gap-20 justify-center mx-auto my-24 w-3/4">
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <h1 className="font-black leading-snug text-indigo-900 text-5xl tracking-wide">
            Some clear reasons to choose <br /> Reef to seamlessly manage your{" "}
            <br /> team
          </h1>
          <p className="font-normal text-lg text-gray-900 tracking-normal">
            Our guaranteed top-tier service and industry-leading worldwide
            coverage <br /> provide peace of mind for any global team. With
            Reef's next-level automation <br /> and in-house infrastructure,
            quality always comes first for our customers.
          </p>
          <button className="bg-purple-600 h-10 hover:bg-purple-700 mt-6 rounded-lg text-white w-36">
            Book a demo
          </button>
        </div>
        <div className="grid grid-cols-3 gap-20">
          <div className="flex flex-col gap-3 items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-wide">
              1.25min
            </h2>
            <p className="font-light text-lg text-gray-900 tracking-normal">
              First response time with 24/7 in <br />
              -app support
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-wide">
              200+
            </h2>
            <p className="font-light text-lg text-gray-900 tracking-normal">
              In-house tax, payroll and legal <br /> specialists
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-wide">
              80+hrs
            </h2>
            <p className="font-light text-lg text-gray-900 tracking-normal">
              Saved by customers monthly <br /> automating contractor <br />{" "}
              payments
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-wide">
              20+
            </h2>
            <p className="font-light text-lg text-gray-900 tracking-normal">
              Integrations to seamlessly sync <br /> with your current tech
              stack
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-wide">
              15+
            </h2>
            <p className="font-light text-lg text-gray-900 tracking-normal">
              Flexible payment methods to <br /> pay your team
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-wide">
              20,000+
            </h2>
            <p className="font-light text-lg text-gray-900 tracking-normal">
              Deel customers, from small <br /> startups to household names
            </p>
          </div>
        </div>
      </section>
      <section className="bg-indigo-50 flex flex-col gap-32 py-32">
        <div className="flex gap-20 items-center justify-center mx-auto w-3/4">
          <img
            className="h-auto max-w-xl rounded-xl"
            src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/one-platform-1.jpg"
            alt="image description"
          />
          <div className="flex flex-col gap-10">
            <h1 className="font-black leading-snug text-indigo-900 text-5xl tracking-wide">
              Enjoy the benefits of <br /> having everything in one <br />{" "}
              single platform
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  />
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M352 176L217.6 336 160 272"
                  />
                </svg>
                <p className="font-light text-lg text-gray-900 tracking-normal">
                  Save on your tech stack with one HR platform
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  />
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M352 176L217.6 336 160 272"
                  />
                </svg>
                <p className="font-light text-lg text-gray-900 tracking-normal">
                  Reduce onboarding time to just 5 minutes
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  />
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M352 176L217.6 336 160 272"
                  />
                </svg>
                <p className="font-light text-lg text-gray-900 tracking-normal">
                  Eliminate errors and duplicate work with one process
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  />
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M352 176L217.6 336 160 272"
                  />
                </svg>
                <p className="font-light text-lg text-gray-900 tracking-normal">
                  Get a holistic view of employer costs, headcount and churn
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  />
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M352 176L217.6 336 160 272"
                  />
                </svg>
                <p className="font-light text-lg text-gray-900 tracking-normal">
                  Give your whole team a consistent experience
                </p>
              </div>
            </div>
            <button className="bg-purple-600 h-10 hover:bg-purple-700 rounded-lg text-white w-32">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex gap-20 items-center justify-center mx-auto w-3/4">
          <div className="flex flex-col gap-10">
            <h1 className="font-black leading-snug text-indigo-900 text-5xl tracking-wide">
              Run compliant payroll <br /> for your global team in <br />{" "}
              minutes
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  />
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M352 176L217.6 336 160 272"
                  />
                </svg>
                <p className="font-normal text-lg text-gray-900 tracking-normal">
                  Bulk pay contractors, EORs, and direct employees effortlessly
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  />
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M352 176L217.6 336 160 272"
                  />
                </svg>
                <p className="font-normal text-lg text-gray-900 tracking-normal">
                  We handle taxes, provide benefits, payslips, and way more
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  />
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M352 176L217.6 336 160 272"
                  />
                </svg>
                <p className="font-normal text-lg text-gray-900 tracking-normal">
                  Eliminate admin with automated contractor invoicing
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  />
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M352 176L217.6 336 160 272"
                  />
                </svg>
                <p className="font-normal text-lg text-gray-900 tracking-normal">
                  Give your team flexibility with 15+ global payment options
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeMiterlimit={10}
                    strokeWidth={40}
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  />
                  <path
                    fill="none"
                    stroke="indigo"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M352 176L217.6 336 160 272"
                  />
                </svg>
                <p className="font-normal text-lg text-gray-900 tracking-normal">
                  Local, legal, tax, and accounting expertise just a click away
                </p>
              </div>
            </div>
            <button className="bg-purple-600 h-10 hover:bg-purple-700 rounded-lg text-white w-32">
              Learn more
            </button>
          </div>
          <img
            className="h-auto max-w-xl rounded-xl"
            src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/global-payroll-1.jpg"
            alt="image description"
          />
        </div>
      </section>
      <section className="flex flex-col gap-24 items-center justify-center py-28">
        <h1 className="font-black leading-snug text-indigo-900 text-5xl text-center tracking-wide">
          This is why 1000s of customers <br /> love Reef
        </h1>
        <div
          className="relative w-3/4"
          data-carousel="static"
          id="indicators-carousel"
        >
          <div className="flex gap-5 overflow-hidden relative rounded-lg">
            <div
              className="bg-white border border-gray-200 duration-700 ease-in-out flex flex-col gap-8 py-8 px-8 rounded-lg shadow-lg"
              data-carousel-item="active"
              style={{ width: 360 }}
            >
              <div className="flex gap-6 items-center">
                <img
                  className="h-24 w-24"
                  src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Deel/Images/Slider%20images/MST.png"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-light text-gray-900 tracking-wide">
                    Doug Ludlow
                  </h3>
                  <p className="font-bold text-gray-500 text-sm tracking-wide">
                    CEO
                  </p>
                  <h4 className="font-bold text-indigo-900 text-sm tracking-wide">
                    MainStreet
                  </h4>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </div>
                  <p className="font-normal text-sm text-gray-900 tracking-wide">
                    Rating: 5
                  </p>
                </div>
                <h5 className="font-semibold text-indigo-900 text-lg tracking-wide">
                  We can bring on contractors <br /> in any country in minutes.
                </h5>
                <p className="font-normal text-sm text-gray-900 tracking-wide">
                  Before discovering Reef, we were <br /> intimidated by hiring
                  remotely. Now <br /> we can't imagine doing it any other{" "}
                  <br /> way. Onboarding in super smooth, and <br /> the whole
                  team loves the autonomy <br /> they get using Reef.
                </p>
              </div>
            </div>
            <div
              className="bg-white border border-gray-200 duration-700 ease-in-out flex flex-col gap-8 py-8 px-8 rounded-lg shadow-lg"
              data-carousel-item="active"
              style={{ height: 400, width: 360 }}
            >
              <div className="flex gap-6 items-center">
                <img
                  className="h-24 w-24"
                  src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/grace-posthog.webp"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-light text-gray-900 tracking-wide">
                    Grace McKenzie
                  </h3>
                  <p className="font-bold text-gray-500 text-sm tracking-wide">
                    Operations Leader
                  </p>
                  <h4 className="font-bold text-indigo-900 text-sm tracking-wide">
                    PostHog
                  </h4>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </div>
                  <p className="font-normal text-sm text-gray-900 tracking-wide">
                    Rating: 5
                  </p>
                </div>
                <h5 className="font-semibold text-indigo-900 text-lg tracking-wide">
                  Reef enables us to hire, stay compliant, and pay a fully{" "}
                  <br /> remote team.
                </h5>
                <p className="font-normal text-sm text-gray-900 tracking-wide">
                  Reef makes it incredibly easy to hire international
                  contractors and stay <br /> compliant in thier home countries.
                </p>
              </div>
            </div>
            <div
              className="bg-white border border-gray-200 duration-700 ease-in-out flex flex-col gap-8 py-8 px-8 rounded-lg shadow-lg"
              data-carousel-item="active"
              style={{ width: 360 }}
            >
              <div className="flex gap-6 items-center">
                <img
                  className="h-24 w-24"
                  src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Deel/Images/Slider%20images/Maker.png"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-light text-gray-900 tracking-wide">
                    Ben Tossel
                  </h3>
                  <p className="font-bold text-gray-500 text-sm tracking-wide">
                    Founder
                  </p>
                  <h4 className="font-bold text-indigo-900 text-sm tracking-wide">
                    MakerPad
                  </h4>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </div>
                  <p className="font-normal text-sm text-gray-900 tracking-wide">
                    Rating: 5
                  </p>
                </div>
                <h5 className="font-semibold text-indigo-900 text-lg tracking-wide">
                  Reef has made it SUPER <br /> simple for a small company{" "}
                  <br /> based all over the world to <br /> hire and pay folks.
                </h5>
                <p className="font-normal text-sm text-gray-900 tracking-wide">
                  The plateform is extremely easy to <br /> navigate, really
                  user-friendly and Reef <br /> support has gone above and
                  beyond <br /> any request we've had.
                </p>
              </div>
            </div>
            <div
              className="bg-white border border-gray-200 duration-700 ease-in-out flex flex-col gap-8 py-8 px-8 rounded-lg shadow-lg"
              data-carousel-item="active"
              style={{ height: 400, width: 360 }}
            >
              <div className="flex gap-6 items-center">
                <img
                  className="h-24 w-24"
                  src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/lizette-moralis.jpeg"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-light text-gray-900 tracking-wide">
                    Lizette Kuld
                  </h3>
                  <p className="font-bold text-gray-500 text-sm tracking-wide">
                    Head of People
                  </p>
                  <h4 className="font-bold text-indigo-900 text-sm tracking-wide">
                    Moralis Web3
                  </h4>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex gap-3 items-center">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-green-500 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </div>
                  <p className="font-normal text-sm text-gray-900 tracking-wide">
                    Rating: 5
                  </p>
                </div>
                <h5 className="font-semibold text-indigo-900 text-lg tracking-wide">
                  Reef enables us to hire, stay compliant, and pay a fully{" "}
                  <br /> remote team.
                </h5>
                <p className="font-normal text-sm text-gray-900 tracking-wide">
                  Reef makes it incredibly easy to hire international
                  contractors and stay <br /> compliant in thier home countries.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex -translate-x-1/2 space-x-3 rtl:space-x-reverse buttom-0 left-1/2">
            <button
              type="button"
              className="bg-blue-100 w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="bg-blue-100 w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="bg-blue-100 w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="bg-blue-100 w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="bg-blue-100 w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="bg-blue-100 inline-flex items-center justify-center w-20 h-20 rounded-full">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="bg-blue-100 inline-flex items-center justify-center w-20 h-20 rounded-full">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
      <footer className="bg-indigo-50">
        <div className="flex justify-center py-20">
          <div className="gap-52 grid grid-cols-4">
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-semibold mb-3 text-sm text-indigo-500 tracking-wider uppercase">
                  platform
                </h2>
                <ul className="font-normal leading-7 text-gray-800 text-sm">
                  <li>
                    <a href="#" className="hover:underline">
                      Performance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Praise
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Updates
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className=" hover:underline">
                      Engagement
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Pulse
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Onboarding and Exit Surveys
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className=" hover:underline">
                      Compensation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Benchmarking
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sentiment Analysis
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className="hover:underline">
                      Grow
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Individual Development Plans
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li className="flex gap-3 items-center">
                    <a href="#" className="hover:underline">
                      HRIS
                    </a>
                    <span className="border-2 border-blue-400 flex font-semibold h-6 items-center px-2.5 rounded-full text-blue-800 text-xs">
                      COMING SOON
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-semibold mb-3 text-sm text-indigo-500 uppercase">
                  industry
                </h2>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className="hover:underline">
                      Agencies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Professional services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Technology
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Bank and Credit Unions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Fintech
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Life Sciences
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Insurance
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-sm text-indigo-500 uppercase">
                  company size
                </h2>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className="hover:underline">
                      Small Businesses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Enterprises
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-sm text-indigo-500 uppercase">
                  role
                </h2>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className="hover:underline">
                      Chief Executive Officers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Human Resources Leaders
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Individual Contributors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      People Managers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-semibold mb-3 text-sm text-indigo-500 uppercase">
                  why reef.
                </h2>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className="hover:underline">
                      How Reef. Compares
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Customer Stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Customer Experience
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      People Strategy Group
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Patners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Intergrations
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-sm text-indigo-500 uppercase">
                  resources
                </h2>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className="hover:underline">
                      Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Interviews
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Webinars
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Ebooks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      I ❤️ Human Newsletter
                    </a>
                  </li>
                  <li className="flex gap-3 items-center">
                    <a href="#" className="hover:underline">
                      RfH Virtual 2023
                    </a>
                    <span className="border-2 border-blue-400 flex font-semibold h-6 items-center px-2.5 rounded-full text-blue-800 text-xs">
                      NEW
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-semibold mb-3 text-sm text-indigo-500 uppercase">
                  company
                </h2>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li className="flex gap-3 items-center">
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                    <span className="border-2 border-blue-400 flex font-semibold h-6 items-center px-2.5 rounded-full text-blue-800 text-xs">
                      HIRING
                    </span>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sign In
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-sm text-indigo-500 uppercase">
                  support
                </h2>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className="hover:underline">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Reef University
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-sm text-indigo-500 uppercase">
                  privacy
                </h2>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Statement
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Request
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Opt-out
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-sm text-indigo-500 uppercase">
                  security
                </h2>
                <ul className="font-normal leading-7 text-gray-800 text-sm tracking-wide">
                  <li>
                    <a href="#" className="hover:underline">
                      Status
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Security Trust Center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-gray-300 border-0 dark:bg-gray-700 h-px my-8 mx-auto w-3/4" />
        <div className="flex items-center justify-between pb-16 mx-auto w-3/4">
          <span className="text-sm text-gray-500">
            © Copyright 2023. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                viewBox="0 0 512 512"
                fill="black"
                height="1.3em"
                width="1.3em"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="black"
                height="1.4em"
                width="1.4em"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="black"
                height="1.4em"
                width="1.4em"
              >
                <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                viewBox="0 0 900 1000"
                fill="black"
                height="1.2em"
                width="1.2em"
              >
                <path d="M204 152c0 26.667-9.667 49.333-29 68s-44.333 28-75 28c-29.333 0-53.333-9.333-72-28S0 178.667 0 152c0-28 9.333-51 28-69s43.333-27 74-27 55 9 73 27 27.667 41 29 69M6 942V324h192v618H6m306-420c0-57.333-1.333-123.333-4-198h166l10 86h4c40-66.667 103.333-100 190-100 66.667 0 120.333 22.333 161 67s61 111 61 199v366H708V600c0-89.333-32.667-134-98-134-46.667 0-79.333 24-98 72-4 8-6 24-6 48v356H312V522" />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
