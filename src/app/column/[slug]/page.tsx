import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Disclaimer from "@/components/Disclaimer";
import { COLUMNS, getColumn } from "@/lib/columns";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return COLUMNS.map((column) => ({ slug: column.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const column = getColumn(slug);
  if (!column) return { title: "칼럼" };
  return {
    title: column.title,
    description: column.description,
    alternates: { canonical: `/column/${column.slug}/` },
    openGraph: {
      type: "article",
      title: column.title,
      description: column.description,
      publishedTime: column.date,
    },
  };
}

export default async function ColumnDetailPage({ params }: Props) {
  const { slug } = await params;
  const column = getColumn(slug);
  if (!column) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: column.title,
    description: column.description,
    datePublished: column.date,
    dateModified: column.dateModified,
    author: {
      "@type": "Person",
      name: "강민성",
      jobTitle: "변호사",
      worksFor: { "@type": "LegalService", name: SITE_NAME },
    },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/column/${column.slug}/`,
    inLanguage: "ko",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* 머리말 + 3줄 요약 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <Breadcrumb
            items={[
              { name: "홈", href: "/" },
              { name: "칼럼", href: "/column" },
              { name: column.title },
            ]}
          />
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-navy-800 px-3 py-1 font-bold text-navy-100">
              {column.category}
            </span>
            <time dateTime={column.date} className="text-navy-400">
              {column.date.replaceAll("-", ".")}
            </time>
            <span className="rounded bg-gold-300/30 px-1.5 py-0.5 font-bold text-gold-300">
              변호사 검수 전 초안
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-black leading-snug sm:text-4xl sm:leading-snug">
            {column.title}
          </h1>

          <div className="mt-9 rounded-xl border border-navy-700 bg-navy-900 p-6 sm:p-7">
            <h2 className="text-sm font-bold tracking-widest text-gold-400">
              3줄 요약
            </h2>
            <ul className="mt-4 space-y-3">
              {column.summary.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-xs font-black text-navy-950"
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-navy-100 sm:text-base">
                    {line}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 목차 + 본문 */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <nav
            aria-label="목차"
            className="rounded-xl border border-navy-100 bg-navy-50 p-6"
          >
            <h2 className="text-sm font-bold tracking-widest text-navy-500">
              목차
            </h2>
            <ol className="mt-3 space-y-2">
              {column.sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm font-medium text-navy-800 hover:text-navy-600 hover:underline"
                  >
                    {i + 1}. {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="mt-12 space-y-12">
            {column.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl font-black text-navy-950 sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed text-navy-800">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </article>

          {/* 검수 박스 */}
          <div className="mt-14 rounded-xl border border-navy-100 bg-navy-50 p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-black text-gold-400">
                檢
              </div>
              <div>
                <p className="font-black text-navy-950">
                  데이법률사무소 강민성 변호사 검수
                </p>
                <p className="mt-1 text-sm leading-relaxed text-navy-700">
                  이 칼럼은 데이법률사무소 강민성 변호사의 검수를 거쳐
                  게시되는 것을 원칙으로 합니다.{" "}
                  <span className="font-bold">
                    현재 이 글은 변호사 검수 전 초안입니다.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-navy-900 px-8 py-4 text-center text-base font-bold text-white transition-colors hover:bg-navy-800"
            >
              상담 안내 보기
            </Link>
            <Link
              href="/column"
              className="rounded-md border border-navy-200 px-8 py-4 text-center text-base font-bold text-navy-900 transition-colors hover:border-navy-400"
            >
              칼럼 목록으로
            </Link>
          </div>
        </div>
      </section>

      <Disclaimer />
    </main>
  );
}
