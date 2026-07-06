import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * robots.txt — 기존 내용(전체 허용 + sitemap 주소)을 유지하고,
 * 마지막 줄에 다음(Daum) 웹마스터도구 소유확인 PIN을 추가.
 */
export function GET() {
  const body = [
    "User-Agent: *",
    "Allow: /",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
    "#DaumWebMasterTool:793f83723fc45a1e8c94d3a161d148c73379d7fd320f1abafb7f9c6f36e43e63:6LQqhj3iSch63nUQiWlmNw==",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
