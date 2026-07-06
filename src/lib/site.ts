/**
 * 확정 도메인. 다른 주소로 빌드하려면 NEXT_PUBLIC_SITE_URL 환경변수로 덮어쓸 수 있습니다.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://daylaw-fraud.com";

export const SITE_NAME = "데이법률사무소";

/**
 * 연락 수단 — 값을 채우면 모바일 하단 바의 해당 버튼이 자동으로 나타납니다.
 * 비어 있으면("") 그 버튼은 렌더링되지 않습니다.
 */
export const CONTACT_PHONE = ""; // 예: "02-1234-5678"
export const KAKAO_CHAT_URL = ""; // 예: "https://pf.kakao.com/_xxxxxx/chat"
export const SITE_ADDRESS = {
  full: "서울 서초구 서초동 1624-21",
  region: "서울특별시",
  locality: "서초구",
  street: "서초동 1624-21",
};
