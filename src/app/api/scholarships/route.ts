import { NextRequest, NextResponse } from "next/server";
import { Scholarship } from "@/types";

const scholarshipsDatabase: Scholarship[] = [
  {
    id: "nsp-nmmss",
    title: "National Means-cum-Merit Scholarship (NMMSS)",
    titleHindi: "National Means-cum-Merit Chhatravriti (NMMSS)",
    provider: "Ministry of Education, Govt. of India",
    amount: "₹12,000 / saal (Class 9–12)",
    eligibility: "Class 8 pass with >55%, govt/aided school student",
    eligibilityHindi: "Kaksha 8 mein 55% se adhik marks, sarkari school ke vidyarthi",
    category: "merit",
    minMarks: 55,
    maxIncomeLakhs: 3.5,
    deadline: "30 November",
    applyUrl: "https://scholarships.gov.in",
    tag: "Central Govt",
  },
  {
    id: "inspire-manak",
    title: "INSPIRE MANAK Award (DST)",
    titleHindi: "INSPIRE MANAK Puraskar (DST Vigyan Vibhag)",
    provider: "Department of Science & Technology",
    amount: "₹10,000 one-time science project grant",
    eligibility: "Class 6–10 students with innovative science idea",
    eligibilityHindi: "Kaksha 6–10 ke vidyarthi jinke paas naya vigyan idea ho",
    category: "all",
    minMarks: 50,
    maxIncomeLakhs: 10,
    deadline: "15 September (Annual)",
    applyUrl: "https://www.inspireawards-dst.gov.in",
    tag: "Science & Innovation",
  },
  {
    id: "post-matric-scst",
    title: "Post-Matric Scholarship for SC/ST Students",
    titleHindi: "Post-Matric Chhatravriti (SC/ST Vidyarthi)",
    provider: "Ministry of Social Justice & Empowerment",
    amount: "Puri college/polytechnic tuition fees + hostel bhatta",
    eligibility: "Class 11, 12, ITI, Diploma, Degree students from SC/ST category",
    eligibilityHindi: "Kaksha 11, 12, ITI, Diploma aur Degree ke SC/ST chhatra",
    category: "sc_st",
    minMarks: 45,
    maxIncomeLakhs: 2.5,
    deadline: "December 31",
    applyUrl: "https://scholarships.gov.in",
    tag: "Full Tuition Coverage",
  },
  {
    id: "pragati-girls",
    title: "AICTE Pragati Scholarship for Girls",
    titleHindi: "AICTE Pragati Chhatravriti (Technical Shiksha)",
    provider: "AICTE, Govt. of India",
    amount: "₹50,000 / saal technical education grant",
    eligibility: "Female students entering technical diploma / degree programs",
    eligibilityHindi: "Diploma ya Engineering mein pravesh lene wali chhatrayein",
    category: "girls",
    minMarks: 60,
    maxIncomeLakhs: 8.0,
    deadline: "October 31",
    applyUrl: "https://www.aicte-india.org",
    tag: "Girls in STEM",
  },
  {
    id: "tata-trust-rural",
    title: "Tata Trusts Means Grant for Higher Education",
    titleHindi: "Tata Trusts Uchh Shiksha Sahayata Anudaan",
    provider: "Tata Trusts",
    amount: "₹30,000 - ₹60,000 anukoolit anudaan",
    eligibility: "Rural students pursuing STEM or Healthcare degrees",
    eligibilityHindi: "Gramin chhatra jo Science ya Medical stream mein padh rahe hain",
    category: "merit",
    minMarks: 65,
    maxIncomeLakhs: 4.5,
    deadline: "Rolling basis",
    applyUrl: "https://www.tatatrusts.org",
    tag: "Private Trust",
  },
  {
    id: "obc-pre-matric",
    title: "National Fellowship & Post-Matric for OBC Students",
    titleHindi: "OBC Chhatra Kalyan Post-Matric Yojana",
    provider: "State Social Welfare Departments",
    amount: "₹8,000 - ₹20,000 / saal",
    eligibility: "OBC category students with family income < 2.5 Lakhs",
    eligibilityHindi: "OBC kaksha 11-12 aur college chhatra",
    category: "obc",
    minMarks: 50,
    maxIncomeLakhs: 2.5,
    deadline: "State Portal Timelines",
    applyUrl: "https://scholarships.gov.in",
    tag: "State Govt",
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const maxIncome = searchParams.get("maxIncome");
  const minMarks = searchParams.get("minMarks");

  let filtered = [...scholarshipsDatabase];

  if (category && category !== "all") {
    filtered = filtered.filter(
      (s) => s.category === category || s.category === "all"
    );
  }

  if (maxIncome) {
    const inc = parseFloat(maxIncome);
    if (!isNaN(inc)) {
      filtered = filtered.filter((s) => s.maxIncomeLakhs >= inc);
    }
  }

  if (minMarks) {
    const marks = parseFloat(minMarks);
    if (!isNaN(marks)) {
      filtered = filtered.filter((s) => s.minMarks <= marks);
    }
  }

  return NextResponse.json({ scholarships: filtered, total: filtered.length });
}
