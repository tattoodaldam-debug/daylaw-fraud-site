import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 정적 배포 — 빌드 시 out/ 폴더에 HTML 생성
  output: "export",

  // 사이트 전체 URL을 /경로/ 형태(뒤에 슬래시)로 통일
  trailingSlash: true,

  // 구 주소 → 신 주소 301 리다이렉트는 public/_redirects (Cloudflare Pages 방식)에서 처리
};

export default nextConfig;
