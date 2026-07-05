import Link from "next/link";

export default function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="bg-navy-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="text-sm font-bold tracking-widest text-gold-500">
          COMING SOON
        </p>
        <h1 className="mt-3 text-3xl font-black text-navy-950 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-navy-700">
          {description}
        </p>
        <Link
          href="/"
          className="mt-10 rounded-md bg-navy-900 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-navy-800"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
