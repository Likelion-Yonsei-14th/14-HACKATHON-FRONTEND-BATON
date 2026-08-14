import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'
import { TextAreaField } from '../components/ui/FormFields'
import { WizardHeader, StepTabs } from '../components/WizardParts'
import { branchItems } from '../data/mockData'

export function BranchEditor({ setView }) {
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
