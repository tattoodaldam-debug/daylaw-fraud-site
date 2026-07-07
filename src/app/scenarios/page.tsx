import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "상황별 대응 시나리오 · 금융사기 대처 절차 예시",
  description:
    "리딩방 출금 거부, 보이스피싱 이체 직후, 코인 출금 정지 — 대표적인 금융사기 상황 3가지를 가상의 예시로 들어 단계별 대응 절차와 쟁점을 설명합니다.",
  alternates: { canonical: "/scenarios/" },
};

const FICTION_NOTICE =
  "아래는 이해를 돕기 위한 가상의 예시이며, 실제 사건이나 결과가 아닙니다.";

type Scenario = {
  id: string;
  label: string;
  title: string;
  /** 가상 상황 설명 */
  situation: string[];
  steps: { title: string; description: string }[];
  /** 이 시나리오의 법적 쟁점 */
  issues: string;
  related: { label: string; href: string }[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "leading-room-refund",
    label: "시나리오 1",
    title: "리딩방에서 출금(환불)을 거부당한 상황",
    situation: [
      "A씨는 SNS 광고로 알게 된 주식 단체방에서 '코치'의 추천에 따라 사설 거래 앱에 3천만 원을 입금했습니다. 앱 화면에는 수익이 표시됐지만, 출금을 신청하자 '수익의 20%를 세금으로 먼저 입금해야 출금된다'는 답이 돌아왔습니다.",
    ],
    steps: [
      {
        title: "추가 입금을 멈춥니다",
        description:
          "세금·수수료 명목의 입금 요구는 대표적인 추가 편취 수법으로 보고 응하지 않는 것이 원칙입니다. 이 요구 메시지 자체가 이후 중요한 증거가 됩니다.",
      },
      {
        title: "기록을 통째로 보존합니다",
        description:
          "단체방 대화 전체, 코치 프로필, 앱의 잔고·출금 거절 화면, 이체 내역을 캡처합니다. 방에서 나가거나 앱을 지우면 확보가 어려워지므로 삭제하지 않습니다.",
      },
      {
        title: "경찰 신고와 지급정지 가능성을 확인합니다",
        description:
          "피해를 접수하고, 입금했던 계좌에 대한 지급정지가 가능한 사안인지 확인합니다. 유형에 따라 적용 여부가 달라 법률 검토가 함께 필요합니다.",
      },
      {
        title: "고소장을 구성합니다",
        description:
          "사기죄를 중심으로, 무인가 영업 등 자본시장법 위반이 함께 문제되는지 검토해 범행 구조를 정리한 고소장을 제출합니다. 같은 방의 다른 피해자가 확인되면 공동 대응을 검토합니다.",
      },
      {
        title: "회수 경로를 별도로 설계합니다",
        description:
          "수사와 별개로, 계좌 명의자 등 국내에서 특정되는 관련자를 상대로 한 손해배상 청구와 가압류 등 보전처분의 실익을 검토합니다.",
      },
    ],
    issues:
      "이 유형의 쟁점은 '출금 조건부 추가 입금 요구'로 드러나는 편취의사의 입증과, 해외에 있는 총책 대신 국내 연결고리(계좌 명의자·관리책)를 얼마나 특정할 수 있는지입니다.",
    related: [
      { label: "리딩방 사기 대응 안내", href: "/fraud/stock-leading-room" },
      { label: "피해금 회수 절차", href: "/victim/recovery" },
    ],
  },
  {
    id: "voice-phishing-just-sent",
    label: "시나리오 2",
    title: "보이스피싱으로 방금 돈을 이체한 상황",
    situation: [
      "B씨는 '계좌가 범죄에 연루됐다'는 검찰 사칭 전화에 속아 안내받은 계좌로 2천만 원을 이체했습니다. 전화를 끊고 30분쯤 지나 가족과 통화하다가 이상하다는 것을 깨달았습니다.",
    ],
    steps: [
      {
        title: "즉시 112 또는 은행에 지급정지를 요청합니다",
        description:
          "이체 내역을 보면서 돈을 받은 계좌의 지급정지를 전화로 요청합니다. 인출되기 전에 계좌를 묶는 것이 이 단계의 전부이자 핵심입니다.",
      },
      {
        title: "경찰서에서 피해를 접수합니다",
        description:
          "신고 후 '사건사고사실확인원'을 발급받습니다. 다음 단계의 필수 서류입니다.",
      },
      {
        title: "3영업일 안에 피해구제 신청서를 냅니다",
        description:
          "전화로 요청한 지급정지는 임시 조치이므로, 기한 내 서면 신청서를 은행에 제출해 지급정지를 유지시킵니다.",
      },
      {
        title: "증거를 보존하고 추가 피해를 차단합니다",
        description:
          "통화 기록과 문자를 남겨두고, 개인정보를 알려줬다면 명의도용 방지 조치로 추가 개설·대출을 막습니다.",
      },
      {
        title: "환급 절차와 남은 피해의 대응을 나눠 진행합니다",
        description:
          "환급법 절차는 계좌에 남아 있던 금액을 대상으로 진행되고, 이미 인출된 부분은 형사 절차 경과를 보며 계좌 명의자 등에 대한 민사 청구를 별도로 검토합니다.",
      },
    ],
    issues:
      "이 유형의 쟁점은 환급 절차가 '지급정지 시점에 계좌에 남아 있던 돈'까지만 해결해 준다는 한계와, 계좌 명의자가 이의제기를 하는 경우의 다툼입니다. 그래서 초기 몇 시간의 속도와 이후 절차의 병행 설계가 함께 중요합니다.",
    related: [
      { label: "보이스피싱 대응 안내", href: "/fraud/voice-phishing" },
      { label: "고소대리 절차", href: "/victim/complaint" },
    ],
  },
  {
    id: "coin-withdrawal-freeze",
    label: "시나리오 3",
    title: "코인 예치 후 출금이 정지된 상황",
    situation: [
      "C씨는 지인의 소개로 '월 3% 배당'을 약속하는 코인 예치 서비스에 5천만 원을 넣고 몇 달간 배당을 받았습니다. 어느 날 '시스템 점검으로 출금이 일시 중단된다'는 공지가 올라온 뒤, 재투자하면 우선 출금해 주겠다는 안내만 반복되고 있습니다.",
    ],
    steps: [
      {
        title: "재투자 권유에 응하지 않습니다",
        description:
          "'재투자하면 우선 출금'류의 안내는 지급 여력이 무너졌다는 신호로 보고, 추가 자금 투입을 멈추는 것이 먼저입니다.",
      },
      {
        title: "공지와 거래 기록을 시간순으로 보존합니다",
        description:
          "출금 중단 공지, 앱 잔고 화면, 입금·배당 수령 내역, 권유 당시의 '원금 보장' 자료를 모두 확보합니다. 서비스가 닫히면 다시 구할 수 없는 자료들입니다.",
      },
      {
        title: "다른 피해자와 피해 규모를 확인합니다",
        description:
          "같은 서비스의 다른 투자자들을 확인해 피해 규모를 파악합니다. 규모가 드러날수록 수사의 우선순위가 올라갑니다.",
      },
      {
        title: "죄명을 조합해 고소합니다",
        description:
          "원금 보장 약속만으로 성립할 수 있는 유사수신행위법 위반을 기본으로, 돌려막기 정황에 따라 사기죄 병행을 검토해 고소장을 구성하고, 운영진 재산에 대한 동결 조치를 함께 챙깁니다.",
      },
      {
        title: "회수 절차에 대비해 내역을 정리합니다",
        description:
          "받았던 배당은 실피해액 계산에서 정리가 필요하므로 수령 내역을 정확히 기록해 두고, 민사 청구와 업체 회생·파산 절차 참여 가능성을 함께 검토합니다.",
      },
    ],
    issues:
      "이 유형의 쟁점은 신규 투자금으로 배당을 돌려막는 구조였는지의 입증과, 이미 받은 배당을 피해액에서 어떻게 정리할지입니다. 지급 중단 이후의 시간은 운영진 재산이 처분되는 시간이기도 해서, 보전 조치의 타이밍이 중요합니다.",
    related: [
      { label: "코인 사기 대응 안내", href: "/fraud/crypto-fraud" },
      { label: "유사수신·다단계 안내", href: "/fraud/illegal-fundraising" },
      { label: "민사소송 안내", href: "/victim/civil-lawsuit" },
    ],
  },
];

export default function ScenariosPage() {
  return (
    <main>
      {/* 머리말 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <Breadcrumb
            items={[
              { name: "홈", href: "/" },
              { name: "상황별 대응 시나리오" },
            ]}
          />
          <h1 className="mt-4 text-3xl font-black sm:text-4xl">
            상황별 대응 시나리오
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-navy-200">
            대표적인 금융사기 상황 3가지를 가상의 예시로 들어, 어떤 절차로
            대응하게 되는지 단계별로 설명합니다. 실제 대응은 사실관계에 따라
            달라지므로, 내 상황과 비슷한 시나리오를 큰 그림을 잡는 용도로
            활용해 주세요.
          </p>
          <p className="mt-4 text-sm text-navy-300">
            본 페이지의 시나리오는 모두 가상의 예시입니다 · 변호사 검수 전
            초안
          </p>
          <nav className="mt-8 flex flex-wrap gap-2">
            {SCENARIOS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-navy-600 px-4 py-2 text-sm font-bold text-navy-100 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                {s.label}. {s.title.replace(/ 상황$/, "")}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* 시나리오 본문 */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl space-y-14 px-4 py-14 sm:px-6 sm:py-20">
          {SCENARIOS.map((scenario) => (
            <article
              key={scenario.id}
              id={scenario.id}
              className="scroll-mt-24 rounded-2xl border border-navy-100 bg-white p-6 sm:p-9"
            >
              <p className="text-sm font-bold tracking-widest text-gold-700">
                {scenario.label}
              </p>
              <h2 className="mt-2 text-2xl font-black text-navy-950 sm:text-3xl">
                {scenario.title}
              </h2>

              {/* 필수 고지 */}
              <p className="mt-5 rounded-lg border border-gold-400 bg-gold-300/15 px-4 py-3 text-sm font-bold text-navy-800">
                {FICTION_NOTICE}
              </p>

              <div className="mt-5 space-y-3">
                {scenario.situation.map((p, i) => (
                  <p key={i} className="leading-relaxed text-navy-800">
                    {p}
                  </p>
                ))}
              </div>

              <h3 className="mt-8 text-lg font-black text-navy-950">
                이런 상황에서는 이런 절차로 대응합니다
              </h3>
              <ol className="mt-4 space-y-3">
                {scenario.steps.map((step, i) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-xl border border-navy-100 bg-navy-50 p-5"
                  >
                    <span className="text-xl font-black text-gold-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-black text-navy-950">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-navy-700">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 rounded-xl border border-navy-100 bg-navy-50 p-5">
                <h3 className="text-sm font-bold tracking-widest text-navy-500">
                  이 시나리오의 쟁점
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800">
                  {scenario.issues}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {scenario.related.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1 rounded-full border border-navy-200 px-4 py-2 text-sm font-bold text-navy-900 transition-colors hover:border-navy-400 hover:bg-white"
                  >
                    {link.label}
                    <span aria-hidden className="text-gold-700">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="text-2xl font-black sm:text-3xl">
            내 상황은 시나리오와 다르더라도 괜찮습니다
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-200">
            실제 사건은 여러 유형이 섞여 있는 경우가 많습니다. 지금 상황을
            기준으로 필요한 절차를 함께 정리해 드립니다.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-gold-500 px-8 py-4 text-base font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              상담 안내 보기
            </Link>
            <Link
              href="/fraud"
              className="rounded-md border border-navy-600 px-8 py-4 text-base font-bold text-navy-100 transition-colors hover:border-navy-400 hover:bg-navy-900"
            >
              사건유형별 안내 보기
            </Link>
          </div>
        </div>
      </section>

      <Disclaimer />
    </main>
  );
}
