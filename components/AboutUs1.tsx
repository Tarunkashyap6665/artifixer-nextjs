import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            About Artifixer
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Welcome to <span className="font-bold">Artifixer</span>, your go-to
            AI-powered SaaS platform for creative and productivity solutions.
            Our mission is to empower individuals and businesses with
            cutting-edge AI tools that make working with images, videos, and
            text easier, faster, and more efficient.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At Artifixer, we are a team of passionate developers, data
            scientists, and AI enthusiasts dedicated to transforming the way you
            interact with media. Whether you’re a creator, marketer, or
            developer, our platform is designed to enhance your workflow through
            smart automation and innovative technology.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We provide a wide array of{" "}
            <span className="font-bold">AI-driven tools</span> that help you
            create, modify, and optimize your digital content with ease. Our
            tools are built to cater to users from all backgrounds, whether you
            need quick, free features or advanced tools for professional use.
            With <span className="font-bold">Artifixer</span>, you can:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Enhance images with AI-based editing and restoration features.</li>
            <li>Process videos for automatic enhancement, stabilization, and more.</li>
            <li>
              Generate and modify text using natural language processing models for
              content creation, summaries, translations, and more.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Artifixer?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            - <span className="font-bold">Ease of Use</span>: Our intuitive platform
            ensures that anyone, regardless of technical background, can use our
            tools effortlessly.
            <br />
            - <span className="font-bold">AI at Your Fingertips</span>: Leveraging the latest AI
            advancements, we bring powerful features that make creative tasks
            simpler and more effective.
            <br />
            - <span className="font-bold">Scalability</span>: Whether you're an individual user
            or an enterprise, our tools are designed to scale with your needs,
            offering flexibility and power at every level.
            <br />
            - <span className="font-bold">Affordable Plans</span>: Our free tier provides basic
            functionalities, while our premium plans are tailored to suit
            professionals seeking advanced tools without breaking the bank.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700">
            We believe in democratizing the power of AI by making advanced
            technology accessible to everyone. Our vision is to create a
            platform where AI tools seamlessly blend into your daily work,
            enabling creativity, productivity, and innovation across industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
