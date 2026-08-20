import { Link } from 'react-router-dom'
import { buttonClasses } from '../lib/buttonClasses'
import { Wordmark } from '../components/ui/Wordmark'
import heroImage from '../assets/landing-hero.png'

export function Landing() {
  return (
    <div className="min-h-screen">
      <header className="flex h-[76px] items-center justify-between px-8">
        <Wordmark />
        <div className="flex items-center gap-8">
          <Link className="font-suit text-sm font-medium text-body hover:text-strong" to="/login">
            로그인
          </Link>
          <Link className={buttonClasses('primary', 'px-6 py-3 text-base')} to="/signup">
            무료로 시작하기
          </Link>
        </div>
      </header>

      <div className="flex items-center px-16 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div>
            <h1 className="font-suit text-[56px] leading-[1.1] font-medium tracking-tight text-strong">
              기다림 없이,
              <br />
              다음으로
            </h1>
            <p className="font-suit mt-6 text-xl leading-relaxed text-muted">
              Baton은 답장을 기다리는 시간을 없애고
              <br />
              대화를 다음 단계로 넘겨줍니다.
            </p>
            <div className="mt-10 flex gap-4">
              <Link className={buttonClasses('secondary', 'px-8 py-4 text-lg')} to="/login">
                로그인
              </Link>
              <Link className={buttonClasses('primary', 'px-8 py-4 text-lg')} to="/signup">
                무료로 시작하기
              </Link>
            </div>
          </div>
          <img alt="Baton 미리보기" className="w-full rounded-xl" src={heroImage} />
        </div>
      </div>
    </div>
  )
}
