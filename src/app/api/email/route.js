import { NextResponse } from "next/server";
import {
  getMailgunClient,
  MAILGUN_DOMAIN,
  MAILGUN_FROM,
} from "../../config/nodemailer";
import { generateArabic, generateEnglis } from "./template";

const generateEmailContent = (data) => {
  return {
    html: data?.locale == "ar" ? generateArabic(data) : generateEnglis(data),
  };
};

export async function POST(req) {
  const reqBody = await req.json();

  if (!MAILGUN_DOMAIN || !MAILGUN_FROM) {
    return NextResponse.json(
      { message: "Mailgun is not configured." },
      { status: 500 }
    );
  }

  try {
    await getMailgunClient().messages.create(MAILGUN_DOMAIN, {
      from: MAILGUN_FROM,
      to: reqBody?.email,
      subject:
        reqBody?.locale == "ar"
          ? "احصل على 5,000 USC للتداول. بدون إيداع! | GTC"
          : `Get 5,000 USC to Trade. No Deposit Needed! | GTC`,
      ...generateEmailContent(reqBody),
    });

    return NextResponse.json(
      { message: "Success", email: reqBody?.email },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
