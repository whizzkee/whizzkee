"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 bg-opacity-60 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <Image
            src="/images/whizzkeeLogo2.png" // Ensure the path is correct
            alt="Whizzkee Logo"
            width={40} // Specify the width
            height={25} // Specify the height
          />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <span className="hover:text-gray-400">Home</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-gray-400">About</span>
          </Link>
          <Link href="/blog">
            <span className="hover:text-gray-400">Blog</span>
          </Link>
          <Link href="/projects">
            <span className="hover:text-gray-400">Projects</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-gray-400">Contact</span>
          </Link>
        </div>
        <div className="md:hidden flex items-center z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes size={24} onClick={handleClose} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 z-40 flex flex-col justify-center items-center text-xl">
          <Link href="/">
            <span
              onClick={handleClose}
              className="hover:text-gray-400 block py-2"
            >
              Home
            </span>
          </Link>
          <Link href="/about">
            <span
              onClick={handleClose}
              className="hover:text-gray-400 block py-2"
            >
              About
            </span>
          </Link>
          <Link href="/blog">
            <span
              onClick={handleClose}
              className="hover:text-gray-400 block py-2"
            >
              Blog
            </span>
          </Link>
          <Link href="/projects">
            <span
              onClick={handleClose}
              className="hover:text-gray-400 block py-2"
            >
              Projects
            </span>
          </Link>
          <Link href="/contact">
            <span
              onClick={handleClose}
              className="hover:text-gray-400 block py-2"
            >
              Contact
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
