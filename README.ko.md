# 상대시간 라이브러리

"N minutes ago"나 "N분 전"과 같은 상대 시간 문자열을 포맷팅하는 경량 TypeScript 라이브러리입니다.

## 코어 기능 (구현 완료)

- ✅ **시간 단위**: 초, 분, 시간, 일 지원
- ✅ **다국어 지원**: 한국어와 영문 로케일 지원 (기본값: 'en')
- ✅ **유연한 기준 시간**: 사용자 정의 기준 시간 지정 가능 (기본값: 현재 시간)
- ✅ **미리 정의된 포맷**: 일관된 포맷팅을 위한 내장 템플릿
- ✅ **TypeScript Strict Mode**: strict mode 활성화로 완전한 타입 안전성 보장

## 설치

```bash
npm install @relative-time/core
```

## 사용법

### 기본 사용법 (영문)

```typescript
import { formatRelativeTimeString } from '@relative-time/core';

const now = Date.now();
formatRelativeTimeString(now - 30000);    // "just now"
formatRelativeTimeString(now - 60000);    // "1 minute ago"
formatRelativeTimeString(now - 180000);   // "3 minutes ago"
formatRelativeTimeString(now - 3600000);  // "1 hour ago"
formatRelativeTimeString(now - 86400000);  // "1 day ago"
```

### 한국어 로케일

```typescript
import { formatRelativeTimeString } from '@relative-time/core';

const now = Date.now();
formatRelativeTimeString(now - 30000, { locale: 'ko' });    // "방금 전"
formatRelativeTimeString(now - 60000, { locale: 'ko' });    // "1분 전"
formatRelativeTimeString(now - 180000, { locale: 'ko' });   // "3분 전"
formatRelativeTimeString(now - 3600000, { locale: 'ko' });  // "1시간 전"
formatRelativeTimeString(now - 86400000, { locale: 'ko' });  // "1일 전"
```

### 사용자 정의 기준 시간

```typescript
import { formatRelativeTimeString } from '@relative-time/core';

const baseTime = 1734567950000;
const timestamp = 1734567890000;

formatRelativeTimeString(timestamp, { baseTime }); // "1 minute ago"
```

## API

### `formatRelativeTimeString(timestamp, options?)`

타임스탬프를 상대 시간 문자열로 포맷팅합니다.

**매개변수:**
- `timestamp` (number): 포맷팅할 타임스탬프 (밀리초 단위)
- `options` (object, 선택사항):
  - `locale` ('ko' | 'en', 기본값: 'en'): 포맷팅할 로케일
  - `baseTime` (number, 기본값: Date.now()): 비교할 기준 시간

**반환값:** string - 포맷팅된 상대 시간 문자열

**예외 발생:**
- 타임스탬프가 미래인 경우 에러 발생
- 타임스탬프가 유효하지 않은 양수인 경우 에러 발생

## 시간 단위

| 범위 | 단위 | 한국어 | 영문 |
|-------|------|--------|------|
| 0-59초 | 초 | 방금 전 | just now |
| 1-59분 | 분 | N분 전 | N minutes ago |
| 1-23시간 | 시간 | N시간 전 | N hours ago |
| 1일 이상 | 일 | N일 전 | N days ago |

## 에러 처리

```typescript
// 미래 타임스탬프 (에러 발생)
formatRelativeTimeString(Date.now() + 10000);
// Error: Future timestamp is not supported

// 음수 타임스탬프 (에러 발생)
formatRelativeTimeString(-1000);
// Error: Invalid timestamp: must be a valid positive number

// 유효하지 않은 타임스탬프 (에러 발생)
formatRelativeTimeString(NaN);
// Error: Invalid timestamp: must be a valid positive number
```

## 개발

### 설정

```bash
npm install
```

### 테스트 실행

```bash
npm test
```

### 타입 체크

```bash
npm run typecheck
```

### 빌드

```bash
npm run build
```

## 향후 기능 (미구현)

다음 기능들은 향후 릴리스에서 계획되어 있으나 현재는 구현되지 않았습니다:

1. **확장된 시간 단위**: 주, 월, 년 지원
2. **추가 로케일**: 일본어, 중국어 등 다른 언어
3. **사용자 정의 포맷팅**: 사용자 제공 콜백 함수를 통한 커스텀 포맷
4. **자동 갱신**: 실시간 업데이트 (예: "1분 전" → "2분 전")
5. **서버 사이드 렌더링 지원**: Next.js 등 프레임워크 통합
6. **다른 언어 바인딩**: JavaScript/TypeScript 외 다른 언어 지원

## 라이선스

MIT

## 기여

기여는 언제나 환영합니다! PR을 제출해 주세요.
