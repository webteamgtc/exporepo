// OpenAccountStepsSection.tsx
"use client";

export default function OpenAccountStepsSection() {
  return (
    <section className="bg-[#E7F5FF] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0F143A] leading-tight mb-12">
          Open Your Account in just 3 Steps.
        </h2>

        {/* Steps row */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-20">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/invest-icon-1.png" // replace with your image
              alt="Register for an account"
              className="w-[110px] md:w-[130px] h-auto mb-4"
            />
            <p className="text-[15px] md:text-[16px] font-medium text-[#111827]">
              1.Register for an account
            </p>
          </div>

          {/* Dotted line 1 */}
          <span className="hidden md:inline-block w-20 border-t border-dashed border-[#111827]" />

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/invest-icon-2.png" // replace with your image
              alt="Verify your identity"
              className="w-[110px] md:w-[130px] h-auto mb-4"
            />
            <p className="text-[15px] md:text-[16px] font-medium text-[#111827]">
              2.Verify your identity
            </p>
          </div>

          {/* Dotted line 2 */}
          <span className="hidden md:inline-block w-20 border-t border-dashed border-[#111827]" />

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/invest-icon-3.png" // replace with your image
              alt="Deposit and start trading"
              className="w-[110px] md:w-[130px] h-auto mb-4"
            />
            <p className="text-[15px] md:text-[16px] font-medium text-[#111827]">
              3.Start Trading & Deposit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
