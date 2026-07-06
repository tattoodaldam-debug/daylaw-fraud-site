import type { Metadata } from "next";
import TopicPreview from "@/components/TopicPreview";

export const metadata: Metadata = {
  title: "투자사기 피해 대응 변호사",
  description:
    "비상장 주식, 부동산 개발, 사업 투자 빙자 등 투자사기 피해의 형사 고소와 손해배상 대응을 안내합니다.",
  alternates: { canonical: "/fraud/investment-fraud/" },
  robots: { index: false, follow: true },
};

export default function InvestmentFraudPage() {
  return (
    <TopicPreview
      category="사건유형"
      title="투자사기"
      intro={[
        "비상장 주식, 부동산 개발, 신사업 지분 등 '확실한 투자처'를 내세워 돈을 모은 뒤 약속을 지키지 않는 사기 유형입니다.",
        "투자 권유 당시의 설명과 실제가 달랐다면, 손실이 아니라 기망에 의한 피해일 수 있습니다. 권유 자료와 입금 내역을 보존하는 것이 대응의 출발점입니다.",
      ]}
      related={[
        { label: "리딩방 사기 피해 대응", href: "/fraud/stock-leading-room" },
        { label: "코인 사기 피해 대응", href: "/fraud/crypto-fraud" },
        { label: "자주 묻는 질문 (투자사기)", href: "/faq#investment-scam" },
      ]}
    />
  );
}
