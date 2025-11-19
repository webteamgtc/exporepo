import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";

const INFOBIP_BASE_URL =
    process.env.INFOBIP_BASE_URL || "https://jjqzdk.api.infobip.com";
const INFOBIP_API_KEY =
    process.env.INFOBIP_API_KEY ||
    "7380d98a1a384a3ad689b909ef8c6ba8-d2ff03b0-0e20-4645-ac00-5ab01f8d5701";
const INFOBIP_WHATSAPP_SENDER = process.env.INFOBIP_WHATSAPP_SENDER || "34CEEFE28DF2039C324F3153E8E61DE7";

export async function POST(req) {
    const { locale, phone } = await req.json();

    if (!phone) {
        return NextResponse.json(
            { message: "Phone number is required for OTP delivery." },
            { status: 400 }
        );
    }

    const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        digits: true,
        lowerCaseAlphabets: false,
    });

    const textMessage =
        locale == "ar"
            ? `رمز التحقق الخاص بك هو ${otp}`
            : `Your OTP is ${otp}`;

    try {
        await sendWhatsappOtp({
            phone,
            message: textMessage,
        });
        return NextResponse.json({ message: `5649${otp}632` }, { status: 200 });
    } catch (error) {
        console.error("WhatsApp OTP error:", error);
        return NextResponse.json(
            { message: error?.message || "Error Sending OTP" },
            { status: 500 }
        );
    }
}

async function sendWhatsappOtp({ phone, message }) {
    if (!INFOBIP_API_KEY) {
        throw new Error("Missing Infobip API key");
    }
    if (!INFOBIP_WHATSAPP_SENDER) {
        throw new Error("Missing Infobip WhatsApp sender number");
    }

    // If sender is a phone number, sanitize it. If it's a sender ID, use as-is
    const sanitizeNumber = (value = "") => value.replace(/[^\d]/g, "");
    const fromValue = /^[A-Z0-9]+$/.test(INFOBIP_WHATSAPP_SENDER)
        ? INFOBIP_WHATSAPP_SENDER
        : sanitizeNumber(INFOBIP_WHATSAPP_SENDER);

    const payload = {
        from: fromValue,
        to: sanitizeNumber(phone),
        content: {
            text: message,
        },
    };

    console.log("Infobip request:", {
        baseUrl: INFOBIP_BASE_URL,
        endpoint: `${INFOBIP_BASE_URL}/whatsapp/1/message/text`,
        from: fromValue,
        to: sanitizeNumber(phone),
        hasApiKey: !!INFOBIP_API_KEY,
    });

    const response = await fetch(`${INFOBIP_BASE_URL}/whatsapp/1/message/text`, {
        method: "POST",
        headers: {
            Authorization: `App ${INFOBIP_API_KEY}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error("Infobip error response:", {
            status: response.status,
            statusText: response.statusText,
            body: errorBody,
        });
        throw new Error(
            `Infobip WhatsApp error ${response.status}: ${errorBody || "Unknown"}`
        );
    }

    const responseData = await response.json();
    console.log("Infobip success:", responseData);
}
