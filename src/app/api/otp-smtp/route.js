import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";
import {
  getMailgunClient,
  MAILGUN_DOMAIN,
  MAILGUN_FROM,
} from "../../config/nodemailer";
import { generateArabicTemplate, generateEnglishTemplate } from "./template";
import { storeOtp } from "../otp-store";
import { sendWhatsappOtp } from "../lib/send-whatsapp-otp";

export async function POST(req) {
  const { email, first_name, locale, phone, channel } = await req.json();

  if (!email && !phone) {
    return NextResponse.json(
      { success: false, message: "Email or phone is required." },
      { status: 400 }
    );
  }

  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    digits: true,
    lowerCaseAlphabets: false,
  });

  if (email) {
    storeOtp("email", email, otp);
  }
  if (phone) {
    storeOtp("phone", phone, otp);
  }

  try {
    if (phone && (channel === "whatsapp" || !email)) {
      await sendWhatsappOtp({ phone, otp, locale });
      return NextResponse.json(
        {
          success: true,
          message: "OTP sent via WhatsApp.",
        },
        { status: 200 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required for email OTP." },
        { status: 400 }
      );
    }

    if (!MAILGUN_DOMAIN || !MAILGUN_FROM) {
      return NextResponse.json(
        { success: false, message: "Mailgun is not configured." },
        { status: 500 }
      );
    }

    const mailData = {
      from: MAILGUN_FROM,
      to: email,
      subject:
        locale == "ar"
          ? "رمز التحقق (OTP) للحصول على 5,000 USC للتداول"
          : "Get 5,000 USC to Trade OTP",
      text:
        locale == "ar"
          ? `رمز التحقق الخاص بك هو ${otp}`
          : `Your OTP is ${otp}`,
      html:
        locale == "ar"
          ? generateArabicTemplate(otp, first_name)
          : generateEnglishTemplate(otp, first_name),
    };

    await getMailgunClient().messages.create(MAILGUN_DOMAIN, mailData);

    return NextResponse.json(
      {
        success: true,
        message: "OTP sent to email successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("OTP send error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Error Sending OTP" },
      { status: 500 }
    );
  }
}
