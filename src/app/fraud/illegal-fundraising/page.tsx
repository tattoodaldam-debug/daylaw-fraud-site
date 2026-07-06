import type { Metadata } from "next";
import TopicPreview from "@/components/TopicPreview";

export const metadata: Metadata = {
  title: "유사수신·다단계 피해 대응 변호사",
  description:
    "원금 보장·확정 수익을 약속하며 자금을 모으는 유사수신, 하위 모집 수당을 내세우는 불법 다단계 피해 대응을 안내합니다.",
  alternates: { canonical: "/fraud/illegal-fundraising/" },
  robots: { index: false, follow: true },
};

export default function IllegalFundraisingPage() {
  return (
    <TopicPreview
      category="사건유형"
      title="유사수신·다단계"
      intro={[
        "인허가 없이 '원금 보장'과 '확정 수익'을 약속하며 불특정 다수의 자금을 모으는 행위는 유사수신행위법이 금지하는 범죄입니다.",
        "지인 소개와 하위 모집 수당으로 피해가 가족·지인 단위로 번지는 것이 특징이며, 배당이 아직 나오고 있어도 안심할 수 없습니다.",
      ]}
      related={[
        { label: "코인 사기 피해 대응", href: "/fraud/crypto-fraud" },
        { label: "자주 묻는 질문 (코인)", href: "/faq#coin" },
      ]}
    />
  );
}
