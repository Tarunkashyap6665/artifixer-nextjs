"use client"
import AIPowerTools from "@/components/AIPowerTools";
import BeforeAfterBanner from "@/components/BeforeAfterBanner";
import FooterBanner from "@/components/FooterBanner";
import HeroSection from "@/components/HeroSection";
import HomePage from "@/components/HomePage";
import AIToolsSection from "@/components/shared/AIToolsSection";
import BannerSection from "@/components/shared/BannerSection";
import Testimonials from "@/components/Testimonials";
import TryTools from "@/components/TryTools";
import { aiPoweredTools, navLinks } from "@/constants";
import { Button, Card, Typography } from "@/lib/ui/MaterialTailwind";
import Image from "next/image";

const cardSectionList = [
  {
    label: "AI Image",
    title: "Online AI Image Upscaler & Enhancer",
    description: "Media.io Upscaler is an AI-powered photo tool for restoring, sharpening, and improving image clarity. Effortless online operation for super-resolution. Clear blurry photos anywhere, anytime.",
    images: {
      imageOne: "/assets/images/unblur-after.jpg",
      imageTwo: "/assets/images/unblur-before.png"
    },
    reverse: false,
    backgroundColor: "bg-gradient-to-r from-purple-300  via-red-300 to-indigo-300"

  },
  {
    label: "AI Image",
    title: "Online AI Image Background Remover",
    description: "Media.io Upscaler is an AI-powered photo tool for restoring, sharpening, and improving image clarity. Effortless online operation for super-resolution. Clear blurry photos anywhere, anytime.",
    images: {

      imageOne: "/assets/images/background-remove-after.png",
      imageTwo: "/assets/images/background-remove-before.jpg"
    },
    reverse: true,
    backgroundColor: "bg-gradient-to-r from-pink-500 to-amber-500"

  }
]

export default function Home() {
  const aiImage = navLinks[1]
  const section = cardSectionList[0]
  const key = 0
  const section1 = cardSectionList[1]
  const key1 = 0

  return (
    <>
      {/* {cardSectionList.map((section,key)=>( */}
      {/* <HeroSection /> */}
      <BeforeAfterBanner/>

      <AIPowerTools items={aiPoweredTools} />
      {/* <BannerSection label={section.label} description={section.description} imageOne={section.images.imageOne} imageTwo={section.images.imageTwo} title={section.title} reverse={section.reverse} key={key} backgroundColor={section.backgroundColor} /> */}
      {/* ))} */}


      {/* <HomePage /> */}
      {/* <AIToolsSection label={aiImage.label} description={aiImage.description!} subItems={aiImage.subItems!}/> */}
      {/* {cardSectionList.splice(1,1).map((section,key)=>( */}


      {/* <BannerSection label={section1.label} description={section1.description} imageOne={section1.images.imageOne} imageTwo={section1.images.imageTwo} title={section1.title} reverse={section1.reverse} key={key1} backgroundColor={section1.backgroundColor} /> */}
      <TryTools />
      <Testimonials/>
      {/* <FooterBanner/> */}
      {/* ))} */}
    </>
  );
}
