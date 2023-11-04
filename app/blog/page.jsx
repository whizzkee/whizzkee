import Nav from "@/components/Nav";
import Image from "next/image";

const BlogPage = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 p-4 relative">
        {/* Blog content container */}
        <div className="z-10">
          <h1 className="text-4xl font-bold text-soft-white mb-4">
            Blog Coming Soon
          </h1>
          <p className="text-medium-purple">
            Stay tuned for updates and more content.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

// Remember to add these colors to your tailwind.config.js if they are not already there.
