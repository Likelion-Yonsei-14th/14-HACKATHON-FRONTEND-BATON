import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'
import { PermissionRow, MetaLine } from '../components/DisplayRows'

export function PlatformConnect({ setView, setModal }) {
  return (
    <AppShell active="settings" setView={setView}>
      <h1 className="page-title">플랫폼 연결</h1>
      <p className="page-copy">Baton이 업무 대화를 읽고 자동 응답을 준비하려면 계정 연결이 필요합니다.</p>

      <Panel className="platform-card">
        <h2>Slack</h2>
        <p>연결되지 않음</p>
        <div className="inner-box">
          <p className="label">요청 권한 및 사용 목적</p>
          <PermissionRow title="채널·DM 메시지 읽기" copy="바통 대상 대화의 맥락을 분석하는 데 사용합니다." />
          <PermissionRow title="메시지 전송" copy="사용자의 확인 후 대화 스레드에 응답을 발송하는 데 사용합니다." />
          <PermissionRow title="사용자 및 채널 정보 조회" copy="상대방 타임존과 업무시간을 확인하는 데 사용합니다." />
        </div>
        <p className="footnote">Baton은 사용자의 명시적 확인 없이 메시지를 자동 발송하지 않습니다. 자동발송은 기본적으로 꺼진 상태로 시작합니다.</p>
        <div className="actions end">
          <Button onClick={() => setView('connectError')}>연결 오류 확인</Button>
          <Button variant="primary" onClick={() => setModal('slack')}>Slack 연결하기</Button>
        </div>
      </Panel>

      <h2 className="section-heading">지원 예정 플랫폼</h2>
      <Panel>
        <MetaLine label="Microsoft Teams" value="준비 중" />
        <MetaLine label="Google Chat" value="준비 중" />
        <MetaLine label="Discord" value="준비 중" />
      </Panel>
      <div className="actions end">
        <Button onClick={() => setView('setup')}>초기 환경 설정으로</Button>
      </div>
    </AppShell>
  )
}
