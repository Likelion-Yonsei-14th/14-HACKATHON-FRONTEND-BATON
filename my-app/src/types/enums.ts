// 스키마의 VARCHAR 상태 컬럼들을 프론트가 쓸 수 있는 union type으로 정리한 것.
// 실제 값 목록은 백엔드와 합의되지 않았음 — 여기 있는 건 전부 "제안"이다.
// 합의된 근거/미해결 질문은 docs/enum-proposals.md 참고.

/** platform_connections.platform_type — 이번 스코프는 Slack만. */
export type PlatformType = 'slack'

/** platform_connections.connection_status */
export type ConnectionStatus = 'connected' | 'expired' | 'revoked' | 'error'

/** conversations.conversation_type */
export type ConversationType = 'channel' | 'dm'

/** messages.sender_type — Baton 사용자 본인 vs 상대방. */
export type SenderType = 'user' | 'counterpart'

/**
 * batons.status — 화면 전환의 축.
 *
 * 상태 전이:
 *   draft --(트리거 메시지 발송 + 분기 준비 완료)--> active
 *   active --(만료 시각 경과, 답장 없음)--> expired
 *   active --(답장 도착, 분기 매칭 성공)--> sent
 *   active --(답장 도착, is_ambiguous 또는 contains_new_question)--> held
 *   held --(사용자가 분기 선택 또는 직접 작성 후 발송)--> sent
 *
 * sent 상태의 "결과 미확인" 배지는 별도 status 값이 아니라
 * completed_at 유무로 파생시키는 걸 제안함 (completed_at is null = 미확인).
 */
export type BatonStatus = 'draft' | 'active' | 'held' | 'sent' | 'expired'

/** branches.execution_mode — batons.auto_send_enabled와의 관계는 docs/enum-proposals.md 참고. */
export type ExecutionMode = 'auto' | 'confirm'

/** classifications.result_status */
export type ClassificationResultStatus =
  | 'matched'
  | 'ambiguous'
  | 'new_question'
  | 'failed'

/** executions.execution_status */
export type ExecutionStatus = 'pending' | 'success' | 'failed'
