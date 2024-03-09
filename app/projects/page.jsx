import Image from "next/image";
import Nav from "@/components/Nav";

export default function Projects() {
  return (
    <>
      <Nav />
      <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-gradient-to-tr from-dark-charcoal to-gray-800 rounded-xl shadow-2xl w-full sm:w-4/5 md:w-2/3 lg:w-1/2 flex mb-12 transform hover:scale-105 hover:shadow-xl transition duration-500 ease-in-out">
          <div className="flex flex-row items-stretch w-full space-x-6">
            <div className="w-1/3 flex-none">
              <div className="h-full w-full relative">
                <Image
                  src="/images/driftTCG1.png"
                  alt="DriftTCG Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-l-lg"
                />
              </div>
            </div>
            <div className="flex-grow space-y-6 p-4">
              <h2 className="text-purple-300 font-bold text-2xl sm:text-3xl">
                DriftTCG
              </h2>
              <p className="text-purple-200 leading-relaxed text-sm sm:text-base">
                A conceptual front-end showcase demonstrating design. Built with
                Next.js, TailwindCSS, and enhanced with Framer for sleek
                animations.
              </p>
              <div className="flex justify-start mt-4 space-x-4">
                <a
                  href="https://drift-tcg.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DriftTCG Demo"
                  className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/tJohnsonAce/rc_duels"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DriftTCG GitHub"
                  className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
