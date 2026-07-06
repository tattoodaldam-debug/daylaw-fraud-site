import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "투자사기 변호사 상담 · 투자금 회수와 고소",
  description:
    "비상장 주식, 부동산 개발, 동업 빙자 투자사기 — 단순 투자손실과 다른 점부터 투자사기 변호사 상담으로 확인하세요. 형사고소와 투자금 반환 청구, 가압류 절차를 안내합니다.",
  alternates: { canonical: "/fraud/investment-fraud/" },
};

export default function InvestmentFraudPage() {
  return <PracticeDetail practice={getPractice("investment-fraud")!} />;
}
