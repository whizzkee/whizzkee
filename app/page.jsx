import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full w-full ">
        {/* Projects Card */}
        <div className="relative group flex items-center justify-center p-4 hover:bg-opacity-60 rounded-lg shadow-xl transition-all duration-300 md:col-span-2 border border-transparent cursor-pointer hover:border-white hover:border-opacity-10">
          <Link href="/projects">
            <span className="block w-full h-full absolute inset-0 z-10"></span>
            <Image
              src="/images/whizzkeeProjectsImage.png"
              alt="Projects Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 z-10 rounded-lg transition-opacity duration-300"></div>
            <span className="block text-center text-lg font-semibold text-white px-3 py-2 rounded z-20 relative transition duration-300">
              Projects
            </span>
          </Link>
        </div>

        {/* Contact Card */}
        <div className="relative group flex items-center justify-center p-4 bg-black bg-opacity-80 hover:bg-opacity-60 rounded-lg shadow-xl transition-all duration-300 md:row-span-2 md:col-start-3 border border-transparent cursor-pointer hover:border-white hover:border-opacity-10">
          <Link href="/contact">
            <span className="block w-full h-full absolute inset-0 z-10"></span>
            <Image
              src="/images/whizzkeeContactLandscapeImage.png"
              alt="Contact Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 z-10 rounded-lg transition-opacity duration-300"></div>
            <span className="block text-center text-lg font-semibold text-white px-3 py-2 rounded z-20 relative transition duration-300">
              Contact
            </span>
          </Link>
        </div>

        {/* Central Welcome Card */}
        <div className="flex flex-col items-center justify-center p-8 bg-sky-950 text-white rounded-lg shadow-xl md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 space-y-4">
          <div className="flex items-center space-x-2 text-2xl">
            {" "}
            Welcome to
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-500 font-bold">
              &nbsp;whizzkee.xyz
            </span>
          </div>
          <p className="text-lg">I write stuff and build things</p>{" "}
        </div>

        {/* About Card */}
        <div className="relative group flex items-center justify-center p-4 bg-black bg-opacity-80 hover:bg-opacity-60 rounded-lg shadow-xl transition-all duration-300 md:row-span-2 md:col-start-1 border border-transparent cursor-pointer hover:border-white hover:border-opacity-10">
          <Link href="/about">
            <span className="block w-full h-full absolute inset-0 z-10"></span>

            <Image
              src="/images/whizzkeeAboutPortraitImage.png"
              alt="About Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 z-10 rounded-lg transition-opacity duration-300"></div>
            <span className="block text-center text-lg font-semibold text-white px-3 py-2 rounded z-20 relative transition duration-300">
              About
            </span>
          </Link>
        </div>

        {/* Blog Card */}
        <div className="relative group flex items-center justify-center p-4 bg-black bg-opacity-80 hover:bg-opacity-60 rounded-lg shadow-xl transition-all duration-300 md:col-span-2 md:row-start-3 md:col-start-2 border border-transparent cursor-pointer hover:border-white hover:border-opacity-10">
          <Link href="/blog">
            <span className="block w-full h-full absolute inset-0 z-10"></span>
            <Image
              src="/images/whizzkeeBlogImage.png"
              alt="Blog Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 z-10 rounded-lg transition-opacity duration-300"></div>
            <span className="block text-center text-lg font-semibold text-white px-3 py-2 rounded z-20 relative transition duration-300">
              Blog
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
