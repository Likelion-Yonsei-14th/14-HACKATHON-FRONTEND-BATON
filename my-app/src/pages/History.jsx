import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Avatar, Panel } from '../components/ui/Button'
import { RecordRow } from '../components/DisplayRows'

export function History({ setView }) {
  return (
    <AppShell active="history" setView={setView}>
      <h1 className="page-title">결정 기록</h1>
      <Panel>
        <h2>스레드 정보</h2>
        <div className="thread-info">
          <Avatar />
          <div>
            <strong>#프로젝트-알파 · 김민준</strong>
            <p>Slack 스레드 · 2024-01-15 14:32 KST</p>
          </div>
        </div>
        <Button>Slack에서 원본 보기</Button>
      </Panel>
      <h2 className="section-heading">합의된 항목</h2>
      <Panel>
        <h3>✓ 합의됨</h3>
        <RecordRow left="Q3 로드맵 우선순위 1차 확정" right="자동 발송 근거 포함" />
        <RecordRow left="디자인 리뷰는 이번 스프린트 내 진행" right="담당: Baton" />
        <RecordRow left="후속 질문은 Slack 원본에서 직접 처리" right="읽기 전용" />
      </Panel>
      <h2 className="section-heading">미해결 항목</h2>
      <Panel>
        <h3>⚠ 미해결</h3>
        <RecordRow left="백엔드 범위 최종 확정 여부" right="상대 답장 대기" />
        <RecordRow left="다음 주 초 추가 회의 필요성" right="Slack 확인 필요" />
      </Panel>
      <Panel>
        <p>이 기록은 읽기 전용입니다. 내용을 수정하려면 Slack 스레드에서 직접 대화하세요.</p>
      </Panel>
    </AppShell>
  )
}
