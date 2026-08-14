import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'
import { MetaLine } from '../components/DisplayRows'

export function SyncError({ setView }) {
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
