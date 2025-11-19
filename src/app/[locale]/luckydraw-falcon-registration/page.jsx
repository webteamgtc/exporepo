"use client";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TradingAccountSection from "./TradingAccountSection";
import StepsToWinSection from "./StepsToWinSection";
import PrizeProgression from "./PrizeProgression";
import CountdownHero from "./CountdownHero";
import Footer from "./Footer";
import Meta from "../components/Meta";

export default function LuckyDrawFalconRegistration() {
  return (

    <div className="min-h-screen bg-[#0F143A] text-white">
      <Meta title="Join the Lucky Draw Falcon Registration!" description="Register now for a chance to win exciting prizes in our Lucky Draw Falcon event. Don't miss out on this opportunity!" />
      <HeroSection />
      <StepsToWinSection />
      <PrizeProgression />
      <CountdownHero />
      <Footer />
    </div>
  );
}

