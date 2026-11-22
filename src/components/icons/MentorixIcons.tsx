import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

// 1. STEM Labs: Beaker with leaf inside (science + nature)
export const BeakerLeafIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" fill="#0EA5E9" fillOpacity="0.1" />
    <path d="M9 3v4" />
    <path d="M15 3v4" />
    <path d="M6 8h12" />
    <path d="M8 17c1.5-3 5-3 7-5" stroke="#22C55E" strokeWidth="2.5" />
    <path d="M15 12c-2 0-3 2-3 4" stroke="#22C55E" strokeWidth="2" />
    <circle cx="9" cy="14" r="1" fill="#0EA5E9" />
    <circle cx="15" cy="17" r="1.5" fill="#0EA5E9" />
  </svg>
);

// 2. AI Mentor: Chat bubble with shining star
export const MentorStarIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#F97316" fillOpacity="0.1" />
    <path d="M12 7l1 2.5L15.5 10.5 13 12l-.5 2.5L11 12l-2.5-.5L11 9.5 12 7z" fill="#F97316" stroke="#F97316" strokeWidth="1" />
  </svg>
);

// 3. Scholarships: Graduation cap with Rupee symbol
export const ScholarshipRupeeIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 10L12 5 2 10l10 5 10-5z" fill="#22C55E" fillOpacity="0.1" />
    <path d="M6 12.5V17c0 2 3 3.5 6 3.5s6-1.5 6-3.5v-4.5" />
    <path d="M22 10v6" />
    <path d="M10 9h4" stroke="#1C1A17" strokeWidth="1.5" />
    <path d="M10 11.5h3.5" stroke="#1C1A17" strokeWidth="1.5" />
    <path d="M10 9c1.5 0 2.5.5 2.5 1.5s-1 1.5-2.5 1.5l3 3.5" stroke="#1C1A17" strokeWidth="1.5" />
  </svg>
);

// 4. Routine: Clock with sun & moon balance
export const RoutineClockIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" fill="#FBBF24" fillOpacity="0.1" />
    <path d="M12 7v5l3 2" />
    <path d="M12 2v2" stroke="#FBBF24" strokeWidth="2.5" />
    <path d="M20 12h2" stroke="#FBBF24" strokeWidth="2.5" />
    <path d="M4 12H2" stroke="#FBBF24" strokeWidth="2.5" />
    <path d="M12 20v2" stroke="#FBBF24" strokeWidth="2.5" />
  </svg>
);

// 5. Opportunities: Rocket with Indian flag tricolor motif
export const OpportunityRocketIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="#F97316" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="#8B5CF6" fillOpacity="0.1" />
    <path d="M9 12H4s.5-3 3-4" />
    <path d="M15 18v5s3-.5 4-3" />
    {/* Tricolor dots inside */}
    <circle cx="14" cy="7" r="1.5" fill="#F97316" />
    <circle cx="16" cy="9" r="1.5" fill="#22C55E" />
  </svg>
);

// 6. Community: Phone with Family & WhatsApp badge
export const FamilyPhoneIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="3" fill="#14B8A6" fillOpacity="0.1" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
    <circle cx="10" cy="8" r="2" fill="#14B8A6" />
    <circle cx="15" cy="9" r="1.5" fill="#14B8A6" />
    <path d="M7 14c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" />
    <path d="M13 14c0-1 1-1.8 2-1.8s2 .8 2 1.8" />
  </svg>
);

// 7. Exam Command Center: Target/Calendar with countdown
export const ExamTargetIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" fill="#EF4444" fillOpacity="0.1" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="12" cy="16" r="3" stroke="#EF4444" strokeWidth="2" />
    <path d="M12 15v1.5l1 1" stroke="#EF4444" strokeWidth="1.5" />
  </svg>
);

// 8. Leaderboard: Village trophy
export const VillageTrophyIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
    <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
    <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" fill="#FBBF24" fillOpacity="0.15" />
    <line x1="12" y1="16" x2="12" y2="19" />
    <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2.5" />
  </svg>
);

// 9. Offline Kiosk / Micro-server
export const OfflineKioskIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" fill="#0EA5E9" fillOpacity="0.1" />
    <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M6 8h.01" strokeWidth="3" />
    <path d="M9 8h.01" strokeWidth="3" />
    <path d="M2 13h20" strokeDasharray="2 2" />
    <path d="M17 10l-2 2 2 2" stroke="#22C55E" />
  </svg>
);

// 10. Teacher Sahayak
export const TeacherSahayakIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="#8B5CF6" fillOpacity="0.1" />
    <circle cx="12" cy="9" r="2.5" />
    <path d="M9 15c0-1.5 1.5-2 3-2s3 .5 3 2" />
  </svg>
);
