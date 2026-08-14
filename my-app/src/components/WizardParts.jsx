export function WizardHeader({ title, step, crumb }) {
  return (
    <div className="page-head">
      <div>
        <h1 className="page-title">{title}</h1>
        {crumb && <p className="page-copy">{crumb}</p>}
      </div>
      {step && <span className="step-count">{step}</span>}
    </div>
  )
}

export function StepTabs({ active }) {
  return (
    <div className="step-tabs">
      {['1 메시지 작성', '2 분기 편집', '3 최종 확인'].map((label, index) => (
        <span className={index + 1 === active ? 'active' : ''} key={label}>{label}</span>
      ))}
    </div>
  )
}
