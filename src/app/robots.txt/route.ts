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
    "c#DaumWebMasterTool:b7f0e522df73d046eb0cfbcfc4c28fca6c70562b32c360324bbf09ef89e6f760:6LQqhj3iSch63nUQiWlmNw==",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
