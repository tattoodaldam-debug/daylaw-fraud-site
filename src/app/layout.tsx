import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import { SITE_ADDRESS, SITE_NAME, SITE_URL } from "@/lib/site";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "데이법률사무소 | 보이스피싱·리딩방 투자사기·코인 사기 피해 회복",
    template: "%s | 데이법률사무소",
  },
  description:
    "보이스피싱 지급정지·피해금 환급, 리딩방 투자사기 고소, 코인 유사수신 피해 대응. 금융사기 피해자 대리에 집중하는 데이법률사무소입니다. 광고책임변호사 강민성.",
  keywords: [
    "보이스피싱 변호사",
    "보이스피싱 피해금 환급",
    "지급정지",
    "리딩방 사기",
    "투자사기 고소",
    "코인 사기 변호사",
    "유사수신",
    "금융사기 피해 회복",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "/" },
  verification: {
    google: "Yg89ckDSfYc3o_mPNgLfF6sJhwu0SFh67ys1DJitnWo",
  },
};

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE_NAME,
  description:
    "보이스피싱, 리딩방 투자사기, 코인 유사수신 등 금융사기 피해 회복을 돕는 법률사무소",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
    addressRegion: SITE_ADDRESS.region,
    addressLocality: SITE_ADDRESS.locality,
    streetAddress: SITE_ADDRESS.street,
  },
  areaServed: "KR",
  knowsAbout: [
    "보이스피싱 피해 회복",
    "리딩방 투자사기",
    "코인 유사수신",
    "지급정지 및 피해금 환급",
    "형사 고소",
    "민사 손해배상",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceJsonLd),
          }}
        />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        {/* 모바일 하단 CTA 바에 가려지지 않도록 여백 확보 */}
        <div aria-hidden className="h-14 md:hidden" />
        <MobileCtaBar />
      </body>
    </html>
  );
}
