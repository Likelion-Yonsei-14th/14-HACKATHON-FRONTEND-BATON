export const navItems = [
  { id: 'home', label: '바통 홈', view: 'home' },
  { id: 'new', label: '새 바통', view: 'conversations' },
  { id: 'history', label: '결정 기록', view: 'history' },
  { id: 'settings', label: '개인 설정', view: 'settings' },
]

export const statCards = [
  ['전체', '12'],
  ['대기 중', '5'],
  ['보류', '2'],
  ['자동 발송 완료', '3'],
  ['만료', '2'],
]

export const batonItems = [
  {
    name: 'Pavel Kowalski',
    channel: 'DM · #product-sync',
    status: '⚠ 보류 — 분기 불일치',
    action: '응답 처리',
    target: 'pending',
    localTime: '상대 현지시간: 09:14 (Warsaw, UTC+2)',
    elapsed: '경과: 3시간 41분',
  },
  {
    name: 'Aisha Lim',
    channel: 'DM · #async-review',
    status: '⚠ 보류 — 확신도 미달',
    action: '응답 처리',
    target: 'pending',
    localTime: '상대 현지시간: 15:52 (Singapore, UTC+8)',
    elapsed: '경과: 1시간 08분',
  },
  {
    name: 'Maria Rossi',
    channel: 'DM · #design-handoff',
    status: '✓ 자동 발송 완료 — 미확인',
    action: '결과 확인',
    target: 'result',
    localTime: '상대 현지시간: 08:20 (Rome, UTC+1)',
    elapsed: '경과: 5시간 12분',
  },
  {
    name: 'James Kim',
    channel: '#engineering · #sprint-34',
    status: '◷ 대기 중 — 답장 없음',
    action: '상세 보기',
    target: 'waiting',
    localTime: '상대 현지시간: 22:05 (New York, UTC-5)',
    elapsed: '경과: 8시간 33분',
  },
  {
    name: 'Fatima Sharma',
    channel: 'DM · #legal-review',
    status: '◷ 대기 중 — 최대 대기 2시간 남음',
    action: '상세 보기',
    target: 'waiting',
    localTime: '상대 현지시간: 18:44 (Dubai, UTC+4)',
    elapsed: '경과: 6시간 16분',
  },
  {
    name: 'Tomás Novák',
    channel: '#strategy · #q3-okr',
    status: '✓ 자동 발송 완료',
    localTime: '상대 현지시간: 09:01 (Prague, UTC+2)',
    elapsed: '경과: 11시간 04분',
  },
]

export const conversations = [
  ['# 디자인-리뷰', '채널', '최근 활동 2시간 전'],
  ['@ 김민준', 'DM', '최근 활동 4시간 전'],
  ['# 프로덕트-스프린트', '채널', '최근 활동 어제'],
  ['@ 이서연', 'DM', '최근 활동 어제'],
  ['# 개발-백엔드', '채널', '최근 활동 3일 전'],
]

export const messages = [
  {
    author: 'Jamie Lee',
    meta: '상대 현지시간: 오전 9:42 (PST)',
    body: 'Can we confirm the Q3 roadmap priority before your Friday morning? I want to align design review slots before the sprint starts.',
  },
  {
    author: '나 (김민준)',
    meta: '내 시간: 오후 2:55 (KST)',
    body: '좋아요. 제가 오늘 중 우선순위 후보를 정리해 두겠습니다. 검토 가능한 시간대를 알려주시면 맞춰볼게요.',
  },
  {
    author: 'Jamie Lee',
    meta: '상대 현지시간: 오전 10:03 (PST)',
    body: 'Great. The main risk is whether backend scope is locked. If not, design should prepare two options.',
  },
  {
    author: '나 (김민준)',
    meta: '내 시간: 오후 3:18 (KST)',
    body: '그럼 백엔드 확정 여부에 따라 A/B 응답을 준비해두겠습니다. 답장이 늦어져도 승인 흐름이 끊기지 않게 하겠습니다.',
  },
]

export const branchItems = [
  {
    id: 'A',
    title: '분기 A — 긍정적 수락',
    description: '상대방이 제안을 수락하거나 동의하는 경우',
    draft: '좋습니다. 확인해 주셔서 감사합니다. 말씀해주신 일정에 맞춰 다음 단계로 진행하겠습니다.',
  },
  {
    id: 'B',
    title: '분기 B — 조건부 또는 추가 질문',
    description: '상대방이 조건을 달거나 추가 정보를 요청하는 경우',
    draft: '확인했습니다. 필요한 조건을 알려주시면 그 기준에 맞춰 다시 정리해서 공유드리겠습니다.',
  },
  {
    id: 'C',
    title: '분기 C — 부정적 거절 또는 보류',
    description: '상대방이 거절하거나 판단을 미루는 경우',
    draft: '알겠습니다. 지금 진행이 어렵다면 대안 일정이나 담당자를 알려주시면 그 방향으로 맞추겠습니다.',
  },
]
