import type { Metadata } from "next";
import VictimDetail from "@/components/VictimDetail";
import { getVictimTopic } from "@/lib/victimTopics";

export const metadata: Metadata = {
  title: "민사소송 변호사 상담 · 사기 손해배상 청구와 강제집행",
  description:
    "사기 피해 민사소송 변호사 상담. 손해배상·부당이득·대여금 청구, 소송 전 가압류, 판결 후 강제집행까지 피해금 회수를 위한 민사 절차를 안내합니다.",
  alternates: { canonical: "/victim/civil-lawsuit/" },
};

export default function CivilLawsuitPage() {
  return <VictimDetail topic={getVictimTopic("civil-lawsuit")!} />;
}
