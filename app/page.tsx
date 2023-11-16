import Image from "next/image";

export default function Home() {
  return (
    <main className="font-mulish">
      <div className="bg-indigo-500 flex h-20 items-center justify-between px-56">
        <p className="font-bold text-white text-3xl">reef.</p>
        <div className="flex gap-8">
          <button className="h-10 rounded-md text-white w-24">Sign up</button>
          <button className="bg-purple-600 h-10 hover:bg-purple-700 rounded-md text-white w-48">
            Request a demo
          </button>
        </div>
      </div>
      <div className="flex gap-24 justify-center mx-auto my-24 w-3/4">
        <div className="w-1/2">
          <h1 className="font-black leading-snug pb-3 text-indigo-900 text-5xl tracking-tight">
            Plug into a better way to manage international teams
          </h1>
          <img
            className="h-auto max-w-xl rounded-xl"
            src="https://assets-global.website-files.com/6050f2ad3687cc808784a212/623a8ab1426dcf979ccc8d8c_grow.jpeg"
            alt="image description"
          />
          <p className="font-medium pt-6 text-indigo-900 tracking-tight">
            Tap into better team management tools with plugins for PTO, Org
            Charts, and much more to build a stronger company culture, increase
            team collaboration, and automate more processes. Give employees the
            tools to connect their growth to competencies so their progression
            turns into business impact.
          </p>
        </div>
        <div className="bg-gray-50 max-w-screen-sm h-4/5 p-8 rounded-2xl w-full">
          <form className="bg-white px-10 pt-12 pb-8 rounded-lg shadow-2xl">
            <div className="mb-4">
              <h2 className="font-bold mb-5 text-indigo-900 text-3xl tracking-tighter">
                Request a Demo
              </h2>
              <label
                className="block font-bold leading-none mb-1 text-indigo-900 text-sm tracking-tight"
                htmlFor="firstname"
              >
                <small>First Name:</small>
              </label>
              <input
                className="border border-gray-300 h-10 leading-tight py-2 px-3 rounded w-full text-indigo-900"
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
                className="border border-gray-300 py-2 px-3 rounded w-full text-indigo-900 leading-tight"
                id="username"
                type="text"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 mt-8 font-bold hover:bg-blue-700 px-4 py-3 rounded text-white w-full"
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
        <div className="flex gap-24 justify-center mx-auto py-24 w-3/4">
          <div className="w-1/2">
            <h1 className="font-black leading-snug text-indigo-900 text-5xl tracking-tight">
              Reef's the only team management platform with everything you need,
              for everyone
            </h1>
            <p className="font-medium text-gray-900 tracking-tight">
              Reef Engage is designed to keep your team connected and engaged,
              regardless of location. With a 92% adoption rate within the first
              week, our platform integrates seamlessly with Slack to ensure
              efficient communication, engagement monitoring, and more.
            </p>
            <button className="bg-purple-600 h-10 hover:bg-purple-700 rounded-md text-white w-40">
              Book a demo
            </button>
          </div>
          <img
            className="h-auto max-w-xl rounded-xl"
            src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/OOO.jpg"
            alt="image description"
          />
        </div>
      </section>
      <section className="flex flex-col gap-10 justify-center mx-auto my-24 w-3/4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-black leading-snug text-indigo-900 text-5xl tracking-tight">
            Some clear reasons to choose <br /> Reef to seamlessly manage your{" "}
            <br /> team
          </h1>
          <p className="font-medium text-gray-900 tracking-tight">
            Our guaranteed top-tier service and industry-leading worldwide
            coverage <br /> provide peace of mind for any global team. With
            Reef's next-level automation <br /> and in-house infrastructure,
            quality always comes first for our customers.
          </p>
          <button className="bg-purple-600 h-10 hover:bg-purple-700 rounded-md text-white w-40">
            Book a demo
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-tight">
              1.25min
            </h2>
            <p className="font-medium text-gray-900 tracking-tight">
              First response time with 24/7 in <br />
              -app support
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-tight">
              200+
            </h2>
            <p className="font-medium text-gray-900 tracking-tight">
              In-house tax, payroll and legal <br /> specialists
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-tight">
              80+hrs
            </h2>
            <p className="font-medium text-gray-900 tracking-tight">
              Saved by customers monthly <br /> automating contractor <br />{" "}
              payments
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-tight">
              20+
            </h2>
            <p className="font-medium text-gray-900 tracking-tight">
              Integrations to seamlessly sync <br /> with your current tech
              stack
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-tight">
              15+
            </h2>
            <p className="font-medium text-gray-900 tracking-tight">
              Flexible payment methods to <br /> pay your team
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-black leading-snug text-indigo-900 text-5xl tracking-tight">
              20,000+
            </h2>
            <p className="font-medium text-gray-900 tracking-tight">
              Deel customers, from small <br /> startups to household names
            </p>
          </div>
        </div>
      </section>
      <section className="bg-indigo-50">
        <div className="flex gap-24 justify-center mx-auto py-24 w-3/4">
          <img
            className="h-auto max-w-xl rounded-xl"
            src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/one-platform-1.jpg"
            alt="image description"
          />
          <div className="w-1/2">
            <h1 className="font-black leading-snug text-indigo-900 text-5xl tracking-tight">
              Enjoy the benefits of <br /> having everything in one <br />{" "}
              single platform
            </h1>
            <p className="font-medium text-gray-900 tracking-tight">
              Save on your tech stack with one HR platform
            </p>
            <p className="font-medium text-gray-900 tracking-tight">
              Reduce onboarding time to just 5 minutes
            </p>
            <p className="font-medium text-gray-900 tracking-tight">
              Eliminate errors and duplicate work with one process
            </p>
            <p className="font-medium text-gray-900 tracking-tight">
              Get a holistic view of employer costs, headcount and churn
            </p>
            <p className="font-medium text-gray-900 tracking-tight">
              Give your whole team a consistent experience
            </p>
            <button className="bg-purple-600 h-10 hover:bg-purple-700 rounded-md text-white w-40">
              Book a demo
            </button>
          </div>
        </div>
        <div className="flex gap-24 justify-center mx-auto py-24 w-3/4">
          <div className="w-1/2">
            <h1 className="font-black leading-snug text-indigo-900 text-5xl tracking-tight">
              Run compliant payroll <br /> for your global team in <br />{" "}
              minutes
            </h1>
            <p className="font-medium text-gray-900 tracking-tight">
              Bulk pay contractors, EORs, and direct employees effortlessly
            </p>
            <p className="font-medium text-gray-900 tracking-tight">
              We handle taxes, provide benefits, payslips, and way more
            </p>
            <p className="font-medium text-gray-900 tracking-tight">
              Eliminate admin with automated contractor invoicing
            </p>
            <p className="font-medium text-gray-900 tracking-tight">
              Give your team flexibility with 15+ global payment options
            </p>
            <p className="font-medium text-gray-900 tracking-tight">
              Local, legal, tax, and accounting expertise just a click away
            </p>
            <button className="bg-purple-600 h-10 hover:bg-purple-700 rounded-md text-white w-40">
              Book a demo
            </button>
          </div>
          <img
            className="h-auto max-w-xl rounded-xl"
            src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/global-payroll-1.jpg"
            alt="image description"
          />
        </div>
      </section>
      <section className="flex flex-col gap-24 items-center justify-center my-24">
        <h1 className="font-black leading-snug text-indigo-900 text-5xl tracking-tight">
          This is why 1000s of customers love Reef
        </h1>
        <div className="flex gap-5">
          <div
            className="bg-white border border-gray-200 flex flex-col gap-8 py-8 px-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ width: 360 }}
          >
            <div className="flex gap-6 items-center">
              <img
                className="h-24 w-24"
                src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Deel/Images/Slider%20images/MST.png"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-extralight text-gray-900 tracking-wide">
                  Grace McKenzie
                </h3>
                <p className="font-bold text-gray-400 text-sm tracking-wide">
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
                <p className="font-light text-sm text-gray-900 tracking-wide">
                  Rating: 5
                </p>
              </div>
              <h5 className="font-semibold text-indigo-900 text-lg tracking-wide">
                Reef enables us to hire, stay compliant, and pay a fully <br />{" "}
                remote team.
              </h5>
              <p className="font-light text-base text-gray-900 tracking-wide">
                Reef makes it incredibly easy to hire international contractors
                and stay <br /> compliant in thier home countries.
              </p>
            </div>
          </div>
          <div
            className="bg-white border border-gray-200 flex flex-col gap-8 py-8 px-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ width: 360 }}
          >
            <div className="flex gap-6 items-center">
              <img
                className="h-24 w-24"
                src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/grace-posthog.webp"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-extralight text-gray-900 tracking-wide">
                  Grace McKenzie
                </h3>
                <p className="font-bold text-gray-400 text-sm tracking-wide">
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
                <p className="font-light text-sm text-gray-900 tracking-wide">
                  Rating: 5
                </p>
              </div>
              <h5 className="font-semibold text-indigo-900 text-lg tracking-wide">
                Reef enables us to hire, stay compliant, and pay a fully <br />{" "}
                remote team.
              </h5>
              <p className="font-light text-base text-gray-900 tracking-wide">
                Reef makes it incredibly easy to hire international contractors
                and stay <br /> compliant in thier home countries.
              </p>
            </div>
          </div>
          <div
            className="bg-white border border-gray-200 flex flex-col gap-8 py-8 px-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ width: 360 }}
          >
            <div className="flex gap-6 items-center">
              <img
                className="h-24 w-24"
                src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/Deel/Images/Slider%20images/Maker.png"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-extralight text-gray-900 tracking-wide">
                  Grace McKenzie
                </h3>
                <p className="font-bold text-gray-400 text-sm tracking-wide">
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
                <p className="font-light text-sm text-gray-900 tracking-wide">
                  Rating: 5
                </p>
              </div>
              <h5 className="font-semibold text-indigo-900 text-lg tracking-wide">
                Reef enables us to hire, stay compliant, and pay a fully <br />{" "}
                remote team.
              </h5>
              <p className="font-light text-base text-gray-900 tracking-wide">
                Reef makes it incredibly easy to hire international contractors
                and stay <br /> compliant in thier home countries.
              </p>
            </div>
          </div>
          <div
            className="bg-white border border-gray-200 flex flex-col gap-8 py-8 px-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            style={{ width: 360 }}
          >
            <div className="flex gap-6 items-center">
              <img
                className="h-24 w-24"
                src="https://19498232.fs1.hubspotusercontent-na1.net/hubfs/19498232/lizette-moralis.jpeg"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-extralight text-gray-900 tracking-wide">
                  Grace McKenzie
                </h3>
                <p className="font-bold text-gray-400 text-sm tracking-wide">
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
                <p className="font-light text-sm text-gray-900 tracking-wide">
                  Rating: 5
                </p>
              </div>
              <h5 className="font-semibold text-indigo-900 text-lg tracking-wide">
                Reef enables us to hire, stay compliant, and pay a fully <br />{" "}
                remote team.
              </h5>
              <p className="font-light text-base text-gray-900 tracking-wide">
                Reef makes it incredibly easy to hire international contractors
                and stay <br /> compliant in thier home countries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
