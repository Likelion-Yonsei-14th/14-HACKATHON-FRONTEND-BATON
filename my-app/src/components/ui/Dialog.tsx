import type { ReactNode } from 'react'
import { Button } from './Button'

interface DialogProps {
  title: string
  description: ReactNode
  confirmLabel: string
  onConfirm: () => void
  onCancel: () => void
}

export function Dialog({ title, description, confirmLabel, onConfirm, onCancel }: DialogProps) {
  return (
    <div className="baton-scrim fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="baton-rise w-full max-w-md rounded-card bg-card-raised p-8 shadow-float">
        <h2 className="font-suit text-lg font-medium text-strong">{title}</h2>
        <div className="mt-4 space-y-3 text-sm text-muted">{description}</div>
        <div className="mt-6 flex justify-end gap-3">
          <button className="font-suit text-sm text-muted hover:text-body" onClick={onCancel} type="button">
            취소
          </button>
          <Button onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </div>
  )
}
