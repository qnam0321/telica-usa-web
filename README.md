# TELICA USA Website

TELICA USA official website with enhanced SEO optimization - Authorized U.S. Reseller

## 개요

웹사이트 관련 파일 및 리소스

## 파일 구조

- `index.html` - 메인 페이지
- `page2.html` - 2번째 페이지
- `styles.css` - 스타일시트
- `script.js` - JavaScript 파일
- `images/` - 이미지 파일들

## 배포

Cloudflare Workers Builds가 `main` 브랜치의 변경을 빌드하여 `solitary-mountain-261e` Worker에 자동 배포합니다.

빌드 명령은 사이트 파일을 `dist`에 복사하며, `npx wrangler deploy`가 정적 파일을 배포합니다.

## 작업 현황

- SEO 최적화 완료
- 구조화 데이터 (JSON-LD) 추가 완료
