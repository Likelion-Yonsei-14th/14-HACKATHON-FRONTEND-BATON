import type { BatonApiClient } from '../client'
import { request } from './request'
import {
  mapBaton,
  mapBranch,
  mapClassification,
  mapConversation,
  mapExecution,
  mapMessage,
  mapPlatformConnection,
  mapUser,
  type RawBaton,
  type RawBranch,
  type RawClassification,
  type RawConversation,
  type RawExecution,
  type RawMessage,
  type RawPlatformConnection,
  type RawUser,
} from './mappers'

/** 최신순으로 하나만 필요한 목록에서 가장 최근 항목을 고른다 (created_at 내림차순 가정, 방어적으로 재정렬). */
function latestByCreatedAt<T extends { created_at?: string }>(items: T[]): T | null {
  if (items.length === 0) return null
  return [...items].sort((a, b) => (b.created_at ?? '').localeCompare(a.created_at ?? ''))[0]
}

export const httpApiClient: BatonApiClient = {
  async getCurrentUser() {
    const raw = await request<RawUser>('/users/me')
    return mapUser(raw)
  },

  async getPlatformConnection() {
    const { connections } = await request<{ connections: RawPlatformConnection[] }>('/platform-connections')
    return connections[0] ? mapPlatformConnection(connections[0]) : null
  },

  async startSlackConnect() {
    const { redirect_url } = await request<{ redirect_url: string }>('/platform-connections/slack/connect')
    return { redirectUrl: redirect_url }
  },

  async getConversations() {
    const { conversations } = await request<{ conversations: RawConversation[] }>('/conversations')
    return conversations.map(mapConversation)
  },

  async getConversation(conversationId) {
    const raw = await request<RawConversation>(`/conversations/${conversationId}`)
    return mapConversation(raw)
  },

  async getMessages(conversationId) {
    const { messages } = await request<{ messages: RawMessage[] }>(`/conversations/${conversationId}/messages`)
    return messages.map((m) => ({ ...mapMessage(m), conversationId }))
  },

  async getBatons() {
    const { batons } = await request<{ batons: RawBaton[] }>('/batons')
    return batons.map(mapBaton)
  },

  async getBaton(batonId) {
    const raw = await request<RawBaton>(`/batons/${batonId}`)
    return mapBaton(raw)
  },

  async startBaton(conversationId, triggerMessageText) {
    const triggerMessage = await request<RawMessage>(`/conversations/${conversationId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ content: triggerMessageText }),
    })

    const draftBaton = await request<RawBaton>('/batons', {
      method: 'POST',
      body: JSON.stringify({
        conversation_id: Number(conversationId),
        trigger_message_id: triggerMessage.id,
        // 자동발송/최대 대기 시간은 3단계(SendConfirm)에서 결정된다 — 임시값으로 만들고
        // activateBaton에서 실제 값으로 PATCH한다.
        auto_send_enabled: false,
        expires_at: null,
      }),
    })

    const { branches } = await request<{ branches: RawBranch[] }>(`/batons/${draftBaton.id}/branches/generate`, {
      method: 'POST',
      body: JSON.stringify({}),
    })

    const batonId = String(draftBaton.id)
    return {
      baton: mapBaton(draftBaton),
      branches: branches.map((b, i) => mapBranch(b, { batonId, sortOrder: i })),
    }
  },

  async updateBranch(batonId, branchId, patch) {
    await request<{ id: number; updated_at: string }>(`/batons/${batonId}/branches/${branchId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        ...(patch.name !== undefined ? { name: patch.name } : {}),
        ...(patch.description !== undefined ? { description: patch.description } : {}),
        ...(patch.responseText !== undefined ? { response_text: patch.responseText } : {}),
      }),
    })
  },

  async activateBaton(batonId, options) {
    const expiresAt = new Date(Date.now() + options.maxWaitHours * 60 * 60_000).toISOString()
    await request<{ id: number; status: string; auto_send_enabled: boolean; expires_at: string | null; updated_at: string }>(
      `/batons/${batonId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({ auto_send_enabled: options.autoSendEnabled, expires_at: expiresAt }),
      },
    )
    await request<{ id: number; status: string; activated_at: string }>(`/batons/${batonId}/activate`, {
      method: 'POST',
      body: JSON.stringify({}),
    })
    const raw = await request<RawBaton>(`/batons/${batonId}`)
    return mapBaton(raw)
  },

  async getBranches(batonId) {
    const { branches } = await request<{ branches: RawBranch[] }>(`/batons/${batonId}/branches`)
    return branches.map((b, i) => mapBranch(b, { batonId, sortOrder: i }))
  },

  async getClassification(batonId) {
    const { classifications } = await request<{ classifications: RawClassification[] }>(
      `/batons/${batonId}/classifications`,
    )
    const latest = latestByCreatedAt(classifications as (RawClassification & { created_at?: string })[])
    return latest ? mapClassification(latest, { batonId }) : null
  },

  async getExecution(batonId) {
    const { executions } = await request<{ executions: RawExecution[] }>(`/batons/${batonId}/executions`)
    const latest = latestByCreatedAt(executions as (RawExecution & { created_at?: string })[])
    return latest ? mapExecution(latest, { batonId }) : null
  },

  async resolveBaton(batonId, response) {
    const body =
      'branchId' in response
        ? { resolution_type: 'SELECT_BRANCH', branch_id: Number(response.branchId) }
        : { resolution_type: 'MANUAL_REPLY', manual_response: response.customText }
    await request<{ baton_id: number; status: string; execution_id: number | null; result_message_id: number | null }>(
      `/batons/${batonId}/resolve`,
      { method: 'POST', body: JSON.stringify(body) },
    )
  },
}
