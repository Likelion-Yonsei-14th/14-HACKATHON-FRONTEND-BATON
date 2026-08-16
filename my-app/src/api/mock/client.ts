import type { Baton, Branch } from '../../types'
import type { BatonApiClient } from '../client'
import {
  mockBatons,
  mockBranches,
  mockClassifications,
  mockConversations,
  mockExecutions,
  mockMessages,
  mockPlatformConnection,
  mockUser,
} from './data'

const LATENCY_MS = 300

function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), LATENCY_MS))
}

// 목 데이터는 모듈 스코프의 배열/객체를 그대로 들고 있다가 뮤테이션한다 —
// 새로고침하면 초기 상태로 리셋된다. 실제 API 붙이면 이 파일만 안 쓰면 된다.
const batons = [...mockBatons]
const branchesByBaton: Record<string, Branch[]> = { ...mockBranches }

let nextDraftBranchSeq = 0

export const mockApiClient: BatonApiClient = {
  async getCurrentUser() {
    return delay(mockUser)
  },

  async getPlatformConnection() {
    return delay(mockPlatformConnection)
  },

  async getConversations() {
    return delay(mockConversations)
  },

  async getConversation(conversationId) {
    const conversation = mockConversations.find((c) => c.id === conversationId)
    if (!conversation) throw new Error(`conversation not found: ${conversationId}`)
    return delay(conversation)
  },

  async getMessages(conversationId) {
    return delay(mockMessages.filter((m) => m.conversationId === conversationId))
  },

  async getBatons() {
    return delay(batons)
  },

  async getBaton(batonId) {
    const baton = batons.find((b) => b.id === batonId)
    if (!baton) throw new Error(`baton not found: ${batonId}`)
    return delay(baton)
  },

  async generateBranches(_conversationId, triggerMessageText) {
    // 실제로는 LLM 호출 1회. 목데이터는 트리거 메시지 내용과 무관하게 고정 3분기를 반환한다.
    nextDraftBranchSeq += 1
    const draftId = `draft-${nextDraftBranchSeq}`
    const branches: Branch[] = [
      {
        id: `${draftId}-a`,
        batonId: draftId,
        name: '분기 A — 긍정적 수락',
        description: '상대방이 제안을 수락하거나 동의하는 경우',
        responseText: `좋습니다. "${triggerMessageText.slice(0, 20)}" 관련해 말씀해주신 대로 진행하겠습니다.`,
        executionMode: 'auto',
        sortOrder: 0,
      },
      {
        id: `${draftId}-b`,
        batonId: draftId,
        name: '분기 B — 조건부 또는 추가 질문',
        description: '상대방이 조건을 달거나 추가 정보를 요청하는 경우',
        responseText: '확인했습니다. 필요한 조건을 알려주시면 그 기준에 맞춰 다시 정리해서 공유드리겠습니다.',
        executionMode: 'auto',
        sortOrder: 1,
      },
      {
        id: `${draftId}-c`,
        batonId: draftId,
        name: '분기 C — 부정적 거절 또는 보류',
        description: '상대방이 거절하거나 판단을 미루는 경우',
        responseText: '알겠습니다. 지금 진행이 어렵다면 대안 일정이나 담당자를 알려주시면 그 방향으로 맞추겠습니다.',
        executionMode: 'auto',
        sortOrder: 2,
      },
    ]
    return delay(branches)
  },

  async createBaton(conversationId, _triggerMessageText, branches, options) {
    const id = `baton-${batons.length + 1}`
    const baton: Baton = {
      id,
      conversationId,
      triggerMessageId: `msg-${id}-trigger`,
      replyMessageId: null,
      status: 'active',
      autoSendEnabled: options.autoSendEnabled,
      expiresAt: new Date(Date.now() + options.maxWaitHours * 60 * 60_000).toISOString(),
      activatedAt: new Date().toISOString(),
      completedAt: null,
    }
    batons.push(baton)
    branchesByBaton[id] = branches.map((b) => ({ ...b, batonId: id }))
    return delay(baton)
  },

  async getBranches(batonId) {
    return delay(branchesByBaton[batonId] ?? [])
  },

  async getClassification(batonId) {
    return delay(mockClassifications[batonId] ?? null)
  },

  async getExecution(batonId) {
    return delay(mockExecutions[batonId] ?? null)
  },

  async submitPendingResponse(batonId, _response) {
    const baton = batons.find((b) => b.id === batonId)
    if (!baton) throw new Error(`baton not found: ${batonId}`)
    baton.status = 'sent'
    return delay(undefined)
  },

  async confirmResult(batonId) {
    const baton = batons.find((b) => b.id === batonId)
    if (!baton) throw new Error(`baton not found: ${batonId}`)
    baton.completedAt = new Date().toISOString()
    return delay(undefined)
  },
}
