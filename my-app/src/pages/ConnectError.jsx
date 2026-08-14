import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'

export function ConnectError({ setView }) {
  return (
    <AppShell active="settings" setView={setView}>
      <Button onClick={() => setView('platform')}>플랫폼 연결로</Button>
      <h1 className="page-title">Slack 연결 오류</h1>
      <Panel>
        <h2>연결 상태</h2>
        <p>토큰 만료됨 — 자동 응답이 중단되었습니다</p>
        <p className="footnote">마지막 정상 연결: 2025년 1월 14일 오전 9:32</p>
      </Panel>
      <Panel>
        <h2>오류 원인</h2>
        <p>Slack 사용자 토큰이 만료되어 Baton이 워크스페이스에 접근할 수 없습니다.</p>
        <p>토큰은 Slack 보안 정책 또는 비밀번호 변경, 세션 취소 등의 이유로 만료될 수 있습니다.</p>
      </Panel>
      <Panel>
        <h2>영향 범위</h2>
        <p>토큰이 만료된 동안 상대의 답장을 감지하지 못했습니다.</p>
        <p>대기 중인 바통의 자동 응답이 실행되지 않았으며, 보류 항목이 누락되었을 수 있습니다.</p>
        <p>재연결 전까지 모든 자동 처리가 중단된 상태입니다.</p>
      </Panel>
      <Panel>
        <h2>재연결 방법</h2>
        <p>아래 버튼을 클릭하면 Slack OAuth 인증 페이지로 이동합니다.</p>
        <p>기존 워크스페이스 계정으로 로그인하고 요청된 권한을 다시 승인하면 연결이 복구됩니다.</p>
        <Button variant="primary">Slack 다시 연결</Button>
      </Panel>
    </AppShell>
  )
}
