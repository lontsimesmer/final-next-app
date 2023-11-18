import Image from "next/image";

export default function Home() {
  return (
    <main className="font-Silka">
      <div className="bg-indigo-500 fixed flex h-20 items-center justify-between px-56 top-0 w-full z-20">
        <p className="font-bold text-white text-3xl">reef.</p>
        <div className="flex gap-8">
          <button className="h-10 rounded-md text-white w-24">Sign up</button>
          <button className="bg-purple-600 h-10 hover:bg-purple-700 rounded-md text-white w-48">
            Request a demo
          </button>
        </div>
      </div>
      <div className="flex gap-24 justify-center mx-auto mb-20 mt-40 w-3/4">
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
            <div>
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
            className="bg-white border border-gray-200 flex flex-col gap-8 py-8 px-8 rounded-lg shadow-lg"
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
                remotely. Now <br /> we can't imagine doing it any other <br />{" "}
                way. Onboarding in super smooth, and <br /> the whole team loves
                the autonomy <br /> they get using Reef.
              </p>
            </div>
          </div>
          <div
            className="bg-white border border-gray-200 flex flex-col gap-8 py-8 px-8 rounded-lg shadow-lg"
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
                Reef enables us to hire, stay compliant, and pay a fully <br />{" "}
                remote team.
              </h5>
              <p className="font-normal text-sm text-gray-900 tracking-wide">
                Reef makes it incredibly easy to hire international contractors
                and stay <br /> compliant in thier home countries.
              </p>
            </div>
          </div>
          <div
            className="bg-white border border-gray-200 flex flex-col gap-8 py-8 px-8 rounded-lg shadow-lg"
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
                Reef has made it SUPER <br /> simple for a small company <br />{" "}
                based all over the world to <br /> hire and pay folks.
              </h5>
              <p className="font-normal text-sm text-gray-900 tracking-wide">
                The plateform is extremely easy to <br /> navigate, really
                user-friendly and Reef <br /> support has gone above and beyond{" "}
                <br /> any request we've had.
              </p>
            </div>
          </div>
          <div
            className="bg-white border border-gray-200 flex flex-col gap-8 py-8 px-8 rounded-lg shadow-lg"
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
                Reef enables us to hire, stay compliant, and pay a fully <br />{" "}
                remote team.
              </h5>
              <p className="font-normal text-sm text-gray-900 tracking-wide">
                Reef makes it incredibly easy to hire international contractors
                and stay <br /> compliant in thier home countries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-indigo-50">
        <div className="flex justify-center py-20">
          <div className="grid grid-cols-2 gap-40 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div className="flex flex-col gap-10">
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
            <div className="flex flex-col gap-10">
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
            <div className="flex flex-col gap-10">
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
                      I love Human Newsletter
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
            <div className="flex flex-col gap-10">
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
        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
