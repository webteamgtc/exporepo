"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";


export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const year = new Date().getFullYear();
  const paragraphs = t.raw("riskWarning.paragraphs");

  return (
    <footer className="bg-gray-100 text-black">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <section className="space-y-4 text-start">
          <h6 className="text-xs font-semibold tracking-[0.02em] text-black/90">
            {t("riskWarning.title")}
          </h6>
          {Array.isArray(paragraphs) &&
            paragraphs.map((paragraph, index) => (
              <p key={index} className="text-xs leading-[1.75] text-black/70">
                {paragraph}
              </p>
            ))}
        </section>
      </div>

      <div className="bg-[#293B93] text-white">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:gap-5">
          <Link href={`/${locale}`} aria-label="GTCFX">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
              width={90}
              height={32}
              alt="GTCFX official logo"
            />
          </Link>
          <p className="text-xs uppercase tracking-wide text-white">
            {t("copyright", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
