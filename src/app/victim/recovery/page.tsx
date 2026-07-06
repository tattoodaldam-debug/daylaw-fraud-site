import type { Metadata } from "next";
import TopicPreview from "@/components/TopicPreview";

export const metadata: Metadata = {
  title: "피해금 회수 · 지급정지·환급·강제집행",
  description:
    "지급정지와 피해구제 신청, 가압류 등 보전처분, 판결 후 강제집행까지 금융사기 피해금 회수 절차를 안내합니다.",
  alternates: { canonical: "/victim/recovery/" },
  robots: { index: false, follow: true },
};

export default function RecoveryPage() {
  return (
    <TopicPreview
      category="피해자 대응"
      title="피해금 회수"
      intro={[
        "범인이 처벌되는 것과 피해금이 돌아오는 것은 별개의 절차입니다. 회수는 지급정지·환급, 보전처분, 강제집행으로 이어지는 별도의 설계가 필요합니다.",
        "상대방 재산 상태에 따라 실익이 달라지므로, 사안별로 회수 가능성을 먼저 검토해 현실적인 방안을 안내해 드립니다.",
      ]}
      related={[
        { label: "고소대리 안내", href: "/victim/complaint" },
        { label: "민사소송 안내", href: "/victim/civil-lawsuit" },
        { label: "보이스피싱 피해금 환급 절차", href: "/fraud/voice-phishing" },
      ]}
    />
  );
}
