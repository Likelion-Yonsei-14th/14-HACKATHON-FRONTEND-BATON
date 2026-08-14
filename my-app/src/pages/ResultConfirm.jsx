import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Panel } from '../components/ui/Button'
import { MetaLine, MetaBlock } from '../components/DisplayRows'

export function ResultConfirm({ setView }) {
  return (
    <AppShell active="home" setView={setView}>
      <Button onClick={() => setView('home')}>바통 홈으로</Button>
      <h1 className="page-title">판정 결과 확인</h1>
      <div className="split-layout">
        <div className="stack">
          <Panel>
            <h2>판정 결과 요약</h2>
            <MetaLine label="선택된 분기" value="분기 A — 긍정적 수락 의사 확인" />
            <MetaLine label="확신도" value="87%" />
            <MetaLine label="자동발송 상태" value="✓ 자동 발송 완료" />
            <h3>판정 근거</h3>
            <p>상대 메시지에 '좋아요', '확인했습니다'와 같은 수락 표현이 포함되어 분기 A가 선택되었습니다. 부정적 표현이나 조건부 표현은 감지되지 않았습니다.</p>
            <p className="footnote">분석 시각: 2024-01-15 14:32 KST</p>
          </Panel>
          <Panel>
            <h2>실제 발송된 응답</h2>
            <p>안녕하세요, 확인해 주셔서 감사합니다. 다음 단계로 진행하겠습니다. 추가 질문이 있으시면 언제든지 알려주세요.</p>
            <p className="footnote">이 메시지는 Baton이 자동으로 발송했습니다. 이후 상대방의 답장은 Slack에서 직접 확인해야 합니다.</p>
            <Button>Slack 원본 스레드 열기</Button>
          </Panel>
          <Panel className="warning-panel">
            <h2>⚠ 후속 답장 도착</h2>
            <p>자동 응답 발송 이후 상대방이 다시 답장했습니다. 연속 자동 처리는 실행되지 않았습니다. Slack에서 직접 확인해 주세요.</p>
            <Button>Slack에서 직접 확인</Button>
          </Panel>
          <div className="actions">
            <Button onClick={() => setView('history')}>결정 기록 보기</Button>
          </div>
        </div>
        <Panel className="side-panel">
          <h2>바통 정보</h2>
          <MetaBlock label="상대방" value="김민준 (도쿄)" />
          <MetaBlock label="상대 현지 시각" value="15:32 JST" />
          <MetaBlock label="경과 시간" value="2시간 18분 전 발송" />
          <MetaBlock label="대화 채널" value="#프로젝트-알파" />
        </Panel>
      </div>
    </AppShell>
  )
}
