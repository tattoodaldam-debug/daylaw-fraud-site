import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "사기죄 고소 변호사 상담 · 성립요건과 대응 절차",
  description:
    "차용금·중고거래·물품대금 사기 피해, 사기죄 변호사 상담으로 시작하세요. 사기죄 성립요건(기망행위·편취의사), 고소 절차, 대여금 청구와 가압류까지 안내합니다.",
  alternates: { canonical: "/fraud/fraud-crime/" },
};

export default function FraudCrimePage() {
  return <PracticeDetail practice={getPractice("fraud-crime")!} />;
}
