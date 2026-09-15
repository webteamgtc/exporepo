"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import CommonMainForm from "./commonForm";
import Meta from "./components/Meta";
import Footer from "./components/Footer";


const goldTextGradient = {
  backgroundImage: "linear-gradient(180deg, #FFF1D4 0%, #D7AE5C 50%, #C4AB79 100%)",
};

const featureIconProps = {
  width: 40,
  height: 40,
  viewBox: "0 0 57 57",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  className: "shrink-0 w-10 h-10",
  "aria-hidden": true,
};

const FeatureIcons = {
  wallet: (
    <svg {...featureIconProps}>
      <path d="M36.3629 28.1518C36.3629 27.2185 36.7336 26.3234 37.3936 25.6635C38.0535 25.0036 38.9486 24.6328 39.8819 24.6328C40.8152 24.6328 41.7102 25.0036 42.3702 25.6635C43.0301 26.3234 43.4009 27.2185 43.4009 28.1518C43.4009 29.0851 43.0301 29.9802 42.3702 30.6401C41.7102 31.3 40.8152 31.6708 39.8819 31.6708C38.9486 31.6708 38.0535 31.3 37.3936 30.6401C36.7336 29.9802 36.3629 29.0851 36.3629 28.1518Z" fill="url(#paint0_linear_7_849)" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M47.9544 15.657C47.1828 13.8446 45.9407 12.2715 44.3568 11.1005C42.7729 9.92947 40.9047 9.20314 38.9458 8.99672L37.4162 8.8372C29.6927 8.02438 21.9025 8.07789 14.1909 8.99672L13.1774 9.11637C11.2735 9.34241 9.49905 10.1958 8.13382 11.5419C6.76858 12.888 5.89028 14.6503 5.63742 16.5508C4.61033 24.2507 4.61033 32.0528 5.63742 39.7527C5.89028 41.6532 6.76858 43.4155 8.13382 44.7616C9.49905 46.1077 11.2735 46.9611 13.1774 47.1871L14.1909 47.3068C21.9022 48.2264 29.6909 48.2804 37.4162 47.4663L38.9458 47.3068C40.9047 47.1004 42.7729 46.374 44.3568 45.203C45.9407 44.032 47.1828 42.4589 47.9544 40.6465C49.1703 40.2862 50.2541 39.578 51.0724 38.6092C51.8907 37.6404 52.4077 36.4534 52.5596 35.1944C53.1062 30.5165 53.1062 25.787 52.5596 21.1091C52.4077 19.8501 51.8907 18.6631 51.0724 17.6943C50.2541 16.7255 49.1703 16.0173 47.9544 15.657ZM37.0456 12.3351C29.5833 11.552 22.0569 11.6039 14.6061 12.4899L13.5927 12.6119C12.4649 12.7457 11.4138 13.2512 10.605 14.0485C9.79622 14.8458 9.27584 15.8896 9.12591 17.0153C8.14264 24.4071 8.14264 31.8964 9.12591 39.2882C9.27584 40.4139 9.79622 41.4577 10.605 42.255C11.4138 43.0523 12.4649 43.5578 13.5927 43.6916L14.6061 43.8136C22.057 44.7004 29.5853 44.752 37.0479 43.9684L38.5775 43.8066C40.5204 43.6041 42.3079 42.6523 43.5604 41.1532C40.0195 41.3584 36.4677 41.2658 32.9424 40.8764C31.4852 40.7155 30.1253 40.0665 29.0835 39.035C28.0418 38.0034 27.3794 36.6499 27.2041 35.1944C26.6602 30.5151 26.6602 25.7884 27.2041 21.1091C27.3794 19.6536 28.0418 18.3001 29.0835 17.2685C30.1253 16.237 31.4852 15.588 32.9424 15.4271C36.4677 15.0377 40.0195 14.9451 43.5604 15.1503C42.3079 13.6512 40.5204 12.6994 38.5775 12.4969L37.0456 12.3351ZM45.2237 18.803L45.2284 18.8288L45.2425 18.9226L45.7093 18.8475C45.9502 18.871 46.191 18.8968 46.4319 18.925C47.809 19.0775 48.9069 20.1683 49.0641 21.5173C49.5802 25.9254 49.5802 30.3781 49.0641 34.7862C48.981 35.4514 48.6759 36.0692 48.1983 36.5396C47.7206 37.01 47.0983 37.3056 46.4319 37.3785C46.191 37.4067 45.9502 37.4325 45.7093 37.456L45.2425 37.3832L45.2284 37.4747L45.2237 37.5005C41.2871 37.8571 37.2473 37.8172 33.3318 37.3785C32.6654 37.3056 32.0431 37.01 31.5654 36.5396C31.0878 36.0692 30.7828 35.4514 30.6996 34.7862C30.1832 30.3783 30.1832 25.9252 30.6996 21.5173C30.7828 20.8521 31.0878 20.2343 31.5654 19.7639C32.0431 19.2935 32.6654 18.9979 33.3318 18.925C37.2826 18.4877 41.2648 18.4468 45.2237 18.803Z" fill="url(#paint1_linear_7_849)" />
      <defs>
        <linearGradient id="paint0_linear_7_849" x1="37.4554" y1="24.3727" x2="50.3647" y2="35.8832" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFF1D4" />
          <stop offset="0.5" stop-color="#D7AE5C" />
          <stop offset="1" stop-color="#C4AB79" />
        </linearGradient>
        <linearGradient id="paint1_linear_7_849" x1="12.3343" y1="6.79523" x2="85.5608" y2="85.7593" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFF1D4" />
          <stop offset="0.5" stop-color="#D7AE5C" />
          <stop offset="1" stop-color="#C4AB79" />
        </linearGradient>
      </defs>
    </svg>
  ),
  shield: (
    <svg {...featureIconProps}>
      <g clip-path="url(#clip0_7_853)">
        <path d="M48.8748 11.5735C45.3312 10.6263 41.8689 9.39724 38.5212 7.89813C35.2281 6.4696 32.0491 4.79123 29.0121 2.87771L28.1519 2.34595L27.3074 2.89335C24.2703 4.80687 21.0914 6.48524 17.7983 7.91377C14.445 9.40833 10.9775 10.6322 7.42898 11.5735L6.25598 11.8707V24.9144C6.25598 45.8563 27.4168 53.6919 27.6202 53.7701L28.1519 53.9578L28.6837 53.7701C28.9026 53.7701 50.0478 45.8719 50.0478 24.9144V11.8707L48.8748 11.5735ZM46.9199 24.9144C46.9199 42.1183 31.2799 49.3284 28.1519 50.6108C25.0239 49.3284 9.38397 42.1027 9.38397 24.9144V14.2949C12.6832 13.3466 15.9128 12.1708 19.0495 10.7759C22.1869 9.42089 25.2281 7.85325 28.1519 6.0839C31.0757 7.85325 34.117 9.42089 37.2544 10.7759C40.391 12.1708 43.6206 13.3466 46.9199 14.2949V24.9144Z" fill="url(#paint0_linear_7_853)" />
        <path d="M17.0163 26.3846C16.7171 26.1284 16.3322 25.9945 15.9386 26.0097C15.545 26.0249 15.1716 26.1881 14.8931 26.4666C14.6145 26.7452 14.4513 27.1185 14.4361 27.5122C14.4209 27.9058 14.5548 28.2906 14.811 28.5898L24.195 37.9738L41.2895 21.5362C41.5881 21.2459 41.7592 20.8488 41.7651 20.4323C41.7709 20.0158 41.6111 19.614 41.3208 19.3154C41.0304 19.0167 40.6333 18.8456 40.2168 18.8398C39.8003 18.8339 39.3985 18.9937 39.0999 19.2841L24.2888 33.6572L17.0163 26.3846Z" fill="url(#paint1_linear_7_853)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_7_853" x1="13.054" y1="0.438555" x2="104.753" y2="69.8136" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFF1D4" />
          <stop offset="0.5" stop-color="#D7AE5C" />
          <stop offset="1" stop-color="#C4AB79" />
        </linearGradient>
        <linearGradient id="paint1_linear_7_853" x1="18.6776" y1="18.1325" x2="52.9968" y2="61.8407" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFF1D4" />
          <stop offset="0.5" stop-color="#D7AE5C" />
          <stop offset="1" stop-color="#C4AB79" />
        </linearGradient>
        <clipPath id="clip0_7_853">
          <rect width="56.3038" height="56.3038" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  clipboard: (
    <svg {...featureIconProps}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0389 7.64782C17.1778 6.35286 17.7906 5.15497 18.7594 4.28451C19.7281 3.41405 20.9845 2.93247 22.2869 2.93237H34.0168C35.3192 2.93247 36.5756 3.41405 37.5444 4.28451C38.5132 5.15497 39.1259 6.35286 39.2648 7.64782C41.0572 7.68535 42.6032 7.77685 43.9263 8.02083C45.7046 8.34927 47.2177 8.96861 48.4494 10.2026C49.8617 11.6125 50.4669 13.3932 50.7532 15.5045C51.0253 17.5362 51.0253 20.1238 51.0253 23.3308V37.6648C51.0253 40.8718 51.0253 43.4594 50.7532 45.4934C50.4669 47.6048 49.8617 49.383 48.4494 50.7953C47.0371 52.2076 45.2588 52.8129 43.1474 53.0991C41.1135 53.3712 38.5258 53.3712 35.3189 53.3712H20.9849C17.7779 53.3712 15.1903 53.3712 13.1563 53.0991C11.0449 52.8129 9.26663 52.2076 7.85434 50.7953C6.44205 49.383 5.83679 47.6048 5.55292 45.4934C5.27844 43.4594 5.27844 40.8718 5.27844 37.6648V23.3308C5.27844 20.1238 5.27844 17.5362 5.55292 15.5022C5.83444 13.3908 6.4444 11.6125 7.85434 10.2003C9.08599 8.96861 10.5992 8.34692 12.3774 8.02083C13.7006 7.77685 15.2489 7.68535 17.0389 7.64782ZM17.0436 11.1668C15.3592 11.2043 14.0595 11.2888 13.0132 11.4812C11.6853 11.7252 10.9135 12.1193 10.3434 12.6894C9.6936 13.3392 9.27132 14.2494 9.03907 15.9737C8.80212 17.7426 8.79743 20.0933 8.79743 23.4598V37.5358C8.79743 40.9023 8.80212 43.2506 9.03907 45.0242C9.27132 46.7461 9.69595 47.6564 10.3434 48.3062C10.9933 48.956 11.9035 49.3783 13.6278 49.6106C15.3967 49.8475 17.7474 49.8522 21.1139 49.8522H35.1898C38.5563 49.8522 40.9047 49.8475 42.6782 49.6106C44.4002 49.3783 45.3105 48.9537 45.9603 48.3062C46.6101 47.6564 47.0324 46.7461 47.2647 45.0218C47.5016 43.2506 47.5063 40.9023 47.5063 37.5358V23.4598C47.5063 20.0933 47.5016 17.7426 47.2647 15.9714C47.0324 14.2494 46.6078 13.3392 45.9603 12.6894C45.3879 12.1193 44.6184 11.7275 43.2906 11.4812C42.2442 11.2888 40.9446 11.2043 39.2601 11.1692C39.11 12.4544 38.4931 13.6397 37.5264 14.5C36.5598 15.3602 35.3108 15.8354 34.0168 15.8353H22.2869C20.9925 15.8354 19.7433 15.3598 18.7766 14.4991C17.8099 13.6384 17.1932 12.4525 17.0436 11.1668ZM22.2869 6.45136C21.8202 6.45136 21.3727 6.63674 21.0427 6.9667C20.7128 7.29667 20.5274 7.74421 20.5274 8.21085V10.5568C20.5274 11.5281 21.3156 12.3163 22.2869 12.3163H34.0168C34.4835 12.3163 34.931 12.131 35.261 11.801C35.591 11.471 35.7763 11.0235 35.7763 10.5568V8.21085C35.7763 7.74421 35.591 7.29667 35.261 6.9667C34.931 6.63674 34.4835 6.45136 34.0168 6.45136H22.2869ZM14.6624 24.6328C14.6624 24.1662 14.8478 23.7186 15.1778 23.3886C15.5077 23.0587 15.9553 22.8733 16.4219 22.8733H17.5949C18.0615 22.8733 18.5091 23.0587 18.8391 23.3886C19.169 23.7186 19.3544 24.1662 19.3544 24.6328C19.3544 25.0994 19.169 25.547 18.8391 25.8769C18.5091 26.2069 18.0615 26.3923 17.5949 26.3923H16.4219C15.9553 26.3923 15.5077 26.2069 15.1778 25.8769C14.8478 25.547 14.6624 25.0994 14.6624 24.6328ZM22.8734 24.6328C22.8734 24.1662 23.0588 23.7186 23.3887 23.3886C23.7187 23.0587 24.1662 22.8733 24.6329 22.8733H39.8818C40.3485 22.8733 40.796 23.0587 41.126 23.3886C41.456 23.7186 41.6413 24.1662 41.6413 24.6328C41.6413 25.0994 41.456 25.547 41.126 25.8769C40.796 26.2069 40.3485 26.3923 39.8818 26.3923H24.6329C24.1662 26.3923 23.7187 26.2069 23.3887 25.8769C23.0588 25.547 22.8734 25.0994 22.8734 24.6328ZM14.6624 32.8438C14.6624 32.3771 14.8478 31.9296 15.1778 31.5996C15.5077 31.2697 15.9553 31.0843 16.4219 31.0843H17.5949C18.0615 31.0843 18.5091 31.2697 18.8391 31.5996C19.169 31.9296 19.3544 32.3771 19.3544 32.8438C19.3544 33.3104 19.169 33.7579 18.8391 34.0879C18.5091 34.4179 18.0615 34.6033 17.5949 34.6033H16.4219C15.9553 34.6033 15.5077 34.4179 15.1778 34.0879C14.8478 33.7579 14.6624 33.3104 14.6624 32.8438ZM22.8734 32.8438C22.8734 32.3771 23.0588 31.9296 23.3887 31.5996C23.7187 31.2697 24.1662 31.0843 24.6329 31.0843H39.8818C40.3485 31.0843 40.796 31.2697 41.126 31.5996C41.456 31.9296 41.6413 32.3771 41.6413 32.8438C41.6413 33.3104 41.456 33.7579 41.126 34.0879C40.796 34.4179 40.3485 34.6033 39.8818 34.6033H24.6329C24.1662 34.6033 23.7187 34.4179 23.3887 34.0879C23.0588 33.7579 22.8734 33.3104 22.8734 32.8438ZM14.6624 41.0547C14.6624 40.5881 14.8478 40.1406 15.1778 39.8106C15.5077 39.4806 15.9553 39.2952 16.4219 39.2952H17.5949C18.0615 39.2952 18.5091 39.4806 18.8391 39.8106C19.169 40.1406 19.3544 40.5881 19.3544 41.0547C19.3544 41.5214 19.169 41.9689 18.8391 42.2989C18.5091 42.6289 18.0615 42.8142 17.5949 42.8142H16.4219C15.9553 42.8142 15.5077 42.6289 15.1778 42.2989C14.8478 41.9689 14.6624 41.5214 14.6624 41.0547ZM22.8734 41.0547C22.8734 40.5881 23.0588 40.1406 23.3887 39.8106C23.7187 39.4806 24.1662 39.2952 24.6329 39.2952H39.8818C40.3485 39.2952 40.796 39.4806 41.126 39.8106C41.456 40.1406 41.6413 40.5881 41.6413 41.0547C41.6413 41.5214 41.456 41.9689 41.126 42.2989C40.796 42.6289 40.3485 42.8142 39.8818 42.8142H24.6329C24.1662 42.8142 23.7187 42.6289 23.3887 42.2989C23.0588 41.9689 22.8734 41.5214 22.8734 41.0547Z" fill="url(#paint0_linear_7_858)" />
      <defs>
        <linearGradient id="paint0_linear_7_858" x1="12.3799" y1="1.06833" x2="103.445" y2="74.713" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFF1D4" />
          <stop offset="0.5" stop-color="#D7AE5C" />
          <stop offset="1" stop-color="#C4AB79" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

const featureItems = [
  { icon: FeatureIcons.wallet, key: 1 },
  { icon: FeatureIcons.shield, key: 2 },
  { icon: FeatureIcons.clipboard, key: 3 },
];

const StepItem = ({ number, label, active }) => (
  <div className="flex items-center gap-2">
    <span className="text-[13px] 2xl:text-[18px] font-semibold tracking-wide bg-clip-text text-transparent"
      style={goldTextGradient}
    >
      {number}
    </span>
    <span
      className={`text-[13px] 2xl:text-[18px] font-medium bg-clip-text text-transparent ${active
          ? " border-b border-[#c9a063] pb-0.5"
          : ""
        }`}
      style={goldTextGradient}
    >
      {label}
    </span>
  </div>
);

const CheckIcon = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path
      d="M1 4L3.5 6.5L9 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export default function WelcomeBonusPage() {
  const t = useTranslations("newPage");

  const formCard = (
    <div className="box-border w-full max-w-full min-w-0 overflow-hidden bg-white rounded-2xl lg:rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.18)] lg:shadow-[0_24px_60px_rgba(0,0,0,0.35)] p-6 sm:p-7 lg:p-9">
      <p className="text-[11px] font-bold tracking-[0.12em] text-[#b98751] uppercase mb-2">
        {t("form.badge")}
      </p>
      <h2 className="text-[26px] sm:text-[28px] leading-tight font-bold text-[#111827] mb-2">
        {t("form.title")}
      </h2>
      <p className="text-[13px] text-[#64748b] mb-7 leading-relaxed">
        {t("form.subtitle")}
      </p>
      <CommonMainForm
        variant="welcome50"
        zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/umhcnx7/"
        successPath="/success"
      />
    </div>
  );

  return (
    <>
      <Meta title={t("meta.title")} description={t("meta.description")} />

      <div className="min-h-screen bg-[#060c1a] text-white">
        {/* Hero */}
        <section className="relative overflow-x-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(6,12,26,0.92) 0%, rgba(6,12,26,0.75) 45%, rgba(6,12,26,0.55) 100%), url(/bg-new.png)",
              backgroundColor: "#060c1a",
            }}
          />
          <div className="absolute inset-y-0 right-0 w-full  lg:w-full pointer-events-none opacity-50 lg:opacity-100">
            <div
              className="h-full w-full bg-cover bg-right bg-no-repeat"
              style={{ backgroundImage: "url(/newbanner.webp)" }}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 pt-8 pb-8 lg:py-16">
            <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-stretch">
              {/* Left content — logos top, hero copy vertically centered vs form */}
              <div className="flex max-w-xl flex-col lg:min-h-full">
                <div className="flex shrink-0 items-center gap-3 sm:gap-5">
                  <Image
                    src="/logo-gtc.svg"
                    width={179}
                    height={65}
                    alt="GTC"
                    priority
                    className="h-[40px] sm:h-[56px] lg:h-[65px] w-auto"
                  />
                  <div className="h-10 sm:h-14 lg:h-16 w-px bg-white/35 shrink-0" />
                  <div className="flex h-[52px] w-[52px] sm:h-[72px] sm:w-[72px] lg:h-[80px] lg:w-[80px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                    <Image
                      src="/logo.png"
                      width={72}
                      height={72}
                      alt="Forex Expo Dubai"
                      className="h-[44px] w-[44px] sm:h-[58px] sm:w-[58px] lg:h-[64px] lg:w-[64px] object-contain"
                    />
                  </div>
                </div>

                <div className="mt-10 flex min-h-[40vh] flex-1 flex-col justify-center sm:mt-12 sm:min-h-[36vh] lg:mt-14 lg:min-h-0 lg:py-6">
                <p className="text-[10px] sm:text-[14px] 2xl:text-[16px] font-medium tracking-[0.18em] text-white uppercase mb-3 sm:mb-4">
                  {t("hero.eyebrow")}
                </p>

                <h1 className="text-[24px] sm:text-[42px] 2xl:text-[45px] capitalize font-medium leading-[1.09] text-white mb-1">
                  {t("hero.headline1")}
                  <br />
                  {t("hero.headline2")}
                </h1>

                <div className="flex items-center gap-2.5 sm:gap-4 mb-4 sm:mb-5">
                  <div className="flex items-start leading-none">
                    <span
                      className="text-[28px] sm:text-[40px] 2xl:text-[60px] font-semibold mt-2 sm:mt-4 bg-clip-text text-transparent"
                      style={goldTextGradient}
                    >
                      $
                    </span>
                    <span
                      className="text-[64px] sm:text-[88px] lg:text-[110px] 2xl:text-[160px] font-semibold leading-none tracking-tight bg-clip-text text-transparent"
                      style={goldTextGradient}
                    >
                      50
                    </span>
                  </div>
                  <div className="pb-1 sm:pb-3 space-y-0.5">
                    <p className="text-[10px] sm:text-[12px] 2xl:text-[16px] font-semibold tracking-[0.14em] uppercase bg-clip-text leading-tight text-transparent" style={goldTextGradient}>
                      {t("hero.bonusLabel1")}
                    </p>
                    <p className="text-[10px] sm:text-[12px] 2xl:text-[16px] font-semibold tracking-[0.14em] uppercase bg-clip-text leading-tight text-transparent" style={goldTextGradient}>
                      {t("hero.bonusLabel2")}
                    </p>
                    <p className="text-[10px] sm:text-[12px] 2xl:text-[16px] font-semibold tracking-[0.14em] uppercase bg-clip-text leading-tight text-transparent" style={goldTextGradient}>
                      {t("hero.bonusLabel3")}
                    </p>
                  </div>
                </div>

                <p className="flex items-center gap-2.5 text-[14px] sm:text-[15px] font-semibold text-white mb-3 sm:mb-4">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-white text-white shrink-0">
                    <CheckIcon />
                  </span>
                  {t("hero.noDeposit")}
                </p>

                <p className="text-[13px] sm:text-[15px] 2xl:text-[18px] text-white/90 leading-relaxed max-w-md mb-1 sm:mb-3">
                  {t("hero.description")}{" "}
                  <a
                    href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Lucky+Terms+And+Conditions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] sm:text-[15px] 2xl:text-[18px] text-white underline underline-offset-2 hover:text-white/75"
                  >
                    {t("hero.termsLink")}
                  </a>
                </p>

                {/* Steps */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mt-6 sm:mt-8 border-t border-white/20 pt-5 sm:pt-8 lg:border-[#E3E8EF]">
                  <StepItem number="01" label={t("hero.step1")} active={false} />
                  <span className="hidden sm:block w-6 lg:w-10 h-px bg-[#d2ad64]" />
                  <span className="sm:hidden text-[#d2ad64] text-[12px]">—</span>
                  <StepItem number="02" label={t("hero.step2")} active={false} />
                  <span className="hidden sm:block w-6 lg:w-10 h-px bg-[#d2ad64]" />
                  <span className="sm:hidden text-[#d2ad64] text-[12px]">—</span>
                  <StepItem number="03" label={t("hero.step3")} active={false} />
                </div>
                </div>
              </div>

              {/* Form — equal horizontal inset on mobile; right-aligned on desktop */}
              <div className="min-w-0 w-full max-w-lg mx-auto px-0 lg:px-0 lg:ml-auto lg:mr-0 lg:flex lg:items-center">
                <div className="w-full min-w-0">{formCard}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white text-[#0A0D12] py-10 lg:py-12">
          <div className="container mx-auto px-4">
            <p className="text-[11px] font-medium tracking-[0.14em] text-[#0A0D12] uppercase mb-1">
              {t("features.eyebrow")}
            </p>
            <h2 className="text-[18px] sm:text-[32px] font-semibold text-[#0A0D12] mb-6 sm:mb-8 leading-[1.15]">
              {t("features.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 lg:gap-4">
              {featureItems.map(({ icon, key }) => (
                <div key={key} className="flex items-start gap-3">
                  {icon}
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0A0D12] mb-1 leading-snug">
                      {t(`features.item${key}.title`)}
                    </h3>
                    <p className="text-[13px] sm:text-[13px] text-[#333333] leading-[1.55]">
                      {t(`features.item${key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}