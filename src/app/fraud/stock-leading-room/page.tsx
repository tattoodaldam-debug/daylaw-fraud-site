import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "리딩방 사기 변호사 상담 · 피해금 회수 절차",
  description:
    "주식 리딩방, 가짜 거래소·HTS 사기 피해는 리딩방 사기 변호사 상담으로 대응하세요. 증거 보존 방법, 형사고소, 계좌 추적과 손해배상 절차를 안내합니다. 출금 전 세금 요구는 추가 편취 수법입니다.",
  alternates: { canonical: "/fraud/stock-leading-room/" },
};

export default function StockLeadingRoomPage() {
  return <PracticeDetail practice={getPractice("stock-leading-room")!} />;
}
