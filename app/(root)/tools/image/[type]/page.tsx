
import BackgroundRemoval from '@/components/BackgroundRemoval';
import CropImage from '@/components/CropImage';
import EnhanceImage from '@/components/EnhanceImage';
import ResizeImage from '@/components/ResizeImage';
import { Metadata } from 'next';
import { getUserByIdAppwrite } from '@/lib/appwrite/actions/user.actions';
import { deleteUserMongoDB, getUserByIdMongoDB } from '@/lib/mongodb/actions/user.actions';
import { generateRandomUserData } from '@/lib/utils';
import { auth } from '@clerk/nextjs/server';
import React from 'react'
import { cookies } from 'next/headers';

export const generateMetadata = ({ params: { type } }: { params: { type: string } }): Metadata => {

  const toolsType = {
    "crop-image": {
      title: "Crop Image",
      description: "Image Restore helps users bring life back to damaged, old, or low-quality images by enhancing clarity and fixing defects through advanced AI techniques. The tool intelligently removes scratches, blemishes, and other imperfections while preserving the original essence of the image.",

    },
    "resize-image": {
      title: "Resize Image",
      description: "Image Restore helps users bring life back to damaged, old, or low-quality images by enhancing clarity and fixing defects through advanced AI techniques. The tool intelligently removes scratches, blemishes, and other imperfections while preserving the original essence of the image.",

    },
    "background-removal": {
      title: "Background Removal",
      description:  "Background Remove leverages AI to separate the foreground subject from the background, offering a clean removal for any type of image. This tool is ideal for product photography, social media, or any scenario requiring quick background edits.",

    },
    "enhance-image": {
      title: "Image Enhancer",
      description: "The Image Enhancer tool utilizes advanced AI algorithms to improve the quality of your images, making them sharper, clearer, and more vibrant. Whether you're working with low-resolution images or need to enhance details, this tool can process your images with ease, enhancing brightness, contrast, and overall visual appeal.",

    },
  }
  const tools = toolsType[type as ToolType];
  return {
    title: tools.title,
    description: tools.description
  }
}


export async function generateStaticParams() {
 
  return [{type:"crop-image"},{type:"resize-image"},{type:"background-removal"},{type:"enhance-image"}]
}


type ToolType = 'crop-image' | 'resize-image' | 'background-removal' | 'enhance-image';
const ToolsPage = async ({ params: { type } }: { params: { type: string } }) => {
  const { userId } = auth();
  let user;
  let id;
  if (!userId && cookies().has('guest')) {
    const data = cookies().get('guest')?.value
    if (!data) return
    user = JSON.parse(data)
    id = user.clerkId

  }
  else if (!userId && !cookies().has('guest')) {
    user = generateRandomUserData()
    id = user.clerkId
  }
  else {

    try {

      user = await getUserByIdAppwrite(userId!);
      id = user.$id
      const isUserExistInMongoDB = await getUserByIdMongoDB(userId!)
      if (isUserExistInMongoDB && isUserExistInMongoDB._id) {
        await deleteUserMongoDB(userId!)
      }
    } catch (error) {

      user = await getUserByIdMongoDB(userId!);
      id = user._id
    }
  }

  const toolsType = {
    "crop-image": {
      title: "Crop Image",
      description: "Easily crop images to your desired dimensions.",
      component: <CropImage />
    },
    "resize-image": {
      title: "Resize Image",
      description: "Resize images while maintaining quality and aspect ratio.",
      component: <ResizeImage />
    },
    "background-removal": {
      title: "Background Removal",
      description: "Effortlessly remove image backgrounds with a single click.",
      component: <BackgroundRemoval />
    },
    "enhance-image": {
      title: "Image Enhancer",
      description: "Enhance the quality and clarity of images with AI-powered tools.",
      component: <EnhanceImage userId={id} creditBalance={user.creditBalance} />
    },
  }

  const tools = toolsType[type as ToolType];
  return (
    <>

      <div className=" py-16  bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {tools.title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {tools.description}
            </p>
          </div>
          <div className='mt-12'>
            {tools.component}
          </div>
        </div>

      </div>

    </>
  )

}

export default ToolsPage