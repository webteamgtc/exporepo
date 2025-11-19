"use client";

export default function TradingAccountSection() {
  return (
    <section className="bg-[#0F143A] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-8 h-8 text-[#B48755]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Turn Your Trading Account into a Winning Ticket!
          </h3>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
          Join GTC's Lucky Number Campaign and stand a chance to grab a big prize which will be announce on LIVE Streaming during the Golden Falcon Awards, streamed worldwide on 7th December, 6 PM - 9 PM.
        </p>
      </div>
    </section>
  );
}

