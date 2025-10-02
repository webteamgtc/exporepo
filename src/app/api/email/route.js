import { NextResponse } from "next/server";
import { transporter, mailOptions } from "../../config/nodemailer";
import { generateArabic, generateEnglis } from "./template";

const generateEmailContent = (data) => {
  return {
    html: data?.locale == "ar" ? generateArabic(data) : generateEnglis(data),
  };
};

export async function POST(req) {
  const reqBody = await req.json();
  const mailOption = {
    from: '"Get 5,000 USC to Trade | GTC" <portal@mx4.gtcmail.com>',
    to: reqBody?.email,
  };
  try {
    await transporter.sendMail({
      ...mailOption,
      ...generateEmailContent(reqBody),
      subject:
        reqBody?.locale == "ar"
          ? "احصل على 5,000 USC للتداول. بدون إيداع! | GTC"
          : `Get 5,000 USC to Trade. No Deposit Needed! | GTC`,
    });
    return NextResponse.json(
      { message: "Success", email: reqBody?.email },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
