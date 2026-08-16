import type { ClassificationResultStatus } from './enums'

/**
 * classifications 중 프론트에서 쓰는 부분.
 * model_name은 운영/디버그용이라 제외. extracted_data_json은 용도가 불명확해 제외 —
 * 필요해지면 스키마 논의와 함께 다시 추가.
 *
 * isAmbiguous / containsNewQuestion 두 값이 PendingResponse 화면의 두 상태를 가른다:
 *   - isAmbiguous만 true       → 후보 분기 2개 중 선택
 *   - containsNewQuestion true → 분기 선택 대신 상대의 새 질문 강조 + 직접 작성 유도
 *
 * candidateBranchIds는 스키마에 없는 필드다. is_ambiguous일 때 "후보 분기 2개"를
 * 보여주려면 어떤 분기 2개인지 알아야 하는데, classifications 테이블엔
 * selected_branch_id(단수)만 있어서 저장할 곳이 없다 — 백엔드 논의 필요
 * (docs/enum-proposals.md 참고). 그 전까지 프론트/목데이터에서는 API가
 * 이 필드를 함께 내려준다고 가정하고 옵셔널로 둔다.
 */
export interface Classification {
  id: string
  batonId: string
  replyMessageId: string
  selectedBranchId: string | null
  candidateBranchIds: string[] | null
  confidence: number | null
  isAmbiguous: boolean
  containsNewQuestion: boolean
  reasoningSummary: string | null
  resultStatus: ClassificationResultStatus
}
