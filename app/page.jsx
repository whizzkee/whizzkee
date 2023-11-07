'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';


const HomePage = () => {
  // Define your animation variants
  const variants = {
    projects: {
      hidden: { x: -200, y: -200, opacity: 0 },
      visible: { x: 0, y: 0, opacity: 1 },
    },
    contact: {
      hidden: { x: 200, y: -200, opacity: 0 },
      visible: { x: 0, y: 0, opacity: 1 },
    },
    blog: {
      hidden: { x: 200, y: 200, opacity: 0 },
      visible: { x: 0, y: 0, opacity: 1 },
    },
    about: {
      hidden: { x: -200, y: 200, opacity: 0 },
      visible: { x: 0, y: 0, opacity: 1 },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.1, opacity: 0 }, // Start from a smaller scale
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1, // Longer duration for a smoother appearance
        ease: 'easeOut', // Easing function for a smoother effect
      },
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 p-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full w-full"
        initial="hidden"
        animate="visible"
        // Adjust these for a smoother overall animation
        transition={{ staggerChildren: 0.5, delayChildren: 0.2, duration: 1, ease: 'easeOut' }}
      >
        {/* Projects Card */}
        <motion.div
          className="relative group flex items-center justify-center p-4 hover:bg-opacity-60 rounded-lg shadow-xl transition-all duration-300 md:col-span-2 border border-transparent cursor-pointer hover:border-white hover:border-opacity-10"
          variants={variants.projects}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <Link href="/projects">
            <span className="block w-full h-full absolute inset-0 z-10" />
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
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="relative group flex items-center justify-center p-4 bg-black bg-opacity-80 hover:bg-opacity-60 rounded-lg shadow-xl transition-all duration-300 md:row-span-2 md:col-start-3 border border-transparent cursor-pointer hover:border-white hover:border-opacity-10"
          variants={variants.contact}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <Link href="/contact">
            <span className="block w-full h-full absolute inset-0 z-10" />

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
        </motion.div>

        {/* Central Welcome Card */}
        <motion.div
          className="flex flex-col items-center justify-center p-4 md:p-8 bg-sky-950 text-white rounded-lg shadow-xl md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 space-y-2 md:space-y-4"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          // Remove this to use the specific transition defined in cardVariants
          // transition={{ duration: 0.5 }}
        >
          <div className="text-center text-xl md:text-2xl">
            Welcome to&nbsp;
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-500 font-bold">
              whizzkee.xyz
            </span>
          </div>
          <p className="text-center text-sm md:text-lg">
            I write stuff and build things
          </p>
        </motion.div>

        {/* About Card */}
        <motion.div
          className="relative group flex items-center justify-center p-4 bg-black bg-opacity-80 hover:bg-opacity-60 rounded-lg shadow-xl transition-all duration-300 md:row-span-2 md:col-start-1 border border-transparent cursor-pointer hover:border-white hover:border-opacity-10"
          variants={variants.about}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <Link href="/about">
            <span className="block w-full h-full absolute inset-0 z-10" />

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
        </motion.div>

        {/* Blog Card */}
        <motion.div
          className="relative group flex items-center justify-center p-4 bg-black bg-opacity-80 hover:bg-opacity-60 rounded-lg shadow-xl transition-all duration-300 border border-transparent cursor-pointer hover:border-white hover:border-opacity-10 md:col-start-2 md:col-end-4"
          variants={variants.blog}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
  <Link href="/blog">
    <span className="block w-full h-full absolute inset-0 z-10" />

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
</motion.div>
      </motion.div>
      
    </div>
  );
};

export default HomePage;
