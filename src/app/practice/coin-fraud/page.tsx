import type { Metadata } from "next";
import PracticeDetail from "@/components/PracticeDetail";
import { getPractice } from "@/lib/practices";

export const metadata: Metadata = {
  title: "코인·유사수신 피해 대응 | 데이법률사무소",
  description:
    "코인 상장 빙자, 원금 보장 유사수신 피해 직후 해야 할 일과 법적 대응 절차를 피해자 관점에서 안내합니다.",
};

export default function CoinFraudPage() {
  return <PracticeDetail practice={getPractice("coin-fraud")!} />;
}
