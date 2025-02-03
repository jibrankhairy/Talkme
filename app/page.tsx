import Image from "next/image";
import Link from "next/link";
import logo from "@/images/landingPage/logo1.png";

export default async function Home() {
  return (
    <main className="relative isolate dark:bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen overflow-hidden">
      {/* <style jsx global>{`
        html,
        body {
          overflow: hidden;
          height: 100%;
        }
      `}</style> */}
      <div
        className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] transition-all duration-500 hover:opacity-60"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 77.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="py-12 sm:py20 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="max-w-4xl text-4xl text-violet-500 font-bold md:text-6xl lg:text-7xl leading-tight">
              Talkme,{" "}
              <span className="dark:text-gray-300 text-gray-600 ">
                anywhere!
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Talkme is a chat app that lets you stay connected with friends
              anytime, anywhere. Share moments, send messages, and keep the
              conversation going effortlessly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/chat"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                View Pricing <span aria-hidden="true"></span>
              </Link>
            </div>
          </div>
          <div className="sm:mt-16 md:mt-20 lg:mt-10 flex justify-center ">
            <div className="rounded-xl p-2">
              <Image
                unoptimized
                src={logo}
                alt="Landing Page Image"
                width={400}
                height={400}
                className="sm:w-[300px] md:w-[400px] lg:w-[500px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
