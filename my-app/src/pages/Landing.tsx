import { Link } from 'react-router-dom'
import { buttonClasses } from '../lib/buttonClasses'
import { Wordmark } from '../components/ui/Wordmark'

function SendIcon() {
  return (
    <svg fill="none" height="14" viewBox="0 0 16 16" width="14">
      <path d="M14.5 1.5L7 9M14.5 1.5L10 14.5L7 9M14.5 1.5L1.5 6L7 9" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg fill="none" height="12" viewBox="0 0 14 14" width="12">
      <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="#0b0b0b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  )
}

function BranchOption({ title, desc, selected }: { title: string; desc?: string; selected?: boolean }) {
  return (
    <div
      className={`flex gap-2.5 rounded-field p-3 ${desc ? 'items-start' : 'items-center'} ${
        selected ? 'bg-card-raised shadow-card' : 'bg-chip shadow-hairline'
      }`}
    >
      <span className="flex-1">
        <span className={`block text-xs ${selected ? 'text-strong' : 'text-body'}`}>{title}</span>
        {desc && <span className="mt-[3px] block text-micro text-muted">{desc}</span>}
      </span>
      {selected ? (
        <span className="mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full bg-inverse">
          <span className="size-1.5 rounded-full bg-white" />
        </span>
      ) : (
        <span className="mt-0.5 size-[18px] shrink-0 rounded-full bg-paper-0 shadow-hairline" />
      )}
    </div>
  )
}

function ThreadMessage({ avatar, avatarBg, avatarText, time, text }: { avatar: string; avatarBg: string; avatarText: string; time: string; text: string }) {
  return (
    <div className="flex gap-2.5">
      <span className={`flex size-[26px] shrink-0 items-center justify-center rounded-full text-micro ${avatarBg} ${avatarText}`}>{avatar}</span>
      <span className="flex flex-col gap-[3px]">
        <span className="text-micro text-muted">{time}</span>
        <span className="text-micro leading-relaxed text-body">{text}</span>
      </span>
    </div>
  )
}

export function Landing() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-10 py-5">
        <Wordmark />
        <div className="flex items-center gap-3">
          <Link className={buttonClasses('ghost', 'px-5 py-2.5 text-sm')} to="/login">
            로그인
          </Link>
          <Link className={buttonClasses('primary', 'px-6 py-2.5 text-sm')} to="/signup">
            무료로 시작하기
          </Link>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-[0.85fr_1.15fr] items-center gap-14 px-10 pt-10 pb-[72px]">
        <section className="flex max-w-[520px] flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="font-suit text-[64px] leading-[1.05] font-medium tracking-tight text-strong">
              기다림 없이,
              <br />
              다음으로
            </h1>
            <p className="font-suit max-w-[420px] text-lg leading-relaxed text-muted">
              Baton은 답장을 기다리는 시간을 없애고
              <br />
              대화를 다음 단계로 넘겨줍니다.
            </p>
          </div>
          <div className="flex gap-3">
            <Link className={buttonClasses('primary', 'px-8 py-4 text-base')} to="/signup">
              무료로 시작하기
            </Link>
            <Link className={buttonClasses('secondary', 'px-8 py-4 text-base')} to="/login">
              로그인
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-3 items-start gap-4">
          {/* 메시지 작성 */}
          <div className="mt-14 flex min-h-[300px] flex-col gap-3 rounded-card bg-card-raised p-5 shadow-card">
            <span className="text-xs text-muted">메시지 작성</span>
            <div className="flex-1 rounded-field bg-card px-4 py-3.5 text-sm leading-[1.55] text-body">
              결제 API를 3월 20일까지
              <br />
              받을 수 있을까요?
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="size-[28px] rounded-full bg-chip shadow-hairline" />
                <span className="size-[28px] rounded-full bg-chip shadow-hairline" />
              </div>
              <span className="flex size-[34px] items-center justify-center rounded-full bg-inverse">
                <SendIcon />
              </span>
            </div>
          </div>

          {/* 분기 설정 */}
          <div className="flex min-h-[300px] flex-col gap-2.5 rounded-card bg-card-raised p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted">분기 설정</span>
              <span className="rounded-full bg-chip px-2.5 py-1 text-micro text-muted shadow-hairline">AI 초안</span>
            </div>
            <div className="flex flex-col gap-2">
              <BranchOption desc="감사합니다. 일정 그대로 확정하고, 3월 20일부터 시작하겠습니다." title="가능하다" />
              <BranchOption desc="알겠습니다. 그 날짜 기준으로 QA를 재배치하겠습니다." selected title="늦어진다 (날짜 언급)" />
              <BranchOption desc="확인했습니다. 대안으로 전환해서 일정 업데이트 후 공유드리겠습니다." title="불가능하다" />
              <BranchOption title="어디에도 안 맞음" />
            </div>
          </div>

          {/* 대화 진행 중 */}
          <div className="mt-6 flex min-h-[300px] flex-col gap-3 rounded-card bg-card-raised p-5 shadow-card">
            <span className="text-xs text-muted">대화 진행 중</span>
            <div className="flex flex-col gap-3">
              <ThreadMessage avatar="나" avatarBg="bg-ink-800" avatarText="text-ondark" text="결제 API를 3월 20일까지 받을 수 있을까요?" time="3.10 23:00" />
              <ThreadMessage avatar="상" avatarBg="bg-flame-100" avatarText="text-flame-500" text="4월 초쯤 될 것 같아요." time="3.11 08:15" />
              <div className="flex flex-col gap-1.5 rounded-field bg-inverse p-3.5">
                <span className="text-micro tracking-[0.04em] text-lime-500">BATON AI · 08:15</span>
                <span className="text-micro text-ink-300">분기 일치</span>
                <span className="text-xs text-ondark">늦어진다 (날짜 언급)</span>
                <span className="font-mono text-[13px] text-ink-300">신뢰도 94%</span>
              </div>
              <div className="flex gap-2.5">
                <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-lime-500">
                  <CheckIcon />
                </span>
                <span className="flex flex-col gap-[3px]">
                  <span className="text-micro text-muted">BATON · 08:15</span>
                  <span className="text-micro leading-relaxed text-body">
                    알겠습니다. 그 날짜 기준으로 QA를 재배치하겠습니다. 3월 말은 넘기면 B0와 조율해 다시 이야기하죠.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
