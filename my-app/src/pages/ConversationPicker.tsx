import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../api'
import type { Conversation } from '../types'
import { AppShell } from '../components/layout/AppShell'
import { Panel } from '../components/ui/Panel'
import { buttonClasses } from '../lib/buttonClasses'

export function ConversationPicker() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    async function load() {
      const conn = await api.getPlatformConnection().catch(() => null)
      if (!conn || conn.connectionStatus !== 'CONNECTED') {
        navigate('/connect', { replace: true })
        return
      }
      try {
        await api.syncConversations(conn.id)
      } catch { /* 동기화 실패해도 기존 목록은 보여줌 */ }
      api.getConversations().then(setConversations)
    }
    load()
  }, [navigate])

  return (
    <AppShell>
      <h1 className="font-suit text-2xl font-semibold text-ink">대화 선택</h1>
      <p className="font-suit mt-2 text-muted-2">바통을 만들 Slack 채널 또는 DM을 선택하세요.</p>

      <div className="mt-6 flex gap-4">
        <input
          className="font-suit w-full max-w-lg rounded-[6px] border border-border bg-primary-soft px-4 py-2 text-sm outline-none"
          placeholder="검색"
          type="text"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {conversations.map((conversation) => (
          <Panel className="flex items-center justify-between" key={conversation.id}>
            <div>
              <p className="font-semibold text-ink">
                {conversation.conversationType === 'CHANNEL' ? '# ' : '@ '}
                {conversation.title ?? conversation.counterpartName}
              </p>
              <p className="mt-1 text-sm text-muted">
                {conversation.conversationType === 'CHANNEL' ? '채널' : 'DM'}
              </p>
            </div>
            <Link className={buttonClasses('primary')} to={`/conversations/${conversation.id}/compose`}>
              대화 선택
            </Link>
          </Panel>
        ))}
      </div>
    </AppShell>
  )
}
