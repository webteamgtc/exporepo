"use client";
import { useState, useEffect } from "react";
import { useRouter } from "@/i18n/navigation";

export default function CountdownHero() {
  const router = useRouter();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date: December 6, 2025 at 11:59 PM
  const targetDate = new Date("2025-12-07T23:59:59").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#fff] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F143A] mb-6 leading-tight">
            Don't miss the biggest trading celebration of the year, your next trade could make you a winner.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-[#0F143A] mb-12 font-normal">
            Limited lucky numbers available before the Golden Falcon Awards!
          </p>

          {/* Registration Card with Countdown */}
          <div className="bg-[#1a1a47] border border-gray-700 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto shadow-2xl">
            {/* Registration Text */}
            <p className="text-white text-base md:text-lg mb-8 text-center max-w-xl mx-auto">
              Register from{" "}
              <span className="font-bold text-secondary">24th of November 2025 to 6th of December 2025</span>{" "}
              to secure your chance before the countdown ends.
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 md:gap-6 mb-8 flex-wrap">
              {/* Days */}
              <div className="bg-white rounded-lg px-6 py-4 md:px-8 md:py-6 w-[100px] md:w-[120px] flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0F143A] mb-2">
                  {String(countdown.days).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-[#0F143A] font-normal">
                  Days
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-lg px-6 py-4 md:px-8 md:py-6 w-[100px] md:w-[120px] flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0F143A] mb-2">
                  {String(countdown.hours).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-[#0F143A] font-normal">
                  Hours
                </div>
              </div>

              {/* Minutes */}
              <div className="bg-white rounded-lg px-6 py-4 md:px-8 md:py-6 w-[100px] md:w-[120px] flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0F143A] mb-2">
                  {String(countdown.minutes).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-[#0F143A] font-normal">
                  Minutes
                </div>
              </div>

              {/* Seconds */}
              <div className="bg-white rounded-lg px-6 py-4 md:px-8 md:py-6 w-[100px] md:w-[120px] flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0F143A] mb-2">
                  {String(countdown.seconds).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-[#0F143A] font-normal">
                  Seconds
                </div>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="text-center">
             <button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="bg-[#B48755] hover:bg-[#8B6914] text-white font-bold px-8 py-4 rounded-lg text-base md:text-lg transition-colors shadow-lg"
>
  Sign Up & Get Lucky
</button>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
}

