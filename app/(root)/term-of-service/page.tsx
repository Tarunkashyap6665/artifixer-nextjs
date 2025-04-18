import TermsOfService from '@/components/TermOfService'
import { Metadata } from 'next'
import React from 'react'

export const generateMetadata=():Metadata=>{
  return{
    title:"Term of Service",
    description: "Understand the terms and conditions for using Artifixer's AI-powered tools for image, video, and text processing. Our Terms of Service outline your rights, responsibilities, and guidelines for using our platform.",
    robots:{
      index:false,
      follow:true
    }
  }
}

const page = () => {
  return (
    <div className=" py-16  bg-gray-100 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          TERM OF SERVICE
        </h2>
        <p className="mt-4 text-lg text-gray-500">Last Updated September 30, 2024</p>
      </div>
      <div className="mt-12">
        <TermsOfService />
      </div>
    </div>
  </div>
  )
}

export default page