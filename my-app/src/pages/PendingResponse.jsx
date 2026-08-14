import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'
import { TextAreaField } from '../components/ui/FormFields'
import { branchItems } from '../data/mockData'

export function PendingResponse({ setView, setModal, selectedBranch, setSelectedBranch }) {
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
