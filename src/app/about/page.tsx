import type { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "사무소·변호사 소개 | 데이법률사무소",
  description:
    "금융사기 피해 회복에 집중하는 데이법률사무소와 대표 변호사 강민성을 소개합니다.",
};

const PRINCIPLES = [
  {
    title: "피해자 대리에 집중합니다",
    description:
      "보이스피싱, 리딩방·투자사기, 코인·유사수신 피해자의 회복 절차를 주력 분야로 다룹니다.",
  },
  {
    title: "실제 사례만 말합니다",
    description:
      "성공사례는 사무소가 실제로 수행한 사건만 게시하며, 과장된 표현을 쓰지 않습니다.",
  },
  {
    title: "변호사가 직접 검수합니다",
    description:
      "사이트의 모든 법률 콘텐츠는 게시 전 변호사 검수를 거치는 것을 원칙으로 합니다.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* 사무소 소개 */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-bold tracking-widest text-gold-400">
            ABOUT
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            데이법률사무소
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-navy-200">
            데이법률사무소는 금융사기 피해자의 곁에서 피해 회복의 전 과정을
            함께하는 법률사무소입니다. 갑작스러운 피해로 막막한 순간에, 지금
            할 수 있는 일부터 차분하게 정리해 드립니다.
          </p>
        </div>
      </section>

      {/* 일하는 원칙 */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            일하는 원칙
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {PRINCIPLES.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-navy-100 bg-navy-50 p-6"
              >
                <h3 className="font-black text-navy-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 변호사 소개 */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:items-start">
            <div className="flex aspect-[4/5] max-w-xs items-center justify-center rounded-xl border border-navy-700 bg-navy-800">
              <p className="text-sm text-navy-400">프로필 사진 준비 중</p>
            </div>
            <div>
              <p className="text-sm font-bold tracking-widest text-gold-400">
                LAWYER
              </p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                대표 변호사 강민성
              </h2>
              <p className="mt-5 leading-relaxed text-navy-200">
                형사, 사기, 도산(회생·파산·채무조정), 교통사고, 손해배상
                사건을 두루 다루며, 금융사기 피해자의 실질적인 회복에
                집중하고 있습니다.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-navy-100">
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
                  SBS 모닝와이드 출연 (법률 전문가 패널)
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 text-gold-400">
                    —
                  </span>
                  주요 분야: 형사 · 사기 · 도산(회생/파산/채무조정) · 교통사고
                  · 손해배상
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 text-gold-400">
                    —
                  </span>
                  인스타그램 · 스레드 @strong_lawyer
                </li>
              </ul>
              <p className="mt-7 text-xs text-navy-400">
                상세 이력은 확인을 거쳐 순차적으로 업데이트됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 상담 유도 */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="text-2xl font-black text-navy-950 sm:text-3xl">
            어떤 사건인지부터 함께 확인해 보세요
          </h2>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/#practice"
              className="rounded-md bg-navy-900 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-navy-800"
            >
              업무분야 보기
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-navy-200 bg-white px-8 py-4 text-base font-bold text-navy-900 transition-colors hover:border-navy-400"
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
