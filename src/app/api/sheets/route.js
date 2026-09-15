export const runtime = "nodejs";
import { NextResponse } from "next/server";

const GAS_URL = process.env.GOOGLE_APPS_SCRIPT_URL || "";
const GAS_SECRET = process.env.GOOGLE_APPS_SCRIPT_SECRET || "";

async function safeJson(res) {
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    const text = await res.text();
    throw new Error(
      `Expected JSON, got: ${ct}. Body: ${text.slice(0, 300)}...`
    );
  }
  return res.json();
}

function assertSheetsConfig() {
  if (!GAS_URL || !GAS_SECRET) {
    throw new Error("Google Sheets integration is not configured");
  }
}

export async function GET(req) {
  try {
    assertSheetsConfig();
    const url = new URL(req.url);
    const tokenCheck = url.searchParams.get("tokenCheck");
    if (!tokenCheck) {
      return NextResponse.json(
        { ok: false, error: "Provide tokenCheck" },
        { status: 400 }
      );
    }
    const qs = `token=${encodeURIComponent(
      GAS_SECRET
    )}&tokenCheck=${encodeURIComponent(tokenCheck)}`;
    const res = await fetch(`${GAS_URL}?${qs}`, { cache: "no-store" });
    const data = await res.json();
    return NextResponse.json(data, { status: data?.ok ? 200 : 500 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err.message || "Read failed" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    assertSheetsConfig();
    const body = await req.json();
    const res = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, token: GAS_SECRET }),
    });
    const data = await safeJson(res);
    return NextResponse.json(data, { status: data?.ok ? 200 : 500 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err.message || "Write failed" },
      { status: 500 }
    );
  }
}
