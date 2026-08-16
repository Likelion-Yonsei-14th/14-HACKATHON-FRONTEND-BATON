export interface User {
  id: string
  name: string
  /** UI 문구용 (예: "e2e", "다국어"). 로그인 기능은 스코프 밖 — 데모 환경엔 고정 단일 사용자를 가정. */
  language: string
  timezone: string
}
