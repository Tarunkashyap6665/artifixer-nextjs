import ContactUs from '@/components/ContactUs'
import { Metadata } from 'next'
import React from 'react'

export const generateMetadata=():Metadata=>{
  return{
    title:"Contact Us",
    description: "Get in touch with the Artifixer team for support, inquiries, or feedback. We're here to assist you with any questions regarding our AI-powered tools for image, video, and text processing."
    
  }
}

const page = () => {
  return (
    <>
    <ContactUs/>
    </>
  )
}

export default page