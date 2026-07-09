import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import RecruitingServices from "@/components/sections/RecruitingServices";
import Resources from "@/components/sections/Resources";
import TheTrailCheckSystem from "@/components/sections/TheTrailCheckSystem";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resources />
      <RecruitingServices />
      <TheTrailCheckSystem />
      <HowItWorks />
      <FAQ />
      <Contact />
    </>
  );
}
