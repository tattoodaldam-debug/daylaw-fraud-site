import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "보이스피싱 변호사 상담 · 지급정지와 피해금 환급",
  description:
    "보이스피싱 당했다면 지급정지 신청이 먼저입니다. 보이스피싱 변호사 상담으로 피해구제 신청, 형사고소, 계좌 명의자 손해배상까지 피해금 환급 절차 전체를 안내받으세요.",
  alternates: { canonical: "/fraud/voice-phishing/" },
};

export default function VoicePhishingPage() {
  return <PracticeDetail practice={getPractice("voice-phishing")!} />;
}
