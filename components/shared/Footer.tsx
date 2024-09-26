"use client"
import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <>
      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Artifixer</h3>
              <p className="text-gray-300">Empowering your work with AI-driven solutions</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Tools</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaFacebook className="text-2xl" /></a>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaTwitter className="text-2xl" /></a>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaLinkedin className="text-2xl" /></a>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaInstagram className="text-2xl" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; 2023 Artifixer. All rights reserved.</p>
          </div>
        </div>
      </footer> */}

      <footer className=" relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Artifixer</h4>
              <p className="text-gray-300">Empowering creativity with AI-powered tools for image editing, text processing, and video creation.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about-us" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="/contact-us" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white"><FaFacebook size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-white"><FaTwitter size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-white"><FaLinkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; 2024 Artifixer. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </>
  );
}