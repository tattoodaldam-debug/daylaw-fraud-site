import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "칼럼 | 데이법률사무소",
};

export default function ColumnPage() {
  return (
    <ComingSoon
      title="칼럼"
      description="보이스피싱, 리딩방 투자사기, 코인 유사수신 등 금융사기 대응에 도움이 되는 법률 칼럼을 준비하고 있습니다."
    />
  );
}
