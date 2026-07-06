import type { Metadata } from "next";
import VictimDetail from "@/components/VictimDetail";
import { getVictimTopic } from "@/lib/victimTopics";

export const metadata: Metadata = {
  title: "고소대리 변호사 상담 · 사기 고소장 작성과 수사 대응",
  description:
    "사기 피해 고소, 고소대리 변호사 상담으로 시작하세요. 기망행위를 특정한 고소장 작성, 고소인 조사 대응, 수사 진행과 불송치 이의까지 절차를 안내합니다.",
  alternates: { canonical: "/victim/complaint/" },
};

export default function ComplaintPage() {
  return <VictimDetail topic={getVictimTopic("complaint")!} />;
}
