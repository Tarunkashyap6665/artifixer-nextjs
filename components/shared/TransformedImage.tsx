"use client"

import { dataUrl, debounce, getImageSize } from '@/lib/utils'
import { CldImage } from 'next-cloudinary'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import React from 'react'
import { FiImage } from 'react-icons/fi'

const TransformedImage = ({ image, type, transformationConfig, setIsTransforming }: TransformedImageProps) => {



  return (


    <div className="w-full md:w-1/2 grid" >
      <h2 className="text-lg font-semibold mb-2">Transformed Image</h2>
      {image?.publicId && transformationConfig ? (
        <CldImage
          width={getImageSize(type, image, "width")}
          height={getImageSize(type, image, "height")}
          src={image?.publicId}
          alt={image.title||"Transformed Image"}
          sizes={"(max-width:767px) 100vw, 50vw"}
          placeholder={dataUrl as PlaceholderValue}
          className="w-full h-auto rounded-lg shadow-md "
          onLoad={() => {
            setIsTransforming && setIsTransforming(false)
          }}
          onError={() => {
            debounce(() => {
              setIsTransforming && setIsTransforming(false);
            }, 8000)()
          }}
          {...transformationConfig}
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
         <FiImage className="h-12 w-12 text-gray-400" />

        </div>
      )}
    </div>

  )
}

export default TransformedImage