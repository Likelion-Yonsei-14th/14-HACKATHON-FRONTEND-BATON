import type { HTMLAttributes } from 'react'

export function Panel({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-card bg-card-raised p-5 shadow-card ${className}`} {...props} />
}
