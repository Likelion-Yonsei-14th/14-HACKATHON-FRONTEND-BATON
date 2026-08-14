import { useState } from 'react'
import './App.css'

const navItems = [
  { id: 'home', label: '바통 홈', view: 'home' },
  { id: 'new', label: '새 바통', view: 'conversations' },
  { id: 'history', label: '결정 기록', view: 'history' },
  { id: 'settings', label: '개인 설정', view: 'settings' },
]

const statCards = [
  ['전체', '12'],
  ['대기 중', '5'],
  ['보류', '2'],
  ['자동 발송 완료', '3'],
  ['만료', '2'],
]

const batonItems = [
  {
    name: 'Pavel Kowalski',
    channel: 'DM · #product-sync',
    status: '⚠ 보류 — 분기 불일치',
    action: '응답 처리',
    target: 'pending',
    localTime: '상대 현지시간: 09:14 (Warsaw, UTC+2)',
    elapsed: '경과: 3시간 41분',
  },
  {
    name: 'Aisha Lim',
    channel: 'DM · #async-review',
    status: '⚠ 보류 — 확신도 미달',
    action: '응답 처리',
    target: 'pending',
    localTime: '상대 현지시간: 15:52 (Singapore, UTC+8)',
    elapsed: '경과: 1시간 08분',
  },
  {
    name: 'Maria Rossi',
    channel: 'DM · #design-handoff',
    status: '✓ 자동 발송 완료 — 미확인',
    action: '결과 확인',
    target: 'result',
    localTime: '상대 현지시간: 08:20 (Rome, UTC+1)',
    elapsed: '경과: 5시간 12분',
  },
  {
    name: 'James Kim',
    channel: '#engineering · #sprint-34',
    status: '◷ 대기 중 — 답장 없음',
    action: '상세 보기',
    target: 'waiting',
    localTime: '상대 현지시간: 22:05 (New York, UTC-5)',
    elapsed: '경과: 8시간 33분',
  },
  {
    name: 'Fatima Sharma',
    channel: 'DM · #legal-review',
    status: '◷ 대기 중 — 최대 대기 2시간 남음',
    action: '상세 보기',
    target: 'waiting',
    localTime: '상대 현지시간: 18:44 (Dubai, UTC+4)',
    elapsed: '경과: 6시간 16분',
  },
  {
    name: 'Tomás Novák',
    channel: '#strategy · #q3-okr',
    status: '✓ 자동 발송 완료',
    localTime: '상대 현지시간: 09:01 (Prague, UTC+2)',
    elapsed: '경과: 11시간 04분',
  },
]

const conversations = [
  ['# 디자인-리뷰', '채널', '최근 활동 2시간 전'],
  ['@ 김민준', 'DM', '최근 활동 4시간 전'],
  ['# 프로덕트-스프린트', '채널', '최근 활동 어제'],
  ['@ 이서연', 'DM', '최근 활동 어제'],
  ['# 개발-백엔드', '채널', '최근 활동 3일 전'],
]

const messages = [
  {
    author: 'Jamie Lee',
    meta: '상대 현지시간: 오전 9:42 (PST)',
    body: 'Can we confirm the Q3 roadmap priority before your Friday morning? I want to align design review slots before the sprint starts.',
  },
  {
    author: '나 (김민준)',
    meta: '내 시간: 오후 2:55 (KST)',
    body: '좋아요. 제가 오늘 중 우선순위 후보를 정리해 두겠습니다. 검토 가능한 시간대를 알려주시면 맞춰볼게요.',
  },
  {
    author: 'Jamie Lee',
    meta: '상대 현지시간: 오전 10:03 (PST)',
    body: 'Great. The main risk is whether backend scope is locked. If not, design should prepare two options.',
  },
  {
    author: '나 (김민준)',
    meta: '내 시간: 오후 3:18 (KST)',
    body: '그럼 백엔드 확정 여부에 따라 A/B 응답을 준비해두겠습니다. 답장이 늦어져도 승인 흐름이 끊기지 않게 하겠습니다.',
  },
]

const branchItems = [
  {
    id: 'A',
    title: '분기 A — 긍정적 수락',
    description: '상대방이 제안을 수락하거나 동의하는 경우',
    draft: '좋습니다. 확인해 주셔서 감사합니다. 말씀해주신 일정에 맞춰 다음 단계로 진행하겠습니다.',
  },
  {
    id: 'B',
    title: '분기 B — 조건부 또는 추가 질문',
    description: '상대방이 조건을 달거나 추가 정보를 요청하는 경우',
    draft: '확인했습니다. 필요한 조건을 알려주시면 그 기준에 맞춰 다시 정리해서 공유드리겠습니다.',
  },
  {
    id: 'C',
    title: '분기 C — 부정적 거절 또는 보류',
    description: '상대방이 거절하거나 판단을 미루는 경우',
    draft: '알겠습니다. 지금 진행이 어렵다면 대안 일정이나 담당자를 알려주시면 그 방향으로 맞추겠습니다.',
  },
]

function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Avatar({ label = 'Aa' }) {
  return <div className="avatar" aria-hidden="true">{label}</div>
}

function Button({ children, variant = 'link', className, ...props }) {
  return (
    <button className={cx('btn', `btn-${variant}`, className)} type="button" {...props}>
      {children}
    </button>
  )
}

function SearchBox() {
  return (
    <label className="search-box">
      <span aria-hidden="true">⌕</span>
      <input aria-label="검색" />
    </label>
  )
}

function SelectField({ label, value = 'Select…' }) {
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

function TextAreaField({ label, placeholder, defaultValue, rows = 5 }) {
  return (
    <label className="field field-full">
      <span>{label}</span>
      <textarea placeholder={placeholder} defaultValue={defaultValue} rows={rows} />
    </label>
  )
}

function ToggleField({ label, helper }) {
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

function Panel({ children, className }) {
  return <section className={cx('panel', className)}>{children}</section>
}

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

function AppShell({ active, children, setView }) {
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

function Landing({ setView }) {
  return (
    <AppShell active="home" setView={setView}>
      <section className="landing-hero">
        <h1>상대가 자는 동안에도, 바통은 준비되어 있습니다</h1>
        <p>Baton은 시차가 있는 협업 상대에게 보낼 답장을 미리 준비해 둡니다. 자동 발송 여부는 언제나 사용자가 결정합니다.</p>
        <Button variant="primary" onClick={() => setView('platform')}>플랫폼 연결 시작</Button>
      </section>

      <section className="feature-grid">
        <Panel>
          <h2>비동기 응답 준비</h2>
          <p>상대 답장의 유형을 미리 예측하고 세 가지 분기별 응답 초안을 준비합니다. 답장이 도착하면 가장 적합한 분기를 AI가 선택합니다.</p>
        </Panel>
        <Panel>
          <h2>확신도 기반 자동 발송</h2>
          <p>AI 판정 확신도가 설정한 임계값을 넘을 때만 자동 발송됩니다. 확신도가 낮으면 사용자에게 수동 확인을 요청합니다.</p>
        </Panel>
        <Panel>
          <h2>판정 근거와 사용자 통제</h2>
          <p>자동 발송 결과에는 판정 분기, 확신도, 판정 근거가 함께 제공됩니다. 발송 후 되돌리기 경로도 항상 열려 있습니다.</p>
        </Panel>
      </section>

      <h2 className="section-heading">플랫폼 연결 안내</h2>
      <div className="stack">
        <Panel>
          <h3>필요한 권한</h3>
          <p>채널 및 DM 메시지 읽기, 내 계정으로 메시지 보내기 권한이 필요합니다. 다른 사용자의 계정에는 접근하지 않습니다.</p>
        </Panel>
        <Panel>
          <h3>연결 목적</h3>
          <p>사용자 토큰을 통해 대화 맥락을 불러오고, 준비된 응답을 내 계정으로 발송합니다. 토큰은 Baton 서버에 암호화되어 저장됩니다.</p>
        </Panel>
      </div>
      <p className="footnote center">자동 발송은 기본적으로 꺼진 상태로 시작합니다.</p>
      <p className="footnote center subtle">자동 발송 사실과 이후 답장은 각 플랫폼에서 직접 확인해야 합니다.</p>
    </AppShell>
  )
}

function PlatformConnect({ setView, setModal }) {
  return (
    <AppShell active="settings" setView={setView}>
      <h1 className="page-title">플랫폼 연결</h1>
      <p className="page-copy">Baton이 업무 대화를 읽고 자동 응답을 준비하려면 계정 연결이 필요합니다.</p>

      <Panel className="platform-card">
        <h2>Slack</h2>
        <p>연결되지 않음</p>
        <div className="inner-box">
          <p className="label">요청 권한 및 사용 목적</p>
          <PermissionRow title="채널·DM 메시지 읽기" copy="바통 대상 대화의 맥락을 분석하는 데 사용합니다." />
          <PermissionRow title="메시지 전송" copy="사용자의 확인 후 대화 스레드에 응답을 발송하는 데 사용합니다." />
          <PermissionRow title="사용자 및 채널 정보 조회" copy="상대방 타임존과 업무시간을 확인하는 데 사용합니다." />
        </div>
        <p className="footnote">Baton은 사용자의 명시적 확인 없이 메시지를 자동 발송하지 않습니다. 자동발송은 기본적으로 꺼진 상태로 시작합니다.</p>
        <div className="actions end">
          <Button onClick={() => setView('connectError')}>연결 오류 확인</Button>
          <Button variant="primary" onClick={() => setModal('slack')}>Slack 연결하기</Button>
        </div>
      </Panel>

      <h2 className="section-heading">지원 예정 플랫폼</h2>
      <Panel>
        <MetaLine label="Microsoft Teams" value="준비 중" />
        <MetaLine label="Google Chat" value="준비 중" />
        <MetaLine label="Discord" value="준비 중" />
      </Panel>
      <div className="actions end">
        <Button onClick={() => setView('setup')}>초기 환경 설정으로</Button>
      </div>
    </AppShell>
  )
}

function Setup({ setView }) {
  return (
    <AppShell active="settings" setView={setView}>
      <h1 className="page-title">환경 설정</h1>
      <p className="page-copy">바통을 시작하기 전에 기본 작업 환경을 설정해 주세요.</p>

      <Panel>
        <h2>시간 및 언어</h2>
        <div className="form-stack">
          <SelectField label="타임존" />
          <SelectField label="작업 언어" />
        </div>
      </Panel>

      <Panel>
        <h2>자동발송 기본값</h2>
        <p>자동발송을 켜면 AI 판정 확신도가 임계값 이상일 때 답장을 자동으로 발송합니다.</p>
        <ToggleField helper="처음에는 수동 발송으로 시작하는 것을 권장합니다. 설정에서 언제든지 변경할 수 있습니다." label="자동발송 기본값" />
      </Panel>

      <Panel>
        <h2>확신도 임계값</h2>
        <p>AI 판정 확신도가 이 값 이상일 때만 자동발송이 실행됩니다. 낮을수록 더 많은 답장이 자동 처리됩니다.</p>
        <SelectField label="임계값 설정" value="확신도 임계값 선택" />
        <div className="notice">📌 확신도가 임계값에 미달하면 자동발송이 보류되며, 사용자가 직접 응답 분기를 선택하거나 직접 작성할 수 있습니다.</div>
      </Panel>

      <div className="actions end">
        <Button variant="primary" onClick={() => setView('home')}>설정 저장하고 시작하기</Button>
      </div>
    </AppShell>
  )
}

function Home({ setView }) {
  return (
    <AppShell active="home" setView={setView}>
      <div className="page-head">
        <h1 className="page-title">바통 홈</h1>
        <Button variant="primary" onClick={() => setView('conversations')}>새 바통 만들기</Button>
      </div>
      <div className="page-head compact">
        <p className="footnote">마지막 동기화: 2분 전 (14:32 KST)</p>
        <Button onClick={() => setView('syncError')}>동기화 오류 확인</Button>
      </div>

      <section className="stat-grid">
        {statCards.map(([label, value]) => (
          <Panel key={label}>
            <span className="stat-label">{label}</span>
            <strong className="stat-value">{value}</strong>
          </Panel>
        ))}
      </section>

      <div className="need-row">
        <h2 className="section-heading">처리 필요 항목</h2>
        <Button variant="chip" onClick={() => setView('pending')}>보류 응답 처리 필요 · 2건</Button>
        <Button variant="chip" onClick={() => setView('result')}>판정 결과 미확인 · 1건</Button>
      </div>

      <div className="filter-row">
        <SelectField label="상태 필터" />
        <SelectField label="정렬 기준" />
        <span>12개 바통</span>
      </div>

      <section className="baton-list">
        {batonItems.map((item) => (
          <Panel className="baton-row" key={`${item.name}-${item.status}`}>
            <div className="baton-main">
              <Avatar />
              <div>
                <strong>{item.name}</strong>
                <p>{item.channel}</p>
              </div>
            </div>
            <div className="baton-status">
              <span>{item.status}</span>
              {item.action && <Button onClick={() => setView(item.target)}>{item.action}</Button>}
            </div>
            <div className="baton-meta">
              <span>{item.localTime}</span>
              <span>{item.elapsed}</span>
              <span>동기화: 14:32</span>
            </div>
          </Panel>
        ))}
      </section>

      <p className="footnote">자동 발송된 응답은 Slack에서 직접 확인해야 합니다. 이후 답장도 Slack 원본 스레드에서 확인하세요.</p>
      <Button onClick={() => setView('settings')}>개인 설정</Button>
    </AppShell>
  )
}

function ConversationPicker({ setView }) {
  return (
    <AppShell active="new" setView={setView}>
      <h1 className="page-title">대화 선택</h1>
      <p className="page-copy">바통을 만들 Slack 채널 또는 DM을 선택하세요.</p>
      <div className="filter-row align-start">
        <SearchBox />
        <SelectField label="정렬" />
        <SelectField label="유형" />
      </div>
      <section className="stack">
        {conversations.map(([title, type, recent]) => (
          <Panel className="conversation-row" key={title}>
            <div>
              <h2>{title}</h2>
              <p>{type} · {recent}</p>
            </div>
            <Button variant="primary" onClick={() => setView('viewer')}>대화 보기</Button>
          </Panel>
        ))}
        <Panel>
          <h2>접근 가능한 대화가 없습니다.</h2>
          <p>연결된 Slack 워크스페이스에서 접근할 수 있는 채널 또는 DM이 없습니다. Slack 권한을 확인하거나 관리자에게 문의하세요.</p>
        </Panel>
      </section>
    </AppShell>
  )
}

function ConversationViewer({ setView }) {
  return (
    <AppShell active="new" setView={setView}>
      <div className="page-head">
        <div>
          <h1 className="page-title">대화 뷰어</h1>
          <p className="page-copy"># general · 스레드 시작: 2024-06-10 09:42</p>
        </div>
        <Button variant="primary" onClick={() => setView('compose')}>이 대화로 바통 만들기</Button>
      </div>
      <Panel>
        <div className="page-head compact">
          <h2>대화 맥락 요약</h2>
          <Button>접기</Button>
        </div>
        <p>Q3 로드맵 우선순위와 백엔드 범위 확정 여부를 확인해야 합니다. 상대가 잠든 시간대에 답장이 도착할 수 있어, 수락/조건부/보류에 대한 응답 분기가 필요합니다.</p>
      </Panel>
      <div className="need-row">
        <h2 className="section-heading">메시지 범위</h2>
        <Button variant="chip">최근 20개</Button>
        <Button>전체 스레드</Button>
      </div>
      <section className="message-list">
        {messages.map((message) => (
          <Panel className="message-row" key={`${message.author}-${message.meta}`}>
            <Avatar />
            <div>
              <div className="message-head">
                <strong>{message.author}</strong>
                <span>{message.meta}</span>
              </div>
              <p>{message.body}</p>
            </div>
          </Panel>
        ))}
      </section>
    </AppShell>
  )
}

function ComposeMessage({ setView }) {
  return (
    <AppShell active="new" setView={setView}>
      <WizardHeader step="1단계 / 3단계" title="바통 만들기" />
      <StepTabs active={1} />
      <Panel>
        <div className="page-head compact">
          <div>
            <h2>대화 맥락</h2>
            <p># proj-alpha · Alice Johnson</p>
          </div>
          <Button>맥락 펼치기</Button>
        </div>
      </Panel>
      <Panel>
        <h2>첫 메시지 작성</h2>
        <p>상대에게 보낼 첫 Slack 메시지를 작성하세요. 이 바통은 한 번의 왕복(메시지 1회, 응답 1회)만 준비합니다.</p>
        <TextAreaField
          label="메시지 내용"
          defaultValue="안녕하세요 Alice, 지난번에 이야기한 Q3 로드맵 우선순위 관련해서 확인 부탁드립니다. 가능하시면 오늘 중 의견을 남겨주세요."
          rows={4}
        />
        <p className="footnote">5자 이상 입력해야 다음 단계로 이동할 수 있습니다.</p>
      </Panel>
      <Panel>
        <h2>안내</h2>
        <p>바통은 한 번의 왕복만 준비합니다. 상대의 첫 답장에 자동 또는 수동으로 응답한 뒤 바통이 완료됩니다. 이후 대화는 Slack에서 직접 이어가세요.</p>
      </Panel>
      <div className="actions end">
        <Button onClick={() => setView('viewer')}>대화 뷰어로 돌아가기</Button>
        <Button variant="primary" onClick={() => setView('branches')}>다음: 분기 편집</Button>
      </div>
    </AppShell>
  )
}

function BranchEditor({ setView }) {
  return (
    <AppShell active="new" setView={setView}>
      <WizardHeader crumb="1단계: 메시지 작성 › 2단계: 예상 답변 분기 편집 › 3단계: 최종 확인" title="바통 만들기" />
      <StepTabs active={2} />
      <Panel>
        <h2>AI 분기 자동 생성 안내</h2>
        <p>AI가 상대방의 예상 답변 유형 3가지와 각 유형에 대한 후속 응답 초안을 생성했습니다. 각 분기를 검토하고 필요한 경우 직접 수정하세요.</p>
      </Panel>
      <h2 className="section-heading">예상 답변 분기</h2>
      {branchItems.map((branch) => (
        <Panel key={branch.id}>
          <div className="branch-head">
            <h3>{branch.title}</h3>
            <span>{branch.description}</span>
          </div>
          <TextAreaField label="후속 응답 초안" defaultValue={branch.draft} rows={4} />
        </Panel>
      ))}
      <Panel>
        <h2>AI 분기 생성이 어려운 경우</h2>
        <p>질문의 맥락이 복잡하거나 답변 유형이 명확하지 않다면, AI에게 분기를 어떻게 나눌지 직접 설명할 수 있습니다.</p>
        <TextAreaField label="분기 기준" placeholder="예: '수락 여부보다 일정 협의 가능 여부를 기준으로 나눠줘'" rows={3} />
        <Button>이 설명으로 분기 다시 생성</Button>
      </Panel>
      <Panel>
        <h2>편집 유의사항</h2>
        <ul className="plain-list">
          <li>후속 응답 초안은 상대방에게 자동 발송될 수 있습니다. 발송 여부는 다음 단계에서 설정합니다.</li>
          <li>자동 발송 시 안내 문구가 함께 포함됩니다.</li>
          <li>분기 판정 후 후속 답장은 Slack에서 직접 확인해야 합니다.</li>
        </ul>
      </Panel>
      <div className="actions spread">
        <Button onClick={() => setView('compose')}>이전 단계로</Button>
        <Button variant="primary" onClick={() => setView('confirm')}>최종 확인으로 이동</Button>
      </div>
    </AppShell>
  )
}

function FinalConfirm({ setView }) {
  return (
    <AppShell active="new" setView={setView}>
      <WizardHeader crumb="1단계: 메시지 작성 › 2단계: 분기 편집 › 3단계: 최종 확인" title="새 바통 만들기" />
      <StepTabs active={3} />
      <Panel>
        <h2>발송 설정</h2>
        <ToggleField label="자동발송 사용" />
        <SelectField label="확신도 임계값" />
        <p className="footnote">선택한 임계값 미만이면 자동 발송을 보류하고 수동 확인을 요청합니다.</p>
        <SelectField label="최대 대기 시간" />
        <p className="footnote">대기 시간 내 상대 답장이 없으면 바통이 만료 상태로 전환됩니다.</p>
      </Panel>
      <Panel>
        <h2>발송 메시지 미리보기</h2>
        <div className="preview-box">
          안녕하세요 Alice, 지난번에 이야기한 Q3 로드맵 우선순위 관련해서 확인 부탁드립니다.
        </div>
        <div className="notice">📌 자동 발송 안내<br />이 메시지는 Baton이 자동으로 발송합니다. 이후 상대의 답장과 추가 대화는 Slack에서 직접 확인하고 처리해야 합니다.</div>
      </Panel>
      <Panel>
        <h2>자동 응답 작동 조건 및 통제권 안내</h2>
        <ul className="plain-list">
          <li>상대 답장이 도착하면 AI가 분기를 판정하고, 확신도가 임계값 이상일 때만 자동 발송합니다.</li>
          <li>확신도 미달 또는 분기 불일치 시 자동 발송을 중단하고 보류 상태로 전환합니다.</li>
          <li>자동 발송된 응답은 판정 결과 확인 화면에서 내역과 근거를 확인할 수 있습니다.</li>
          <li>바통은 언제든지 수동으로 중단할 수 있습니다.</li>
        </ul>
      </Panel>
      <div className="actions end">
        <Button onClick={() => setView('branches')}>이전 단계로</Button>
        <Button variant="primary" onClick={() => setView('waiting')}>바통 시작하기</Button>
      </div>
    </AppShell>
  )
}

function WaitingDetail({ setView }) {
  return (
    <AppShell active="home" setView={setView}>
      <h1 className="page-title">대기 상세</h1>
      <p className="page-copy">마지막 동기화: 3분 전</p>
      <Panel>
        <h2>바통 상태 요약</h2>
        <div className="detail-grid">
          <MetaBlock label="대화 상대" value="Aria Chen · #product-sync" />
          <MetaBlock label="상태" value="대기 중 — 답장 없음" />
          <MetaBlock label="경과 시간" value="8시간 32분" />
          <MetaBlock label="상대 업무시간" value="오전 9:00 – 오후 6:00 (UTC+8)" />
          <MetaBlock label="현지 시각" value="오후 2:14" />
          <MetaBlock label="다음 동기화" value="약 12분 후" />
        </div>
      </Panel>
      <Panel>
        <h2>Slack에 보낸 첫 메시지</h2>
        <p>안녕하세요 Aria, 지난번에 논의했던 Q3 로드맵 우선순위 건으로 연락드립니다. 이번 스프린트 내에 확인이 필요한 항목이 두 가지 있어서요, 편하실 때 아래 내용 검토 부탁드려도 될까요?</p>
        <p className="footnote">발송 시각: 오전 5:42 (내 시간) · 오전 9:42 (상대 시간)</p>
      </Panel>
      <div className="actions">
        <Button onClick={() => setView('syncError')}>동기화 오류 안내</Button>
        <Button onClick={() => setView('pending')}>보류된 응답 확인하기</Button>
      </div>
      <h2 className="section-heading">준비된 예상 답변 분기</h2>
      {branchItems.map((branch, index) => (
        <Panel className="branch-summary" key={branch.id}>
          <div>
            <h3>{branch.title.replace('긍정적 수락', '수락').replace('조건부 또는 추가 질문', '부분 수락 또는 조건 제시').replace('부정적 거절 또는 보류', '거절 또는 대안 제안')}</h3>
            <p>{index === 2 ? '사용자 확인 필요' : '자동 처리 예정'}</p>
          </div>
          <p>{branch.draft}</p>
          <Button onClick={() => setView(index === 2 ? 'pending' : 'result')}>{index === 2 ? '보류 응답 처리' : '판정 결과 확인'}</Button>
        </Panel>
      ))}
      <Panel>
        <h2>자동화 안내</h2>
        <p>자동 발송 사실과 이후 답장은 Slack에서 직접 확인해야 합니다.</p>
        <p>확신도 임계값 미달 또는 분기 불일치 시 자동 발송이 중단되고 보류 상태로 전환됩니다.</p>
      </Panel>
    </AppShell>
  )
}

function SyncError({ setView }) {
  return (
    <AppShell active="home" setView={setView}>
      <Button onClick={() => setView('home')}>바통 홈으로</Button>
      <h1 className="page-title">동기화 오류</h1>
      <p className="page-copy">Slack API가 응답하지 않아 최신 상태를 가져오지 못했습니다.</p>
      <Panel>
        <MetaLine label="오류 원인" value="Slack API 응답 지연" />
        <MetaLine label="영향 범위" value="현재 표시된 데이터는 마지막 동기화 시점 이후 변경 사항을 반영하지 않습니다. 바통 상태와 상대 답장이 실제와 다를 수 있습니다." />
        <MetaLine label="마지막 성공 동기화" value="2025년 1월 14일 오전 9:32" />
      </Panel>
      <Panel>
        <h2>재시도 방법</h2>
        <p>잠시 후 다시 시도하거나, 문제가 지속되면 Slack 연결 상태를 확인하세요.</p>
        <div className="actions">
          <Button variant="primary">다시 시도</Button>
          <Button onClick={() => setView('home')}>바통 홈으로 돌아가기</Button>
        </div>
      </Panel>
    </AppShell>
  )
}

function ConnectError({ setView }) {
  return (
    <AppShell active="settings" setView={setView}>
      <Button onClick={() => setView('platform')}>플랫폼 연결로</Button>
      <h1 className="page-title">Slack 연결 오류</h1>
      <Panel>
        <h2>연결 상태</h2>
        <p>토큰 만료됨 — 자동 응답이 중단되었습니다</p>
        <p className="footnote">마지막 정상 연결: 2025년 1월 14일 오전 9:32</p>
      </Panel>
      <Panel>
        <h2>오류 원인</h2>
        <p>Slack 사용자 토큰이 만료되어 Baton이 워크스페이스에 접근할 수 없습니다.</p>
        <p>토큰은 Slack 보안 정책 또는 비밀번호 변경, 세션 취소 등의 이유로 만료될 수 있습니다.</p>
      </Panel>
      <Panel>
        <h2>영향 범위</h2>
        <p>토큰이 만료된 동안 상대의 답장을 감지하지 못했습니다.</p>
        <p>대기 중인 바통의 자동 응답이 실행되지 않았으며, 보류 항목이 누락되었을 수 있습니다.</p>
        <p>재연결 전까지 모든 자동 처리가 중단된 상태입니다.</p>
      </Panel>
      <Panel>
        <h2>재연결 방법</h2>
        <p>아래 버튼을 클릭하면 Slack OAuth 인증 페이지로 이동합니다.</p>
        <p>기존 워크스페이스 계정으로 로그인하고 요청된 권한을 다시 승인하면 연결이 복구됩니다.</p>
        <Button variant="primary">Slack 다시 연결</Button>
      </Panel>
    </AppShell>
  )
}

function ResultConfirm({ setView }) {
  return (
    <AppShell active="home" setView={setView}>
      <Button onClick={() => setView('home')}>바통 홈으로</Button>
      <h1 className="page-title">판정 결과 확인</h1>
      <div className="split-layout">
        <div className="stack">
          <Panel>
            <h2>판정 결과 요약</h2>
            <MetaLine label="선택된 분기" value="분기 A — 긍정적 수락 의사 확인" />
            <MetaLine label="확신도" value="87%" />
            <MetaLine label="자동발송 상태" value="✓ 자동 발송 완료" />
            <h3>판정 근거</h3>
            <p>상대 메시지에 '좋아요', '확인했습니다'와 같은 수락 표현이 포함되어 분기 A가 선택되었습니다. 부정적 표현이나 조건부 표현은 감지되지 않았습니다.</p>
            <p className="footnote">분석 시각: 2024-01-15 14:32 KST</p>
          </Panel>
          <Panel>
            <h2>실제 발송된 응답</h2>
            <p>안녕하세요, 확인해 주셔서 감사합니다. 다음 단계로 진행하겠습니다. 추가 질문이 있으시면 언제든지 알려주세요.</p>
            <p className="footnote">이 메시지는 Baton이 자동으로 발송했습니다. 이후 상대방의 답장은 Slack에서 직접 확인해야 합니다.</p>
            <Button>Slack 원본 스레드 열기</Button>
          </Panel>
          <Panel className="warning-panel">
            <h2>⚠ 후속 답장 도착</h2>
            <p>자동 응답 발송 이후 상대방이 다시 답장했습니다. 연속 자동 처리는 실행되지 않았습니다. Slack에서 직접 확인해 주세요.</p>
            <Button>Slack에서 직접 확인</Button>
          </Panel>
          <div className="actions">
            <Button onClick={() => setView('history')}>결정 기록 보기</Button>
          </div>
        </div>
        <Panel className="side-panel">
          <h2>바통 정보</h2>
          <MetaBlock label="상대방" value="김민준 (도쿄)" />
          <MetaBlock label="상대 현지 시각" value="15:32 JST" />
          <MetaBlock label="경과 시간" value="2시간 18분 전 발송" />
          <MetaBlock label="대화 채널" value="#프로젝트-알파" />
        </Panel>
      </div>
    </AppShell>
  )
}

function PendingResponse({ setView, setModal, selectedBranch, setSelectedBranch }) {
  return (
    <AppShell active="home" setView={setView}>
      <div className="breadcrumb">
        <Button onClick={() => setView('home')}>바통 홈으로</Button>
        <span>›</span>
        <strong>보류 응답 처리</strong>
      </div>
      <Panel className="warning-panel">
        <h1>⚠ 자동 발송 보류됨</h1>
        <p>분기 불일치: 상대 답장이 준비된 세 분기 중 어느 유형에도 해당하지 않아 자동 발송이 중단되었습니다. 아래에서 직접 응답 방식을 선택해 주세요.</p>
        <div className="meta-inline">
          <span>보류 시각</span>
          <span>영향</span>
          <span>이 바통의 자동 응답이 대기 중입니다</span>
        </div>
      </Panel>
      <h2 className="section-heading">상대 답장</h2>
      <Panel>
        <h3>원문</h3>
        <p>I like the direction, but the timing depends on whether backend scope is locked today.</p>
        <h3>번역 (한국어)</h3>
        <p>방향은 좋지만, 일정은 백엔드 범위가 오늘 확정되는지에 달려 있습니다.</p>
      </Panel>
      <h2 className="section-heading">준비된 응답 분기</h2>
      <p className="page-copy">아래 세 분기 중 상황에 맞는 분기를 선택하세요. 선택한 분기의 응답 초안이 발송됩니다.</p>
      <div className="stack">
        {branchItems.map((branch) => (
          <label className="radio-panel" key={branch.id}>
            <input
              checked={selectedBranch === branch.id}
              name="branch"
              onChange={() => setSelectedBranch(branch.id)}
              type="radio"
            />
            <div>
              <strong>{branch.title}</strong>
              <p>{branch.draft}</p>
            </div>
          </label>
        ))}
      </div>
      <h2 className="section-heading">직접 응답 작성</h2>
      <p className="page-copy">준비된 분기가 적합하지 않으면 아래에 직접 응답을 작성하세요. 직접 작성 시 분기 선택은 무시됩니다.</p>
      <TextAreaField label="직접 응답" placeholder="직접 응답 내용을 입력하세요" rows={5} />
      <Panel>
        <h2>발송 전 확인</h2>
        <p>선택한 분기 또는 직접 작성한 내용이 Slack 스레드에 발송됩니다.</p>
        <p>자동 발송 사실과 이후 답장은 Slack에서 직접 확인해야 합니다.</p>
        <div className="actions spread">
          <Button onClick={() => setView('history')}>결정 기록 보기</Button>
          <span className="actions">
            <Button onClick={() => setModal('cancel')}>취소</Button>
            <Button variant="primary" onClick={() => setModal('send')}>응답 발송</Button>
          </span>
        </div>
      </Panel>
    </AppShell>
  )
}

function History({ setView }) {
  return (
    <AppShell active="history" setView={setView}>
      <h1 className="page-title">결정 기록</h1>
      <Panel>
        <h2>스레드 정보</h2>
        <div className="thread-info">
          <Avatar />
          <div>
            <strong>#프로젝트-알파 · 김민준</strong>
            <p>Slack 스레드 · 2024-01-15 14:32 KST</p>
          </div>
        </div>
        <Button>Slack에서 원본 보기</Button>
      </Panel>
      <h2 className="section-heading">합의된 항목</h2>
      <Panel>
        <h3>✓ 합의됨</h3>
        <RecordRow left="Q3 로드맵 우선순위 1차 확정" right="자동 발송 근거 포함" />
        <RecordRow left="디자인 리뷰는 이번 스프린트 내 진행" right="담당: Baton" />
        <RecordRow left="후속 질문은 Slack 원본에서 직접 처리" right="읽기 전용" />
      </Panel>
      <h2 className="section-heading">미해결 항목</h2>
      <Panel>
        <h3>⚠ 미해결</h3>
        <RecordRow left="백엔드 범위 최종 확정 여부" right="상대 답장 대기" />
        <RecordRow left="다음 주 초 추가 회의 필요성" right="Slack 확인 필요" />
      </Panel>
      <Panel>
        <p>이 기록은 읽기 전용입니다. 내용을 수정하려면 Slack 스레드에서 직접 대화하세요.</p>
      </Panel>
    </AppShell>
  )
}

function Settings({ setView }) {
  return (
    <AppShell active="settings" setView={setView}>
      <Button onClick={() => setView('landing')}>랜딩 화면으로</Button>
      <h1 className="page-title">개인 설정</h1>
      <h2 className="section-heading">작업 환경</h2>
      <Panel>
        <SelectField label="작업 언어" />
        <SelectField label="타임존" />
      </Panel>
      <h2 className="section-heading">자동화 안전 기준</h2>
      <Panel>
        <ToggleField label="자동발송 기본값" />
        <p className="footnote">자동발송은 기본적으로 꺼진 상태입니다. 활성화하면 확신도 임계값 이상의 판정에 한해 자동으로 발송됩니다.</p>
        <SelectField label="확신도 임계값" />
        <p className="footnote">임계값 미만의 판정은 보류 상태로 전환되어 수동 검토를 요청합니다.</p>
        <SelectField label="최대 대기 시간" />
        <p className="footnote">설정한 시간 안에 상대 답장이 없으면 바통이 만료됩니다. 만료 후 자동 응답은 실행되지 않습니다.</p>
      </Panel>
      <h2 className="section-heading">연결된 플랫폼</h2>
      <Panel>
        <PlatformLine name="Slack 워크스페이스" detail="workspace-name.slack.com" state="연결됨" action="재연결" />
        <PlatformLine name="Microsoft Teams" detail="지원 예정" state="준비 중" />
        <PlatformLine name="Google Chat" detail="지원 예정" state="준비 중" />
      </Panel>
      <div className="actions end">
        <Button>변경사항 취소</Button>
        <Button variant="primary">설정 저장</Button>
      </div>
    </AppShell>
  )
}

function PermissionRow({ title, copy }) {
  return (
    <div className="permission-row">
      <strong>{title}</strong>
      <span>{copy}</span>
    </div>
  )
}

function MetaLine({ label, value }) {
  return (
    <div className="meta-line">
      <strong>{label}</strong>
      <span>{value}</span>
    </div>
  )
}

function MetaBlock({ label, value }) {
  return (
    <div className="meta-block">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function PlatformLine({ name, detail, state, action }) {
  return (
    <div className="platform-line">
      <div>
        <strong>{name}</strong>
        <p>{detail}</p>
      </div>
      <span className="line" />
      <strong>{state}</strong>
      {action && <Button variant="secondary">{action}</Button>}
    </div>
  )
}

function RecordRow({ left, right }) {
  return (
    <div className="record-row">
      <span>{left}</span>
      <span className="line" />
      <small>{right}</small>
    </div>
  )
}

function WizardHeader({ title, step, crumb }) {
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

function StepTabs({ active }) {
  return (
    <div className="step-tabs">
      {['1 메시지 작성', '2 분기 편집', '3 최종 확인'].map((label, index) => (
        <span className={index + 1 === active ? 'active' : ''} key={label}>{label}</span>
      ))}
    </div>
  )
}

function Modal({ modal, setModal, setView }) {
  if (!modal) return null

  const content = {
    slack: {
      title: 'Slack 연결 확인',
      copy: '아래 권한을 Baton에 허용하면 연결이 시작됩니다. 연결 후에도 개인 설정에서 언제든지 해제할 수 있습니다.',
      body: (
        <>
          <MetaLine label="채널·DM 메시지 읽기" value="활성화됨" />
          <MetaLine label="메시지 전송" value="활성화됨" />
          <MetaLine label="사용자 및 채널 정보 조회" value="활성화됨" />
          <p className="footnote">자동발송은 기본적으로 꺼진 상태로 시작합니다. 자동 발송 사실과 이후 답장은 Slack에서 직접 확인해야 합니다.</p>
        </>
      ),
      primary: '연결 시작',
      onPrimary: () => {
        setModal(null)
        setView('setup')
      },
    },
    send: {
      title: '응답 발송 확인',
      copy: '선택한 내용을 Slack 스레드에 발송합니다. 발송 후에는 되돌리기가 제한될 수 있습니다.',
      body: <p className="footnote">자동 발송 사실과 이후 답장은 Slack에서 직접 확인해야 합니다.</p>,
      primary: '발송 확정',
      onPrimary: () => {
        setModal(null)
        setView('result')
      },
    },
    cancel: {
      title: '처리 취소',
      copy: '지금 나가면 선택한 분기 또는 작성 내용이 저장되지 않습니다. 이 바통은 보류 상태로 남습니다.',
      body: null,
      primary: '나가기',
      secondary: '계속 작성',
      onPrimary: () => {
        setModal(null)
        setView('home')
      },
    },
  }[modal]

  return (
    <div className="modal-backdrop" role="presentation">
      <div aria-modal="true" className="modal" role="dialog">
        <h2>{content.title}</h2>
        <p>{content.copy}</p>
        {content.body && <div className="modal-body">{content.body}</div>}
        <div className="actions end">
          <Button onClick={() => setModal(null)}>{content.secondary || '취소'}</Button>
          <Button variant="primary" onClick={content.onPrimary}>{content.primary}</Button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [view, setView] = useState('landing')
  const [modal, setModal] = useState(null)
  const [selectedBranch, setSelectedBranch] = useState('A')

  const screens = {
    landing: <Landing setView={setView} />,
    platform: <PlatformConnect setModal={setModal} setView={setView} />,
    setup: <Setup setView={setView} />,
    home: <Home setView={setView} />,
    conversations: <ConversationPicker setView={setView} />,
    viewer: <ConversationViewer setView={setView} />,
    compose: <ComposeMessage setView={setView} />,
    branches: <BranchEditor setView={setView} />,
    confirm: <FinalConfirm setView={setView} />,
    waiting: <WaitingDetail setView={setView} />,
    syncError: <SyncError setView={setView} />,
    connectError: <ConnectError setView={setView} />,
    result: <ResultConfirm setView={setView} />,
    pending: (
      <PendingResponse
        selectedBranch={selectedBranch}
        setModal={setModal}
        setSelectedBranch={setSelectedBranch}
        setView={setView}
      />
    ),
    history: <History setView={setView} />,
    settings: <Settings setView={setView} />,
  }

  return (
    <>
      {screens[view]}
      <Modal modal={modal} setModal={setModal} setView={setView} />
    </>
  )
}

export default App
