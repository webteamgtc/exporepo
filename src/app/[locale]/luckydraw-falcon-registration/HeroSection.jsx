"use client";
import CommonMainForm from "../commonForm";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background - Dark on top, lighter on bottom */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0F143A 0%, #293794 50%, #000021 100%)",
        }}
      />

      {/* Golden Trophy Decorative Element - Overlapping */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[60%] md:w-[70%] lg:w-[65%] h-full">
          <img 
            src="/lucky-banner.svg" 
            alt="Falcon Background" 
            className="w-full h-full object-contain object-left opacity-90" 
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Ticket to Win Big at the Golden Falcon Awards!
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Join the exclusive trading event of the year and get a chance to win up to $500,000 in cash prizes!
            </p>
            <div className="flex items-center gap-3 text-white mb-8">
              <svg className="w-6 h-6 text-[#B48755]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-lg font-semibold">December 7th, 6PM-9PM</span>
            </div>
          </div>

          {/* Right Side - Sign Up Form Card */}
          <div className="relative z-10">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F143A] mb-2 text-center">
                Sign Up & Get Your Lucky Number
              </h3>
              <p className="text-center text-[#B48755] font-semibold text-lg mb-4">
                Sign Up Now & Win Up to $500,000 Cash Prize!
              </p>
              <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
                This is your chance to experience trading rewards like never before! Simply sign up, receive $5000 USC instantly, and check your inbox for your Lucky Card, where your secret Lucky Number is hidden.
              </p>
              
              {/* Form */}
              <CommonMainForm
                zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/umhcnx7/"
                successPath="/success"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

