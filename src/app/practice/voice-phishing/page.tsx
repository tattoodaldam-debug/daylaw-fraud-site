import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "보이스피싱 피해 회복 | 데이법률사무소",
  description:
    "보이스피싱 피해 직후 해야 할 일과 지급정지·형사고소·민사 손해배상 절차를 피해자 관점에서 안내합니다.",
};

export default function VoicePhishingPage() {
  return <PracticeDetail practice={getPractice("voice-phishing")!} />;
}
