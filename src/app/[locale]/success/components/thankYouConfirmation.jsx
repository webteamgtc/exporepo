"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const ConfirmationThankYou = ({ user }) => {
  const t = useTranslations("home");
  const [dir, setDir] = useState("ltr");

  const confettiExplosion = useCallback(async (origin) => {
    const confetti = (await import("canvas-confetti")).default;

    const defaults = { disableForReducedMotion: true };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(200 * particleRatio),
        })
      );
    }

    const base = origin || { x: 0.5, y: 0.25 };

    fire(0.25, { spread: 26, startVelocity: 55, origin: base });
    fire(0.2, { spread: 60, origin: base });
    fire(0.35, { spread: 100, decay: 0.91, origin: base });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, origin: base });
    fire(0.1, { spread: 120, startVelocity: 45, origin: base });
    // extra side bursts for fun
    fire(0.2, { spread: 70, startVelocity: 45, origin: { x: 0.15, y: 0.7 } });
    fire(0.2, { spread: 70, startVelocity: 45, origin: { x: 0.85, y: 0.7 } });
  }, []);

  // Trigger confetti on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const t = setTimeout(() => confettiExplosion(), 400);
    return () => clearTimeout(t);
  }, [confettiExplosion]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDir(document.documentElement.dir || "ltr");
    }
  }, []);

  const isRTL = dir === "rtl";

  return (
    <>
      <section className="bg-gradient-to-r from-[#293794] to-[#000021] text-[#E5E5EA] py-8 md:py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/2 h-full z-0 pointer-events-none opacity-50 hidden md:block">
          <div className="relative w-full sm:h-96 xl:h-[500px] 2xl:h-[450px] 3xl:h-[600px] scale-[1.9] origin-center">
            <Image
              src="/bottom-overlay.webp"
              alt="Decorative background"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative container mx-auto">
          <div
            className={`grid md:grid-cols-2 items-center gap-10 mb-8 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <div
              className={isRTL ? "order-1 md:order-1" : "order-1 md:order-2"}
            >
              <img
                className={`w-full max-w-[120px] md:max-w-[320px] mx-auto ${
                  isRTL ? "pr-10" : "pl-10"
                }`}
                src="/thank-you.svg"
                alt="Thank You"
              />
            </div>

            <div
              className={
                isRTL
                  ? "order-2 md:order-2 text-right"
                  : "order-2 md:order-1 text-left"
              }
            >
              <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold mb-5">
                {t("confirmationThankYou.heading")},{" "}
                <span className="text-white">{user?.nickname}</span>!
              </h2>
              <div className="mb-5">
                <p className="text-base tracking-[0.25em] mt-2 capitalize text-[#fff] font-semibold opacity-90">
                  Your Lucky Number
                </p>
                <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight relative overflow-hidden">
                  <span className="block bg-gradient-to-r from-[#E77831] via-[#e6e6e6] to-[#E77831] bg-clip-text text-transparent animate-shine uppercase">
                    {user?.token || ""}
                  </span>
                </h1>
              </div>
              <h4 className="text-lg md:text-xl 2xl:text-2xl font-semibold text-gray-200 mb-5">
                {t("confirmationThankYou.subheading")}
              </h4>
              <div className="max-w-xl">
                <p className="text-sm md:text-base mb-5 leading-relaxed">
                  {t("confirmationThankYou.description1", {
                    email: user?.email,
                  })}
                </p>
                <p className="text-sm mt-4 md:text-base mb-5 leading-relaxed">
                  {t("confirmationThankYou.description2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Local style for gold shine animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shine {
          background-size: 200% 100%;
          animation: shine 2.8s linear infinite;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  );
};

export default ConfirmationThankYou;
