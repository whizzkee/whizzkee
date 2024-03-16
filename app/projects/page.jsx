import Image from "next/image";
import Nav from "@/components/Nav";

export default function Projects() {
  return (
    <>
      <Nav />
      <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-dark-charcoal to-gray-800 rounded-xl shadow-2xl w-full max-w-4xl flex flex-col sm:flex-row mb-12 hover:scale-105 hover:shadow-xl transition duration-500 ease-in-out">
          {/* Adjustments for image container to improve responsiveness */}
          <div className="sm:flex-shrink-0 sm:w-1/2 relative">
            <Image
              src="/images/driftTCG1.png"
              alt="DriftTCG Image"
              layout="responsive"
              width={700} // Adjust these values based on the actual aspect ratio of your image
              height={475}
              objectFit="cover"
              className="rounded-t-xl sm:rounded-t-none sm:rounded-l-xl"
            />
          </div>
          <div className="flex-grow space-y-4 p-4">
            <h2 className="text-purple-300 font-bold text-2xl">DriftTCG</h2>
            <p className="text-purple-200 text-sm sm:text-base">
              A conceptual front-end showcase demonstrating design. Built with
              Next.js, TailwindCSS, and enhanced with Framer for sleek
              animations.
            </p>
            <div className="mt-4 flex justify-start space-x-4">
              <a
                href="https://drift-tcg.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
              >
                Demo
              </a>
              <a
                href="https://github.com/tJohnsonAce/rc_duels"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
