import Link from "next/link";

const PRACTICE_AREAS = [
  {
    href: "/fraud/voice-phishing",
    title: "보이스피싱 피해 회복",
    description:
      "전화·문자로 기관이나 가족을 사칭해 돈을 가로채는 범죄입니다. 시간이 지날수록 자금 추적이 어려워지므로 빠른 대응이 중요합니다.",
    points: ["계좌 지급정지 신청 대응", "형사 고소 및 수사 협조", "피해금 환급 절차 대리"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
  },
  {
    href: "/fraud/stock-leading-room",
    title: "리딩방 · 투자사기",
    description:
      "고수익을 약속하며 접근하는 주식·선물 리딩방, 가짜 투자 플랫폼 사기입니다. 대화 기록과 입금 내역이 남아 있다면 지금이 대응할 때입니다.",
    points: ["증거 확보 및 법리 검토", "형사 고소·고발 진행", "민사상 손해배상 청구"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
      />
    ),
  },
  {
    href: "/fraud/crypto-fraud",
    title: "코인 · 유사수신",
    description:
      "가상자산 상장, 원금 보장 등을 내세워 투자금을 모으는 유사수신 범죄입니다. 구조가 복잡할수록 법률 전문가의 분석이 필요합니다.",
    points: ["거래 구조 · 자금 흐름 분석", "유사수신행위 규제 법리 대응", "집단 피해 사건 대응"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
      />
    ),
  },
];

const SITUATION_CARDS = [
  {
    title: "투자금·피해금을 돌려받고 싶습니다",
    hint: "회수 절차부터 확인하기",
    href: "/victim/recovery",
  },
  {
    title: "사기죄로 고소하고 싶습니다",
    hint: "고소대리 절차 안내",
    href: "/victim/complaint",
  },
  {
    title: "어떤 증거를 모아야 할지 모르겠습니다",
    hint: "증거 정리 가이드로 이동",
    href: "/fraud#evidence",
  },
  {
    title: "내 사건이 사기죄가 되는지 궁금합니다",
    hint: "사기죄 성립요건 확인",
    href: "/fraud/fraud-crime",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "상담 및 사건 파악",
    description:
      "피해 경위를 차분히 듣고 사건의 성격과 대응 방향을 함께 정리합니다. 어떤 이야기든 비밀로 지켜집니다.",
  },
  {
    step: "02",
    title: "증거 수집 · 분석",
    description:
      "대화 기록, 입금 내역, 계좌 정보 등 흩어진 자료를 법적 증거로 정리하고 자금 흐름을 분석합니다.",
  },
  {
    step: "03",
    title: "법적 조치 착수",
    description:
      "지급정지, 형사 고소, 민사 소송 등 사건에 맞는 절차를 선택해 신속하게 진행합니다.",
  },
  {
    step: "04",
    title: "피해 회복 절차",
    description:
      "수사와 재판 경과를 지켜보며 피해금 환급·배상 절차를 끝까지 대리하고, 진행 상황을 투명하게 알려드립니다.",
  },
];

export default function Home() {
  return (
    <main>
      {/* 히어로 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-bold tracking-widest text-gold-400">
            보이스피싱 · 리딩방 투자사기 · 코인 유사수신
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-black leading-snug sm:text-5xl sm:leading-snug">
            지금 이 밤,
            <br />
            혼자 감당하지 않으셔도 됩니다.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
            금융사기는 누구에게나 일어날 수 있는 범죄이며, 피해를 입은 것은
            당신의 잘못이 아닙니다. 데이법률사무소는 피해 회복의 첫걸음부터
            마지막 절차까지 곁에서 함께합니다.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-gold-500 px-8 py-4 text-center text-base font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              상담 안내 보기
            </Link>
            <Link
              href="/fraud"
              className="rounded-md border border-navy-600 px-8 py-4 text-center text-base font-bold text-navy-100 transition-colors hover:border-navy-400 hover:bg-navy-900"
            >
              업무분야 살펴보기
            </Link>
          </div>
          <p className="mt-6 text-sm text-navy-400">
            전화 · 온라인 상담 창구는 현재 준비 중입니다.
          </p>
        </div>
      </section>

      {/* 현재 상황 분기 — 피해자 동선 */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            현재 어떤 상황이신가요?
          </h2>
          <p className="mt-3 text-navy-700">
            지금 가장 가까운 상황을 고르면, 필요한 안내로 바로 이동합니다.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {SITUATION_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex items-center justify-between gap-4 rounded-xl border border-navy-100 bg-navy-50 p-6 transition-colors hover:border-navy-400 hover:bg-white"
              >
                <div>
                  <p className="text-base font-black text-navy-950 sm:text-lg">
                    {card.title}
                  </p>
                  <p className="mt-1 text-sm text-navy-600">{card.hint}</p>
                </div>
                <span
                  aria-hidden
                  className="shrink-0 text-xl text-gold-500 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy-600">
            상황별로 어떤 절차를 밟게 되는지 궁금하다면{" "}
            <Link
              href="/scenarios"
              className="font-bold text-navy-900 underline hover:text-navy-600"
            >
              상황별 대응 시나리오
            </Link>
            를 참고하세요.
          </p>
        </div>
      </section>

      {/* 주력 분야 */}
      <section id="practice" className="scroll-mt-16 bg-navy-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-bold tracking-widest text-gold-500">
            PRACTICE AREAS
          </p>
          <h2 className="mt-2 text-2xl font-black text-navy-950 sm:text-4xl">
            주력 업무분야
          </h2>
          <p className="mt-4 max-w-2xl text-navy-700">
            데이법률사무소는 금융사기 피해자 대리에 집중합니다. 유형별로 대응
            방법이 다르므로, 내 사건이 어디에 해당하는지부터 확인해 보세요.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PRACTICE_AREAS.map((area) => (
              <article
                key={area.title}
                className="flex flex-col rounded-xl border border-navy-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                  <svg
                    aria-hidden
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {area.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-black text-navy-950">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  {area.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-navy-100 pt-5">
                  {area.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-navy-800"
                    >
                      <span aria-hidden className="mt-0.5 text-gold-500">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={area.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-navy-900 hover:text-navy-600"
                >
                  자세히 보기
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-navy-100 bg-white p-5 sm:p-6">
            <p className="text-sm font-bold text-navy-500">
              그 밖의 사건유형
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { label: "사기죄 일반", href: "/fraud/fraud-crime" },
                { label: "투자사기", href: "/fraud/investment-fraud" },
                { label: "주식·공모주 사기", href: "/fraud/stock-fraud" },
                {
                  label: "유사수신·다단계",
                  href: "/fraud/illegal-fundraising",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-navy-200 px-4 py-2 text-sm font-bold text-navy-800 transition-colors hover:border-navy-400 hover:bg-navy-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 진행 절차 */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-bold tracking-widest text-gold-500">
            PROCESS
          </p>
          <h2 className="mt-2 text-2xl font-black text-navy-950 sm:text-4xl">
            사건은 이렇게 진행됩니다
          </h2>
          <p className="mt-4 max-w-2xl text-navy-700">
            처음 겪는 일이라 막막한 것이 당연합니다. 전체 과정을 미리 알면
            불안이 줄어듭니다.
          </p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <li
                key={item.step}
                className="rounded-xl border border-navy-100 bg-navy-50 p-6"
              >
                <span className="text-3xl font-black text-gold-500">
                  {item.step}
                </span>
                <h3 className="mt-3 text-base font-black text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 변호사 소개 */}
      <section id="lawyer" className="scroll-mt-16 bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            {/* 사진 자리 (추후 실제 프로필 사진으로 교체) */}
            <div className="flex aspect-[4/5] max-w-sm items-center justify-center rounded-xl border border-navy-700 bg-navy-800">
              <p className="text-sm text-navy-400">프로필 사진 준비 중</p>
            </div>
            <div>
              <p className="text-sm font-bold tracking-widest text-gold-400">
                LAWYER
              </p>
              <h2 className="mt-2 text-2xl font-black sm:text-4xl">
                대표 변호사 강민성
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-navy-200">
                금융사기, 형사, 도산(회생·파산·채무조정) 사건을 중점적으로
                다루며 금융사기 피해자의 곁에서 실질적인 회복을 돕고 있습니다.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-navy-100">
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 text-gold-400">
                    —
                  </span>
                  데이법률사무소 대표 변호사
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 text-gold-400">
                    —
                  </span>
                  금융사기 · 형사 · 도산 사건 중심 수행 (연간 1,000건 이상)
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 text-gold-400">
                    —
                  </span>
                  SBS 〈모닝와이드〉 법률 전문가 출연
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 text-gold-400">
                    —
                  </span>
                  공식 SNS(인스타그램 · 스레드) @strong_lawyer 운영
                </li>
              </ul>
              <Link
                href="/attorneys"
                className="mt-8 inline-flex items-center gap-1 text-sm font-bold text-gold-400 hover:text-gold-300"
              >
                사무소 · 변호사 소개 더 보기
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 마무리 CTA */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            늦은 시간이어도 괜찮습니다
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-700">
            지금 상황을 정리해 두는 것만으로도 대응의 첫걸음이 됩니다. 상담
            창구가 열리는 대로 이곳에서 안내해 드리겠습니다.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-navy-900 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-navy-800"
          >
            상담 안내 보기
          </Link>
        </div>
      </section>
    </main>
  );
}
