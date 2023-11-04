import Nav from "@/components/Nav";
import Image from "next/image";
import { FaCode, FaLaptopCode, FaEthereum } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 text-white">
        <div className="w-full max-w-4xl bg-gray-800 p-10 rounded-lg shadow-2xl">
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-12">
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <Image
                src="/images/aboutImg.jpg"
                alt="Your Portrait"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold text-cyan-400 mb-2">
                Trevor Johnson
              </h1>
              <h2 className="text-xl text-gray-300 mb-4">
                Software Engineer &amp; Writer
              </h2>
              <div className="flex items-center text-cyan-500">
                <FaCode className="mr-2" /> <span>Frontend Developer</span>
                <span className="mx-4">|</span>
                <FaLaptopCode className="mr-2" /> <span>Web3 Explorer</span>
                <span className="mx-4">|</span>
                <FaEthereum className="mr-2" />{" "}
                <span>Blockchain Proponent</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-gray-400">
            <p className="leading-relaxed">
              Hey there! I’m <span className="text-white">Trevor</span>, aka
              whizzkee, a dedicated software engineer with a strong interest in
              creating cutting-edge web experiences. I specialize in front-end
              development using Next.js, React, and Tailwind CSS, focusing on
              crafting responsive and user-friendly applications.
            </p>

            <p className="leading-relaxed">
              I am actively exploring the realms of blockchain and Web3,
              aspiring to leverage these technologies to build innovative and
              meaningful projects. My mission is to develop solutions that
              matter and to contribute positively to the tech community.
            </p>

            <p className="leading-relaxed">
              My career in software is driven by a continuous desire to learn
              and grow. I approach challenges with a problem-solving mindset and
              value the lessons that come from collaboration and iteration. To
              me, writing code is about making an impact, one project at a time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
