import type {
  Baton,
  Branch,
  Classification,
  Conversation,
  Execution,
  Message,
  PlatformConnection,
  User,
} from '../types'

/**
 * 프론트가 백엔드에 기대하는 API 계약. 지금은 mock/client.ts가 구현하고,
 * 실제 백엔드가 준비되면 이 인터페이스를 그대로 구현하는 fetch 기반 클라이언트로
 * src/api/index.ts의 export만 바꿔치기하면 된다.
 */
export interface BatonApiClient {
  getCurrentUser(): Promise<User>
  getPlatformConnection(): Promise<PlatformConnection | null>

  getConversations(): Promise<Conversation[]>
  getConversation(conversationId: string): Promise<Conversation>
  getMessages(conversationId: string): Promise<Message[]>

  getBatons(): Promise<Baton[]>
  getBaton(batonId: string): Promise<Baton>

  /** 핵심 기능 ① — LLM 호출 1회: 분기 3개 제안 생성. 아직 저장 전(발송 전) 상태. */
  generateBranches(conversationId: string, triggerMessageText: string): Promise<Branch[]>

  /**
   * 발송 확인(3단계) 화면에서 "바통 시작하기" 클릭 — 트리거 메시지 발송 + 분기 저장 +
   * 바통 생성(status: active). autoSendEnabled/maxWaitHours는 그 화면의 "발송 설정" 값.
   */
  createBaton(
    conversationId: string,
    triggerMessageText: string,
    branches: Branch[],
    options: { autoSendEnabled: boolean; maxWaitHours: number },
  ): Promise<Baton>

  getBranches(batonId: string): Promise<Branch[]>
  getClassification(batonId: string): Promise<Classification | null>
  getExecution(batonId: string): Promise<Execution | null>

  /**
   * 보류 응답 처리 화면에서 "발송" 클릭.
   * isAmbiguous 케이스면 branchId를, containsNewQuestion(또는 직접 작성) 케이스면
   * customText를 넘긴다 — branches.action_type이 send_message로 고정이라 그 외
   * 액션 종류는 없음.
   */
  submitPendingResponse(
    batonId: string,
    response: { branchId: string } | { customText: string },
  ): Promise<void>

  /** 자동 발송 결과 확인 화면 진입 — completedAt을 채워 "미확인" 배지를 없앤다. */
  confirmResult(batonId: string): Promise<void>
}
