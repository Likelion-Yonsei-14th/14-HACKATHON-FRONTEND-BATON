import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'

export function Landing({ setView }) {
  return (
    <AppShell active="home" setView={setView}>
      <section className="landing-hero">
        <h1>상대가 자는 동안에도, 바통은 준비되어 있습니다</h1>
        <p>Baton은 시차가 있는 협업 상대에게 보낼 답장을 미리 준비해 둡니다. 자동 발송 여부는 언제나 사용자가 결정합니다.</p>
        <Button variant="primary" onClick={() => setView('platform')}>플랫폼 연결 시작</Button>
      </section>

      <section className="feature-grid">
        <Panel>
          <h2>비동기 응답 준비</h2>
          <p>상대 답장의 유형을 미리 예측하고 세 가지 분기별 응답 초안을 준비합니다. 답장이 도착하면 가장 적합한 분기를 AI가 선택합니다.</p>
        </Panel>
        <Panel>
          <h2>확신도 기반 자동 발송</h2>
          <p>AI 판정 확신도가 설정한 임계값을 넘을 때만 자동 발송됩니다. 확신도가 낮으면 사용자에게 수동 확인을 요청합니다.</p>
        </Panel>
        <Panel>
          <h2>판정 근거와 사용자 통제</h2>
          <p>자동 발송 결과에는 판정 분기, 확신도, 판정 근거가 함께 제공됩니다. 발송 후 되돌리기 경로도 항상 열려 있습니다.</p>
        </Panel>
      </section>

      <h2 className="section-heading">플랫폼 연결 안내</h2>
      <div className="stack">
        <Panel>
          <h3>필요한 권한</h3>
          <p>채널 및 DM 메시지 읽기, 내 계정으로 메시지 보내기 권한이 필요합니다. 다른 사용자의 계정에는 접근하지 않습니다.</p>
        </Panel>
        <Panel>
          <h3>연결 목적</h3>
          <p>사용자 토큰을 통해 대화 맥락을 불러오고, 준비된 응답을 내 계정으로 발송합니다. 토큰은 Baton 서버에 암호화되어 저장됩니다.</p>
        </Panel>
      </div>
      <p className="footnote center">자동 발송은 기본적으로 꺼진 상태로 시작합니다.</p>
      <p className="footnote center subtle">자동 발송 사실과 이후 답장은 각 플랫폼에서 직접 확인해야 합니다.</p>
    </AppShell>
  )
}
