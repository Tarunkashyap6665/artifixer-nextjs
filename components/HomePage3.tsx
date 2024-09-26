import React, { useState } from "react";
import { FiUpload, FiCrop, FiImage, FiEdit2, FiZap } from "react-icons/fi";

const AIImageTools = [
  {
    name: "Background Removal",
    icon: <FiImage className="text-2xl" />,
    description: "Remove backgrounds from images with AI precision",
  },
  {
    name: "Object Removal",
    icon: <FiEdit2 className="text-2xl" />,
    description: "Seamlessly remove unwanted objects from your images",
  },
  {
    name: "Image Recoloring",
    icon: <FiZap className="text-2xl" />,
    description: "Transform image colors with AI-powered recoloring",
  },
  {
    name: "Image Resizing",
    icon: <FiCrop className="text-2xl" />,
    description: "Resize images to your desired dimensions",
  },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Background Removal");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">Artifixer</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Transform Your Images with AI
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Powerful AI-based image tools at your fingertips
          </p>
          <a
            href="#"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Get Started
          </a>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Our AI Image Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AIImageTools.map((tool) => (
              <div
                key={tool.name}
                className="bg-gray-50 p-6 rounded-lg text-center cursor-pointer transition duration-300 hover:shadow-md"
                onClick={() => setActiveTab(tool.name)}
              >
                <div className="text-indigo-600 mb-4">{tool.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {tool.name}
                </h4>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Try {activeTab}
          </h3>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="mb-6">
              <label
                htmlFor="image-upload"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Upload an image:
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FiUpload className="text-4xl text-gray-400 mb-4" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="image-upload" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300">
                Process Image
              </button>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to transform your images?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Sign up now and get access to all our AI-powered image tools!
          </p>
          <a
            href="#"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4">Artifixer</h4>
              <p className="text-gray-400">
                Transforming images with AI technology
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-xl font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2023 Artifixer. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;