import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";
import { MAILGUN_DOMAIN, MAILGUN_FROM, mailgunClient, transporter } from "../../config/nodemailer";
import { generateArabicTemplate, generateEnglishTemplate } from "./template";
import { storeOtp } from "../otp-store";

export async function POST(req) {
  const { email, first_name, locale, phone } = await req.json();
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    digits: true,
    lowerCaseAlphabets: false,
  });
  
  // Store OTP securely with expiration (not exposed in response)
  if (email) {
    storeOtp("email", email, otp);
  }
  
  // For phone-based OTP, store by phone number
  if (phone) {
    storeOtp("phone", phone, otp);
  }
  
  const mailData = {
    from: MAILGUN_FROM,
    to: email,
    subject:
      locale == "ar"
        ? "رمز التحقق (OTP) للحصول على 5,000 USC للتداول"
        : "Get 5,000 USC to Trade OTP",
    text:
      locale == "ar" ? `رمز التحقق الخاص بك هو ${otp}` : `Your OTP is ${otp}`,
    html:
      locale == "ar"
        ? generateArabicTemplate(otp, first_name)
        : generateEnglishTemplate(otp, first_name),
  };
  try {
    const res = await mailgunClient.messages.create(MAILGUN_DOMAIN, mailData);
    // Return success without exposing OTP in response
    return NextResponse.json({ 
      success: true,
      message: email ? "OTP sent to email successfully." : "OTP sent successfully."
    }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error Sending OTP" }, { status: 500 });
  }
}
