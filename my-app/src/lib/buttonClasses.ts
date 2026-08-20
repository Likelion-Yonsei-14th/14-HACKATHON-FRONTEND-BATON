export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-inverse text-ondark hover:opacity-90 baton-lift',
  secondary: 'bg-card-raised text-body shadow-hairline hover:bg-chip baton-lift',
  ghost: 'bg-transparent text-muted hover:bg-chip hover:text-body',
}

/** react-router Link 등 <button>이 아닌 요소에 버튼 스타일을 입힐 때도 재사용. */
export function buttonClasses(variant: ButtonVariant = 'primary', className = '') {
  return `font-suit inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-40 ${variantClasses[variant]} ${className}`
}
