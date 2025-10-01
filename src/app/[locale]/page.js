"use client";
import Image from "next/image";
import CommonMainForm from "./commonForm";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { renderSvg } from "../config/svgs";
import LanguageSelect from "./LanguageSelect";
import Header from "./header";
import Meta from "./components/Meta";

export default function GTCRegisterWithDesign() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const t = useTranslations("home.banner");
  return (
    <>
    <Meta title="Get 5,000 USC to Trade. No Deposit Needed!" description="Fill in your details, activate your GTC Cent trading account, and start trading with a 5,000 USC bonus today."/>
    <div className="min-h-screen bg-[#0F143A] text-white">
      {/* Top Bar */}
      <Header />

      {/* Hero Section with gradient bg, candles overlay, and bottom curve */}  
      <section className="relative">
        {/* Gradient base */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(135deg,#293794 0%,#000021 100%)",  
          }}
        />

        {/* Candles image on the right */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[60%] md:w-[70%] lg:w-[70%] opacity-70"
          style={{
            backgroundImage: `url(/bg-new.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            maskImage:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.6) 20%, rgba(0,0,0,1) 60%)",
            WebkitMaskImage:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.6) 20%, rgba(0,0,0,1) 60%)",
          }}
        />

        {/* Content */}
        <div className="bg-[linear-gradient(135deg,#293794,#00002f)]">
          <div className="mx-auto relative z-10 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 pt-10 pb-10 lg:pb-20">
            {/* Left */}
            <div className="relative text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-white">{t("topText")}</span>
              </h1>
              <p className="mt-2 text-3xl font-semibold text-[#B48755]">
                {t("desc")}
              </p>
              <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-md">
                {t("para1")}
              </p>

              {/* Mobile CTA opens drawer */}
              <div className="mt-8 block md:hidden">
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="w-full bg-[#B48755] py-3 rounded-xl text-white font-semibold shadow-lg transition hover:brightness-110"
                >
                  Register Now
                </button>
              </div>

              {/* Highlights */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-4 flex flex-col  items-center rounded-xl text-[#4D4D70] shadow-sm">
                  {renderSvg("1")}
                  <h3 className="font-semibold text-base text-center my-3 text-[#bc9366]">
                    {t("list.item1.title")}
                  </h3>
                  <p className="text-sm text-center text-[#4d4d70]">
                    {t("list.item1.para1")}
                  </p>
                </div>
                <div className="bg-white p-4 flex flex-col  items-center rounded-xl text-[#4D4D70] shadow-sm">
                  {renderSvg("2")}
                  <h3 className="font-semibold text-base text-center my-3 text-[#bc9366]">
                    {t("list.item2.title")}
                  </h3>
                  <p className="text-sm text-center text-[#4d4d70]">
                    {t("list.item2.para1")}
                  </p>
                </div>
                <div className="bg-white p-4 flex flex-col  items-center rounded-xl text-[#4D4D70] shadow-sm">
                  {renderSvg("3")}
                  <h3 className="font-semibold text-base text-center my-3 text-[#bc9366]">
                    {t("list.item3.title")}
                  </h3>
                  <p className="text-sm text-center text-[#4d4d70]">
                    {t("list.item3.para1")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right (desktop form card) */}
            <div className="hidden lg:block">
              <div className="bg-white max-w-lg mx-auto text-[#4D4D70] p-6 rounded-2xl shadow-2xl">
                <h3 className="mb-4 text-xl font-semibold text-[#000032] text-center">
                  Register Now
                </h3>
                <CommonMainForm
                  zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/umhcnx7/"
                  successPath="/success"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom curve (foreground) */}
        <img
          className=" absolute hidden md:flex bottom-0 h-[300px] w-full"
          src="/curve.png"
          alt=""
        />
      </section>

      {/* Drawer (mobile) */}
      <div
        className={`fixed inset-0 z-50 flex justify-end bg-black/50 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      >
        <div
          className={`w-full sm:w-[480px] h-full bg-[#000032] text-[#fff] p-6 overflow-auto transform transition-transform duration-500 ease-in-out ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className=" justify-between mb-6">
            <button
              aria-label="Close"
              className="rounded-full p-2 text-[#fff] flex justify-end w-full hover:bg-slate-100"
              onClick={() => setDrawerOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-3xl font-semibold text-[#fff] text-center">
              Register Now
            </h3>
          </div>
          <CommonMainForm
            zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/umhcnx7/"
            successPath="/success"
            isMobile={true}
          />
        </div>
      </div>
    </div>
     </>
  );
}
