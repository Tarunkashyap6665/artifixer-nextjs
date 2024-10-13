import { PricingCard } from "@/components/PricingCard";
import { plans } from "@/constants";
import { getUserByIdAppwrite } from "@/lib/appwrite/actions/user.actions";
import { deleteUserMongoDB, getUserByIdMongoDB } from "@/lib/mongodb/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: "Pricing",
    description: "Explore Artifixer's flexible pricing plans for our AI-powered tools. Whether you're an individual creator or a business, choose from free or premium options tailored to your image, video, and text processing needs."

  }
}

const page = async () => {
  const { userId } = auth();
  let user = null;
  if (userId) {
    try {

      user = await getUserByIdAppwrite(userId);
      const isUserExistInMongoDB = await getUserByIdMongoDB(userId)
      if (isUserExistInMongoDB && isUserExistInMongoDB._id) {
        await deleteUserMongoDB(userId)
      }
    } catch (error) {

      user = await getUserByIdMongoDB(userId)
    }
  }



  return (
    <div className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose the plan that's right for you and get started with our
            powerful AI tools.
          </p>
        </div>
        <div className="mt-12">
          <PricingCard user={user} plans={plans} />

        </div>
      </div>
    </div>
  );
};

export default page;
