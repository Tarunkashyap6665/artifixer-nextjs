"use client"
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

const Navbar4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaRobot className="text-3xl text-white" />
            <span className="text-2xl font-bold text-white">Artifixer</span>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <div className="relative group">
              <a href="#" className="text-white hover:text-gray-300">Tools</a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Image Editing</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Text Processing</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Video Creation</a>
              </div>
            </div>
            <a href="#" className="text-white hover:text-gray-300">Pricing</a>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-white text-purple-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition duration-300">Login / Sign Up</button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-purple-900 p-4">
          <a href="#" className="block text-white py-2">Home</a>
          <a href="#" className="block text-white py-2">Tools</a>
          <a href="#" className="block text-white py-2">Pricing</a>
          <a href="#" className="block text-white py-2">About</a>
          <button className="mt-4 w-full bg-white text-purple-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition duration-300">Login / Sign Up</button>
        </div>
      )}

      <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Artifixer</h3>
              <p className="text-sm">Empowering creativity with AI-powered tools for image editing, text processing, and video creation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">Tools</a></li>
                <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 Artifixer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Navbar4;