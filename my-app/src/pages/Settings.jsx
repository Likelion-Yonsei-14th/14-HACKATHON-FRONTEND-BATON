import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'
import { SelectField, ToggleField } from '../components/ui/FormFields'
import { PlatformLine } from '../components/DisplayRows'

export function Settings({ setView }) {
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
