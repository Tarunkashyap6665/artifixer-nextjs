import AIPowerTools from "@/components/AIPowerTools";
import BeforeAfterBanner from "@/components/BeforeAfterBanner";
import Testimonials from "@/components/Testimonials";
import TryTools from "@/components/TryTools";
import { aiPoweredTools} from "@/constants";

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
