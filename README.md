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

`wrangler.toml`은 `dist`를 공개 정적 파일 디렉터리로 지정합니다. Cloudflare Workers Builds의 빌드 명령은 `npm run build`로 설정해야 합니다. `build.mjs`는 공개 파일만 `dist`에 복사하며, 저장소 전체를 복사하지 않아야 합니다. 이 저장소에는 Cloudflare 대시보드의 실제 빌드 명령 설정이 포함되어 있지 않으므로 운영 배포 전에 대시보드 설정을 확인하세요.

## Rails & Hardware

공개 카탈로그와 주문 옵션은 `index.html`의 `hardwareCatalog` 데이터에서 품목별 `published` 및 `orderable` 상태를 공유합니다. 현재 9개 품목은 공개되고 `Quote only`로 표시되며, 주문 계산에는 포함되지 않습니다. 이전 가격과 주문 로직은 `private-archive/rails-hardware-before-hide.html`에 보존되어 있고 빌드 출력에서 제외됩니다. 관련 제품 사진은 카탈로그와 함께 공개 빌드에 포함됩니다.

복구 또는 재고 확인 후 주문을 재개할 때는 `hardwareCatalog`에서 해당 품목만 공개/주문 가능 상태로 설정하고 확인된 SKU와 단가를 입력하세요. 비공개 품목은 카탈로그와 주문 옵션 양쪽에서 자동으로 제외됩니다.

제품별 출고 및 설치 안내는 `index.html`의 `baseOrderProducts`에서 각 품목의 `guidance`로 관리하며, 제품 카드와 견적 항목에 함께 표시됩니다. 태그 번들의 공통 문구는 `tagBundleShippingGuidance`에서 수정하고, 특정 품목의 안내만 바뀌면 해당 품목의 `guidance`를 별도로 수정하세요.

## 작업 현황

- SEO 최적화 완료
- 구조화 데이터 (JSON-LD) 추가 완료
