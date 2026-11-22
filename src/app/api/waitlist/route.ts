import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Local fallback storage file when Supabase credentials are placeholders
const fallbackDataPath = path.join(process.cwd(), ".waitlist_data.json");

function saveToLocalFallback(entry: { email: string; joined_at: string; source?: string; classLevel?: string; state?: string }) {
  try {
    let list: Array<{ email: string; joined_at: string; source?: string; classLevel?: string; state?: string }> = [];
    if (fs.existsSync(fallbackDataPath)) {
      const content = fs.readFileSync(fallbackDataPath, "utf-8");
      list = JSON.parse(content);
    }
    // Check if email already exists
    if (!list.some((item) => item.email.toLowerCase() === entry.email.toLowerCase())) {
      list.push(entry);
      fs.writeFileSync(fallbackDataPath, JSON.stringify(list, null, 2), "utf-8");
    }
    return true;
  } catch (e) {
    console.error("Local fallback save error:", e);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source, classLevel, state } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Kripya sahi email pata daalein." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const joined_at = new Date().toISOString();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // If Supabase keys are provided, try saving to Supabase
    if (supabaseUrl && serviceRoleKey && !supabaseUrl.includes("placeholder")) {
      try {
        const supabase = createClient(supabaseUrl, serviceRoleKey);
        const { error } = await supabase
          .from("waitlist")
          .upsert({ email: cleanEmail, joined_at, source: source || "website", class_level: classLevel, state }, { onConflict: "email" });

        if (error) {
          console.warn("Supabase upsert warning, fallback to local:", error.message);
          saveToLocalFallback({ email: cleanEmail, joined_at, source, classLevel, state });
        }
      } catch (err) {
        console.warn("Supabase connection error, fallback to local:", err);
        saveToLocalFallback({ email: cleanEmail, joined_at, source, classLevel, state });
      }
    } else {
      // Clean local storage fallback for development / instant run
      saveToLocalFallback({ email: cleanEmail, joined_at, source, classLevel, state });
    }

    return NextResponse.json({ success: true, message: "Aap waitlist mein jud chuke hain!" }, { status: 200 });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json({ error: "Server error. Thodi der baad prayas karein." }, { status: 500 });
  }
}

export async function GET() {
  try {
    let count = 8421; // Baseline count for early access
    if (fs.existsSync(fallbackDataPath)) {
      const content = fs.readFileSync(fallbackDataPath, "utf-8");
      const list = JSON.parse(content);
      count += list.length;
    }
    return NextResponse.json({ totalRegistrations: count, goal: 10000 });
  } catch {
    return NextResponse.json({ totalRegistrations: 8421, goal: 10000 });
  }
}
