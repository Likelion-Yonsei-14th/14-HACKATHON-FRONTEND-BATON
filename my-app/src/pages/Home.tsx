import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import type { Baton, Classification, Conversation } from '../types'
import { AppShell } from '../components/layout/AppShell'
import { Badge, type BadgeTone } from '../components/ui/Badge'
import { buttonClasses } from '../lib/buttonClasses'

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function formatElapsed(activatedAt: string | null) {
  if (!activatedAt) return ''
  const ms = Date.now() - new Date(activatedAt).getTime()
  const hours = Math.floor(ms / 3_600_000)
  const minutes = Math.floor((ms % 3_600_000) / 60_000)
  return hours > 0 ? `경과: ${hours}시간 ${minutes}분` : `경과: ${minutes}분`
}

function formatLocalTime(timezone: string | null) {
  if (!timezone) return ''
  try {
    return new Intl.DateTimeFormat('ko-KR', { hour: '2-digit', minute: '2-digit', timeZone: timezone }).format(
      new Date(),
    )
  } catch {
    return ''
  }
}

function statusMeta(baton: Baton, classification: Classification | null): { tone: BadgeTone; label: string; action: string; to: string } {
  if (baton.status === 'COMPLETED' || baton.status === 'EXECUTED') {
    return { tone: 'done', label: '발송 완료 — Slack에서 확인하세요', action: '결과 확인', to: `/batons/${baton.id}/result` }
  }
  if (baton.status === 'PENDING_REVIEW') {
    const label = classification?.containsNewQuestion
      ? '검토 필요 — 직접 확인이 필요해요'
      : '검토 필요 — AI가 판단하지 못했어요'
    return { tone: 'review', label, action: '응답 처리', to: `/batons/${baton.id}/pending` }
  }
  if (baton.status === 'EXPIRED') {
    return { tone: 'idle', label: '만료됨 — 답장이 오지 않았어요', action: '상세 보기', to: `/batons/${baton.id}` }
  }
  if (baton.status === 'CANCELLED') {
    return { tone: 'off', label: '취소됨', action: '상세 보기', to: `/batons/${baton.id}` }
  }
  if (baton.status === 'ERROR') {
    return { tone: 'error', label: '오류 발생', action: '상세 보기', to: `/batons/${baton.id}` }
  }
  // WAITING (및 DRAFT/ARMED — 정상 흐름에선 activateBaton이 끝나야 홈에 표시되므로 실질적으로 안 나타남)
  return { tone: 'waiting', label: '답장 기다리는 중', action: '상세 보기', to: `/batons/${baton.id}` }
}

/** 취소된 행은 흐리게 처리한다. */
function rowAccentClass(tone: BadgeTone) {
  if (tone === 'off') return 'opacity-50'
  return ''
}

type FilterLabel = '발송 완료' | '대기중' | '검토 필요'

function matchesFilter(baton: Baton, filter: FilterLabel | null) {
  if (!filter) return true
  if (filter === '발송 완료') return baton.status === 'COMPLETED' || baton.status === 'EXECUTED'
  if (filter === '대기중') return baton.status === 'WAITING'
  return baton.status === 'PENDING_REVIEW'
}

export function Home() {
  const [batons, setBatons] = useState<Baton[]>([])
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [classifications, setClassifications] = useState<Record<string, Classification | null>>({})
  const [kpi, setKpi] = useState<{ activeBatons: number; needsAttention: number } | null>(null)
  const [filter, setFilter] = useState<FilterLabel | null>(null)

  useEffect(() => {
    api.getBatons().then(async (rawList) => {
      // DRAFT(발송 확인 단계를 안 끝내고 이탈한 미완성 바통)는 사용자가 실제로 "보낸" 게
      // 아니라서 홈에 노출 안 함 — statusMeta의 기본 분기가 DRAFT도 "답장 기다리는 중"으로
      // 표시해버려서 대기중 카운트(백엔드 집계, WAITING만 셈)와 화면에 보이는 행 수가 어긋났었다.
      const list = rawList.filter((b) => b.status !== 'DRAFT' && b.status !== 'ARMED')
      setBatons(list)
      const pendingReview = list.filter((b) => b.status === 'PENDING_REVIEW')
      const entries = await Promise.all(
        pendingReview.map(async (b) => [b.id, await api.getClassification(b.id)] as const),
      )
      setClassifications(Object.fromEntries(entries))
    })
    api.getConversations().then(setConversations)
    api.getDashboardMetrics().then(setKpi).catch(() => {})
  }, [])

  // 대기중/검토 필요 숫자는 백엔드 집계 API(/dashboard/metrics)를 그대로 신뢰한다 —
  // 백엔드 팀이 해당 집계 로직을 고쳐주기로 함. 값이 없을 때만 로컬 계산으로 폴백.
  const counts = {
    전체: batons.length,
    '발송 완료': batons.filter((b) => b.status === 'COMPLETED' || b.status === 'EXECUTED').length,
    대기중: kpi?.activeBatons ?? batons.filter((b) => b.status === 'WAITING').length,
    '검토 필요': kpi?.needsAttention ?? batons.filter((b) => b.status === 'PENDING_REVIEW').length,
  }

  return (
    <AppShell>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-suit text-2xl font-medium text-strong">바통 홈</h1>
          <p className="font-suit mt-1 text-sm text-muted">마지막 동기화: 2분 전 (14:32 KST)</p>
        </div>
        <Link className={buttonClasses('primary', 'px-6 py-3 text-base')} to="/conversations">
          새 바통 만들기
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-6">
        {Object.entries(counts).map(([label, value]) => {
          const isSelected = filter ? filter === label : label === '전체'
          return (
            <button
              className={`rounded-card p-6 text-left transition ${
                isSelected ? 'bg-card-raised shadow-card ring-2 ring-lime-500' : 'bg-card hover:shadow-card'
              }`}
              key={label}
              onClick={() => setFilter(label === '전체' ? null : (label as FilterLabel))}
              type="button"
            >
              <p className="font-suit text-metric font-normal leading-tight text-strong">
                {value} <span className="text-base font-normal text-muted">{label}</span>
              </p>
            </button>
          )
        })}
      </div>

      <div className="mt-6 flex flex-col gap-2">
        {batons.filter((b) => matchesFilter(b, filter)).length === 0 && (
          <p className="font-suit text-sm text-muted">해당 상태의 바통이 없어요.</p>
        )}
        {batons.filter((b) => matchesFilter(b, filter)).map((baton) => {
          const conversation = conversations.find((c) => c.id === baton.conversationId)
          const name = conversation?.counterpartName ?? conversation?.title ?? baton.conversationId
          const meta = statusMeta(baton, classifications[baton.id] ?? null)
          return (
            <Link
              className={`baton-lift flex items-center justify-between rounded-card bg-card-raised p-4 shadow-card hover:bg-chip ${rowAccentClass(meta.tone)}`}
              key={baton.id}
              to={meta.to}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-[30px] items-center justify-center rounded-full bg-ink-600 text-[10px] font-medium text-ondark">
                  {initials(name)}
                </span>
                <div>
                  <p className="text-[13px] font-medium text-strong">{name}</p>
                  <p className="text-[13px] text-muted">
                    {conversation?.conversationType === 'CHANNEL'
                      ? `# ${conversation.title ?? ''}`
                      : conversation?.title
                        ? `DM · # ${conversation.title}`
                        : 'DM'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge tone={meta.tone}>{meta.label}</Badge>
                <span className="text-[13px] text-muted">{meta.action}</span>
              </div>
              <div className="flex gap-4 text-[11px] text-muted">
                <span>{formatLocalTime(conversation?.counterpartTimezone ?? null)}</span>
                <span>{formatElapsed(baton.activatedAt)}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </AppShell>
  )
}
