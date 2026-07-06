import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "보이스피싱 피해 회복 변호사 · 지급정지·피해금 환급",
  description:
    "보이스피싱 당했을 때 해야 할 일: 지급정지 신청, 피해구제 신청, 형사 고소, 민사 손해배상까지. 보이스피싱 피해금 환급 절차를 변호사가 안내합니다.",
  alternates: { canonical: "/fraud/voice-phishing/" },
};

export default function VoicePhishingPage() {
  return <PracticeDetail practice={getPractice("voice-phishing")!} />;
}
