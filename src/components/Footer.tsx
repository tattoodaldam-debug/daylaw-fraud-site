import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="text-lg font-black text-white">데이법률사무소</p>
            <p className="mt-1 text-sm text-navy-400">
              금융사기 피해 회복에 집중하는 법률사무소
            </p>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-bold text-navy-400">주소</dt>
              <dd>서울 서초구 서초동 1624-21</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-bold text-navy-400">전화번호</dt>
              <dd>준비 중</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-bold text-navy-400">
                온라인 상담
              </dt>
              <dd>준비 중</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-bold text-navy-400">
                광고책임변호사
              </dt>
              <dd>강민성</dd>
            </div>
          </dl>
        </div>

        <div className="mt-10 border-t border-navy-800 pt-6">
          <p className="text-xs leading-relaxed text-navy-400">
            본 사이트의 내용은 일반적인 법률 정보 제공을 목적으로 하며, 개별
            사건에 대한 법률 자문이 아닙니다. 사건의 결과는 구체적인 사실관계에
            따라 달라질 수 있습니다.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} 데이법률사무소. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link href="/faq" className="hover:text-white">
                자주 묻는 질문
              </Link>
              <Link href="/column" className="hover:text-white">
                칼럼
              </Link>
              <Link href="/contact" className="hover:text-white">
                상담안내
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
