import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Avatar, Panel } from '../components/ui/Button'
import { SelectField } from '../components/ui/FormFields'
import { statCards, batonItems } from '../data/mockData'

export function Home({ setView }) {
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
