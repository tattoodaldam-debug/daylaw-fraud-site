import type { Metadata } from "next";
import TopicPreview from "@/components/TopicPreview";

export const metadata: Metadata = {
  title: "주식·공모주 사기 피해 대응 변호사",
  description:
    "공모주 청약 빙자, 비상장 주식 고가 매도, 가짜 증권사 앱 등 주식 관련 사기 피해 대응을 안내합니다.",
  alternates: { canonical: "/fraud/stock-fraud/" },
  robots: { index: false, follow: true },
};

export default function StockFraudPage() {
  return (
    <TopicPreview
      category="사건유형"
      title="주식·공모주 사기"
      intro={[
        "'기관 배정 물량', '상장 확정 공모주'를 미끼로 청약금을 받거나, 비상장 주식을 시세보다 비싸게 떠넘기는 사기 유형입니다.",
        "가짜 증권사 앱이나 위조된 잔고 화면이 동원되는 경우가 많아, 화면 캡처와 입금 기록 보존이 특히 중요합니다.",
      ]}
      related={[
        { label: "리딩방 사기 피해 대응", href: "/fraud/stock-leading-room" },
        { label: "자주 묻는 질문 (투자사기)", href: "/faq#investment-scam" },
      ]}
    />
  );
}
