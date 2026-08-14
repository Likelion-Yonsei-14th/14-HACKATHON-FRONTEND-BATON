import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'
import { MetaBlock } from '../components/DisplayRows'
import { branchItems } from '../data/mockData'

export function WaitingDetail({ setView }) {
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
