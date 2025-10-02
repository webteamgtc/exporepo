import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";
import { transporter } from "../../config/nodemailer";
import { generateArabicTemplate, generateEnglishTemplate } from "./template";

export async function POST(req) {
  const { email, first_name, locale } = await req.json();
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    digits: true,
    lowerCaseAlphabets: false,
  });
  const mailData = {
    from: '"GTC" <portal@mx4.gtcmail.com>',
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
    await transporter.sendMail(mailData);
    return NextResponse.json({ message: `5649${otp}632` }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error Sending OTP" }, { status: 500 });
  }
}
