import type { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";
import { COLUMNS } from "@/lib/columns";

export const metadata: Metadata = {
  title: "금융사기 대응 법률 칼럼",
  description:
    "보이스피싱 대처법, 리딩방 사기 대응, 코인 유사수신 피해 회복 등 금융사기 피해자에게 필요한 법률 정보를 칼럼으로 정리합니다.",
  alternates: { canonical: "/column" },
};

export default function ColumnListPage() {
  return (
    <main>
      {/* 머리말 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-bold tracking-widest text-gold-400">
            COLUMN
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">칼럼</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-navy-200">
            피해자분들이 실제로 부딪히는 순서대로, 꼭 알아야 할 내용을
            정리합니다.
          </p>
        </div>
      </section>

      {/* 칼럼 목록 */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="space-y-5">
            {COLUMNS.map((column) => (
              <article
                key={column.slug}
                className="rounded-xl border border-navy-100 bg-white p-6 transition-shadow hover:shadow-md sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full bg-navy-900 px-3 py-1 font-bold text-white">
                    {column.category}
                  </span>
                  <time dateTime={column.date} className="text-navy-400">
                    {column.date.replaceAll("-", ".")}
                  </time>
                  <span className="rounded bg-gold-300/40 px-1.5 py-0.5 font-bold text-navy-800">
                    변호사 검수 전 초안
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-black text-navy-950 sm:text-2xl">
                  <Link
                    href={`/column/${column.slug}`}
                    className="hover:text-navy-600"
                  >
                    {column.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-relaxed text-navy-700">
                  {column.description}
                </p>
                <Link
                  href={`/column/${column.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-navy-900 hover:text-navy-600"
                >
                  읽어보기
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-navy-500">
            새 칼럼은 변호사 검수를 거쳐 순차적으로 게시됩니다.
          </p>
        </div>
      </section>

      <Disclaimer />
    </main>
  );
}
