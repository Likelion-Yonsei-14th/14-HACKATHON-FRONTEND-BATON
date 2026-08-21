import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { api } from '../api'
import type { Branch } from '../types'
import { AppShell } from '../components/layout/AppShell'
import { Panel } from '../components/ui/Panel'
import { StepTabs } from '../components/ui/StepTabs'
import { Button } from '../components/ui/Button'

export function BranchPrep() {
  const { conversationId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state as { batonId?: string; branches?: Branch[]; triggerMessage?: string } | null
  const batonId = state?.batonId
  const triggerMessage = state?.triggerMessage

  const [branches, setBranches] = useState<Branch[]>(state?.branches ?? [])
  const [adding, setAdding] = useState(false)
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null)
  const [actionError, setActionError] = useState<string | null>(null)

  useEffect(() => {
    if (!batonId) navigate(`/conversations/${conversationId}/compose`, { replace: true })
  }, [batonId, conversationId, navigate])

  if (!batonId) return null

  function updateDraft(id: string, responseText: string) {
    setBranches((prev) => prev.map((b) => (b.id === id ? { ...b, responseText } : b)))
  }

  function persistDraft(id: string, responseText: string) {
    api.updateBranch(batonId!, id, { responseText })
  }

  function updateName(id: string, name: string) {
    setBranches((prev) => prev.map((b) => (b.id === id ? { ...b, name } : b)))
  }

  function persistName(id: string, name: string) {
    api.updateBranch(batonId!, id, { name })
  }

  function updateCondition(id: string, conditionText: string) {
    setBranches((prev) => prev.map((b) => (b.id === id ? { ...b, conditionText } : b)))
  }

  function persistCondition(id: string, conditionText: string) {
    api.updateBranch(batonId!, id, { conditionText })
  }

  async function handleAddBranch() {
    setAdding(true)
    setActionError(null)
    try {
      const branch = await api.createBranch(batonId!, { name: '새 분기', sortOrder: branches.length })
      setBranches((prev) => [...prev, branch])
    } catch {
      setActionError('분기를 추가하지 못했습니다. 다시 시도해주세요.')
    } finally {
      setAdding(false)
    }
  }

  async function handleDeleteBranch(id: string) {
    setActionError(null)
    try {
      await api.deleteBranch(batonId!, id)
      setBranches((prev) => prev.filter((b) => b.id !== id))
    } catch {
      setActionError('분기를 삭제하지 못했습니다. 다시 시도해주세요.')
    } finally {
      setPendingDeleteId(null)
    }
  }

  return (
    <AppShell>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-suit text-2xl font-medium text-strong">답장 준비하기</h1>
          <div className="mt-4">
            <StepTabs current={2} />
          </div>
        </div>
      </div>

      {triggerMessage && (
        <Panel className="mt-6 max-w-3xl">
          <p className="text-sm text-muted">내가 보낼 메시지</p>
          <p className="font-suit mt-2 whitespace-pre-wrap text-sm text-body">{triggerMessage}</p>
        </Panel>
      )}

      <Panel className="mt-4 max-w-3xl">
        <p className="font-medium text-strong">AI가 예상한 3가지 답변을 확인하세요</p>
        <p className="mt-2 text-sm text-muted">각 분기를 검토하고 필요한 경우 직접 수정하세요. 수정하지 않아도 됩니다.</p>
      </Panel>

      <div className="mt-4 flex max-w-3xl flex-col gap-4">
        {branches.map((branch) => (
          <Panel key={branch.id}>
            <div className="flex items-start justify-between gap-3">
              <input
                className="font-suit min-w-0 flex-1 rounded-field bg-chip px-3 py-2 text-sm font-medium text-strong shadow-hairline outline-none"
                onBlur={(e) => persistName(branch.id, e.target.value)}
                onChange={(e) => updateName(branch.id, e.target.value)}
                value={branch.name}
              />
              {pendingDeleteId === branch.id ? (
                <div className="flex shrink-0 items-center gap-2 font-suit text-[13px]">
                  <span className="text-muted">삭제할까요?</span>
                  <button
                    className="font-medium text-status-error hover:opacity-80"
                    onClick={() => handleDeleteBranch(branch.id)}
                    type="button"
                  >
                    삭제
                  </button>
                  <button
                    className="text-muted hover:text-body"
                    onClick={() => setPendingDeleteId(null)}
                    type="button"
                  >
                    취소
                  </button>
                </div>
              ) : (
                <button
                  className="font-suit shrink-0 text-[13px] text-muted hover:text-status-error"
                  onClick={() => setPendingDeleteId(branch.id)}
                  type="button"
                >
                  삭제
                </button>
              )}
            </div>
            <label className="mt-3 block text-sm text-body">상대가 이렇게 답하면</label>
            <textarea
              className="font-suit mt-2 w-full rounded-field bg-chip p-3 text-sm text-body shadow-hairline outline-none"
              onBlur={(e) => persistCondition(branch.id, e.target.value)}
              onChange={(e) => updateCondition(branch.id, e.target.value)}
              rows={2}
              value={branch.conditionText}
            />
            <label className="mt-3 block text-sm text-body">후속 응답</label>
            <textarea
              className="font-suit mt-2 w-full rounded-field bg-chip p-3 text-sm text-body shadow-hairline outline-none"
              onBlur={(e) => persistDraft(branch.id, e.target.value)}
              onChange={(e) => updateDraft(branch.id, e.target.value)}
              rows={3}
              value={branch.responseText}
            />
          </Panel>
        ))}
        <button
          className="font-suit w-fit rounded-full bg-chip px-4 py-2 text-sm font-medium text-muted shadow-hairline transition hover:text-strong disabled:opacity-40"
          disabled={adding}
          onClick={handleAddBranch}
          type="button"
        >
          {adding ? '추가 중...' : '+ 분기 추가'}
        </button>
        {actionError && <p className="font-suit text-sm text-red-500">{actionError}</p>}
      </div>

      <div className="mt-6 flex max-w-3xl items-center justify-between">
        <button
          className="font-suit text-sm text-muted hover:text-body"
          onClick={() => navigate(`/conversations/${conversationId}/compose`)}
          type="button"
        >
          이전 단계로
        </button>
        <Button
          disabled={branches.length === 0}
          onClick={() => navigate(`/conversations/${conversationId}/confirm`, { state: { batonId } })}
        >
          발송 확인으로
        </Button>
      </div>
    </AppShell>
  )
}
