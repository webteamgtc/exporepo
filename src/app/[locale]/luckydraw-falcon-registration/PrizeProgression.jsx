"use client";

export default function PrizeProgression() {
  // Prize progression schedule data
  const schedule = [
    { time: "3:10 PM", platform: "Instagram" },
    { time: "3:20 PM", platform: "TikTok" },
    { time: "3:30 PM", platform: "Instagram" },
    { time: "3:40 PM", platform: "TikTok" },
    { time: "3:50 PM", platform: "Instagram" },
    { time: "4:00 PM", platform: "TikTok" },
    { time: "4:10 PM", platform: "Instagram" },
    { time: "4:20 PM", platform: "TikTok" },
    { time: "4:30 PM", platform: "Instagram" },
    { time: "4:40 PM", platform: "TikTok" },
    { time: "4:50 PM", platform: "Instagram" },
    { time: "5:00 PM", platform: "TikTok" },
  ];

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F143A] text-center mb-12">
          Prize Progression
        </h2>

        {/* Table */}
        <div className="overflow-hidden rounded-lg shadow-lg mb-12">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#0F143A]">
                <th className="px-6 py-4 text-left text-white font-bold text-base md:text-lg">
                  Time
                </th>
                <th className="px-6 py-4 text-left text-white font-bold text-base md:text-lg">
                  Platform
                </th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => {
                const isInstagram = item.platform === "Instagram";
                const bgColor = isInstagram ? "bg-[#F0F4F8]" : "bg-[#E6ECF2]";
                
                return (
                  <tr key={index} className={bgColor}>
                    <td className="px-6 py-4 text-gray-800 text-base md:text-lg">
                      {item.time}
                    </td>
                    <td className="px-6 py-4 text-gray-800 text-base md:text-lg">
                      <div className="flex items-center gap-3">
                        {isInstagram ? (
                          <>
                            {/* Instagram Icon - Gradient */}
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <defs>
                                <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#833AB4" />
                                  <stop offset="50%" stopColor="#FD1D1D" />
                                  <stop offset="100%" stopColor="#FCB045" />
                                </linearGradient>
                              </defs>
                              <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                fill="url(#instagram-gradient)"
                              />
                              <circle cx="12" cy="12" r="4" fill="white" />
                              <circle cx="17" cy="7" r="1.5" fill="white" />
                            </svg>
                            <span className="font-medium">Instagram</span>
                          </>
                        ) : (
                          <>
                            {/* TikTok Icon */}
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#000000"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                            <span className="font-medium">TikTok</span>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          {/* Watch Live Text */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0F143A] mb-6">
            Watch Live on Instagram & TikTok
          </h3>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6 mb-6">
            {/* Instagram Icon - Larger */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="instagram-gradient-large" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#833AB4" />
                    <stop offset="50%" stopColor="#FD1D1D" />
                    <stop offset="100%" stopColor="#FCB045" />
                  </linearGradient>
                </defs>
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  fill="url(#instagram-gradient-large)"
                />
                <circle cx="12" cy="12" r="4" fill="white" />
                <circle cx="17" cy="7" r="1.5" fill="white" />
              </svg>
            </a>

            {/* TikTok Icon - Larger */}
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>

          {/* Motivational Text */}
          <p className="text-lg md:text-xl text-[#0F143A] font-normal">
            Stay tuned, the next winner could be you!
          </p>
        </div>
      </div>
    </div>
  );
}

