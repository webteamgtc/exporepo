"use client";
import CommonMainFormCopy from "../CommonCopyInfoBip";
import CommonMainForm from "../commonForm";
import Image from "next/image";

export default function HeroSection({ isPreAccount = false }) {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background - Dark on top, lighter on bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #000021 0%, #293794 50%, #000021 100%)",
        }}
      />

      {/* Golden Trophy Decorative Element - Overlapping */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-0 md:top-1/2 top-[54%] -translate-y-1/2 w-[90%] md:w-[70%] lg:w-[23%] h-full">
          <img
            src="/lucky/falcon.webp"
            alt="Falcon Background"
            className="w-full h-full object-contain object-top opacity-30 md:opacity-40"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-3 px-4">
        <div className="flex justify-center w-full gap-4  mb-5 md:mb-20">
          <Image
            src="/lucky/new-logo.webp"
            width={260}
            height={93}
            alt="GTCFX"
            className="lg:w-[260px] lg:h-[93px] md:w-[110px] md:h-[40px] w-[130px] h-[47px] cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="relative z-10 text-center lg:text-left">
            <p className="text-base md:text-3xl text-secondary font-bold pt-10">Exclusive Offer for New Sign-Ups Only</p>

            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 pt-3">
              Your Ticket to Win Big at the Golden Falcon Awards!
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Join the exclusive trading event of the year and get a chance to
              win up to $250,000 in cash prizes!
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 text-white mb-8 text-center md:text-left">
              <svg
                className="w-6 h-6 text-[#B48755]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-lg font-semibold text-secondary">
                December 7th, 6PM-9PM
              </span>
            </div>
          </div>

          {/* Right Side - Sign Up Form Card */}
          <div className="relative z-10">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-5 max-w-lg mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-[#0F143A] mb-2 text-center">
                Sign Up & Get Your Lucky Number
              </h3>
              <p className="text-center text-[#B48755] font-semibold text-lg mb-4">
                Sign Up Now & Win Up to $250,000 Cash Prize!
              </p>
              <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
                This is your chance to experience trading rewards like never
                before! Simply sign up, receive 5000 USC instantly, and check
                your inbox for your Lucky Card, where your secret Lucky Number
                is hidden.
              </p>

              {/* Form */}
              <CommonMainFormCopy
                zapierUrl={
                  isPreAccount
                    ? "https://hooks.zapier.com/hooks/catch/16420445/uzn1mth/"
                    : "https://hooks.zapier.com/hooks/catch/16420445/uzc4qag/"
                }
                successPath="/success"
                isPreAccount={isPreAccount}
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-12">
          {/* Icon + Heading */}
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            {/* Replace this Image path with your icon */}
            <Image
              src="/lucky/awards.webp" // <-- update here
              alt="Golden icon"
              width={20}
              height={70}
              className="w-[20px] h-[70px] md:w-[20px] md:h-[70px] object-contain"
            />

            <h3 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-white leading-tight">
              Turn Your Trading Account into a Winning Ticket!
            </h3>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl md:max-w-6xl">
            Join GTC’s Lucky Number Campaign and stand a chance to grab a big
            prize which will be announced on LIVE Streaming during the Golden
            Falcon Awards, streamed worldwide on 7th December, 6 PM – 9 PM.
          </p>
        </div>
      </div>
    </section>
  );
}
