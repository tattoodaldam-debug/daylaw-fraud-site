import type { Metadata } from "next";
import TopicPreview from "@/components/TopicPreview";

export const metadata: Metadata = {
  title: "형사 고소대리 · 금융사기 고소 변호사",
  description:
    "보이스피싱·투자사기·코인 사기 피해의 형사 고소장 작성과 수사 대응을 변호사가 대리합니다.",
  alternates: { canonical: "/victim/complaint/" },
  robots: { index: false, follow: true },
};

export default function ComplaintPage() {
  return (
    <TopicPreview
      category="피해자 대응"
      title="고소대리"
      intro={[
        "고소는 수사의 출발점입니다. 죄명 선택과 증거 정리에 따라 수사의 속도와 방향이 달라질 수 있습니다.",
        "변호사가 고소장 작성부터 수사기관 진술 동행, 보완 자료 제출까지 피해자를 대리해 수사가 피해 회복으로 이어지도록 돕습니다.",
      ]}
      related={[
        { label: "피해금 회수 안내", href: "/victim/recovery" },
        { label: "민사소송 안내", href: "/victim/civil-lawsuit" },
        { label: "사건유형 살펴보기", href: "/#practice" },
      ]}
    />
  );
}
