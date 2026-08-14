export function SearchBox() {
  return (
    <label className="search-box">
      <span aria-hidden="true">⌕</span>
      <input aria-label="검색" />
    </label>
  )
}

export function SelectField({ label, value = 'Select…' }) {
  return (
    <label className="field">
      <span>{label}</span>
      <select defaultValue="">
        <option value="" disabled>{value}</option>
        <option>권장값</option>
        <option>직접 선택</option>
      </select>
    </label>
  )
}

export function TextAreaField({ label, placeholder, defaultValue, rows = 5 }) {
  return (
    <label className="field field-full">
      <span>{label}</span>
      <textarea placeholder={placeholder} defaultValue={defaultValue} rows={rows} />
    </label>
  )
}

export function ToggleField({ label, helper }) {
  return (
    <div className="toggle-row">
      <span>{label}</span>
      <button className="toggle" type="button" aria-pressed="false" aria-label={label}>
        <span />
      </button>
      <div>
        <strong>자동발송 끔 (권장)</strong>
        {helper && <p>{helper}</p>}
      </div>
    </div>
  )
}
