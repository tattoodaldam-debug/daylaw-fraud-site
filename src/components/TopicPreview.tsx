import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export type RelatedLink = { label: string; href: string };

export default function TopicPreview({
  category,
  title,
  intro,
  related,
}: {
  category: string;
  title: string;
  intro: string[];
  related: RelatedLink[];
}) {
  return (
    <main>
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-bold tracking-widest text-gold-400">
            {category}
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">{title}</h1>
          <div className="mt-6 max-w-2xl space-y-4">
            {intro.map((p, i) => (
              <p key={i} className="leading-relaxed text-navy-200">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="rounded-xl border border-dashed border-navy-200 bg-white p-6 text-center sm:p-8">
            <p className="font-black text-navy-950">
              상세 안내 페이지를 준비하고 있습니다
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy-700">
              이 분야의 대응 절차와 자주 묻는 질문을 변호사 검수를 거쳐 곧
              게시할 예정입니다. 급한 사안이라면 준비 중인 페이지를 기다리지
              마시고 상담 안내를 먼저 확인해 주세요.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-md bg-navy-900 px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-navy-800"
            >
              상담 안내 보기
            </Link>
          </div>

          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="text-lg font-black text-navy-950">
                지금 확인할 수 있는 관련 안내
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between rounded-lg border border-navy-100 bg-white px-5 py-4 text-sm font-bold text-navy-900 transition-colors hover:border-navy-400"
                    >
                      {link.label}
                      <span aria-hidden className="text-gold-500">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <Disclaimer />
    </main>
  );
}
