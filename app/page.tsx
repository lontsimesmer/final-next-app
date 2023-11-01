import Image from "next/image";

export default function Home() {
  return (
    <main className="font-mono">
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
          <p className="font-medium pt-6 text-indigo-900 tracking-tighter">
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
    </main>
  );
}
