import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "코인 사기·유사수신 피해 대응 변호사",
  description:
    "코인 상장 빙자, 채굴기 투자, 스테이킹 이자 지급 중단 등 가상자산 사기·유사수신 피해의 형사 고소와 손해배상 절차를 변호사가 안내합니다.",
  alternates: { canonical: "/practice/coin-fraud" },
};

export default function CoinFraudPage() {
  return <PracticeDetail practice={getPractice("coin-fraud")!} />;
}
