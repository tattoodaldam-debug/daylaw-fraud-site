import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "주식·공모주 사기 변호사 상담 · 비상장주식 피해 대응",
  description:
    "공모주 청약 빙자, 비상장 주식 상장 사기, 가짜 증권사 앱 피해는 주식사기 변호사 상담으로 확인하세요. 매매계약 취소, 형사고소, 대금 반환 청구 절차를 안내합니다.",
  alternates: { canonical: "/fraud/stock-fraud/" },
};

export default function StockFraudPage() {
  return <PracticeDetail practice={getPractice("stock-fraud")!} />;
}
