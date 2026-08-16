import { AppShell } from '../components/layout/AppShell'
import { Panel } from '../components/ui/Panel'

export function Settings() {
  return (
    <AppShell>
      <h1 className="font-suit text-2xl font-semibold text-ink">개인 설정</h1>
      <Panel className="mt-6 max-w-lg">
        <p className="text-sm text-muted">언어 설정, Slack 연결 상태 (스켈레톤)</p>
      </Panel>
    </AppShell>
  )
}
