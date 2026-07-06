# 사이트 현재 상태 기록 (Baseline Report)

- **대상 사이트**: https://www.seoultattoostudiokorea.com
- **기록 일시**: 2026-07-06
- **점검 방법**: Playwright(Chromium 헤드리스)로 6개 페이지를 3가지 화면 크기(스마트폰 375x812 / 태블릿 768x1024 / PC 1440x900)로 열어 전체 페이지 스크린샷 저장 + 네트워크 오류/브라우저 콘솔 오류 수집
- **스크린샷**: 이 폴더에 총 18장 (`페이지이름_기기.png`)

## 요약

| 페이지 | 접속(HTTP) | 발견된 문제 |
|---|---|---|
| 홈 (`/`) | 200 정상 | 없음 |
| 소개 (`/about/`) | 200 정상 | ⚠️ 외부 데모 서버 배너 이미지 로드 실패 |
| 타투스타일 (`/tattoo-styles/`) | 200 정상 | 없음 |
| 문의 (`/contact/`) | 200 정상 | ⚠️ 외부 데모 서버 배너 이미지 로드 실패 |
| 외국인관광객가이드 (`/tourists-best-hongdae-tattoo-studio-for-foreigners-in-seoul/`) | 200 정상 | ❌ 깨진 이미지 1개 (404) |
| 홍대타투샵추천 (`/best-hongdae-tattoo-shop/`) | 200 정상 | 없음 |

세 가지 화면 크기(스마트폰/태블릿/PC) 모두에서 동일한 결과였습니다.

---

## 문제 상세

### ❌ 문제 1. 외국인관광객가이드 페이지 — 깨진 이미지 (404)

- **페이지**: https://www.seoultattoostudiokorea.com/tourists-best-hongdae-tattoo-studio-for-foreigners-in-seoul/
- **깨진 이미지 주소**:
  `https://www.seoultattoostudiokorea.com/tourists-best-hongdae-tattoo-studio-for-foreigners-in-seoul/YOUR-IMAGE-URL-HERE/hongdae-tattoo-styles-for-foreigners-seoul-02.jpg`
- **이미지 대체 텍스트(alt)**: "Tattoo style portfolio for foreigners choosing fine line, minimalist, flower, color, anime, and Korean ink painting tattoos in Seoul"
- **증상**: 이미지 주소 안에 `YOUR-IMAGE-URL-HERE` 라는 **임시 자리표시(placeholder) 문구가 그대로 남아 있음**. 글 작성 시 실제 이미지 주소로 바꿔 넣어야 할 자리를 바꾸지 않은 것으로 보이며, 서버가 404(없는 파일)로 응답. 방문자에게는 깨진 이미지로 보임.
- **발생 화면 크기**: 스마트폰 / 태블릿 / PC 모두
- **브라우저 콘솔 오류**: `Failed to load resource: the server responded with a status of 404 ()`

### ⚠️ 문제 2. 소개 · 문의 페이지 — 외부 데모 서버의 배너 이미지 로드 실패

- **페이지**: https://www.seoultattoostudiokorea.com/about/ , https://www.seoultattoostudiokorea.com/contact/
- **실패한 이미지 주소**:
  `https://demo.kamleshyadav.com/themeforest/tattoos/wp-content/uploads/2025/03/about_banner.jpg`
- **오류 내용**: `net::ERR_BLOCKED_BY_ORB` (브라우저가 응답을 차단하여 불러오지 못함)
- **증상**: 배너(상단 띠) 영역의 배경 이미지가 자기 사이트가 아닌 **워드프레스 테마 판매자의 데모 사이트(demo.kamleshyadav.com) 주소**를 그대로 가리키고 있음. 테마 설치 후 데모 주소가 남은 것으로 보이며, 현재 브라우저에서 차단되어 해당 배경 이미지가 표시되지 않음. `<img>` 태그가 아닌 배경 이미지라 페이지 깨짐은 눈에 덜 띄지만, 외부 서버 사정에 따라 언제든 상태가 달라질 수 있음.
- **발생 화면 크기**: 스마트폰 / 태블릿 / PC 모두

### ℹ️ 참고 (사이트 문제 아님)

- 모든 페이지에서 구글 광고/전환 추적용 요청(`google.com/ccm/collect`, `ad.doubleclick.net` 등)이 `ERR_ABORTED`로 기록되었으나, 이는 자동화 브라우저 환경에서 광고 추적 신호가 정상 전송되지 않아 생기는 현상으로 **사이트 자체의 결함이 아님**. 실제 방문자 화면에는 아무 영향 없음.

---

## 페이지별 기록

### 홈 (`/`)
- HTTP 200 정상. 깨진 이미지 없음. 콘솔 오류 없음.
- 스크린샷: `홈_스마트폰.png`, `홈_태블릿.png`, `홈_PC.png`

### 소개 (`/about/`)
- HTTP 200 정상. 콘솔 오류 없음.
- ⚠️ 문제 2 (외부 데모 서버 배너 이미지) 해당.
- 스크린샷: `소개_스마트폰.png`, `소개_태블릿.png`, `소개_PC.png`

### 타투스타일 (`/tattoo-styles/`)
- HTTP 200 정상. 깨진 이미지 없음. 콘솔 오류 없음.
- 스크린샷: `타투스타일_스마트폰.png`, `타투스타일_태블릿.png`, `타투스타일_PC.png`

### 문의 (`/contact/`)
- HTTP 200 정상. 콘솔 오류 없음.
- ⚠️ 문제 2 (외부 데모 서버 배너 이미지) 해당.
- 스크린샷: `문의_스마트폰.png`, `문의_태블릿.png`, `문의_PC.png`

### 외국인관광객가이드 (`/tourists-best-hongdae-tattoo-studio-for-foreigners-in-seoul/`)
- HTTP 200 정상.
- ❌ 문제 1 (YOUR-IMAGE-URL-HERE 자리표시가 남은 깨진 이미지, 404) 해당.
- 스크린샷: `외국인관광객가이드_스마트폰.png`, `외국인관광객가이드_태블릿.png`, `외국인관광객가이드_PC.png`

### 홍대타투샵추천 (`/best-hongdae-tattoo-shop/`)
- HTTP 200 정상. 깨진 이미지 없음. 콘솔 오류 없음.
- 스크린샷: `홍대타투샵추천_스마트폰.png`, `홍대타투샵추천_태블릿.png`, `홍대타투샵추천_PC.png`

---
*이 문서는 현재 상태의 기록용이며, 사이트에는 어떤 수정도 가하지 않았습니다.*
