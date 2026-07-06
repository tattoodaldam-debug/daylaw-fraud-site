import type { Metadata } from "next";
import TopicPreview from "@/components/TopicPreview";

export const metadata: Metadata = {
  title: "민사소송 · 손해배상 청구 변호사",
  description:
    "금융사기 관련자에 대한 손해배상 청구, 부당이득 반환 청구 등 민사소송 절차를 안내합니다.",
  alternates: { canonical: "/victim/civil-lawsuit/" },
  robots: { index: false, follow: true },
};

export default function CivilLawsuitPage() {
  return (
    <TopicPreview
      category="피해자 대응"
      title="민사소송"
      intro={[
        "형사 절차에서 회복되지 않은 피해는 손해배상·부당이득 반환 등 민사 청구로 다툽니다. 계좌 명의자, 모집책 등 책임을 물을 수 있는 대상을 특정하는 것이 핵심입니다.",
        "소송 전 가압류 등 보전처분으로 상대방 재산을 묶어두어야 판결이 실제 회수로 이어질 수 있습니다.",
      ]}
      related={[
        { label: "피해금 회수 안내", href: "/victim/recovery" },
        { label: "고소대리 안내", href: "/victim/complaint" },
      ]}
    />
  );
}
