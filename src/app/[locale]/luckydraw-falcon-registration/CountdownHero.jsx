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
  const targetDate = new Date("2025-12-06T23:59:59").getTime();

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
    <div className="bg-[#0F143A] min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Don't miss the biggest trading celebration of the year, your next trade could make you a winner.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white mb-12 font-normal">
            Limited lucky numbers available before the Golden Falcon Awards!
          </p>

          {/* Registration Card with Countdown */}
          <div className="bg-[#1a1a47] border border-gray-700 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto shadow-2xl">
            {/* Registration Text */}
            <p className="text-white text-base md:text-lg mb-8 text-center">
              Register from{" "}
              <span className="font-bold">24th of November 2025 to 6th of December 2025</span>{" "}
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
                onClick={() => router.push("/luckydraw-falcon-registration")}
                className="bg-[#B48755] hover:bg-[#8B6914] text-white font-bold px-8 py-4 rounded-lg text-base md:text-lg transition-colors shadow-lg"
              >
                Sign Up & Get Lucky
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Four Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Golden Falcon Awards */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Golden Falcon Awards
              </h3>
              <p className="text-white text-sm font-normal leading-relaxed">
                The premier trading celebration event of the year, bringing exclusive rewards to traders worldwide.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white text-sm font-normal hover:text-[#B48755] transition-colors">
                    About Event
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm font-normal hover:text-[#B48755] transition-colors">
                    Prize Details
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm font-normal hover:text-[#B48755] transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-sm font-normal hover:text-[#B48755] transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="text-white text-sm font-normal">
                  +971 800 667788
                </li>
                <li className="text-white text-sm font-normal">
                  support@gtcix.com
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Follow Us
              </h3>
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#B48755] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#B48755] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#B48755] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#B48755] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright and Disclaimer */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-white text-sm font-normal mb-2">
              2025 Golden Falcon Awards. All rights reserved
            </p>
            <p className="text-white text-sm font-normal">
              *Trading involves risk, Terms and conditions apply. This is not financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

