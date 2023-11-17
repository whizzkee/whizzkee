import Image from "next/image";

const About = () => {
  return (
    <section className="relative flex flex-col items-center justify-center p-8 h-[80vh]">
      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl p-8 text-center text-soft-white backdrop-blur-md bg-opacity-70 rounded-xl border-2 border-gray-600 shadow-lg">
        {" "}
        {/* Added shadow-lg */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-6">
          <div className="mb-6 md:mb-0 md:mr-6 rounded-full overflow-hidden w-24 h-24">
            <Image
              src="/images/aboutImg.jpg"
              alt="Your Name"
              width={96}
              height={96}
            />
          </div>

          <h2 className="text-5xl font-bold tracking-wider mb-4">My Journey</h2>
        </div>
        <p className="text-xl mb-4 leading-relaxed">
          From a tech enthusiast to a passionate developer, my journey has been
          nothing short of a roller coaster. I began my exploration in the tech
          world with Python.
        </p>
        <p className="text-xl mb-4 leading-relaxed">
          As I delved deeper, I found my interest piqued by front-end
          development, especially with frameworks like Next.js and React. At
          3MetaD, I was the web developer for their first NFT project. This is
          where my obsession with web3 began.
        </p>
        <p className="text-xl leading-relaxed">
          Today, as I venture into the world of blockchain and web3, I&apos;m
          excited for the new challenges and innovations on the horizon.
        </p>
      </div>
    </section>
  );
};

export default About;
