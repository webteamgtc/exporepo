import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";

const INFOBIP_BASE_URL =
    process.env.INFOBIP_BASE_URL || "https://d9dper.api.infobip.com";
const INFOBIP_API_KEY =
    process.env.INFOBIP_API_KEY ||
    "396034e3362ca5a73a216cadc304655e-8b54e342-e792-4006-a3fa-7b3da97e3a72";
const INFOBIP_WHATSAPP_SENDER = process.env.INFOBIP_WHATSAPP_SENDER || "971521409538";

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
            otp,
            locale,
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

async function sendWhatsappOtp({ phone, otp, locale }) {
    if (!INFOBIP_API_KEY) {
        throw new Error("Missing Infobip API key");
    }
    if (!INFOBIP_WHATSAPP_SENDER) {
        throw new Error("Missing Infobip WhatsApp sender number");
    }

    // For WhatsApp, Infobip requires a phone number in E.164 format (digits only, no +)
    // The sender ID format is not valid for WhatsApp - must be a phone number
    const sanitizeNumber = (value = "") => {
        if (!value) return "";
        // Remove all non-digit characters including +, spaces, dashes
        return value.toString().replace(/[^\d]/g, "");
    };

    let fromValue;

    // Check if it's a phone number (contains digits and possibly +)
    if (/^\+?[\d\s-]+$/.test(INFOBIP_WHATSAPP_SENDER)) {
        // It's a phone number - sanitize to digits only
        fromValue = sanitizeNumber(INFOBIP_WHATSAPP_SENDER);
    } else {
        // If it's not a phone number format, it's invalid for WhatsApp
        throw new Error(`Invalid WhatsApp sender: "${INFOBIP_WHATSAPP_SENDER}" is not a valid phone number. WhatsApp requires a phone number in E.164 format (e.g., +447860088970 or 447860088970)`);
    }

    // Validate from value is not empty and within limits
    if (!fromValue || fromValue.length === 0) {
        throw new Error("Invalid sender: from value is empty after processing");
    }
    if (fromValue.length > 24) {
        fromValue = fromValue.substring(0, 24);
    }

    // Sanitize recipient phone number
    // PhoneInput provides E.164 format (e.g., +971525058849), we need digits only
    const toValue = sanitizeNumber(phone);

    if (!toValue || toValue.length < 7) {
        throw new Error(`Invalid recipient phone number: "${phone}" - must be a valid phone number`);
    }

    // For WhatsApp Business API, first messages MUST use templates
    // Plain text only works if recipient messaged you first (24-hour window)
    // Error 7010 "No session" means we need to use a template

    // Use template message format for WhatsApp
    // Note: Template must be approved by WhatsApp before use
    // Template name from Infobip dashboard (e.g., "text")
    const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME || "text";
    const useTemplate = true;

    console.log("WhatsApp message type:", useTemplate ? "TEMPLATE" : "PLAIN TEXT");
    console.log("Template Name:", WHATSAPP_TEMPLATE_NAME);

    // Determine language code - Infobip uses "en" for English (UK/US)
    // For Arabic, use "ar"
    const langCode = locale === "ar" ? "ar" : "en";

    let payload;

    if (useTemplate) {
        // Template message (required for first-time recipients)
        // Infobip template API requires messages array
        // Template format: {{1}} is your verification code.
        // Placeholders must be an array of values, not objects
        // The order matters: [otp] maps to {{1}}
        payload = {
            messages: [
                {
                    from: fromValue,
                    to: toValue,
                    content: {
                        templateName: WHATSAPP_TEMPLATE_NAME,
                        templateData: {
                            body: {
                                placeholders: [otp]  // Array of values, not objects
                            }
                        },
                        language: langCode
                    },
                    messageId: `otp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                }
            ]
        };
    } else {
        // Plain text message (only works if recipient has messaged you before)
        console.warn("⚠️ Using plain text message - this will fail for new recipients with error 7010!");
        payload = {
            from: fromValue,
            to: toValue,
            content: {
                text: locale === "ar" 
                    ? `رمز التحقق الخاص بك هو ${otp}` 
                    : `Your OTP is ${otp}`,
            },
        };
    }

    console.log("Phone number formatting:", {
        originalPhone: phone,
        sanitizedTo: toValue,
        originalSender: INFOBIP_WHATSAPP_SENDER,
        sanitizedFrom: fromValue,
    });

    // Use template endpoint for template messages, text endpoint for plain text
    const endpoint = useTemplate 
        ? `${INFOBIP_BASE_URL}/whatsapp/1/message/template`
        : `${INFOBIP_BASE_URL}/whatsapp/1/message/text`;

    console.log("Infobip request details:", {
        baseUrl: INFOBIP_BASE_URL,
        endpoint: endpoint,
        from: fromValue,
        to: toValue,
        otp: otp,
        useTemplate: useTemplate,
        templateName: useTemplate ? WHATSAPP_TEMPLATE_NAME : "N/A",
        hasApiKey: !!INFOBIP_API_KEY,
        payload: JSON.stringify(payload, null, 2),
    });

    const response = await fetch(endpoint, {
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
    console.log("Infobip response:", JSON.stringify(responseData, null, 2));

    // Template API returns messages array, text API returns single message
    let messageData = responseData;
    if (useTemplate && responseData.messages && responseData.messages.length > 0) {
        // Template API response format
        messageData = responseData.messages[0];
        console.log("Template message response:", messageData);
    }

    // Check message status
    if (messageData.status) {
        const statusGroup = messageData.status.groupName;
        const statusName = messageData.status.name;
        const statusDesc = messageData.status.description;
        const statusId = messageData.status.id;

        // Handle rejected messages
        if (statusGroup === 'REJECTED') {
            const errorMsg = statusDesc || statusName || 'Message rejected';
            console.error("Infobip message rejected:", messageData.status);

            // Provide specific error messages based on rejection reason
            let userFriendlyError = errorMsg;
            if (statusName === 'REJECTED_SOURCE') {
                userFriendlyError = `Invalid sender number. Please verify your WhatsApp Business Account sender number (${fromValue}) is correctly configured in Infobip.`;
            } else if (statusName === 'REJECTED_DESTINATION') {
                userFriendlyError = `Invalid recipient number. Please ensure the phone number (${toValue}) is valid and has WhatsApp.`;
            }

            throw new Error(`WhatsApp message rejected: ${userFriendlyError}`);
        }

        // Log pending/processing statuses (these are OK)
        if (statusGroup === 'PENDING' || statusGroup === 'ACCEPTED') {
            console.log(`✅ Message accepted: ${statusName} - ${statusDesc || 'Message is being processed'}`);
            console.log(`Message ID: ${messageData.messageId || responseData.messageId}`);
            console.log(`To: ${messageData.to || responseData.to}`);
            // This is a success - message is accepted and being processed
            // Note: PENDING_ENROUTE means message is sent to Infobip, but delivery to WhatsApp may take time
            return messageData;
        }

        // Log other statuses for debugging
        console.log(`Message status: ${statusGroup} - ${statusName} (${statusDesc})`);
    }

    // If no status in response, log warning but don't fail
    if (!messageData.status) {
        console.warn("No status in Infobip response:", messageData);
    }

    return messageData;
}


// import { NextResponse } from "next/server";
// import otpGenerator from "otp-generator";

// const INFOBIP_BASE_URL =
//     process.env.INFOBIP_BASE_URL || "https://d9dper.api.infobip.com";
// const INFOBIP_API_KEY =
//     process.env.INFOBIP_API_KEY ||
//     "396034e3362ca5a73a216cadc304655e-8b54e342-e792-4006-a3fa-7b3da97e3a72";
// const INFOBIP_WHATSAPP_SENDER = process.env.INFOBIP_WHATSAPP_SENDER || "971521409538";  // ⚠️ must match template name in Infobip

// /** POST /api/send-phone-otp */
// export async function POST(req) {
//     try {
//         const { locale = "en", phone } = await req.json();

//         if (!phone) {
//             return NextResponse.json(
//                 { success: false, message: "Phone number is required for OTP delivery." },
//                 { status: 400 }
//             );
//         }

//         // Generate OTP
//         const otp = otpGenerator.generate(6, {
//             upperCaseAlphabets: false,
//             specialChars: false,
//             digits: true,
//             lowerCaseAlphabets: false,
//         });

//         const messageData = await sendWhatsappOtp({ phone, otp, locale });

//         return NextResponse.json(
//             {
//                 success: true,
//                 message: "OTP sent via WhatsApp.",
//                 otpMasked: `***${otp.slice(-3)}`,
//                 providerMessageId: messageData.messageId,
//                 providerStatus: messageData.status?.name,
//             },
//             { status: 200 }
//         );
//     } catch (error) {
//         console.error("WhatsApp OTP error:", error);
//         return NextResponse.json(
//             { success: false, message: error?.message || "Error sending WhatsApp OTP." },
//             { status: 500 }
//         );
//     }
// }



// async function sendWhatsappOtp({ phone, otp, locale }) {
//     if (!INFOBIP_BASE_URL) throw new Error("Missing INFOBIP_BASE_URL");
//     if (!INFOBIP_API_KEY) throw new Error("Missing INFOBIP_API_KEY");
//     if (!INFOBIP_WHATSAPP_SENDER) throw new Error("Missing INFOBIP_WHATSAPP_SENDER");

//     const sanitizeNumber = (value) => value.toString().replace(/[^\d]/g, "");

//     const fromValue = sanitizeNumber(INFOBIP_WHATSAPP_SENDER);
//     if (!fromValue) throw new Error("Invalid WhatsApp sender number");

//     const toValue = sanitizeNumber(phone);
//     if (!toValue || toValue.length < 7) {
//         throw new Error(`Invalid recipient phone number: "${phone}"`);
//     }

//     const langCode = locale === "ar" ? "ar" : "en";
    
//     // Template Name - Infobip requires templateName (not templateId)
//     // Use your approved WhatsApp template name
//     const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME || process.env.WHATSAPP_TEMPLATE_ID || "reminder";
    
//     if (!WHATSAPP_TEMPLATE_NAME) {
//         throw new Error("WhatsApp template name is required. Set WHATSAPP_TEMPLATE_NAME environment variable.");
//     }
    
//     // Plain text message (only works if recipient has messaged you first within 24-hour window)
//     const textMessage = locale === "ar" 
//         ? `رمز التحقق الخاص بك هو ${otp}` 
//         : `Your OTP is ${otp}`;

//     // Build template content - Infobip requires templateName
//     const templateContent = {
//         templateName: WHATSAPP_TEMPLATE_NAME,
//         templateData: {
//             body: {
//                 placeholders: [otp]
//             }
//         },
//         language: langCode
//     };

//     const payload = {
//         messages: [
//             {
//                 from: fromValue,
//                 to: toValue,
//                 content: templateContent,
//                 messageId: `otp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
//             }
//         ]
//     };

//     const endpoint = `${INFOBIP_BASE_URL}/whatsapp/1/message/template`;

//     console.log("WhatsApp OTP | Request:", {
//         endpoint,
//         from: fromValue,
//         to: toValue,
//         messageType: "TEMPLATE",
//         templateName: WHATSAPP_TEMPLATE_NAME,
//         langCode,
//         otp,
//     });

//     const response = await fetch(endpoint, {
//         method: "POST",
//         headers: {
//             Authorization: `App ${INFOBIP_API_KEY}`,
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(payload),
//     });

//     if (!response.ok) {
//         const errorBody = await response.text();
//         console.error("Infobip error response:", {
//             status: response.status,
//             statusText: response.statusText,
//             body: errorBody,
//         });
//         throw new Error(`Infobip WhatsApp error ${response.status}: ${errorBody || "Unknown"}`);
//     }

//     const responseData = await response.json();
//     console.log("Infobip raw response:", JSON.stringify(responseData, null, 2));

//     // Template API returns messages array
//     const messageData = Array.isArray(responseData.messages) && responseData.messages.length > 0
//         ? responseData.messages[0]
//         : responseData;

//     console.log("Infobip parsed message:", messageData);

//     if (messageData.status) {
//         const statusGroup = messageData.status.groupName;
//         const statusName = messageData.status.name;
//         const statusDesc = messageData.status.description;

//         if (statusGroup === "REJECTED") {
//             console.error("Infobip message rejected:", messageData.status);
//             const errorCode = messageData.status.id || messageData.status.name;
//             const errorMsg = statusDesc || statusName || "Message rejected by operator.";
            
//             // Check for specific error codes
//             if (errorCode === "7009" || errorMsg.includes("MEDIA_TEMPLATE")) {
//                 throw new Error(
//                     `WhatsApp template error: The template "${WHATSAPP_TEMPLATE_NAME}" appears to be a MEDIA_TEMPLATE that was rejected by the operator. Please use a TEXT template instead or ensure your MEDIA_TEMPLATE is approved. Error: ${errorMsg}`
//                 );
//             }
            
//             throw new Error(
//                 `WhatsApp message rejected: ${errorMsg} (Code: ${errorCode || "Unknown"})`
//             );
//         }

//         if (statusGroup === "PENDING" || statusGroup === "ACCEPTED") {
//             console.log(
//                 `✅ Message accepted by Infobip: ${statusName} - ${statusDesc || "Message is being processed"
//                 }`
//             );
//             return messageData;
//         }

//         console.log(`ℹ️ Message status: ${statusGroup} - ${statusName} (${statusDesc})`);
//     } else {
//         console.warn("⚠️ No status in Infobip response:", messageData);
//     }

//     return messageData;
// }
