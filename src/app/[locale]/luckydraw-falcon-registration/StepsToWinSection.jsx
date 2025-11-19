"use client";

export default function StepsToWinSection() {
  return (
    <section className="bg-[#0F143A] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Steps into the Golden Hour of Wins!
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 Card */}
          <div className="bg-[#1a1a47] rounded-2xl p-6 md:p-8 shadow-xl">
            {/* Icon at top center */}
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            {/* Title */}
            <h4 className="text-xl font-bold text-white text-center mb-4">
              Sign Up for Free
            </h4>
            {/* Description */}
            <p className="text-white text-center mb-6 leading-relaxed text-sm md:text-base">
              Complete your quick registration and get $5000 USC instantly.
            </p>
            {/* Illustration */}
            <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-lg p-4 h-40 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">💰</div>
                <div className="text-sm text-[#8B6914] font-semibold">Money Bag</div>
              </div>
            </div>
          </div>

          {/* Step 2 Card */}
          <div className="bg-[#1a1a47] rounded-2xl p-6 md:p-8 shadow-xl">
            {/* Icon at top center */}
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            {/* Title */}
            <h4 className="text-xl font-bold text-white text-center mb-4">
              Receive Your Lucky Card by Email
            </h4>
            {/* Description */}
            <p className="text-white text-center mb-6 leading-relaxed text-sm md:text-base">
              Check your email in which you'll receive Lucky Number.
            </p>
            {/* Illustration */}
            <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-lg p-4 h-40 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">🎫</div>
                <div className="text-sm text-[#8B6914] font-semibold">Lucky Cards</div>
              </div>
            </div>
          </div>

          {/* Step 3 Card */}
          <div className="bg-[#1a1a47] rounded-2xl p-6 md:p-8 shadow-xl">
            {/* Icon at top center */}
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {/* Title */}
            <h4 className="text-xl font-bold text-white text-center mb-4">
              Tune in on 7th December (6-9 PM)
            </h4>
            {/* Description */}
            <p className="text-white text-center mb-6 leading-relaxed text-sm md:text-base">
              Complete your quick registration and get $5000 USC instantly.
            </p>
            {/* Illustration */}
            <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-lg p-4 h-40 flex items-center justify-center relative">
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                LIVE
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">📦</div>
                <div className="text-sm text-[#8B6914] font-semibold">Prize Box</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-lg md:text-xl text-white font-semibold mb-6">
            15 Lucky Numbers Win: Every winner gets exciting cash rewards live on-air.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-[#B48755] hover:from-orange-600 hover:to-[#8B6914] text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}


// import Image from "next/image";

// export default function GoldenFalconLanding() {
//   return (
//     <div className="min-h-screen bg-[#040B2A] text-white">
//       {/* TOP NAV */}
//       <header className="border-b border-white/10">
//         <div className="max-w-6xl mx-auto flex items-center justify-between px-4 lg:px-0 py-4">
//           <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
//             Golden Falcon Awards
//           </div>

//           <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
//             <button className="hover:text-white transition">Home</button>
//             <button className="hover:text-white transition">About</button>
//             <button className="hover:text-white transition">Awards</button>
//             <button className="hover:text-white transition">Schedule</button>
//             <button className="hover:text-white transition">Contact</button>
//           </nav>
//         </div>
//       </header>

//       {/* HERO */}
//       <main className="max-w-6xl mx-auto px-4 lg:px-0 pt-10 pb-16 lg:pt-14 lg:pb-20">
//         <div className="grid lg:grid-cols-[1.25fr_minmax(0,0.9fr)] gap-10 lg:gap-14 items-center">
//           {/* LEFT: TEXT + GOLD IMAGE BG */}
//           <div className="relative">
//             {/* Gold statue background */}
//             <div className="absolute inset-y-0 -left-10 -right-10 -z-10 opacity-70">
//               <div className="relative w-full h-full">
//                 <Image
//             src="/lucky-banner.svg" 
//             alt="Golden Falcon Awards"
//                   fill
//                   className="object-cover object-left-top"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#040B2A] via-[#040B2A]/80 to-transparent" />
//               </div>
//             </div>

//             <div className="max-w-xl space-y-4 lg:space-y-5">
//               <h1 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight font-semibold">
//                 Your Ticket to Win Big at
//                 <br className="hidden sm:block" /> the Golden Falcon Awards!
//               </h1>

//               <p className="text-sm sm:text-base text-white/80 max-w-md">
//                 Join the exclusive trading event of the year and get a chance to
//                 win up to $500,000 in cash prizes!
//               </p>

//               <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80 pt-2">
//                 <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[11px]">
//                   🗓
//                 </span>
//                 <span className="font-medium">
//                   December 7th, 6PM–9PM
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: FORM CARD */}
//           <div className="bg-white rounded-2xl shadow-xl px-6 py-7 sm:px-8 sm:py-8 text-slate-900">
//             <h2 className="text-lg sm:text-xl font-semibold mb-1">
//               Sign Up &amp; Get Your Lucky Number
//             </h2>
//             <p className="text-xs sm:text-sm text-slate-600 mb-4">
//               Sign Up Now &amp; Win Up to $500,000 Cash Prize!
//             </p>
//             <p className="text-xs sm:text-[13px] text-slate-600 mb-6 leading-relaxed">
//               This is your chance to experience trading rewards like never
//               before! Simply sign up, receive 5000 USC instantly, and check your
//               inbox for your Lucky Card, where your secret Lucky Number is
//               hidden.
//             </p>

//             <form className="space-y-4">
//               <div className="space-y-1">
//                 <label className="block text-xs font-medium text-slate-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your full name"
//                   className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#D29943] focus:border-transparent"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <label className="block text-xs font-medium text-slate-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Your email address"
//                   className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#D29943] focus:border-transparent"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <label className="block text-xs font-medium text-slate-700">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="Your phone number"
//                   className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#D29943] focus:border-transparent"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="mt-2 w-full rounded-md bg-[#D29943] px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#c28a35] transition"
//               >
//                 Sign Up &amp; Get Lucky
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* TURN YOUR TRADING ACCOUNT SECTION */}
//         <section className="mt-14 lg:mt-16">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
//             <div className="flex items-center gap-2">
//               <span className="text-2xl">🏆</span>
//               <h3 className="text-lg sm:text-xl font-semibold">
//                 Turn Your Trading Account into a Winning Ticket!
//               </h3>
//             </div>
//           </div>
//           <p className="mt-3 text-sm sm:text-[15px] text-white/80 max-w-3xl">
//             Join GTC’s Lucky Number Campaign and stand a chance to grab a big
//             prize which will be announced on LIVE Streaming during the Golden
//             Falcon Awards, streamed worldwide on 7th December, 6 PM – 9 PM.
//           </p>
//         </section>

//         {/* STEPS SECTION */}
//         <section className="mt-12 lg:mt-14">
//           <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8">
//             Steps into the Golden Hour of Wins!
//           </h3>

//           <div className="grid gap-6 md:grid-cols-3">
//             {/* Card 1 */}
//             <div className="rounded-3xl bg-[#09123C] px-6 py-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
//               <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5">
//                 🎁
//               </div>
//               <h4 className="text-base sm:text-lg font-semibold mb-2">
//                 Sign Up for Free
//               </h4>
//               <p className="text-sm text-white/80">
//                 Complete your quick registration and get 5000 USC instantly.
//               </p>
//               <div className="mt-6 flex justify-center">
//                 <Image
//                   src="/images/card-signup-gold.png"
//                   alt="Sign up reward"
//                   width={140}
//                   height={90}
//                   className="object-contain"
//                 />
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="rounded-3xl bg-[#09123C] px-6 py-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
//               <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5">
//                 ✉️
//               </div>
//               <h4 className="text-base sm:text-lg font-semibold mb-2">
//                 Receive Your Lucky Card by Email
//               </h4>
//               <p className="text-sm text-white/80">
//                 Check your email in which you’ll receive your Lucky Number.
//               </p>
//               <div className="mt-6 flex justify-center">
//                 <Image
//                   src="/images/card-lucky-email.png"
//                   alt="Lucky card"
//                   width={140}
//                   height={90}
//                   className="object-contain"
//                 />
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="rounded-3xl bg-[#09123C] px-6 py-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
//               <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5">
//                 ▶️
//               </div>
//               <h4 className="text-base sm:text-lg font-semibold mb-2">
//                 Tune in on 7th December (6–9 PM)
//               </h4>
//               <p className="text-sm text-white/80">
//                 Watch the LIVE event and see if your Lucky Number wins big
//                 prizes.
//               </p>
//               <div className="mt-6 flex justify-center">
//                 <Image
//                   src="/images/card-live-box.png"
//                   alt="Live event"
//                   width={140}
//                   height={90}
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* FOOTER CTA */}
//           <div className="mt-8 flex flex-col items-center gap-4 text-center">
//             <p className="text-sm sm:text-base font-semibold text-white">
//               15 Lucky Numbers Win: Every winner gets exciting cash rewards live
//               on-air.
//             </p>
//             <button className="inline-flex items-center justify-center rounded-full bg-white text-[#09123C] px-6 py-2.5 text-sm font-semibold shadow-md hover:bg-slate-100 transition">
//               Learn More
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


