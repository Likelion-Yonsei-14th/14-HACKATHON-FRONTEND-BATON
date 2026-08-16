/**
 * 실제 백엔드 연결 설정. 두 값 모두 .env(.local)에서 온다 — 저장소엔 안 올라간다.
 *
 * VITE_BATON_API_BASE_URL — 예: https://api.baton.example.com
 * VITE_BATON_API_KEY — 회원가입(POST /api/users) 응답의 api_key. 로그인/회원가입 UI는
 *   스코프 밖이라("절대 안 한다" 목록) 프론트에 가입 화면이 없다 — 데모용 단일 사용자의
 *   api_key를 백엔드 팀이 한 번 발급해서 넘겨주면 그 값을 .env.local에 넣는 방식을 가정했다.
 */
export const API_BASE_URL = import.meta.env.VITE_BATON_API_BASE_URL as string | undefined
export const API_KEY = import.meta.env.VITE_BATON_API_KEY as string | undefined
