import Link from "next/link";
import { CONTACT_PHONE, KAKAO_CHAT_URL } from "@/lib/site";

type CtaButton = {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

export default function MobileCtaBar() {
  // 값이 비어 있는 연락 수단은 버튼을 만들지 않는다
  const buttons: CtaButton[] = [
    ...(CONTACT_PHONE
      ? [{ label: "전화상담", href: `tel:${CONTACT_PHONE}`, external: true }]
      : []),
    ...(KAKAO_CHAT_URL
      ? [{ label: "카카오톡", href: KAKAO_CHAT_URL, external: true }]
      : []),
    { label: "상담신청", href: "/contact", primary: true },
  ];

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-800 bg-navy-950 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid auto-cols-fr grid-flow-col gap-px">
        {buttons.map((button) =>
          button.external ? (
            <a
              key={button.label}
              href={button.href}
              className={
                button.primary
                  ? "bg-gold-500 py-4 text-center text-sm font-black text-navy-950"
                  : "bg-navy-900 py-4 text-center text-sm font-bold text-navy-100"
              }
            >
              {button.label}
            </a>
          ) : (
            <Link
              key={button.label}
              href={button.href}
              className={
                button.primary
                  ? "bg-gold-500 py-4 text-center text-sm font-black text-navy-950"
                  : "bg-navy-900 py-4 text-center text-sm font-bold text-navy-100"
              }
            >
              {button.label}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
