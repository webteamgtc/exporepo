// app/api/gtc-client-add/route.js

const BASE_URL = process.env.GTC_BASE_URL || "https://mygtcportal.com";
const API_KEY = (
  process.env.GTC_API_KEY || "ga020bebb7c2896b60d53d6095410b2509f93d4gtc545dfca"
).trim();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-Api-Key, x-api-key, apiKey",
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function POST(req) {
  if (!API_KEY) {
    return new Response(JSON.stringify({ message: "Missing API key" }), {
      status: 500,
      headers: cors(),
    });
  }

  let body = {};
  try {
    body = await req.json();
  } catch (_) {}

  const {
    user_account_type = 0,
    country = "",
    first_name = "",
    last_name = "",
    email = "",
    area_code = "",
    phone = "",
    pwd = "",
    token = "",
  } = body || {};

  const form = new URLSearchParams({
    user_account_type: String(user_account_type),
    country,
    first_name,
    last_name,
    email,
    area_code: String(area_code),
    phone,
    pwd,
    token
  }).toString();

  // ✅ Send API key **only in headers** (no query / no body)
  const upstream = await fetch(`${BASE_URL}/crmapi/client/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Api-Key": API_KEY, // canonical custom header
      "x-api-key": API_KEY, // lowercase variant (some backends check this)
      apiKey: API_KEY, // vendor-specific variant (keep if required)
      // If vendor uses Bearer instead, use this and remove the three above:
      // "Authorization": `Bearer ${API_KEY}`,
      Accept: "*/*",
      "Accept-Encoding": "identity", // avoid double-decode issues
    },
    body: form,
    redirect: "manual",
  }).catch((e) => e);

  if (upstream instanceof Error) {
    return new Response(
      JSON.stringify({
        message: upstream.message || "Upstream request failed",
      }),
      { status: 502, headers: cors() }
    );
  }

  const raw = await upstream.arrayBuffer();

  // Forward upstream headers safely (strip hop-by-hop & encoding/length)
  const headers = new Headers();
  const skip = new Set([
    "connection",
    "transfer-encoding",
    "content-length",
    "content-encoding",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailer",
    "upgrade",
  ]);
  upstream.headers.forEach((value, key) => {
    if (!skip.has(key.toLowerCase())) headers.set(key, value);
  });
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Cache-Control", "no-store");

  return new Response(raw, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers,
  });
}

function cors() {
  return { "Access-Control-Allow-Origin": "*" };
}
