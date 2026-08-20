import { Link, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Header } from './Header'

const navItems = [
  { label: '바통 홈', to: '/home' },
  { label: '새 바통', to: '/conversations' },
  { label: '개인설정', to: '/settings' },
]

export function AppShell({ children }: { children: ReactNode }) {
  const location = useLocation()

  return (
    <div className="min-h-screen">
      <Header />

      <div className="flex">
        <aside className="flex h-[calc(100vh-76px)] w-[260px] flex-col px-4">
          <nav className="flex flex-col gap-2 pt-2">
            {navItems.map((item) => {
              const isActive = location.pathname.startsWith(item.to)
              return (
                <Link
                  className={`font-suit rounded-full px-4 py-2.5 text-sm font-medium transition ${
                    isActive ? 'bg-inverse text-ondark' : 'text-muted hover:bg-chip hover:text-body'
                  }`}
                  key={item.to}
                  to={item.to}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </aside>

        <main className="flex-1 p-10">{children}</main>
      </div>
    </div>
  )
}
