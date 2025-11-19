"use client";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TradingAccountSection from "./TradingAccountSection";
import StepsToWinSection from "./StepsToWinSection";
import PrizeProgression from "./PrizeProgression";
import CountdownHero from "./CountdownHero";
import Footer from "./Footer";

export default function LuckyDrawFalconRegistration() {
  return (
    <div className="min-h-screen bg-[#0F143A] text-white">
      <Header />
      <HeroSection />
      <TradingAccountSection />
      <StepsToWinSection />
      <PrizeProgression />
      <CountdownHero />
      <Footer />
    </div>
  );
}

