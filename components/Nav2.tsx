"use client"
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaImage, FaFileAlt, FaVideo, FaRobot } from "react-icons/fa";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMegaMenuOpen(false);
  };

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!megaMenuOpen);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwxfHxBSSUyMGxvZ298ZW58MHx8fHwxNjk0NDM1NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Artifixer Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="text-white text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              Artifixer
            </span>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              Home
            </a>
            <div className="relative">
              <button
                onClick={toggleMegaMenu}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                Tools
              </button>
              {megaMenuOpen && (
                <div className="absolute top-10 left-0 w-screen max-w-4xl bg-white rounded-lg shadow-xl p-6 grid grid-cols-2 gap-4">
                  <div className="flex items-start space-x-4">
                    <FaImage className="text-purple-600 text-2xl mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Image Tools</h3>
                      <p className="text-sm text-gray-600">Edit and enhance your images</p>
                      <a href="#" className="text-purple-600 hover:underline text-sm">
                        Learn more
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaFileAlt className="text-indigo-600 text-2xl mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Document Tools</h3>
                      <p className="text-sm text-gray-600">Process and analyze text documents</p>
                      <a href="#" className="text-indigo-600 hover:underline text-sm">
                        Learn more
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaVideo className="text-pink-600 text-2xl mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Video Tools</h3>
                      <p className="text-sm text-gray-600">Edit and process video content</p>
                      <a href="#" className="text-pink-600 hover:underline text-sm">
                        Learn more
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaRobot className="text-green-600 text-2xl mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">AI Tools</h3>
                      <p className="text-sm text-gray-600">Leverage AI for various tasks</p>
                      <a href="#" className="text-green-600 hover:underline text-sm">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="text-white hover:text-gray-200">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              About
            </a>
          </div>

          <div className="hidden md:block">
            <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Login / Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-purple-700 p-4">
          <a href="#" className="block text-white py-2">
            Home
          </a>
          <a href="#" className="block text-white py-2">
            Tools
          </a>
          <a href="#" className="block text-white py-2">
            Pricing
          </a>
          <a href="#" className="block text-white py-2">
            About
          </a>
          <button className="mt-4 w-full bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Login / Sign Up
          </button>
        </div>
      )}

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwxfHxBSSUyMGxvZ298ZW58MHx8fHwxNjk0NDM1NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Artifixer Logo"
                className="h-8 w-8 mb-2"
              />
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
                Artifixer
              </h2>
              <p className="mt-2 text-sm">Empowering creativity with AI</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">Tools</a></li>
                <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p>Email: info@artifixer.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
            © 2023 Artifixer. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Navbar2;