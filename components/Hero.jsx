import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-fixed bg-cover bg-center h-[70vh]"
      style={{ backgroundImage: "url('/images/wBgImage2.jpg')" }}
    >
      {/* Background Opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center p-8 text-soft-white backdrop-blur-md bg-opacity-70 rounded-xl border-2 border-gray-600 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-medium-purple to-medium-blue">
            whizzkee.xyz
          </span>
        </h1>
        <p className="text-md md:text-lg mb-4">
          I write stuff and build things
        </p>
        <Button className="font-bold py-2 px-4 rounded mr-4">
          My projects
        </Button>
        <Button className="font-bold py-2 px-4 rounded">My blog</Button>
      </div>
    </div>
  );
};

export default Hero;
