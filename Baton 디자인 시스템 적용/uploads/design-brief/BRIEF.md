# Baton (바통) — Claude Design 리브랜딩 브리핑

목적: 지금 있는 화면의 **구조(라우팅/상태/로직)는 그대로 두고, 배치와 비주얼 디자인만** 새로
만들고 싶다. 아래 자료를 Claude Design에 그대로 넣으면 화면 16개 + 상태 분기 4개 + 모달 2개가
빠짐없이 재현된다. 스크린샷은 `screenshots/` 폴더에 순서대로 있다.

---

## 1. 화면 스크린샷 목록 (총 20장)

| 파일 | 라우트 | 설명 |
| --- | --- | --- |
| `01-landing.jpg` | `/` | 랜딩 페이지 |
| `02-signup.jpg` | `/signup` | 회원가입 |
| `03-login.jpg` | `/login` | 로그인 |
| `04-slack-connect.jpg` | `/connect` | Slack 연결 시작 |
| `05-connect-error.jpg` | `/connect/error` | Slack 연결 실패 |
| `06-sync-error.jpg` | `/sync-error` | 데이터 동기화 실패 (사이드바 있는 레이아웃) |
| `07-home.jpg` | `/home` | 바통 홈 — KPI 카드 4개 + 바통 리스트 |
| `08-conversations.jpg` | `/conversations` | 대화 선택 (새 바통 1단계 진입) |
| `09-compose.jpg` | `/conversations/:id/compose` | 메시지 작성 — 위저드 1/3단계 |
| `10-branches-top.jpg` / `11-branches-bottom.jpg` | `/conversations/:id/branches` | 분기 검토 — 위저드 2/3단계. 상단에 "내가 보낼 메시지" 패널 + 분기 A/B/C 카드 |
| `12-send-confirm.jpg` | `/conversations/:id/confirm` | 발송 설정 — 위저드 3/3단계, 최대 대기 시간 선택 |
| `13-baton-detail-waiting.jpg` | `/batons/:id` | 바통 상세 (WAITING 상태) — 우측 상단 "바통 취소" 버튼 |
| `14-dialog-cancel-baton.jpg` | (모달) | "바통을 취소할까요?" 확인 다이얼로그 |
| `15-pending-ambiguous.jpg` | `/batons/:id/pending` | 보류 처리 — **판정 애매** variant (분기 2~3개 라디오 선택) |
| `16-dialog-send-confirm.jpg` | (모달) | "응답 발송 확인" 다이얼로그 |
| `17-pending-new-question.jpg` | `/batons/:id/pending` | 보류 처리 — **새 질문 포함** variant (직접 작성 textarea, 분기 선택 없음) |
| `18-result-confirm.jpg` | `/batons/:id/result` | 자동 발송 결과 확인 |
| `19-settings-top.jpg` / `20-settings-bottom.jpg` | `/settings` | 개인 설정 — 작업 환경 / AI 모델 / 대기 시간 / 연결된 플랫폼 / 로그아웃 |

**주의**: `/home`을 완전히 빈 상태(바통 0건)로 캡처하지 못했다 — mock 데이터가 항상 4건으로
시작한다. 빈 상태는 07번 스크린샷의 KPI 카드 4개(전체/발송완료/대기중/검토필요)가 전부 "0"이고
그 아래 리스트 영역이 통째로 비는 모습으로 유추하면 된다.

---

## 2. 현재 디자인 토큰 (`src/index.css`)

```css
--color-primary: #477ad0;       /* 메인 브랜드 컬러 */
--color-primary-soft: #e7edf9;  /* primary의 옅은 배경(선택/hover) */
--color-ink: #1a1a1a;           /* 본문 텍스트 */
--color-muted: #64748b;         /* 보조 텍스트 */
--color-muted-2: #a1a1a1;       /* 더 옅은 보조 텍스트 */
--color-border: #e2e0dc;        /* 기본 테두리 */
--color-border-strong: #a1a1a1; /* 강조 테두리 (헤더 하단 등) */
--color-landing: #f6f9ff;       /* 랜딩 페이지 배경 */

--font-suit: 'SUIT Variable', system-ui, 'Segoe UI', sans-serif;  /* 제목/버튼 */
--font-sans: 'InterVariable', system-ui, 'Segoe UI', sans-serif;  /* 본문 기본값 */
```

- 상태별 좌측 보더 컬러(홈 리스트 카드): 발송완료 `emerald-600`, 검토필요 `amber-500`,
  오류 `red-500`, 그 외(대기중/만료/취소) `border-strong` 회색.
- radius 관례: 버튼/입력 `rounded-[6px]`, 카드/모달 `rounded-[10px]`, 통계 카드 `rounded-[10px]`.
- 폰트는 SUIT(제목/버튼, `font-suit` 클래스) + Inter(본문 기본값), 둘 다 Variable 폰트를 CDN에서
  불러옴 (SUIT: jsdelivr, Inter: rsms.me).

---

## 3. 공용 컴포넌트 인벤토리

디자인을 바꿀 때도 아래 컴포넌트 단위로 일관되게 재사용돼야 한다 (화면마다 따로 재발명 X).

- **`Button`** — `primary`(파란 배경/흰 글씨) / `secondary`(흰 배경/파란 테두리) / `ghost`(회색 텍스트, hover 시 배경) 3종.
- **`Panel`** — 흰 배경 + 테두리 + radius의 기본 카드 컨테이너. 거의 모든 화면의 콘텐츠 블록.
- **`Badge`** — 상태 라벨용 (현재 코드에 존재하나 이번 캡처 화면들엔 두드러지게 안 보임 — 존재만 참고).
- **`Dialog`** — 화면 중앙 모달. 제목 + 설명 + 취소/확정 버튼 2개. (14번, 16번 스크린샷)
- **`StepTabs`** — 3단계 위저드 상단 탭 ("1 메시지 작성 › 2 분기 검토 › 3 발송 확인"). 완료 단계는 체크 아이콘.
- **`AppShell` / `Header`** — 상단 헤더(로고 + 사용자명 + 프로필 아이콘, 클릭 시 `/settings`로 이동) + 좌측 사이드바(바통 홈/새 바통/개인설정 + 하단 "사용 방법"). 로그인 후 전 화면 공통.

---

## 4. 화면별 목적 / 흐름 (`docs/screens.md` 요약)

1. **Landing `/`** — 서비스 소개, "기다림 없이, 다음으로" 카피. 로그인/무료로 시작하기 진입점.
2. **Signup `/signup`, Login `/login`** — 계정 생성/로그인.
3. **SlackConnect `/connect`** — Slack OAuth 시작.
4. **ConnectError `/connect/error`** — OAuth 실패 안내 + 재시도.
5. **Home `/home`** — 진행 중 바통 전체를 상태별로 보여주는 대시보드. 기본 진입 화면.
6. **ConversationPicker `/conversations`** — 새 바통을 만들 Slack 채널/DM 선택.
7. **ComposeBaton `/conversations/:id/compose`** — 트리거 메시지 작성 (위저드 1/3).
8. **BranchPrep `/conversations/:id/branches`** — AI가 만든 답변 분기 3개 확인/편집 (위저드 2/3). 핵심 기능.
9. **SendConfirm `/conversations/:id/confirm`** — 최대 대기 시간 설정 후 바통 활성화 (위저드 3/3).
10. **BatonDetail `/batons/:id`** — 아직 답장 없는 바통의 상세 (대기 상세). WAITING일 때만 취소 가능.
11. **PendingResponse `/batons/:id/pending`** — 자동 판정 보류 처리. 두 variant: 판정 애매(분기 선택) / 새 질문 포함(직접 작성).
12. **ResultConfirm `/batons/:id/result`** — 자동 발송된 결과 확인.
13. **SyncError `/sync-error`** — 동기화 실패 안내.
14. **Settings `/settings`** — 언어/타임존, AI 모델, 최대 대기 시간, 연결된 플랫폼, 로그아웃.

---

## 5. 바통 상태(enum) — 색/배지 디자인 시 빠짐없이 커버할 것

`BatonStatus`: `DRAFT` · `ARMED`(WAITING과 동일 취급) · `WAITING` · `PENDING_REVIEW` ·
`EXECUTED` · `COMPLETED` · `EXPIRED` · `CANCELLED` · `ERROR`

홈 화면 상태별 표시 문구(그대로 유지해야 하는 카피):
- COMPLETED/EXECUTED → "발송 완료 — Slack에서 확인하세요" / 액션 "결과 확인"
- PENDING_REVIEW(새 질문) → "검토 필요 — 직접 확인이 필요해요" / 액션 "응답 처리"
- PENDING_REVIEW(애매) → "검토 필요 — AI가 판단하지 못했어요" / 액션 "응답 처리"
- EXPIRED → "만료됨 — 답장이 오지 않았어요" / 액션 "상세 보기"
- CANCELLED → "취소됨" / 액션 "상세 보기"
- ERROR → "오류 발생" / 액션 "상세 보기"
- WAITING → "답장 기다리는 중" / 액션 "상세 보기"

---

## 6. 여기 없는 것 (직접 준비해야 함)

Claude Design에 방향을 줄 때 같이 넣어야 하지만 이 리포에서 추출할 수 없는 것:
- 원하는 무드/톤(미니멀/컬러풀/다크 우선 등), 레퍼런스 이미지·사이트.
- "이런 느낌은 피하고 싶다" 같은 취향 가이드.
- 브랜드를 바꿀 거라면 새 컬러/폰트 후보.

---

### Claude Design에 넣을 때 추천 프롬프트 구조

> "이 스크린샷들은 지금 서비스의 실제 화면과 문구다. **레이아웃과 시각 디자인만** 원하는
> 방향으로 새로 만들어줘 — 라우팅 구조, 버튼이 하는 동작, 상태 문구는 그대로 유지해야 해.
> [토큰/컴포넌트 섹션 붙여넣기] 이 컴포넌트 단위(Button/Panel/Dialog/StepTabs)로 일관되게
> 다시 디자인해줘. 방향성: (여기에 원하는 스타일 설명)."
