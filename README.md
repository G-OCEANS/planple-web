# Planple 소개 사이트

플랜플 iOS·Android 앱의 공식 홍보 사이트. GitHub Pages로 공개하는 정적 HTML/CSS/JavaScript 사이트다.

- 대표 도메인: https://planple.app/ (2026-10-09 DNS 연결·HTTPS 인증서 발급 및 보안 연결 확인)
- 기존 GitHub Pages 주소: https://g-oceans.github.io/planple-web/
- App Store: https://apps.apple.com/app/id6793577924
- Google Play: https://play.google.com/store/apps/details?id=com.ocean.schedule_app
- 개인정보 처리방침 정본: https://planple-api-production.up.railway.app/privacy/

## 수정과 배포

**이 저장소가 홍보 사이트의 정본이다.** 앱 저장소 `docs/index.html`은 이전 사본이므로 덮어쓰지 않는다. 앱/개인정보 처리방침 정본은 각각 기존 저장소와 위 서비스에 유지한다.

- `index.html`: 한영 카피·링크·실제 앱 화면. 한국어 기본 HTML은 JavaScript 없이도 읽을 수 있다.
- `styles.css`: 반응형 디자인. 모바일에는 두 스토어 바로가기, 키보드 포커스 표시와 reduced-motion 대응.
- `main.js`: 언어 전환과 독서·운동·공부 계획 예시. 기존 `planple-lang` 로컬 설정을 유지한다. 분석/광고 스크립트 없음.
- `assets/refresh-1.4.9/manifest.json`: 실제 앱 화면 출처·촬영 빌드·SHA256. 화면 이미지를 재생성하지 않고 CSS로 기울기/크기만 연출한다. Android44·iOS43 촬영본은 최종44 스토어 이미지 세트에서 사용한 원본이다.
- `assets/social-preview.html`: 1200×630 링크 미리보기의 편집 가능한 원본. 브라우저로 렌더링한 JPEG가 `assets/og-goals-2026.jpg`다.

`python3 -m http.server 8874 --bind 127.0.0.1`로 미리보기. 한영·320/390/768/1280px·목표 예시·FAQ·다운로드 링크와 이미지 출처를 확인하고 커밋/push 후 Pages 상태 및 공개본을 검증한다. 이번 검증 결과는 `docs/VERIFICATION_2026-10-08.md`.

## 카피 기준 (2026-10-08 사용자 요청)

사용자가 정한 정체성은 **“목표를 무조건 이루게 해주는 플래너”**. 이를 “이번 목표는, 끝까지.”와 “이루고 싶은 목표를, 오늘 끝낼 일로.”로 표현한다. 목표 → 오늘의 실행 → 완료가 설명 순서다. 성공률 보장, 가짜 리뷰/성과, 자동 목표 생성 등 실제 없는 기능을 약속하지 않는다.

- 기본 기능 무료, Pro 선택형 일회성 인앱 구매. 가격은 앱에서 확인하도록 하며 과거 고정 가격을 재사용하지 않는다.
- 공유 시작·12주 돌아보기는 Pro, 초대 참여와 이번 주 요약은 무료.
- 완료 시각/미룸 패턴은 최근 180일 완료 기록 30건부터. 예시 통계는 실제 사용자 성과가 아니다.
- iCloud 백업·잠금 화면 위젯은 iOS 기능. Android에 iCloud를 광고하지 않는다.
- 이미지의 샘플 일정·기록은 설명용. 실제 사용자 데이터가 아니다.

전면 개편 이전 이미지들은 과거 링크 보존을 위해 남아 있지만 현재 페이지에서는 참조하지 않는다.

## 전용 도메인 연결 (2026-10-09)

- `CNAME`은 `planple.app`으로 유지한다. GitHub Pages의 사용자 지정 도메인 설정과 일치해야 한다.
- Squarespace DNS: `@` A 레코드 4개 = `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `www` CNAME = `g-oceans.github.io`. 별도 웹사이트 요금제는 사용하지 않는다.
- 2026-10-09 12:28 KST Squarespace 사용자 지정 DNS 5개와 공개 DNS 일치 확인. 기존 Domain Connect·이메일 보안 TXT는 유지했다.
- 12:31~12:34 KST 대표 도메인과 www의 인증서 승인 및 실제 TLS 검증 통과, Enforce HTTPS 활성화 확인. 대표 페이지·정적 파일 12개와 한영 앱 이미지 16개가 원본과 일치하며 App Store/Google Play 링크가 유지됨을 확인했다.
- 12:38 KST `http://planple.app/`, `http(s)://www.planple.app/`, 기존 GitHub Pages 주소가 모두 `https://planple.app/`로 이동하고 HTTP 200을 반환함을 확인했다. 설정 직후에는 약 600초 CDN 캐시가 남았지만 만료 후 정상 전파됐다. 인증서 오류를 우회하지 않았으며, 추가 Squarespace 웹사이트 요금제는 필요 없다.
