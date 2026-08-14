import { Button } from './ui/Button'

export function PermissionRow({ title, copy }) {
  return (
    <div className="permission-row">
      <strong>{title}</strong>
      <span>{copy}</span>
    </div>
  )
}

export function MetaLine({ label, value }) {
  return (
    <div className="meta-line">
      <strong>{label}</strong>
      <span>{value}</span>
    </div>
  )
}

export function MetaBlock({ label, value }) {
  return (
    <div className="meta-block">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

export function PlatformLine({ name, detail, state, action }) {
  return (
    <div className="platform-line">
      <div>
        <strong>{name}</strong>
        <p>{detail}</p>
      </div>
      <span className="line" />
      <strong>{state}</strong>
      {action && <Button variant="secondary">{action}</Button>}
    </div>
  )
}

export function RecordRow({ left, right }) {
  return (
    <div className="record-row">
      <span>{left}</span>
      <span className="line" />
      <small>{right}</small>
    </div>
  )
}
