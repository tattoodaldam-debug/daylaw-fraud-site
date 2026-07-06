import type { Metadata } from "next";
import VictimDetail from "@/components/VictimDetail";
import { getVictimTopic } from "@/lib/victimTopics";

export const metadata: Metadata = {
  title: "피해금 회수 변호사 상담 · 사기 피해금 돌려받기",
  description:
    "형사고소만으로는 피해금이 자동 회수되지 않습니다. 민사소송·손해배상, 가압류·재산보전, 합의를 통한 사기 피해금 회수 방법을 변호사 상담으로 확인하세요.",
  alternates: { canonical: "/victim/recovery/" },
};

export default function RecoveryPage() {
  return <VictimDetail topic={getVictimTopic("recovery")!} />;
}
