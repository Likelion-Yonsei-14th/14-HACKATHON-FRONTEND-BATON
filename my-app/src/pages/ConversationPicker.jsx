import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'
import { SearchBox, SelectField } from '../components/ui/FormFields'
import { conversations } from '../data/mockData'

export function ConversationPicker({ setView }) {
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
