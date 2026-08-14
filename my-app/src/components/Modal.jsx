import { Button } from './ui/Button'
import { MetaLine } from './DisplayRows'

export function Modal({ modal, setModal, setView }) {
  if (!modal) return null

  const content = {
    slack: {
      title: 'Slack 연결 확인',
      copy: '아래 권한을 Baton에 허용하면 연결이 시작됩니다. 연결 후에도 개인 설정에서 언제든지 해제할 수 있습니다.',
      body: (
        <>
          <MetaLine label="채널·DM 메시지 읽기" value="활성화됨" />
          <MetaLine label="메시지 전송" value="활성화됨" />
          <MetaLine label="사용자 및 채널 정보 조회" value="활성화됨" />
          <p className="footnote">자동발송은 기본적으로 꺼진 상태로 시작합니다. 자동 발송 사실과 이후 답장은 Slack에서 직접 확인해야 합니다.</p>
        </>
      ),
      primary: '연결 시작',
      onPrimary: () => {
        setModal(null)
        setView('setup')
      },
    },
    send: {
      title: '응답 발송 확인',
      copy: '선택한 내용을 Slack 스레드에 발송합니다. 발송 후에는 되돌리기가 제한될 수 있습니다.',
      body: <p className="footnote">자동 발송 사실과 이후 답장은 Slack에서 직접 확인해야 합니다.</p>,
      primary: '발송 확정',
      onPrimary: () => {
        setModal(null)
        setView('result')
      },
    },
    cancel: {
      title: '처리 취소',
      copy: '지금 나가면 선택한 분기 또는 작성 내용이 저장되지 않습니다. 이 바통은 보류 상태로 남습니다.',
      body: null,
      primary: '나가기',
      secondary: '계속 작성',
      onPrimary: () => {
        setModal(null)
        setView('home')
      },
    },
  }[modal]

  return (
    <div className="modal-backdrop" role="presentation">
      <div aria-modal="true" className="modal" role="dialog">
        <h2>{content.title}</h2>
        <p>{content.copy}</p>
        {content.body && <div className="modal-body">{content.body}</div>}
        <div className="actions end">
          <Button onClick={() => setModal(null)}>{content.secondary || '취소'}</Button>
          <Button variant="primary" onClick={content.onPrimary}>{content.primary}</Button>
        </div>
      </div>
    </div>
  )
}
