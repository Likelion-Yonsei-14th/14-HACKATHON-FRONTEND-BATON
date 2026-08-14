import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'
import { TextAreaField } from '../components/ui/FormFields'
import { WizardHeader, StepTabs } from '../components/WizardParts'

export function ComposeMessage({ setView }) {
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
