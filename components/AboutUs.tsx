"use client"
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import { AiFillRobot, AiOutlineConsoleSql, AiOutlineBarChart } from "react-icons/ai";
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactUs from "./ContactUs";

const AboutUs = () => {
  const teamMembers = [
    // {
    //   name: "John Doe",
    //   role: "CEO & Founder",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    //   linkedin: "https://linkedin.com/in/johndoe",
    //   twitter: "https://twitter.com/johndoe",
    //   github: "https://github.com/johndoe"
    // },
    // {
    //   name: "Jane Smith",
    //   role: "CTO",
    //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    //   linkedin: "https://linkedin.com/in/janesmith",
    //   twitter: "https://twitter.com/janesmith",
    //   github: "https://github.com/janesmith"
    // },
    {
      name: "Tarun Kashyap",
      role: "Lead Developer",
      image: "/assets/user.jpg",
      linkedin: "http://linkedin.com/in/tarun-kashyap-246087202",
      gmail: "mailto:kashyapashish6665@gmail.com",
      github: "https://github.com/Tarunkashyap6665"
    }
  ];

  const aiTools = [
    {
      name: "AI Writer",
      description: "Generate high-quality content using advanced language models.",
      icon: <AiFillRobot className="text-4xl text-blue-500" />
    },
    {
      name: "Data Analyzer",
      description: "Analyze complex datasets and generate insights using AI.",
      icon: <AiOutlineBarChart className="text-4xl text-green-500" />
    },
    {
      name: "AI Assistant",
      description: "Your personal AI-powered assistant for daily tasks.",
      icon: <AiOutlineConsoleSql className="text-4xl text-purple-500" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Lee",
      company: "TechCorp",
      testimonial: "Artifixer's AI tools have revolutionized our workflow. We've seen a 50% increase in productivity!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Tom Brown",
      company: "InnovateCo",
      testimonial: "The AI Writer tool has helped us create engaging content in half the time. It's a game-changer!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">




      {/* Introduction Section */}
      <section className="py-16 bg-white container">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            At Artifixer, we're on a mission to revolutionize content creation and analysis through cutting-edge AI technology. Our platform offers a suite of powerful tools for image, video, and text processing, designed to enhance creativity and boost productivity for individuals and businesses alike.

          </p>
        </div>
      </section>



      {/* AI Tools Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">Free Tools</h3>
              <ul className="list-disc list-inside">
                <li>Basic Image Enhancement</li>
                <li>Text Summarization</li>
                <li>Video Thumbnail Generator</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">Premium Tools</h3>
              <ul className="list-disc list-inside">
                <li>Advanced Image Editing with AI</li>
                <li>Video Content Analysis</li>
                <li>AI-Powered Content Generation</li>
                <li>Custom AI Model Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md col-start-2 p-6 py-24 w-full">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-gray-600 text-center mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.gmail} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-600">
                  <FaGoogle size={24} />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="">
        {/* <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <form className="bg-white rounded-lg p-8">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
              </form>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="bg-white rounded-lg p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="flex items-center mb-4">
                  <MdEmail className="text-blue-500 text-2xl mr-4" />
                  <span>info@artifixer.com</span>
                </div>
                <div className="flex items-center mb-4">
                  <MdPhone className="text-blue-500 text-2xl mr-4" />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <BsChatDotsFill className="text-blue-500 text-2xl mr-4" />
                  <span>Live Chat Available</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <ContactUs title="Get in Touch"/>
      </section>


    </div>
  );
};

export default AboutUs;