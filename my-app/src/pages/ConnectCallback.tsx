import { Link } from 'react-router-dom'

export function ConnectCallback() {
  // TODO: URL의 code 파라미터로 토큰 교환. 성공 시 /conversations로 자동 이동, 실패 시 /connect/error.
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-landing px-8 text-center">
      <p className="font-suit text-lg text-muted-2">Slack 연결 처리 중...</p>
      <div className="font-suit flex gap-6 text-sm">
        <Link className="text-primary underline" to="/conversations">
          (스켈레톤) 성공 → 대화 선택
        </Link>
        <Link className="text-primary underline" to="/connect/error">
          (스켈레톤) 실패 → 오류 화면
        </Link>
      </div>
    </div>
  )
}
