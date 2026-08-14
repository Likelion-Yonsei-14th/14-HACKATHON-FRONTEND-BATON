export function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Button({ children, variant = 'link', className, ...props }) {
  return (
    <button className={cx('btn', `btn-${variant}`, className)} type="button" {...props}>
      {children}
    </button>
  )
}

export function Avatar({ label = 'Aa' }) {
  return <div className="avatar" aria-hidden="true">{label}</div>
}

export function Panel({ children, className }) {
  return <section className={cx('panel', className)}>{children}</section>
}
