import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "유사수신·다단계 변호사 상담 · 투자금 반환 대응",
  description:
    "원금 보장·확정 배당을 내건 유사수신, 모집 수당형 다단계 피해는 유사수신 변호사 상담으로 대응하세요. 유사수신행위법 위반 고소, 배당금 정리, 재산 가압류 절차를 안내합니다.",
  alternates: { canonical: "/fraud/illegal-fundraising/" },
};

export default function IllegalFundraisingPage() {
  return <PracticeDetail practice={getPractice("illegal-fundraising")!} />;
}
