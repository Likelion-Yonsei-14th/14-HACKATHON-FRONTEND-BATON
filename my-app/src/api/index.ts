import { mockApiClient } from './mock/client'
import type { BatonApiClient } from './client'

// 백엔드 API가 준비되면 이 한 줄만 실제 fetch 기반 구현으로 바꾸면 된다.
// 나머지 코드는 전부 BatonApiClient 인터페이스에만 의존하므로 그대로 동작한다.
export const api: BatonApiClient = mockApiClient

export type { BatonApiClient } from './client'
