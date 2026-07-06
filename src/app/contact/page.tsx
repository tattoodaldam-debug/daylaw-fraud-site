import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "금융사기 피해 상담안내 · 오시는 길",
  description:
    "보이스피싱·투자사기·코인 사기 피해 상담 안내. 서울 서초구 서초동 1624-21. 상담 전 준비하면 좋은 자료 체크리스트(이체내역, 대화 캡처, 상대 계좌정보)를 확인하세요.",
  alternates: { canonical: "/contact/" },
};

const CHECKLIST = [
  {
    title: "이체 · 송금 내역",
    description:
      "은행 앱이나 인터넷뱅킹에서 상대방에게 보낸 이체 내역을 캡처하거나 거래내역서를 발급받아 주세요.",
  },
  {
    title: "상대방과의 대화 전체 캡처",
    description:
      "문자, 카카오톡, 텔레그램 등 대화 내용을 처음부터 끝까지 캡처해 주세요. 대화방을 나가면 기록이 사라질 수 있으니 나가지 마세요.",
  },
  {
    title: "상대방 계좌번호 · 연락처 · 아이디",
    description:
      "돈을 받은 계좌번호와 예금주, 전화번호, SNS 아이디 등 상대방을 특정할 수 있는 정보를 정리해 주세요.",
  },
  {
    title: "사기 사이트 · 앱 정보",
    description:
      "이용을 유도당한 사이트 주소, 앱 이름과 화면 캡처를 확보해 주세요. 사이트가 폐쇄되기 전에 저장하는 것이 중요합니다.",
  },
  {
    title: "경찰 신고 관련 서류 (있는 경우)",
    description:
      "이미 신고하셨다면 사건사고사실확인원, 접수증 등 관련 서류를 함께 준비해 주세요.",
  },
  {
    title: "지급정지 신청 내역 (있는 경우)",
    description:
      "은행에 지급정지를 요청하셨다면 신청 일시와 접수 결과를 알 수 있는 자료를 준비해 주세요.",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* 머리말 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <Breadcrumb
            items={[{ name: "홈", href: "/" }, { name: "상담안내" }]}
          />
          <h1 className="mt-4 text-3xl font-black sm:text-4xl">상담안내</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-navy-200">
            아직 자료가 다 정리되지 않았어도 괜찮습니다. 지금 가지고 계신
            것부터 함께 확인하면 됩니다.
          </p>
        </div>
      </section>

      {/* 상담 창구 */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            상담 창구
          </h2>
          <p className="mt-3 text-navy-700">
            전화와 카카오톡 상담 창구를 준비하고 있습니다. 창구가 열리는 대로
            이 페이지에서 바로 안내해 드리겠습니다.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div
              aria-disabled
              className="flex flex-col items-center rounded-xl border border-dashed border-navy-200 bg-navy-50 p-8 text-center"
            >
              <span className="text-3xl" aria-hidden>
                📞
              </span>
              <p className="mt-3 text-lg font-black text-navy-400">
                전화 상담
              </p>
              <p className="mt-1 text-sm font-bold text-gold-500">준비 중</p>
            </div>
            <div
              aria-disabled
              className="flex flex-col items-center rounded-xl border border-dashed border-navy-200 bg-navy-50 p-8 text-center"
            >
              <span className="text-3xl" aria-hidden>
                💬
              </span>
              <p className="mt-3 text-lg font-black text-navy-400">
                카카오톡 상담
              </p>
              <p className="mt-1 text-sm font-bold text-gold-500">준비 중</p>
            </div>
          </div>
        </div>
      </section>

      {/* 체크리스트 */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            상담 전 준비하면 좋은 자료 체크리스트
          </h2>
          <p className="mt-3 text-navy-700">
            아래 자료가 갖춰질수록 첫 상담에서 더 구체적인 방향을 잡을 수
            있습니다. 없는 항목이 있어도 상담은 가능합니다.
          </p>
          <ul className="mt-8 space-y-4">
            {CHECKLIST.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl border border-navy-100 bg-white p-5 sm:p-6"
              >
                <span
                  aria-hidden
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-gold-500 text-sm font-black text-gold-500"
                >
                  ✓
                </span>
                <div>
                  <h3 className="font-black text-navy-950">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-700">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            오시는 길
          </h2>
          <p className="mt-3 font-medium text-navy-800">
            서울 서초구 서초동 1624-21
          </p>
          {/* 지도 자리 — 추후 지도 API 연동 */}
          <div className="mt-6 flex h-72 items-center justify-center rounded-xl border border-dashed border-navy-200 bg-navy-50">
            <p className="text-sm text-navy-400">지도 준비 중</p>
          </div>
        </div>
      </section>
    </main>
  );
}
