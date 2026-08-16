import type { SenderType } from './enums'

export interface Message {
  id: string
  conversationId: string
  senderType: SenderType
  content: string
  /** 다국어 스코프: 원문 언어. null이면 번역/원문 구분 UI를 생략한다. */
  originalLanguage: string | null
  /**
   * 사용자 언어로 번역된 내용. 스키마엔 별도 컬럼이 없다 — 번역이 저장되는지,
   * 매번 표시 시점에 호출되는지는 백엔드와 논의 필요 (docs/enum-proposals.md 참고).
   * null이면 "번역 (한국어)" 섹션을 아예 표시하지 않는다 — 임의로 지어내지 않는다.
   */
  translatedContent: string | null
  /** true면 Baton이 자동 발송한 메시지 — 발신자 UI에 "자동 발송" 표시용. */
  isBatonGenerated: boolean
  sentAt: string
}
