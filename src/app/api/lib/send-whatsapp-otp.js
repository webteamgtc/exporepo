const INFOBIP_BASE_URL = process.env.INFOBIP_BASE_URL || "";
const INFOBIP_API_KEY = process.env.INFOBIP_API_KEY || "";
const INFOBIP_WHATSAPP_SENDER = process.env.INFOBIP_WHATSAPP_SENDER || "";
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME || "";

export async function sendWhatsappOtp({ phone, otp, locale = "en" }) {
  if (!INFOBIP_BASE_URL) throw new Error("Missing INFOBIP_BASE_URL");
  if (!INFOBIP_API_KEY) throw new Error("Missing INFOBIP_API_KEY");
  if (!INFOBIP_WHATSAPP_SENDER) {
    throw new Error("Missing INFOBIP_WHATSAPP_SENDER");
  }
  if (!WHATSAPP_TEMPLATE_NAME) {
    throw new Error("Missing WHATSAPP_TEMPLATE_NAME");
  }

  const sanitizeNumber = (value = "") => value.toString().replace(/[^\d]/g, "");

  const fromValue = sanitizeNumber(INFOBIP_WHATSAPP_SENDER);
  if (!fromValue) throw new Error("Invalid WhatsApp sender number");

  const toValue = sanitizeNumber(phone);
  if (!toValue || toValue.length < 7) {
    throw new Error(`Invalid recipient phone number: "${phone}"`);
  }

  const langCode = locale === "ar" ? "ar" : "en";

  const payload = {
    messages: [
      {
        from: fromValue,
        to: toValue,
        messageId: `otp-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}`,
        content: {
          templateName: WHATSAPP_TEMPLATE_NAME,
          templateData: {
            body: {
              placeholders: [otp],
            },
            buttons: [
              {
                type: "URL",
                parameter: otp,
              },
            ],
          },
          language: langCode,
        },
      },
    ],
  };

  const response = await fetch(
    `${INFOBIP_BASE_URL}/whatsapp/1/message/template`,
    {
      method: "POST",
      headers: {
        Authorization: `App ${INFOBIP_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

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
  const messageData = Array.isArray(responseData.messages)
    ? responseData.messages[0]
    : responseData;

  if (messageData.status?.groupName === "REJECTED") {
    console.error("Infobip message rejected:", messageData.status);
    throw new Error(
      `WhatsApp message rejected: ${
        messageData.status.description ||
        messageData.status.name ||
        "Message rejected"
      }`
    );
  }

  return messageData;
}
