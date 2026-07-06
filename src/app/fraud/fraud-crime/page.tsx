import type { Metadata } from "next";
import TopicPreview from "@/components/TopicPreview";

export const metadata: Metadata = {
  title: "사기죄 고소·대응 변호사",
  description:
    "중고거래 사기, 차용금 사기, 물품대금 사기 등 사기죄 일반의 고소 절차와 피해 회복 방법을 안내합니다.",
  alternates: { canonical: "/fraud/fraud-crime/" },
  robots: { index: false, follow: true },
};

export default function FraudCrimePage() {
  return (
    <TopicPreview
      category="사건유형"
      title="사기죄 일반"
      intro={[
        "돈을 빌려가고 갚지 않는 차용금 사기, 중고거래·물품대금 사기 등 일상에서 일어나는 사기 피해 전반을 다룹니다.",
        "단순 채무불이행과 사기죄의 경계는 '처음부터 갚을 의사나 능력이 있었는지'에 달려 있어, 사안별 법률 검토가 필요합니다.",
      ]}
      related={[
        { label: "고소대리 안내", href: "/victim/complaint" },
        { label: "피해금 회수 안내", href: "/victim/recovery" },
      ]}
    />
  );
}
