import React from "react";
import { FaRobot, FaImage, FaEraser, FaPaintBrush, FaCrop, FaExpand, FaStar, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  const tools = [
    { name: "Background Removal", icon: <FaEraser />, description: "Remove backgrounds with AI precision" },
    { name: "Object Removal", icon: <FaEraser />, description: "Erase unwanted objects from your images" },
    { name: "Image Recolor", icon: <FaPaintBrush />, description: "Object Recolor offers users the ability to modify the colors of specific objects within an image while maintaining realistic shading and gradients. Perfect for creative edits or design enhancements, this tool uses AI to ensure color transitions are smooth and natural." },
    { name: "Resize Image", icon: <FaExpand />, description: "Resize your images without losing quality" },
    { name: "Crop Image", icon: <FaCrop />, description: "Crop your images with intelligent suggestions" }
  ];

  const testimonials = [
    { name: "John Doe", comment: "Artifixer's AI tools have revolutionized my image editing workflow!" },
    { name: "Jane Smith", comment: "The background removal feature is simply amazing. Saved me hours of work!" },
    { name: "Mike Johnson", comment: "Incredibly easy to use. The results are professional-grade every time." }
  ];

  const plans = [
    { name: "Basic", price: "$9.99", features: ["5 AI edits/month", "Basic tools access", "Email support"] },
    { name: "Pro", price: "$19.99", features: ["50 AI edits/month", "All tools access", "Priority support"] },
    { name: "Enterprise", price: "Custom", features: ["Unlimited AI edits", "API access", "Dedicated account manager"] }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaRobot className="text-3xl text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Artifixer</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Tools</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Images with AI</h1>
            <p className="text-xl mb-8">Powerful AI-based tools for all your image editing needs</p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">Try for Free</button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our AI-Powered Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="text-4xl text-blue-600 mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="flex text-yellow-400 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</p>
                  <ul className="mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2 flex items-center">
                        <FaImage className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Choose Plan</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Images?</h2>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">Get Started Now</button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Artifixer</h3>
              <p>AI-powered image editing tools</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">Tools</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
                <a href="#" className="text-2xl hover:text-blue-400"><FaFacebook /></a>
                <a href="#" className="text-2xl hover:text-blue-400"><FaInstagram /></a>
                <a href="#" className="text-2xl hover:text-blue-400"><FaLinkedin /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 Artifixer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;