import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "리딩방 사기·투자사기 피해 대응 변호사",
  description:
    "주식 리딩방 사기, 가짜 거래소·HTS 투자사기 피해 대응: 증거 보존, 지급정지, 형사 고소, 민사 손해배상 절차를 변호사가 안내합니다. 출금 전 세금 요구는 추가 편취 수법입니다.",
  alternates: { canonical: "/practice/investment-scam" },
};

export default function InvestmentScamPage() {
  return <PracticeDetail practice={getPractice("investment-scam")!} />;
}
