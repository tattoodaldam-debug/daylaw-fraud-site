/**
 * 배포 시 실제 도메인을 NEXT_PUBLIC_SITE_URL 환경변수로 설정해야 합니다.
 * (예: https://예정도메인.com)
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "데이법률사무소";
export const SITE_ADDRESS = {
  full: "서울 서초구 서초동 1624-21",
  region: "서울특별시",
  locality: "서초구",
  street: "서초동 1624-21",
};
