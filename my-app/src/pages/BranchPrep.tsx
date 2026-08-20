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
            <p className="text-sm">
              <span className="font-medium text-strong">{branch.name}</span>
              {branch.description && <span className="ml-3 text-muted">{branch.description}</span>}
            </p>
            <label className="mt-3 block text-sm text-body">후속 응답 초안</label>
            <textarea
              className="font-suit mt-2 w-full rounded-field bg-chip p-3 text-sm text-body shadow-hairline outline-none"
              onBlur={(e) => persistDraft(branch.id, e.target.value)}
              onChange={(e) => updateDraft(branch.id, e.target.value)}
              rows={3}
              value={branch.responseText}
            />
          </Panel>
        ))}
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
