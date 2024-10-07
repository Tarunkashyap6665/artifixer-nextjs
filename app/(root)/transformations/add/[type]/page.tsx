import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'
import { getUserByIdAppwrite } from '@/lib/appwrite/actions/user.actions'
import { deleteUserMongoDB, getUserByIdMongoDB } from '@/lib/mongodb/actions/user.actions'
import { auth } from '@clerk/nextjs/server'
import { Metadata } from 'next'
import React from 'react'

export const generateMetadata = ({ params: { type } }: SearchParamProps): Metadata => {
  const transformation = transformationTypes[type];
  return {
    title: transformation.title,
    description: transformation.subTitle
  }
}

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  const { userId } = auth();
  let user;
  let id;

  try {

    user = await getUserByIdAppwrite(userId!);
    id=user.$id
    const isUserExistInMongoDB=await getUserByIdMongoDB(userId!)
    if(isUserExistInMongoDB && isUserExistInMongoDB._id){
        await deleteUserMongoDB(userId!)
    }
  } catch (error) {

    user = await getUserByIdMongoDB(userId!);
    id=user._id
  }


  return (
    <div className=" py-16  bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {transformation.title}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {transformation.subTitle}
          </p>
        </div>
        <div className='mt-12'>
          <div className="bg-white shadow-lg rounded-lg">
            <TransformationForm
              action='Add'
              userId={id}
              type={transformation.type as TransformationTypeKey}
              creditBalance={user.creditBalance}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTransformationTypePage