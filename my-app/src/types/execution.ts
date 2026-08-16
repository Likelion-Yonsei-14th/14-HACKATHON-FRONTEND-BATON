import type { ExecutionStatus } from './enums'

/**
 * executions 중 프론트에서 쓰는 부분.
 * action_type은 branches와 마찬가지로 스코프상 send_message 고정이라 제외.
 */
export interface Execution {
  id: string
  batonId: string
  branchId: string | null
  classificationId: string | null
  executionStatus: ExecutionStatus
  resultMessageId: string | null
  executedAt: string | null
  failureReason: string | null
}
