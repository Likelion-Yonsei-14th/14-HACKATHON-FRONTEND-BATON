import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'
import { SelectField, ToggleField } from '../components/ui/FormFields'
import { WizardHeader, StepTabs } from '../components/WizardParts'

export function FinalConfirm({ setView }) {
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
