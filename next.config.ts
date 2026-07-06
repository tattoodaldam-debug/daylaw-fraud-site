import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 사이트 전체 URL을 /경로/ 형태(뒤에 슬래시)로 통일
  trailingSlash: true,

  async redirects() {
    return [
      // 구 주소 → 신 주소 (301)
      {
        source: "/practice/voice-phishing",
        destination: "/fraud/voice-phishing/",
        statusCode: 301,
      },
      {
        source: "/practice/investment-scam",
        destination: "/fraud/stock-leading-room/",
        statusCode: 301,
      },
      {
        source: "/practice/coin-fraud",
        destination: "/fraud/crypto-fraud/",
        statusCode: 301,
      },
      {
        source: "/about",
        destination: "/attorneys/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
