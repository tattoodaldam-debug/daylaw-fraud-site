"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "업무분야", href: "/#practice" },
  { label: "변호사 소개", href: "/about" },
  { label: "자주 묻는 질문", href: "/faq" },
  { label: "칼럼", href: "/column" },
  { label: "상담안내", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-800 bg-navy-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-baseline gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="text-lg font-black tracking-tight text-white">
            데이법률사무소
          </span>
          <span className="hidden text-xs font-medium text-navy-400 sm:inline">
            금융사기 피해 회복
          </span>
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-navy-200 transition-colors hover:bg-navy-800 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-md bg-gold-500 px-4 py-2 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
          >
            상담 문의
          </Link>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy-200 hover:bg-navy-800 md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <nav className="border-t border-navy-800 bg-navy-950 px-4 pb-4 pt-2 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-md px-3 py-3 text-base font-medium text-navy-100 hover:bg-navy-800"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 block rounded-md bg-gold-500 px-4 py-3 text-center text-base font-bold text-navy-950"
            onClick={() => setOpen(false)}
          >
            상담 문의
          </Link>
        </nav>
      )}
    </header>
  );
}
