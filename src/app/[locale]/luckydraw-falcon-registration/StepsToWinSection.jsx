"use client";

import Image from "next/image";

const STEPS = [
  {
    id: 1,
    title: "Sign Up for Free",
    description: "Complete your quick registration and get 5000 USC instantly.",
    icon: "gift",
    image: "/lucky/box1.webp",      // change to your real path
    imageAlt: "Money bag and coins",
  },
  {
    id: 2,
    title: "Receive Your Lucky Card by Email",
    description: "Check your email in which you'll receive Lucky Number.",
    icon: "mail",
    image: "/lucky/box2.webp",    // change to your real path
    imageAlt: "Golden cards stack",
  },
  {
    id: 3,
    title: "Tune in on 7th December (6–9 PM)",
    description: "Complete your quick registration and get 5000 USC instantly.",
    icon: "play",
    image: "/lucky/box3.webp",        // change to your real path
    imageAlt: "Live prize box with coins",
  },
];

export default function StepsToWinSection() {
  return (
   <section className="bg-gradient-to-b from-[#000021] via-[#253188] to-[#0e1247] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-10 md:mb-14">
          Steps into the Golden Hour of Wins!
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12"> 
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col rounded-[36px] bg-gradient-to-b from-[#1E2B9B] to-[#05175D] pt-8 pb-4
                         overflow-visible shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
            >
              {/* Icon + text block */}
              <div className="mb-4 md:mb-6 pr-10 pl-6">
                {/* Icon circle */}
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  {step.icon === "gift" && (
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 8H4m16 0v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8m16 0-1.6-3.2A2 2 0 0 0 16.6 4H7.4a2 2 0 0 0-1.8 0.8L4 8M12 4v16M6 13v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5"
                      />
                    </svg>
                  )}
                  {step.icon === "mail" && (
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
                      />
                      <path
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4 7 8 5 8-5"
                      />
                    </svg>
                  )}
                  {step.icon === "play" && (
                    <svg
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h4 className="text-xl md:text-2xl font-bold text-secondary mb-2 md:mb-3">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Illustration – right & popping out of bottom */}
              <div className="mt-auto relative h-[120px] sm:h-[140px] md:h-[170px] w-full overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  width={240}
                  height={130}
                  className="absolute bottom-0 right-0 w-auto h-full max-w-[180px] sm:max-w-[200px] md:max-w-none md:w-[240px] object-contain object-right pointer-events-none select-none"
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 240px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text + CTA */}
        <div className="text-center">
          <p className="text-base md:text-lg text-white font-semibold mb-5 md:mb-6 pt-10">
            15 Lucky Numbers Win: Every winner gets exciting cash rewards live on-air.
          </p>
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
    </section>
  );
}
