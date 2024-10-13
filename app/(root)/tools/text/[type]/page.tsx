import TextToImage from '@/components/TextToImage';
import { getUserByIdAppwrite } from '@/lib/appwrite/actions/user.actions';
import { deleteUserMongoDB, getUserByIdMongoDB } from '@/lib/mongodb/actions/user.actions';
import { generateRandomUserData } from '@/lib/utils';
import { auth } from '@clerk/nextjs/server';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import React from 'react'

export const generateMetadata = ({ params: { type } }: { params: { type: string } }): Metadata => {
  const toolsType = {
    "text-to-image": {
      title: "Text2Image",
      description: "The Text2Image tool lets you transform textual descriptions into high-quality images, powered by state-of-the-art AI technology like Stable Diffusion. Simply input your text and watch as your imagination comes to life with detailed, AI-generated visuals.",
    },
   
  }
  const tools = toolsType[type as ToolType];
  return {
    title: tools.title,
    description: tools.description
  }
}

export async function generateStaticParams() {
 
  return [{type:"text-to-image"}]
}




type ToolType = 'text-to-image';
const TextToolsPage = async ({ params: { type } }: { params: { type: string } }) => {
  

  const { userId } = auth();
  let user;
  let id;
  if (!userId && cookies().has('guest')) {
    const data = cookies().get('guest')?.value
    if (!data) return
    user = JSON.parse(data)
    id = user.clerkId

  }
  else if(!userId && !cookies().has('guest')){
    user=generateRandomUserData()
    id=user.clerkId
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
    "text-to-image": {
      title: "Text2Image",
      description: "Generate stunning images from text descriptions using advanced AI models.",
      component: <TextToImage userId={id} creditBalance={user.creditBalance}  />
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

export default TextToolsPage