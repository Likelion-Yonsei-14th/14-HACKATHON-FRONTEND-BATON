import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../api'
import { Wordmark } from '../ui/Wordmark'

function ProfileIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 32 32" width="18">
      <path
        d="M24.6944 28.2205C22.5582 25.8347 19.4544 24.3333 16 24.3333C12.5456 24.3333 9.44154 25.8347 7.30534 28.2205M16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31ZM16 19.3333C13.2386 19.3333 11 17.0948 11 14.3333C11 11.5719 13.2386 9.33333 16 9.33333C18.7614 9.33333 21 11.5719 21 14.3333C21 17.0948 18.7614 19.3333 16 19.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export function Header() {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    api.getCurrentUser().then((user) => setUserName(user.name))
  }, [])

  return (
    <header className="flex h-[76px] items-center justify-between px-8">
      <Link to="/home">
        <Wordmark />
      </Link>
      <Link className="flex items-center gap-3 rounded-full px-2 py-1 baton-lift hover:bg-chip" to="/settings">
        <span className="font-suit text-sm font-medium text-body">{userName}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-chip text-body shadow-hairline">
          <ProfileIcon />
        </span>
      </Link>
    </header>
  )
}
