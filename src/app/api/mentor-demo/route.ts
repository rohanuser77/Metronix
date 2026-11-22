import { NextRequest, NextResponse } from "next/server";

interface MentorQuery {
  message: string;
  topic?: string;
}

const mockResponses: Record<string, string> = {
  inertia: "Jadattva (Inertia) ka matlab hai aalasi hona! Agar koi cheez ruki hui hai toh ruki rehna chahti hai, aur chal rahi hai toh chalte rehna chahti hai. Jab tum cycle ka pedal maarna chhodte ho, tab bhi cycle aage chalti rehti hai na? Yahi Newton ka pehla niyam hai!",
  gravity: "Gurutvaakarshan (Gravity) ek aisi taaqat hai jo ped se seb (ya aam) ko zameen par kheenchti hai. Socho agar gravity na hoti toh khet mein paani nali se aage badhta hi nahi, hawa mein tairne lagta! 🌍",
  photosynthesis: "Prakash Sanshleshan (Photosynthesis) podhon ka rasoi-ghar hai! Podhe dhoop (sunlight), paani (water), aur hava se carbon dioxide lekar apna khana banate hain aur humein jeene ke liye Oxygen dete hain. Kheti ke liye dhoop kyu zaruri hai, ab samjhe?",
  scholarship: "Bhai tension mat le! Agar teri family income 2.5 lakh se kam hai aur marks 60% ke aas-paas hain, toh National Means-cum-Merit (NMMSS) aur state ki post-matric yojana mein poori tuition fees maaf ho sakti hai. Form aane par Mentorix tujhe yaad dilayega!",
  routine: "Kheti aur ghar ke kaam ke baad din bhar thakavat ho jati hai. Mera sujhaav: shaam ko sirf 40 minute ek focused session karo, aur subah taaza dimaag se 30 minute formula revise karo. 70 minute roz = Class topper banne ke liye kaafi hai!",
  default: "Shaabash! Ye sawal puchne ke liye dhanyawad. Mentorix AI hamesha tere saath hai — bina kisi sharam ke har concept Hindi mein poocho. Roz thoda thoda padhenge toh board aur entrance exam mein danka bajega! 🎯",
};

export async function POST(req: NextRequest) {
  try {
    const body: MentorQuery = await req.json();
    const message = body.message?.toLowerCase() || "";

    let reply = mockResponses.default;
    if (message.includes("inertia") || message.includes("newton") || message.includes("jadattva") || message.includes("law")) {
      reply = mockResponses.inertia;
    } else if (message.includes("gravity") || message.includes("gurutva") || message.includes("seb") || message.includes("aam")) {
      reply = mockResponses.gravity;
    } else if (message.includes("photo") || message.includes("podhe") || message.includes("kheti") || message.includes("leaf")) {
      reply = mockResponses.photosynthesis;
    } else if (message.includes("scholarship") || message.includes("paisa") || message.includes("fees") || message.includes("grant")) {
      reply = mockResponses.scholarship;
    } else if (message.includes("routine") || message.includes("time") || message.includes("khet") || message.includes("shaam")) {
      reply = mockResponses.routine;
    }

    return NextResponse.json({
      reply,
      xpEarned: 10,
      badge: "Concept Explorer",
      timestamp: new Date().toLocaleTimeString("hi-IN", { hour: "2-digit", minute: "2-digit" }),
    });
  } catch (e) {
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
