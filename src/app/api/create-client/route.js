// app/api/gtc-client-add/route.js

const BASE_URL = process.env.GTC_BASE_URL || "https://mygtcportal.com";
const API_KEY =
  (process.env.GTC_API_KEY || "ga020bebb7c2896b60d53d6095410b2509f93d4gtc545dfca").trim();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key, api_key",
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
  } catch (_) {
    body = {};
  }

  const {
    user_account_type = 0,
    country = "PK",
    first_name = "Adi",
    last_name = "Test",
    email = "adi120@tgmail.com",
    area_code = "92",
    phone = "36565897454",
    pwd = "test@qQ123",
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
  }).toString();

  // Ask for identity encoding to avoid double-decode issues
  const upstream = await fetch(
    `${BASE_URL}/crmapi/client/add?api_key=${encodeURIComponent(API_KEY)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-api-key": API_KEY, // header variant A
        "api_key": API_KEY,   // header variant B
        "Accept": "*/*",
        "Accept-Encoding": "identity",
      },
      body: form,
      redirect: "manual",
    }
  ).catch((e) => e);

  // Network error (no HTTP response at all)
  if (upstream instanceof Error) {
    return new Response(
      JSON.stringify({ message: upstream.message || "Upstream request failed" }),
      { status: 502, headers: cors() }
    );
  }

  // Forward upstream status + (safe) headers + raw bytes
  const raw = await upstream.arrayBuffer();

  const headers = new Headers();
  const skip = new Set([
    "connection",
    "transfer-encoding",
    "content-length",
    "content-encoding", // critical: don't forward this
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


// Server-only: Next.js App Router
// /app/api/gtc/create-client/route.js

// const BASE_URL = process.env.GTC_BASE_URL || "https://mygtcportal.com";
// const RAW_KEY = process.env.GTC_API_KEY || "ga020bebb7c2896b60d53d6095410b2509f93d4gtc545dfca";
// const API_KEY = RAW_KEY.trim(); // trim spaces/newlines

// const MASK = (s = "") => (s.length <= 6 ? "****" : `${s.slice(0, 3)}****${s.slice(-3)}`);

// export const dynamic = "force-dynamic"; // ensure no caching of envs

// export async function OPTIONS() {
//   return new Response(null, {
//     status: 200,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "POST, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type",
//     },
//   });
// }

// export async function POST(request) {
//   try {
//     if (!API_KEY) {
//       return Response.json({ message: "Missing API key" }, { status: 500 });
//     }

//     const body = await request.json();
//     const {
//       user_account_type = 0,
//       country = "PK",
//       first_name = "Adi",
//       last_name = "Test",
//       email = "adi120@tgmail.com",
//       area_code = "92",
//       phone = "36565897454",
//       pwd = "test@qQ123",
//     } = body || {};

//     // Build the form-encoded body (most CRMs expect this)
//     const form = new URLSearchParams({
//       user_account_type: String(user_account_type),
//       country,
//       first_name,
//       last_name,
//       email,
//       area_code: String(area_code),
//       phone,
//       pwd,
//     }).toString();

//     // Attempt 1: put api_key in the query string (recommended)
//     const url1 = new URL(`${BASE_URL}/crmapi/client/add`);
//     url1.searchParams.set("api_key", API_KEY);

//     console.log("[GTC] Attempt1 (query param) URL:", url1.toString());
//     console.log("[GTC] Attempt1 api_key:", MASK(API_KEY));

//     let res = await fetch(url1.toString(), {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: form,
//     });

//     let data = await safeJson(res);
//     if (!looksLikeInvalidKey(data)) {
//       return respond(data, res.status, "Attempt1: query param");
//     }

//     // Attempt 2: header "api_key"
//     const url2 = new URL(`${BASE_URL}/crmapi/client/add`);
//     console.log("[GTC] Attempt2 (header: api_key) URL:", url2.toString());
//     res = await fetch(url2.toString(), {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         "api_key": API_KEY,
//       },
//       body: form,
//     });
//     data = await safeJson(res);
//     if (!looksLikeInvalidKey(data)) {
//       return respond(data, res.status, "Attempt2: header api_key");
//     }

//     // Attempt 3: header "x-api-key"
//     const url3 = new URL(`${BASE_URL}/crmapi/client/add`);
//     console.log("[GTC] Attempt3 (header: x-api-key) URL:", url3.toString());
//     res = await fetch(url3.toString(), {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         "x-api-key": API_KEY,
//       },
//       body: form,
//     });
//     data = await safeJson(res);
//     if (!looksLikeInvalidKey(data)) {
//       return respond(data, res.status, "Attempt3: header x-api-key");
//     }

//     // Attempt 4: Authorization: Bearer
//     const url4 = new URL(`${BASE_URL}/crmapi/client/add`);
//     console.log("[GTC] Attempt4 (header: Authorization) URL:", url4.toString());
//     res = await fetch(url4.toString(), {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Authorization": `Bearer ${API_KEY}`,
//       },
//       body: form,
//     });
//     data = await safeJson(res);
//     return respond(
//       data,
//       res.status,
//       "Attempt4: header Authorization Bearer (final attempt)"
//     );
//   } catch (err) {
//     console.error("[GTC] Proxy error:", err);
//     return Response.json(
//       { message: err?.message || "Request failed" },
//       { status: 500, headers: { "Access-Control-Allow-Origin": "*" } }
//     );
//   }
// }

// // ---- helpers ----
// function looksLikeInvalidKey(data) {
//   try {
//     if (!data) return false;
//     const msg = String(data?.ret_msg ?? "").toLowerCase();
//     const code = data?.ret_code;
//     return msg.includes("invalid api_key") || code === -1;
//   } catch {
//     return false;
//   }
// }

// async function safeJson(res) {
//   try {
//     return await res.json();
//   } catch {
//     // Vendor sometimes returns text/html on errors
//     const text = await res.text();
//     return { raw: text };
//   }
// }

// function respond(data, status, attemptHint) {
//   return new Response(JSON.stringify({ attempt: attemptHint, data }), {
//     status: status || 200,
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   });
// }

