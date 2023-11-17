import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";

export default function Projects() {
  return (
    <>
      <Nav />
      <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12 px-4">
        {/* Use responsive text sizes */}
        <div className="text-white mb-16 font-bold tracking-wide text-center text-4xl sm:text-5xl">
          Projects Under Development
        </div>

        {/* Cyndera Card - Make card width more responsive */}
        <div className="bg-gradient-to-tr from-dark-charcoal to-gray-800 rounded-xl shadow-2xl w-full sm:w-4/5 md:w-2/3 lg:w-1/2 p-8 space-y-6 mb-12 transform hover:scale-105 hover:shadow-xl transition duration-500 ease-in-out">
          <div className="flex flex-col items-center">
            <Image
              src="/images/cynderaLogo.png"
              alt="Cyndera Image"
              width={150}
              height={100}
              className="rounded-full border-4 border-purple-500"
            />
            <h2 className="text-purple-300 mt-4 mb-2 font-bold text-2xl sm:text-3xl">
              Cyndera
            </h2>
            <p className="text-purple-200 text-center leading-relaxed text-sm sm:text-base">
              A token being built on the Solana platform, aiming to
              revolutionize the web3 space.
            </p>
          </div>
        </div>

        {/* Cronicle Card */}
        <div className="bg-gradient-to-tr from-dark-charcoal to-gray-800 rounded-xl shadow-2xl w-full sm:w-4/5 md:w-2/3 lg:w-1/2 p-8 space-y-6 transform hover:scale-105 hover:shadow-xl transition duration-500 ease-in-out">
          <div className="flex flex-col items-center">
            <Image
              src="/images/cronicleLogo.png"
              alt="Cronicle Image"
              width={150}
              height={100}
              className="rounded-full border-4 border-blue-500"
            />
            <h2 className="text-blue-300 mt-4 mb-2 font-bold text-2xl sm:text-3xl">
              Cronicle
            </h2>
            <p className="text-blue-200 text-center leading-relaxed text-sm sm:text-base">
              Cronicle is a pioneering blockchain-based blogging platform built
              on Solana, designed to redefine the landscape of digital content
              creation and monetization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
