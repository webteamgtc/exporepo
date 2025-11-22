import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";

const INFOBIP_BASE_URL =
    process.env.INFOBIP_BASE_URL || "https://d9dper.api.infobip.com";
const INFOBIP_API_KEY =
    process.env.INFOBIP_API_KEY ||
    "396034e3362ca5a73a216cadc304655e-8b54e342-e792-4006-a3fa-7b3da97e3a72";
const INFOBIP_WHATSAPP_SENDER = process.env.INFOBIP_WHATSAPP_SENDER || "971521409538";
const WHATSAPP_TEMPLATE_NAME =
    process.env.WHATSAPP_TEMPLATE_NAME || "text";                   // << your template name

export async function POST(req) {
    try {
        const { locale = "en", phone } = await req.json();

        if (!phone) {
            return NextResponse.json(
                { success: false, message: "Phone number is required for OTP delivery." },
                { status: 400 }
            );
        }

        // Generate 6-digit OTP
        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            digits: true,
            lowerCaseAlphabets: false,
        });

        const messageData = await sendWhatsappOtp({ phone, otp, locale });

        return NextResponse.json(
            {
                success: true,
                message: "OTP sent via WhatsApp.",
                otpMasked: `***${otp.slice(-3)}`,
                providerMessageId: messageData.messageId,
                providerStatus: messageData.status?.name,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("WhatsApp OTP error:", error);
        return NextResponse.json(
            { success: false, message: error?.message || "Error sending WhatsApp OTP." },
            { status: 500 }
        );
    }
}

async function sendWhatsappOtp({ phone, otp, locale }) {
    if (!INFOBIP_BASE_URL) throw new Error("Missing INFOBIP_BASE_URL");
    if (!INFOBIP_API_KEY) throw new Error("Missing INFOBIP_API_KEY");
    if (!INFOBIP_WHATSAPP_SENDER) throw new Error("Missing INFOBIP_WHATSAPP_SENDER");

    const sanitizeNumber = (value = "") => value.toString().replace(/[^\d]/g, "");

    // Sender (must be your WABA number)
    const fromValue = sanitizeNumber(INFOBIP_WHATSAPP_SENDER);
    if (!fromValue) throw new Error("Invalid WhatsApp sender number");

    // Recipient
    const toValue = sanitizeNumber(phone);
    if (!toValue || toValue.length < 7) {
        throw new Error(`Invalid recipient phone number: "${phone}"`);
    }

    // IMPORTANT: template language must match Infobip template language
    // You created "English (UK)" → use en_GB as per Infobip docs.
    const langCode = "en_GB"; // if you later add Arabic variant, you can switch based on locale

    const payload = {
        messages: [
            {
                from: fromValue,
                to: toValue,
                messageId: `otp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                content: {
                    templateName: WHATSAPP_TEMPLATE_NAME, // "text"
                    templateData: {
                        body: {
                            // matches {{1}} in: "{{1}} is your verification code."
                            placeholders: [otp],
                        },
                    },
                    language: langCode,
                },
            },
        ],
    };

    console.log("WhatsApp OTP | Request:", {
        endpoint: `${INFOBIP_BASE_URL}/whatsapp/1/message/template`,
        from: fromValue,
        to: toValue,
        templateName: WHATSAPP_TEMPLATE_NAME,
        langCode,
        otp,
    });

    const response = await fetch(`${INFOBIP_BASE_URL}/whatsapp/1/message/template`, {
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
        throw new Error(`Infobip WhatsApp error ${response.status}: ${errorBody || "Unknown"}`);
    }

    const responseData = await response.json();
    console.log("Infobip raw response:", JSON.stringify(responseData, null, 2));

    const messageData = Array.isArray(responseData.messages)
        ? responseData.messages[0]
        : responseData;

    if (messageData.status?.groupName === "REJECTED") {
        console.error("Infobip message rejected:", messageData.status);
        throw new Error(
            `WhatsApp message rejected: ${
                messageData.status.description || messageData.status.name || "Message rejected"
            }`
        );
    }

    return messageData;
}
