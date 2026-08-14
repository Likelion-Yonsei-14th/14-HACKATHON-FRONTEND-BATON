import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Avatar, Panel } from '../components/ui/Button'
import { messages } from '../data/mockData'

export function ConversationViewer({ setView }) {
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
