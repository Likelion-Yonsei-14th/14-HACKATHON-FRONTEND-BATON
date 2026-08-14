import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'
import { SelectField, ToggleField } from '../components/ui/FormFields'

export function Setup({ setView }) {
  return (
    <AppShell active="settings" setView={setView}>
      <h1 className="page-title">환경 설정</h1>
      <p className="page-copy">바통을 시작하기 전에 기본 작업 환경을 설정해 주세요.</p>

      <Panel>
        <h2>시간 및 언어</h2>
        <div className="form-stack">
          <SelectField label="타임존" />
          <SelectField label="작업 언어" />
        </div>
      </Panel>

      <Panel>
        <h2>자동발송 기본값</h2>
        <p>자동발송을 켜면 AI 판정 확신도가 임계값 이상일 때 답장을 자동으로 발송합니다.</p>
        <ToggleField helper="처음에는 수동 발송으로 시작하는 것을 권장합니다. 설정에서 언제든지 변경할 수 있습니다." label="자동발송 기본값" />
      </Panel>

      <Panel>
        <h2>확신도 임계값</h2>
        <p>AI 판정 확신도가 이 값 이상일 때만 자동발송이 실행됩니다. 낮을수록 더 많은 답장이 자동 처리됩니다.</p>
        <SelectField label="임계값 설정" value="확신도 임계값 선택" />
        <div className="notice">📌 확신도가 임계값에 미달하면 자동발송이 보류되며, 사용자가 직접 응답 분기를 선택하거나 직접 작성할 수 있습니다.</div>
      </Panel>

      <div className="actions end">
        <Button variant="primary" onClick={() => setView('home')}>설정 저장하고 시작하기</Button>
      </div>
    </AppShell>
  )
}
