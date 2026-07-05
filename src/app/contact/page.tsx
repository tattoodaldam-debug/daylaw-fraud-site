import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "상담안내 | 데이법률사무소",
};

export default function ContactPage() {
  return (
    <ComingSoon
      title="상담안내"
      description="전화 상담과 온라인 상담 창구를 준비하고 있습니다. 창구가 열리는 대로 이 페이지에서 바로 안내해 드리겠습니다. 사무소 주소: 서울 서초구 서초동 1624-21"
    />
  );
}
