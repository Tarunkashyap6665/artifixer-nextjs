import AboutUs from '@/components/AboutUs'
import React from 'react'

const About = () => {
  return (
    <div className=" py-12  bg-gray-100 px-4 sm:px-6 lg:px-8">
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6 sm:text-4xl">
      About Artifixer
      </h1>
      <AboutUs/>
    </div>

  </div>
    
  )
}

export default About