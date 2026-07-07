import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Disclaimer from "@/components/Disclaimer";
import { PRACTICES } from "@/lib/practices";

export const metadata: Metadata = {
  title: "금융사기 사건유형 안내 · 피해자 대응 가이드",
  description:
    "보이스피싱·투자사기·리딩방·주식·코인·유사수신 등 금융사기 사건유형별 대응과 피해자가 가장 먼저 해야 할 일, 증거 정리 방법을 안내합니다.",
  alternates: { canonical: "/fraud/" },
};

/** 각 유형 카드의 '대표 상황' 한 줄 (피해자 언어 기준) */
const SITUATION: Record<string, string> = {
  "fraud-crime": "빌려준 돈을 갚지 않거나, 물건값만 받고 사라진 경우",
  "investment-fraud": "'확실한 투자처'라는 말만 믿고 넣었는데 연락이 끊긴 경우",
  "stock-leading-room": "단체방 전문가를 따라 투자했는데 출금이 막힌 경우",
  "stock-fraud": "공모주 배정·비상장 상장을 미끼로 청약금을 보낸 경우",
  "crypto-fraud": "상장·채굴 수익을 약속받았는데 코인이 출금되지 않는 경우",
  "voice-phishing": "기관·가족을 사칭한 전화·문자에 속아 돈을 보낸 경우",
  "illegal-fundraising": "원금 보장·고배당을 약속받고 맡겼는데 지급이 멈춘 경우",
};

const FIRST_STEPS = [
  {
    title: "추가 송금·입금을 멈추세요",
    description:
      "'출금하려면 세금을 내라', '재투자하면 복구된다'는 요구는 피해를 키우는 전형적인 수법입니다. 지금 멈추는 것이 가장 확실한 첫 대응입니다.",
  },
  {
    title: "증거부터 보존하세요",
    description:
      "대화방을 나가거나 앱을 지우면 기록이 사라집니다. 대화·이체 내역·계약서·광고 화면을 지우지 말고 그대로 보관하세요.",
  },
  {
    title: "신고와 지급정지를 요청하세요",
    description:
      "계좌로 이체한 경우 112 또는 은행 콜센터에 지급정지를 요청하고, 경찰에 피해를 신고하세요. 빠를수록 계좌에 남은 돈을 지킬 수 있습니다.",
  },
  {
    title: "방향을 함께 잡으세요",
    description:
      "자료가 다 정리되지 않았어도 괜찮습니다. 지금 가진 것만으로도 대응 방향을 세울 수 있는 경우가 많습니다.",
  },
];

const EVIDENCE_CATEGORIES = [
  {
    title: "상대방을 특정할 정보",
    description:
      "돈을 받은 계좌번호와 예금주, 전화번호, 카카오톡·텔레그램 아이디, 업체명 등 상대를 가리킬 수 있는 모든 정보.",
  },
  {
    title: "돈이 오간 기록",
    description:
      "이체·입금 내역과 (있다면) 지금까지 받은 수익·배당 내역. 날짜·금액·계좌를 시간순으로 정리해 두세요.",
  },
  {
    title: "속임을 보여주는 자료",
    description:
      "투자 권유 대화, 광고·홍보물, 계약서·각서, 수익 인증 화면 등 '무엇을 약속했는지'가 담긴 자료.",
  },
  {
    title: "사라지기 쉬운 화면",
    description:
      "가짜 거래소·앱의 잔고 화면, 출금 거절 메시지, 사이트 주소. 서비스가 닫히면 다시 확보하기 어렵습니다.",
  },
];

const HUB_FAQS = [
  {
    question: "내 사건이 어떤 유형에 해당하는지 잘 모르겠습니다.",
    answer:
      "정확히 분류하지 못하셔도 괜찮습니다. 여러 수법이 섞인 사건도 많아, 실제로는 상담에서 사실관계를 듣고 함께 유형을 정리합니다. 우선 가까워 보이는 유형의 페이지를 보시고, 애매하면 사기죄 일반 페이지부터 참고하세요.",
  },
  {
    question: "피해금을 돌려받을 수 있을까요?",
    answer:
      "회수 가능성은 상대방의 재산 상태, 확보된 증거, 수사 진행 상황에 따라 달라져 미리 확정해 말씀드리기 어렵습니다. 다만 지급정지·환급, 민사소송, 가압류 등 회수를 위한 여러 통로가 있으므로, 피해금 회수 안내에서 방법을 확인해 보세요.",
  },
  {
    question: "시간이 꽤 지났는데 지금 대응해도 늦지 않았나요?",
    answer:
      "늦었다고 단정하지 마세요. 사기죄의 공소시효와 민사상 청구권의 소멸시효가 남아 있는 경우가 많습니다. 다만 증거 확보와 재산 보전은 빠를수록 유리하므로, 확인만이라도 서두르시길 권합니다.",
  },
  {
    question: "증거가 부족한 것 같은데 상담해도 되나요?",
    answer:
      "지금 남아 있는 것만 가지고 오셔도 됩니다. 상담에서 무엇이 더 필요한지, 어떻게 확보할 수 있는지부터 함께 정리합니다.",
  },
];

export default function FraudHubPage() {
  return (
    <main>
      {/* 머리말 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <Breadcrumb
            items={[{ name: "홈", href: "/" }, { name: "금융사기 유형" }]}
          />
          <h1 className="mt-4 text-3xl font-black sm:text-4xl">
            내 사건은 어떤 유형인가요?
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-navy-200">
            금융사기는 유형마다 대응 방법이 다릅니다. 아래에서 내 상황과 가장
            가까운 유형을 찾아, 그 유형의 대응 절차를 확인해 보세요.
          </p>
        </div>
      </section>

      {/* 피해자가 가장 먼저 해야 할 일 */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            피해자가 가장 먼저 해야 할 일
          </h2>
          <p className="mt-3 max-w-2xl text-navy-700">
            유형과 관계없이 공통으로 적용되는 순서입니다. 이미 지난 단계가 있어도
            괜찮으니 지금 할 수 있는 것부터 시작하세요.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {FIRST_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-xl border border-navy-100 bg-white p-5 sm:p-6"
              >
                <span className="text-2xl font-black text-gold-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-black text-navy-950">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-700">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7개 유형 카드 */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            사건유형별 안내
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICES.map((p) => (
              <Link
                key={p.slug}
                href={`/fraud/${p.slug}`}
                className="group flex flex-col rounded-xl border border-navy-100 bg-navy-50 p-6 transition-colors hover:border-navy-400 hover:bg-white"
              >
                <h3 className="text-lg font-black text-navy-950">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
                  {SITUATION[p.slug]}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-navy-900 group-hover:text-navy-600">
                  자세히 보기
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 증거 자료 개요 (홈 카드에서 연결되는 앵커) */}
      <section id="evidence" className="scroll-mt-20 bg-navy-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-bold tracking-widest text-gold-400">
            EVIDENCE
          </p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            증거 자료, 무엇부터 모아야 하나요
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-navy-200">
            어떤 사기든 회복의 출발점은 증거입니다. 아래 네 갈래로 나눠 지금 가진
            것부터 정리해 보세요. 유형별 구체적인 목록은 각 사건유형 페이지의
            체크리스트에서 확인할 수 있습니다.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {EVIDENCE_CATEGORIES.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-navy-700 bg-navy-800 p-5 sm:p-6"
              >
                <h3 className="font-black text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy-300">
            자료가 일부만 있어도 대응은 시작할 수 있습니다. 삭제하지 말고 그대로
            보관해 주세요.
          </p>
        </div>
      </section>

      {/* 대표 FAQ */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            대표 질문
          </h2>
          <div className="mt-8 space-y-3">
            {HUB_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-navy-100 bg-white p-5 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-navy-950">
                  <span>Q. {faq.question}</span>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-navy-400 transition-transform group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <p className="mt-4 border-t border-navy-100 pt-4 text-sm leading-relaxed text-navy-800">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy-500">
            더 많은 질문은{" "}
            <Link href="/faq" className="font-bold text-navy-900 underline">
              자주 묻는 질문
            </Link>
            에서 확인하세요.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black sm:text-3xl">
            유형이 정리됐다면, 다음은 회복입니다
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/victim/recovery"
              className="rounded-md bg-gold-500 px-8 py-4 text-base font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              피해금 회수 안내
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-navy-600 px-8 py-4 text-base font-bold text-navy-100 transition-colors hover:border-navy-400 hover:bg-navy-900"
            >
              상담 안내 보기
            </Link>
          </div>
        </div>
      </section>

      <Disclaimer />
    </main>
  );
}
