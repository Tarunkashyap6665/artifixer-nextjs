"use client"
import ImageTransformer from '@/components/sample/Image'
import AddBackground from '@/components/shared/AddBackground'
import BackgroundRemoval from '@/components/shared/BackgroundRemoval/BackgroundRemoval'
import CropImage from '@/components/shared/crop/CropImage'
import ImageUpload from '@/components/shared/ImageUpload' 
import React from 'react'

const TransformationPage = () => {
  return (
    <>
    <BackgroundRemoval/>
    {/* <ImageTransformer/> */}
    {/* <AddBackground/> */}
    {/* <CropImage/> */}
    </>
  )
}

export default TransformationPage