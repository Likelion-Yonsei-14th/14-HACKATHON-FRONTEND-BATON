/** ============================================================
 *  Baton — Tailwind 테마 (Step 3)
 *  모든 값이 src/index.css의 CSS 변수를 참조합니다.
 *  하드코딩 색상/사이즈 없음. 새 의존성 없음(플러그인 추가 없음).
 *  기존 기본 팔레트(blue-500 등)는 제거 — 시스템 밖 색을 쓸 수 없게 만듭니다.
 *  ============================================================ */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // colors를 extend가 아닌 교체로 둡니다: 시스템 밖 색은 클래스로 나오지 않습니다.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'var(--paper-0)',

      lime: {
        100: 'var(--lime-100)',
        200: 'var(--lime-200)',
        300: 'var(--lime-300)',
        400: 'var(--lime-400)',
        500: 'var(--lime-500)',
        600: 'var(--lime-600)',
        700: 'var(--lime-700)',
        800: 'var(--lime-800)',
      },
      ink: {
        900: 'var(--ink-900)',
        800: 'var(--ink-800)',
        700: 'var(--ink-700)',
        600: 'var(--ink-600)',
        500: 'var(--ink-500)',
        400: 'var(--ink-400)',
        300: 'var(--ink-300)',
        200: 'var(--ink-200)',
      },
      paper: {
        0: 'var(--paper-0)',
        50: 'var(--paper-50)',
        100: 'var(--paper-100)',
        200: 'var(--paper-200)',
        300: 'var(--paper-300)',
      },
      flame: { 100: 'var(--flame-100)', 500: 'var(--flame-500)' },
      red: { 100: 'var(--red-100)', 500: 'var(--red-500)' },

      // 용도별 별칭 — UI 코드는 되도록 이쪽을 씁니다
      canvas: 'var(--surface-canvas)',
      card: 'var(--surface-card)',
      'card-raised': 'var(--surface-card-raised)',
      subtle: 'var(--surface-subtle)',
      chip: 'var(--surface-chip)',
      accent: 'var(--surface-accent)',
      inverse: 'var(--surface-inverse)',
      'danger-soft': 'var(--surface-danger-soft)',
      'warn-soft': 'var(--surface-warn-soft)',

      strong: 'var(--text-strong)',
      body: 'var(--text-body)',
      muted: 'var(--text-muted)',
      'on-dark': 'var(--text-on-dark)',
      'on-accent': 'var(--text-on-accent)',

      status: {
        done: 'var(--status-done)',
        review: 'var(--status-review)',
        error: 'var(--status-error)',
        waiting: 'var(--status-waiting)',
        idle: 'var(--status-idle)',
        off: 'var(--status-off)',
      },
    },

    spacing: {
      0: 'var(--sp-0)',
      1: 'var(--sp-1)',
      2: 'var(--sp-2)',
      3: 'var(--sp-3)',
      4: 'var(--sp-4)',
      5: 'var(--sp-5)',
      6: 'var(--sp-6)',
      7: 'var(--sp-7)',
      8: 'var(--sp-8)',
      9: 'var(--sp-9)',
      10: 'var(--sp-10)',
      11: 'var(--sp-11)',
      12: 'var(--sp-12)',
      // 컴포넌트 고정 치수
      'control-sm': '34px',
      control: '44px',
      'control-lg': '54px',
      rail: '56px',
    },

    borderRadius: {
      none: '0',
      2: 'var(--r-2)',
      3: 'var(--r-3)',
      4: 'var(--r-4)',
      5: 'var(--r-5)',
      6: 'var(--r-6)',
      7: 'var(--r-7)',
      8: 'var(--r-8)',
      full: 'var(--r-full)',
      card: 'var(--radius-card)',
      inner: 'var(--radius-card-inner)',
      field: 'var(--radius-field)',
      control: 'var(--radius-control)',
      thumb: 'var(--radius-thumb)',
      notch: 'var(--radius-notch)',
    },

    boxShadow: {
      none: 'none',
      hairline: 'var(--shadow-hairline)',
      chip: 'var(--shadow-chip)',
      card: 'var(--shadow-card)',
      'card-hover': 'var(--shadow-card-hover)',
      float: 'var(--shadow-float)',
      focus: 'var(--shadow-focus)',
      // 포커스 + 링 동시 적용(입력 필드)
      'focus-ring': 'var(--shadow-focus), var(--shadow-hairline)',
    },

    fontFamily: {
      display: 'var(--font-display)',
      sans: 'var(--font-sans)',
      mono: 'var(--font-mono)',
    },

    fontSize: {
      micro: ['var(--fs-11)', { lineHeight: 'var(--lh-normal)' }],
      label: ['var(--fs-12)', { lineHeight: 'var(--lh-normal)' }],
      figure: ['var(--fs-13)', { lineHeight: 'var(--lh-normal)' }],
      body: ['var(--fs-14)', { lineHeight: 'var(--lh-normal)' }],
      name: ['var(--fs-16)', { lineHeight: 'var(--lh-snug)' }],
      18: ['var(--fs-18)', { lineHeight: 'var(--lh-snug)' }],
      'card-title': ['var(--fs-20)', { lineHeight: 'var(--lh-snug)' }],
      section: ['var(--fs-22)', { lineHeight: 'var(--lh-snug)' }],
      26: ['var(--fs-26)', { lineHeight: 'var(--lh-snug)' }],
      wordmark: ['var(--fs-34)', { lineHeight: 'var(--lh-tight)' }],
      metric: ['var(--fs-44)', { lineHeight: 'var(--lh-tight)' }],
      display: ['var(--fs-64)', { lineHeight: 'var(--lh-tight)' }],
    },

    // 600+ 는 의도적으로 없앴습니다 (시스템 규칙)
    fontWeight: {
      light: 'var(--fw-light)',
      normal: 'var(--fw-regular)',
      medium: 'var(--fw-medium)',
    },

    letterSpacing: {
      tight: 'var(--tr-tight)',
      normal: 'var(--tr-normal)',
      mid: 'var(--tr-mid)',
      wide: 'var(--tr-wide)',
    },

    lineHeight: {
      tight: 'var(--lh-tight)',
      snug: 'var(--lh-snug)',
      normal: 'var(--lh-normal)',
      loose: 'var(--lh-loose)',
    },

    transitionTimingFunction: {
      out: 'var(--ease-out)',
      'in-out': 'var(--ease-in-out)',
    },

    transitionDuration: {
      1: 'var(--dur-1)',
      2: 'var(--dur-2)',
      3: 'var(--dur-3)',
      4: 'var(--dur-4)',
    },

    // 데스크탑 전용 — 모바일/태블릿 브레이크포인트는 정의하지 않습니다
    screens: {
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      backgroundImage: {
        'canvas-wash': 'var(--canvas-wash)',
      },
      minWidth: {
        card: 'var(--card-min-width)',
      },
    },
  },
  plugins: [],
};
