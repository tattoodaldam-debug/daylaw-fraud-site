import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "코인 사기 변호사 상담 · 가상자산 피해 대응",
  description:
    "상장 빙자 코인, 채굴기·스테이킹 투자, 가짜 지갑 앱 피해는 코인 사기 변호사 상담으로 대응하세요. 가상자산 추적, 형사고소, 손해배상과 재산 동결 절차를 안내합니다.",
  alternates: { canonical: "/fraud/crypto-fraud/" },
};

export default function CryptoFraudPage() {
  return <PracticeDetail practice={getPractice("crypto-fraud")!} />;
}
