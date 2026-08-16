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
  const triggerMessageText = (location.state as { triggerMessageText?: string } | null)?.triggerMessageText ?? ''

  const [branches, setBranches] = useState<Branch[]>([])

  useEffect(() => {
    if (!conversationId) return
    api.generateBranches(conversationId, triggerMessageText).then(setBranches)
  }, [conversationId, triggerMessageText])

  function updateDraft(id: string, responseText: string) {
    setBranches((prev) => prev.map((b) => (b.id === id ? { ...b, responseText } : b)))
  }

  return (
    <AppShell>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-suit text-2xl font-semibold text-ink">답장 준비하기</h1>
          <div className="mt-4">
            <StepTabs current={2} />
          </div>
        </div>
      </div>

      <Panel className="mt-6 max-w-3xl">
        <p className="font-semibold text-ink">AI가 예상한 3가지 답변을 확인하세요</p>
        <p className="mt-2 text-sm text-muted">각 분기를 검토하고 필요한 경우 직접 수정하세요. 수정하지 않아도 됩니다.</p>
      </Panel>

      <div className="mt-4 flex max-w-3xl flex-col gap-4">
        {branches.map((branch) => (
          <Panel key={branch.id}>
            <p className="text-sm">
              <span className="font-semibold text-ink">{branch.name}</span>
              {branch.description && <span className="ml-3 text-muted">{branch.description}</span>}
            </p>
            <label className="mt-3 block text-sm text-ink">후속 응답 초안</label>
            <textarea
              className="font-suit mt-2 w-full rounded-[6px] border border-border p-3 text-sm outline-none focus:border-primary"
              onChange={(e) => updateDraft(branch.id, e.target.value)}
              rows={3}
              value={branch.responseText}
            />
          </Panel>
        ))}
      </div>

      <div className="mt-6 flex max-w-3xl items-center justify-between">
        <button
          className="font-suit text-sm text-muted-2 hover:text-ink"
          onClick={() => navigate(`/conversations/${conversationId}/compose`, { state: { triggerMessageText } })}
          type="button"
        >
          이전 단계로
        </button>
        <Button
          disabled={branches.length === 0}
          onClick={() =>
            navigate(`/conversations/${conversationId}/confirm`, { state: { triggerMessageText, branches } })
          }
        >
          발송 확인으로
        </Button>
      </div>
    </AppShell>
  )
}
