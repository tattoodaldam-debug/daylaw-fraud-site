import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "자주 묻는 질문 | 데이법률사무소",
};

export default function FaqPage() {
  return (
    <ComingSoon
      title="자주 묻는 질문"
      description="금융사기 피해자분들이 자주 궁금해하시는 내용을 변호사 검수를 거쳐 정리하고 있습니다. 곧 이곳에서 확인하실 수 있습니다."
    />
  );
}
