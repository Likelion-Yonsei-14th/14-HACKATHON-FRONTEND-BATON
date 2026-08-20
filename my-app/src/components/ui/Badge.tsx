import type { ReactNode } from 'react'

/** 바통 상태 9종 → 시그널 3색(done/review/error) + 명도 2단(waiting/idle) + off. Step2 매핑표 C·D 참고. */
export type BadgeTone = 'done' | 'review' | 'error' | 'waiting' | 'idle' | 'off'

const dotClasses: Record<BadgeTone, string> = {
  done: 'text-status-done',
  review: 'text-status-review',
  error: 'text-status-error',
  waiting: 'text-status-waiting',
  idle: 'text-status-idle',
  off: 'text-status-off',
}

/** 색만으로 상태를 전달하지 않는다(AA 1.4.1) — 도트는 보조 표시, 텍스트가 상태명을 그대로 말한다. */
export function Badge({ tone = 'idle', children }: { tone?: BadgeTone; children: ReactNode }) {
  return (
    <span className="font-suit inline-flex h-[26px] items-center gap-1.5 rounded-full bg-chip px-3 text-[11px] font-medium text-body shadow-hairline">
      <span className={`size-[7px] rounded-full bg-current ${dotClasses[tone]}`} />
      {children}
    </span>
  )
}
