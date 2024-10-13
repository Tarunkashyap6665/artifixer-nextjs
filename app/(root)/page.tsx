import AIPowerTools from "@/components/AIPowerTools";
import BeforeAfterBanner from "@/components/BeforeAfterBanner";
import Testimonials from "@/components/Testimonials";
import TryTools from "@/components/TryTools";
import { aiPoweredTools} from "@/constants";
import { Metadata } from "next";

export const generateMetadata=():Metadata=>{
  return{
    description: "Welcome to Artifixer, your go-to platform for AI-powered tools that transform image, video, and text processing. Explore our innovative solutions and start creating effortlessly today."
    
  }
}


export default async function Home() {
  

  return (
    <>
      <BeforeAfterBanner />
      <AIPowerTools items={aiPoweredTools} />
      <TryTools />
      <Testimonials />
    </>
  );
}
