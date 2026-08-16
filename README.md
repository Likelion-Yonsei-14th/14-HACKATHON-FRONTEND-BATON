# BATON Frontend

시차가 있는 비동기 협업에서 사용자가 다음 의사결정의 범위를 미리 승인하고, 상대방의 답변이 도착하면 승인된 행동만 실행하도록 돕는 BATON의 웹 클라이언트입니다.

## 핵심 경험

```text
메시지 작성
→ AI가 예상 답변별 workflow 생성
→ 사용자가 Condition / Decision / Action 검토
→ BATON 활성화
→ 답변 도착 후 실행 결과 또는 검토 필요 상태 확인
```

BATON은 범용 AI 채팅이나 빈 캔버스형 자동화 도구가 아닙니다. AI가 workflow 초안을 만들고 사용자가 빠르게 검토·수정·승인하는 경험을 지향합니다.

## 제품 원칙

- 모든 분기는 `Condition → Decision → Action` 구조를 유지합니다.
- 사용자가 직접 개입하면 자동 처리를 중지합니다.
- 애매하거나 승인 범위를 벗어난 답변은 사용자 검토로 전환합니다.
- 자동 발송 사실을 상대방에게 명확히 표시합니다.

## 주요 화면

- 홈: 절약한 대기 시간, 생략한 왕복 횟수, 오프라인 중 완료된 결정
- 대화 선택 및 메시지 작성
- AI workflow 생성 및 분기 편집
- BATON 최종 검토 및 활성화
- 진행 중 BATON과 검토 필요 항목
- 판정 결과 및 실행 timeline
- 플랫폼 연결 및 오류 상태
- 개인 설정과 timezone

## 기술 스택

초기 구성안이며 프로젝트 초기화 시 버전을 확정합니다.

| 구분 | 기술 |
| --- | --- |
| 프레임워크 | Next.js · React |
| 언어 | TypeScript |
| 패키지 매니저 | pnpm |
| 서버 상태 | TanStack Query |
| 클라이언트 상태 | Zustand |
| 폼·검증 | React Hook Form · Zod |
| 스타일링 | Tailwind CSS · shadcn/ui |
| 테스트 | Vitest · React Testing Library · Playwright |

## 시작하기

### 사전 요구사항

- Node.js LTS
- pnpm

### 실행

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

### 검증 명령

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

실제 스크립트가 확정되면 위 명령과 `package.json`을 함께 갱신합니다.

## 환경변수

로컬 값은 `.env.local`에 작성하고 저장소에 커밋하지 않습니다. 공개 가능한 키 목록과 예시는 [`.env.example`](.env.example)에만 유지합니다.

| 변수 | 설명 |
| --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | BATON 백엔드 API 주소 |
| `NEXT_PUBLIC_APP_NAME` | 화면에 표시할 서비스 이름 |
| `NEXT_PUBLIC_USE_MOCK` | 로컬 mock API 사용 여부 |

## 권장 폴더 구조

```text
src/
├── app/                 # 라우트와 레이아웃
├── features/            # baton, conversation, platform, timeline 등 도메인
├── components/
│   ├── ui/              # 공용 UI primitives
│   ├── workflow/        # Condition / Decision / Action 노드
│   └── common/
├── lib/                 # API client, env, query client
├── hooks/
├── styles/
└── types/
```

컴포넌트가 직접 네트워크 요청을 수행하지 않도록 `features/*/api`와 `features/*/hooks`를 통해 접근합니다. 외부 API DTO와 화면 모델은 필요한 경우 mapper로 분리합니다.

## UI 상태

최소한 다음 상태를 화면에서 구분해야 합니다.

- `DRAFT`
- `ARMED` / `WAITING`
- `PENDING_REVIEW`
- `EXECUTED` / `COMPLETED`
- `EXPIRED` / `CANCELLED`
- `ERROR` / `SYNC_FAILED`

## 디자인 시스템

디자인 토큰은 아직 확정되지 않았습니다. 값이 정해지기 전까지 임의의 브랜드 색상이나 타이포그래피를 문서에 확정하지 않습니다. 기준이 합의되면 [`docs/DESIGN_TOKENS.md`](docs/DESIGN_TOKENS.md)와 실제 테마 파일을 함께 갱신합니다.

## 관련 문서

- [`AGENTS.md`](AGENTS.md): 코드 작업 시 지켜야 할 규칙
- [`docs/DESIGN_TOKENS.md`](docs/DESIGN_TOKENS.md): 디자인 토큰 작성 양식
- [`CONTRIBUTING.md`](CONTRIBUTING.md): 브랜치·커밋·PR 규칙

## 관련 저장소

- Backend: `Likelion-Yonsei-14th/14-HACKATHON-BACKEND-BATON`
