import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";
import type { VictimTopic } from "@/lib/victimTopics";

export default function VictimDetail({ topic }: { topic: VictimTopic }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 머리말 + 요약 3줄 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-bold tracking-widest text-gold-400">
            피해자 대응
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            {topic.title}
          </h1>
          <p className="mt-4 text-lg text-navy-200">{topic.tagline}</p>

          <div className="mt-10 rounded-xl border border-navy-700 bg-navy-900 p-6 sm:p-8">
            <h2 className="text-sm font-bold tracking-widest text-gold-400">
              핵심 요약 3줄
            </h2>
            <ul className="mt-4 space-y-3">
              {topic.summary.map((line, i) => (
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

      {/* 본문 섹션 */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="space-y-12">
            {topic.sections.map((section) => (
              <div
                key={section.heading}
                className={
                  section.highlight
                    ? "rounded-2xl border-2 border-gold-400 bg-gold-300/10 p-6 sm:p-9"
                    : ""
                }
              >
                <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed text-navy-800">
                      {p}
                    </p>
                  ))}
                </div>
                {section.items && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {section.items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-navy-100 bg-navy-50 p-5"
                      >
                        <h3 className="font-black text-navy-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-navy-700">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 필수 주의 문구 */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl px-4 pb-4 sm:px-6">
          <div className="flex gap-4 rounded-xl border border-navy-200 bg-white p-6">
            <span aria-hidden className="text-xl">
              ⚠️
            </span>
            <p className="text-sm leading-relaxed text-navy-800">
              <span className="font-bold text-navy-950">
                회수 가능성에 대한 안내:{" "}
              </span>
              {topic.caution}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            {topic.shortTitle} 관련 자주 하는 질문
          </h2>
          <div className="mt-8 space-y-3">
            {topic.faqs.map((faq) => (
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

      {/* 관련 안내 + CTA */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-center text-2xl font-black sm:text-3xl">
            다음 단계를 함께 정리해 드릴게요
          </h2>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {topic.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex h-full items-center justify-between gap-2 rounded-lg border border-navy-700 bg-navy-900 px-5 py-4 text-sm font-bold text-navy-100 transition-colors hover:border-navy-400"
                >
                  {link.label}
                  <span aria-hidden className="text-gold-400">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-gold-500 px-8 py-4 text-base font-bold text-navy-950 transition-colors hover:bg-gold-400"
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
