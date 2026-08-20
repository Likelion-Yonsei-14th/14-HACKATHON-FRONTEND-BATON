import batonFullMark from '../../assets/baton-full-mark.png'

/** 브랜드 로고. 사용자가 제공한 풀마크 이미지를 그대로 사용한다(배경만 투명 처리). */
export function Wordmark({ className = '' }: { className?: string }) {
  return <img alt="Baton" className={`h-10 w-auto object-contain ${className}`} src={batonFullMark} />
}
