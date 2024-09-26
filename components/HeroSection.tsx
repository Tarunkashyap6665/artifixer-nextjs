import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <>
            {/* Hero Section */}
         


             <section className="relative h-96 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">

                {/* Dark Overlay for Contrast */}
                <div className="absolute inset-0 bg-black opacity-60"></div>
                {/* Content Section */}
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4 text-white">
                        Revolutionize Your Images with AI
                    </h1>
                    <h2 className="text-2xl font-bold text-teal-200 mb-4">
                        Transform Photos Instantly with Artifixer’s AI-Powered Tools
                    </h2>
                    <p className="text-xl text-orange-300 mb-8">
                        Cutting-edge tools at your fingertips
                    </p>

                    <Link
                        href="#trytools"
                        className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
                    >
                        Start Transforming Now
                    </Link>
                </div>
            </section>
         
        </>
    )
}

export default HeroSection