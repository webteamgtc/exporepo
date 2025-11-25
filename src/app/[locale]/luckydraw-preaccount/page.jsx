"use client";
import HeroSection from "../luckydraw-falcon-registration/HeroSection";
import StepsToWinSection from "../luckydraw-falcon-registration/StepsToWinSection";
import CountdownHero from "../luckydraw-falcon-registration/CountdownHero";
import Footer from "../luckydraw-falcon-registration/Footer";
import Meta from "../components/Meta";
import OpenAccountStepsSection from "../luckydraw-falcon-registration/OpenAccountStepsSection";

export default function LuckyDrawPreAccountPage() {
  return (
    <>
      <Meta
        title="Join the Lucky Draw Falcon Registration!"
        description="Register now for a chance to win exciting prizes in our Lucky Draw Falcon event. Don't miss out on this opportunity!"
      />
      <div className="min-h-screen bg-[#0F143A] text-white">
        <HeroSection isPreAccount={true}/>
        <StepsToWinSection />
        <OpenAccountStepsSection />

        <CountdownHero />
        <Footer />
      </div>
    </>
  );
}
