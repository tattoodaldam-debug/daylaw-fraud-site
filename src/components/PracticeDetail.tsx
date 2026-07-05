import Link from "next/link";
import type { Practice } from "@/lib/practices";
import Disclaimer from "@/components/Disclaimer";

export default function PracticeDetail({ practice }: { practice: Practice }) {
  return (
    <main>
      {/* 페이지 머리말 + 핵심 요약 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-bold tracking-widest text-gold-400">
            업무분야
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            {practice.title}
          </h1>
          <p className="mt-4 text-lg text-navy-200">{practice.tagline}</p>

          <div className="mt-10 rounded-xl border border-navy-700 bg-navy-900 p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-widest text-gold-400">
              핵심 요약 3줄
            </h2>
            <ul className="mt-4 space-y-3">
              {practice.summary.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-xs font-black text-navy-950"
                  >
                    {i + 1}
                  </span>
                  <p className="leading-relaxed text-navy-100">{line}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 피해 유형 설명 */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            어떤 피해인가요?
          </h2>
          <div className="mt-5 space-y-4">
            {practice.descriptionParagraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-navy-800">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {practice.patterns.map((pattern) => (
              <div
                key={pattern.title}
                className="rounded-lg border border-navy-100 bg-navy-50 p-5"
              >
                <h3 className="font-black text-navy-950">{pattern.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 골든타임 */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            피해 직후, 골든타임에 해야 할 일
          </h2>
          <p className="mt-3 text-navy-700">
            아래 순서대로 하나씩 해나가시면 됩니다. 이미 지난 단계가 있어도
            괜찮습니다 — 지금 할 수 있는 것부터 시작하세요.
          </p>
          <ol className="mt-8 space-y-4">
            {practice.goldenTime.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-xl border border-navy-100 bg-white p-5 sm:p-6"
              >
                <span className="text-2xl font-black text-gold-500">
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

      {/* 법적 대응 절차 */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            법적 대응은 이렇게 진행합니다
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {practice.legalSteps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-xl border border-navy-100 bg-navy-50 p-6"
              >
                <span className="text-sm font-bold tracking-widest text-gold-500">
                  STEP {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-black text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 자주 하는 질문 */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            자주 하는 질문
          </h2>
          <div className="mt-8 space-y-3">
            {practice.faqs.map((faq) => (
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
                  <span className="mr-2 rounded bg-gold-300/40 px-1.5 py-0.5 text-xs font-bold text-navy-800">
                    변호사 검수 전 초안
                  </span>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 유도 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black sm:text-3xl">
            혼자 판단하기 어렵다면, 상황부터 정리해 드릴게요
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-navy-200">
            지금 가지고 계신 자료만으로도 대응 방향을 잡을 수 있는 경우가
            많습니다. 상담 창구가 준비되는 대로 이곳에서 안내해 드리겠습니다.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-gold-500 px-8 py-4 text-base font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              상담 안내 보기
            </Link>
            <Link
              href="/faq"
              className="rounded-md border border-navy-600 px-8 py-4 text-base font-bold text-navy-100 transition-colors hover:border-navy-400 hover:bg-navy-900"
            >
              자주 묻는 질문 보기
            </Link>
          </div>
        </div>
      </section>

      <Disclaimer />
    </main>
  );
}
