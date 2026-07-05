import type { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";
import { FAQ_CATEGORIES } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "금융사기 피해 자주 묻는 질문 20가지",
  description:
    "보이스피싱 지급정지·환급, 리딩방 사기 고소, 코인 사기 대응까지 — 금융사기 피해자가 가장 많이 묻는 질문 20가지에 답합니다.",
  alternates: { canonical: "/faq" },
};

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };
}

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />

      {/* 머리말 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-bold tracking-widest text-gold-400">FAQ</p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            자주 묻는 질문
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-navy-200">
            금융사기 피해자분들이 가장 많이 물어보시는 질문을 모았습니다.
            여기에 없는 궁금증은 상담에서 편하게 물어보세요.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2">
            {FAQ_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-navy-600 px-4 py-2 text-sm font-bold text-navy-100 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                {category.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* 카테고리별 질문 */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="space-y-14">
            {FAQ_CATEGORIES.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <h2 className="text-xl font-black text-navy-950 sm:text-2xl">
                  {category.name}
                </h2>
                <div className="mt-5 space-y-3">
                  {category.items.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-xl border border-navy-100 bg-white p-5 open:shadow-sm"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-navy-950">
                        <span>Q. {item.question}</span>
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
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 유도 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="text-2xl font-black sm:text-3xl">
            내 상황에 맞는 답이 필요하다면
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-200">
            같은 질문이라도 사실관계에 따라 답이 달라집니다. 상담에서 내
            사건을 기준으로 확인해 보세요.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-md bg-gold-500 px-8 py-4 text-base font-bold text-navy-950 transition-colors hover:bg-gold-400"
          >
            상담 안내 보기
          </Link>
        </div>
      </section>

      <Disclaimer />
    </main>
  );
}
