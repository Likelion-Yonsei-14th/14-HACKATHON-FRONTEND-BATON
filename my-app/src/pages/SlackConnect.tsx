import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import slackLogo from '../assets/slack-logo.png'
import slackIconWhite from '../assets/slack-icon-white.png'

export function SlackConnect() {
  return (
    <div className="min-h-screen bg-landing">
      <Header />
      <div className="flex justify-center px-8 py-24">
        <div className="w-full max-w-3xl rounded-[10px] bg-white p-16 text-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]">
          <img alt="Slack" className="mx-auto h-24 w-24 object-contain" src={slackLogo} />
          <h1 className="font-suit mt-8 text-4xl font-semibold tracking-[0.3px] text-ink">
            <span className="text-primary">SLACK</span>을 연결하고
            <br />
            대화를 자동으로 이어가세요
          </h1>
          <p className="font-suit mt-6 text-xl text-muted">
            Baton이 채널과 메시지를 모니터링하고,
            <br />
            AI가 대신 답변해드립니다.
          </p>
          {/* 실제로는 Slack OAuth authorize URL로 이동. 스켈레톤 단계라 콜백 화면으로 바로 링크. */}
          <Link
            className="font-suit mt-10 inline-flex items-center gap-3 rounded-[10px] bg-primary px-8 py-4 text-xl font-semibold text-white hover:opacity-90"
            to="/connect/callback"
          >
            <img alt="" className="h-6 w-6" src={slackIconWhite} />
            Slack 연결하기
          </Link>
        </div>
      </div>
    </div>
  )
}
