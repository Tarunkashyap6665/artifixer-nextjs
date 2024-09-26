import React from "react";
import { FaSearch, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdColorLens, MdContentCut, MdPhotoSizeSelectActual, MdSpellcheck, MdAutoAwesome, MdSummarize, MdVideoLibrary } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YWl8fHx8fHwxNjg2NzU3NTMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Artifixer Logo" className="h-10 w-10 object-contain" />
            <h1 className="text-2xl font-bold text-gray-800">Artifixer</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Image Tools</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Text Tools</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Video Creation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a></li>
            </ul>
          </nav>
          <div className="relative">
            <input type="text" placeholder="Search tools..." className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Image Tools Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Image Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <MdColorLens className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Image Recolor</h3>
              <p className="text-gray-600 text-center mb-4">Change colors in your images with ease</p>
              <div className="w-full h-40 bg-gray-200 rounded-md mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1hZ2UgZWRpdGluZ3x8fHx8fDE2ODY3NTc1MzE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Image Recolor" className="w-full h-full object-cover" />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Try Now</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <MdContentCut className="text-5xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Object Removal</h3>
              <p className="text-gray-600 text-center mb-4">Remove unwanted objects from your photos</p>
              <div className="w-full h-40 bg-gray-200 rounded-md mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8b2JqZWN0IHJlbW92YWx8fHx8fHwxNjg2NzU3NTMx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Object Removal" className="w-full h-full object-cover" />
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">Try Now</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <MdPhotoSizeSelectActual className="text-5xl text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Background Removal</h3>
              <p className="text-gray-600 text-center mb-4">Remove backgrounds with one click</p>
              <div className="w-full h-40 bg-gray-200 rounded-md mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFja2dyb3VuZCByZW1vdmFsfHx8fHx8MTY4Njc1NzUzMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Background Removal" className="w-full h-full object-cover" />
              </div>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300">Try Now</button>
            </div>
          </div>
        </section>

        {/* Text Tools Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Text Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <MdSpellcheck className="text-5xl text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grammar Checker</h3>
              <p className="text-gray-600 text-center mb-4">Improve your writing with our AI-powered grammar checker</p>
              <textarea className="w-full h-32 p-2 border rounded-md mb-4" placeholder="Enter your text here..."></textarea>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">Check Grammar</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <MdAutoAwesome className="text-5xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Content Generation</h3>
              <p className="text-gray-600 text-center mb-4">Generate high-quality content with AI assistance</p>
              <textarea className="w-full h-32 p-2 border rounded-md mb-4" placeholder="Enter a topic or prompt..."></textarea>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300">Generate Content</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <MdSummarize className="text-5xl text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Summarization</h3>
              <p className="text-gray-600 text-center mb-4">Get concise summaries of long texts</p>
              <textarea className="w-full h-32 p-2 border rounded-md mb-4" placeholder="Paste your long text here..."></textarea>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300">Summarize</button>
            </div>
          </div>
        </section>

        {/* Video Creation Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Video Creation</h2>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
              <MdVideoLibrary className="text-6xl text-pink-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Video Creation</h3>
              <p className="text-gray-600 mb-6">Create stunning videos with our AI technology. Choose from various templates and customize your content effortlessly.</p>
              <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition duration-300">Start Creating</button>
            </div>
            <div className="md:w-1/2">
              <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200 rounded-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1605119263580-5bfcbe0c1f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dmlkZW8gZWRpdGluZ3x8fHx8fDE2ODY3NTc1MzI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Video Creation" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Artifixer</h4>
              <p className="text-gray-400">AI-powered tools for image and text editing</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">&copy; 2023 Artifixer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;