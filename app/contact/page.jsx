import Nav from "@/components/Nav";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 p-4 relative">
        {/* Container for the background image */}
        <div className="absolute top-0 left-0 w-full h-1/2 z-0 overflow-hidden">
          <Image
            src="/images/contactBG.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute top-0 left-0"
          />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg z-10 box-shadow-whiteGlow">
          <div className="mb-4 flex justify-center space-x-6">
            <a
              href="https://twitter.com/whizzkee"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                size={24}
                className="text-white hover:text-blue-400"
              />
            </a>
            <a
              href="https://github.com/tJohnsonAce"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} className="text-white hover:text-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/trevor-johnson-dev/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaLinkedin
                size={24}
                className="text-white hover:text-blue-400"
              />
            </a>
          </div>

          <h2 className="text-xl font-semibold text-white mb-4">
            Get in touch
          </h2>

          <form action="https://formspree.io/f/mrgwjwvg" method="POST">
            <div className="mb-3">
              <label htmlFor="name" className="block mb-1 font-medium text-white">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full p-2 border rounded text-black bg-gray-400 border-gray-600"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="block mb-1 font-medium text-white">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full p-2 border rounded text-black bg-gray-400 border-gray-600"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="block mb-1 font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-2 border rounded text-black bg-gray-400 border-gray-600"
              ></textarea>
            </div>

            <div className="mb-3">
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 w-full"
                aria-label="Send Message"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
