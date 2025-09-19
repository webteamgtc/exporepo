// Creates MT account for an existing CRM client

const BASE_URL = process.env.GTC_BASE_URL || "https://mygtcportal.com";
const API_KEY = (process.env.GTC_API_KEY || "ga020bebb7c2896b60d53d6095410b2509f93d4gtc545dfca").trim();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  if (!API_KEY) {
    return new Response(JSON.stringify({ message: "Missing API key" }), {
      status: 500,
    });
  }

  let b = {};
  try {
    b = await req.json();
  } catch {}

  const {
    client_id, // required
    name, // required
    account_type, // required (0 trading, 2 agent)
    manager_id, // required (1 MT4, 3 MT5)
    account_group, // required (e.g. "real\\OZ\\MKT\\USC-XSCP00000-V")
    leverage, // required (check if API expects 100 or "1:100")
    master_pwd, // optional
    investor_pwd, // optional
  } = b || {};

  // basic validation (optional)
  for (const [k, v] of Object.entries({
    client_id,
    name,
    account_type,
    manager_id,
    account_group,
    leverage,
  })) {
    if (v === undefined || v === null || v === "") {
      return new Response(JSON.stringify({ message: `Missing field: ${k}` }), {
        status: 400,
      });
    }
  }

  const form = new URLSearchParams({
    client_id: String(client_id),
    name,
    account_type: String(account_type),
    manager_id: String(manager_id),
    account_group,
    leverage: String(leverage),
  });
  if (master_pwd) form.append("master_pwd", master_pwd);
  if (investor_pwd) form.append("investor_pwd", investor_pwd);

  const up = await fetch(`${BASE_URL}/crmapi/account/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Api-Key": API_KEY,
      apiKey: API_KEY,
      Accept: "*/*",
      "Accept-Encoding": "identity",
    },
    body: form.toString(),
    redirect: "manual",
  }).catch((e) => e);

  if (up instanceof Error) {
    return new Response(
      JSON.stringify({ message: up.message || "Upstream request failed" }),
      { status: 502 }
    );
  }

  const raw = await up.arrayBuffer();
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
  up.headers.forEach((v, k) => {
    if (!skip.has(k.toLowerCase())) headers.set(k, v);
  });
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Cache-Control", "no-store");

  return new Response(raw, {
    status: up.status,
    statusText: up.statusText,
    headers,
  });
}
