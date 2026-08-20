import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../api'
import type { Baton, Branch, Conversation, Message } from '../types'
import { AppShell } from '../components/layout/AppShell'
import { Panel } from '../components/ui/Panel'
import { Dialog } from '../components/ui/Dialog'

function formatElapsed(activatedAt: string | null) {
  if (!activatedAt) return '—'
  const ms = Date.now() - new Date(activatedAt).getTime()
  const hours = Math.floor(ms / 3_600_000)
  const minutes = Math.floor((ms % 3_600_000) / 60_000)
  return `${hours}시간 ${minutes}분`
}

export function BatonDetail() {
  const { batonId } = useParams()
  const navigate = useNavigate()
  const [baton, setBaton] = useState<Baton | null>(null)
  const [conversation, setConversation] = useState<Conversation | null>(null)
  const [branches, setBranches] = useState<Branch[]>([])
  const [triggerMessage, setTriggerMessage] = useState<Message | null>(null)
  const [cancelling, setCancelling] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [confirmingDelete, setConfirmingDelete] = useState(false)
  const [deleteError, setDeleteError] = useState<string | null>(null)

  useEffect(() => {
    if (!batonId) return
    api.getBaton(batonId).then(async (b) => {
      setBaton(b)
      const conv = await api.getConversation(b.conversationId)
      setConversation(conv)
      const messages = await api.getMessages(b.conversationId)
      setTriggerMessage(messages.find((m) => m.id === b.triggerMessageId) ?? null)
    })
    api.getBranches(batonId).then(setBranches)
  }, [batonId])

  if (!baton) {
    return (
      <AppShell>
        <p className="text-muted">불러오는 중...</p>
      </AppShell>
    )
  }

  async function handleCancel() {
    if (!batonId) return
    const updated = await api.cancelBaton(batonId)
    setBaton(updated)
    setCancelling(false)
    navigate('/home')
  }

  async function handleDelete() {
    if (!batonId) return
    setDeleting(true)
    setDeleteError(null)
    try {
      await api.deleteBaton(batonId)
      navigate('/home')
    } catch {
      setDeleteError('삭제하지 못했습니다. 다시 시도해주세요.')
      setDeleting(false)
      setConfirmingDelete(false)
    }
  }

  const isDeletable = baton.status === 'DRAFT' || baton.status === 'CANCELLED' || baton.status === 'EXPIRED'

  const summary = [
    ['대화 상대', `${conversation?.counterpartName ?? ''} · ${conversation?.title ?? ''}`],
    ['상태', baton.status === 'WAITING' ? '대기 중 — 답장 없음' : baton.status],
    ['경과 시간', formatElapsed(baton.activatedAt)],
    ['상대 업무시간', '오전 9:00 – 오후 6:00'],
    ['현지 시각', conversation?.counterpartTimezone ?? '—'],
    ['다음 동기화', '약 12분 후'],
  ]

  return (
    <AppShell>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-suit text-2xl font-medium text-strong">대기 상세</h1>
          <p className="font-suit mt-1 text-sm text-muted">마지막 동기화: 3분 전</p>
        </div>
        {baton.status === 'WAITING' && (
          <button
            className="font-suit text-sm text-status-error hover:opacity-80"
            onClick={() => setCancelling(true)}
            type="button"
          >
            바통 취소
          </button>
        )}
        {isDeletable && (
          <button
            className="font-suit text-sm text-status-error hover:opacity-80 disabled:opacity-40"
            disabled={deleting}
            onClick={() => setConfirmingDelete(true)}
            type="button"
          >
            {deleting ? '삭제 중...' : '바통 삭제'}
          </button>
        )}
      </div>
      {deleteError && <p className="font-suit mt-2 text-sm text-status-error">{deleteError}</p>}

      <Panel className="mt-6 max-w-3xl">
        <p className="font-medium text-strong">바통 상태 요약</p>
        <div className="mt-4 grid grid-cols-3 gap-x-8 gap-y-4">
          {summary.map(([label, value]) => (
            <div key={label}>
              <p className="text-sm text-muted">{label}</p>
              <p className="mt-1 text-sm font-medium text-body">{value}</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel className="mt-4 max-w-3xl">
        <p className="font-medium text-strong">Slack에 보낸 첫 메시지</p>
        {triggerMessage && (
          <>
            <p className="mt-4 text-sm text-muted">{triggerMessage.content}</p>
            <p className="mt-4 text-sm text-muted">
              발송 시각: {new Date(triggerMessage.sentAt).toLocaleTimeString('ko-KR')} (내 시간)
            </p>
          </>
        )}
      </Panel>

      <h2 className="font-suit mt-6 text-lg font-medium text-strong">준비된 예상 답변 분기</h2>
      <div className="mt-3 flex max-w-3xl flex-col gap-3">
        {branches.map((branch) => (
          <Panel className="flex items-center justify-between" key={branch.id}>
            <div>
              <p className="font-medium text-strong">{branch.name}</p>
              <p className="mt-1 text-sm text-muted">{branch.executionMode === 'AUTO' ? '자동 처리 예정' : '사용자 확인 필요'}</p>
            </div>
            <p className="max-w-md text-sm text-muted">{branch.responseText}</p>
          </Panel>
        ))}
      </div>

      {cancelling && (
        <Dialog
          confirmLabel="바통 취소"
          description={
            <>
              <p>이 바통을 취소하면 답장을 기다리지 않고 자동 발송도 실행되지 않습니다.</p>
              <p>취소 후에는 되돌릴 수 없습니다.</p>
            </>
          }
          onCancel={() => setCancelling(false)}
          onConfirm={handleCancel}
          title="바통을 취소할까요?"
        />
      )}

      {confirmingDelete && (
        <Dialog
          confirmLabel={deleting ? '삭제 중...' : '바통 삭제'}
          description={<p>이 바통과 준비된 분기가 모두 영구적으로 삭제됩니다. 삭제 후에는 되돌릴 수 없습니다.</p>}
          onCancel={() => setConfirmingDelete(false)}
          onConfirm={handleDelete}
          title="바통을 삭제할까요?"
        />
      )}
    </AppShell>
  )
}
