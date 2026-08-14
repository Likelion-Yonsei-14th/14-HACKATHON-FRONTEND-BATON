import { Button, Avatar, cx } from '../ui/Button'
import { SearchBox } from '../ui/FormFields'
import { navItems } from '../../data/mockData'

function Header({ setView }) {
  return (
    <header className="app-header">
      <button className="brand" type="button" onClick={() => setView('landing')}>Baton</button>
      <div className="header-spacer" />
      <SearchBox />
      <Button onClick={() => setView('home')}>바통 홈</Button>
      <Avatar />
    </header>
  )
}

function Sidebar({ active, setView }) {
  return (
    <aside className="sidebar">
      <p className="side-title">메뉴</p>
      {navItems.map((item) => (
        <button
          className={cx('side-link', active === item.id && 'is-active')}
          key={item.id}
          type="button"
          onClick={() => setView(item.view)}
        >
          {item.label}
        </button>
      ))}
    </aside>
  )
}

export function AppShell({ active, children, setView }) {
  return (
    <div className="frame-shell">
      <Header setView={setView} />
      <div className="body-row">
        <Sidebar active={active} setView={setView} />
        <main className="screen-body">{children}</main>
      </div>
    </div>
  )
}
