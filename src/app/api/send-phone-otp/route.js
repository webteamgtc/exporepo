import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";
import { storeOtp } from "../otp-store";
import { sendWhatsappOtp } from "../lib/send-whatsapp-otp";

export async function POST(req) {
  try {
    const { locale = "en", phone } = await req.json();

    if (!phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is required for OTP delivery.",
        },
        { status: 400 }
      );
    }

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      digits: true,
      lowerCaseAlphabets: false,
    });

    storeOtp("phone", phone, otp);

    const messageData = await sendWhatsappOtp({ phone, otp, locale });

    return NextResponse.json(
      {
        success: true,
        message: "OTP sent via WhatsApp.",
        providerMessageId: messageData.messageId,
        providerStatus: messageData.status?.name,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("WhatsApp OTP error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Error sending WhatsApp OTP.",
      },
      { status: 500 }
    );
  }
}
