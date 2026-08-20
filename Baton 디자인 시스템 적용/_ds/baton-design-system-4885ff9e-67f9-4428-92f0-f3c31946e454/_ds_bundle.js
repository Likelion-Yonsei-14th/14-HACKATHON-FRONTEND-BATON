/* @ds-bundle: {"format":4,"namespace":"BatonDesignSystem_4885ff","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarStack","sourcePath":"components/core/AvatarStack.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"DeltaBadge","sourcePath":"components/data/DeltaBadge.jsx"},{"name":"DocThumb","sourcePath":"components/data/DocThumb.jsx"},{"name":"InterestRamp","sourcePath":"components/data/InterestRamp.jsx"},{"name":"MetricStat","sourcePath":"components/data/MetricStat.jsx"},{"name":"SourceTag","sourcePath":"components/data/SourceTag.jsx"},{"name":"FilterBar","sourcePath":"components/forms/FilterBar.jsx"},{"name":"FilterChip","sourcePath":"components/forms/FilterChip.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"SelectPill","sourcePath":"components/forms/SelectPill.jsx"},{"name":"IconRail","sourcePath":"components/navigation/IconRail.jsx"},{"name":"ScheduleBar","sourcePath":"components/navigation/ScheduleBar.jsx"},{"name":"SectionHeader","sourcePath":"components/navigation/SectionHeader.jsx"},{"name":"CallTile","sourcePath":"components/patterns/CallTile.jsx"},{"name":"LeadCard","sourcePath":"components/patterns/LeadCard.jsx"},{"name":"SummaryPanel","sourcePath":"components/patterns/SummaryPanel.jsx"},{"name":"TaskCard","sourcePath":"components/patterns/TaskCard.jsx"},{"name":"TimelineRail","sourcePath":"components/patterns/TimelineRail.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"763bc9db0f75","components/core/Avatar.jsx":"efcb725135f2","components/core/AvatarStack.jsx":"c76e3197bcc7","components/core/Button.jsx":"42f33d13a44f","components/core/Card.jsx":"939be68fa082","components/core/Icon.jsx":"74ecdd001e8e","components/core/IconButton.jsx":"048b15c5899b","components/data/DeltaBadge.jsx":"c1c5b7fc1ba2","components/data/DocThumb.jsx":"c840a21f0577","components/data/InterestRamp.jsx":"f8065a9543f9","components/data/MetricStat.jsx":"44f865d92f8a","components/data/SourceTag.jsx":"88f709fd7756","components/forms/FilterBar.jsx":"8d0aec4453b7","components/forms/FilterChip.jsx":"1256ea433de9","components/forms/SearchInput.jsx":"f7637e34ce5c","components/forms/SelectPill.jsx":"6ec8f5f0aa49","components/navigation/IconRail.jsx":"789ae1b53f13","components/navigation/ScheduleBar.jsx":"c743518a979d","components/navigation/SectionHeader.jsx":"d89600062be3","components/patterns/CallTile.jsx":"2541da59b4e9","components/patterns/LeadCard.jsx":"63d941c8c769","components/patterns/SummaryPanel.jsx":"35b6ca88a005","components/patterns/TaskCard.jsx":"7f13e92f0c05","components/patterns/TimelineRail.jsx":"dd13eae45ae6","ui_kits/workspace/CallOverlay.jsx":"7e64a770f9b2","ui_kits/workspace/LeadDetail.jsx":"d2860c63fcb6","ui_kits/workspace/LeadsRail.jsx":"5187ceb46a2d","ui_kits/workspace/PageHeader.jsx":"ae5e9fbf568c","ui_kits/workspace/TasksRail.jsx":"ac7ebfc4a50c","ui_kits/workspace/TopBar.jsx":"88ffa2a85d81","ui_kits/workspace/WorkspaceApp.jsx":"b03a5a305994","ui_kits/workspace/data.js":"cc2540e4c809"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BatonDesignSystem_4885ff = window.BatonDesignSystem_4885ff || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  size = 34,
  tone = 'ink',
  mark = true,
  text = 'BATON',
  style,
  ...rest
}) {
  const color = tone === 'light' ? 'var(--text-on-dark)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.28,
      ...style
    }
  }, rest), mark && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size * 0.42,
      height: size * 0.42,
      borderRadius: 'var(--r-full)',
      background: 'var(--surface-accent)',
      boxShadow: 'inset 0 0 0 ' + Math.max(2, size * 0.06) + 'px ' + (tone === 'light' ? 'var(--ink-900)' : 'var(--paper-0)')
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) ' + size + 'px/1 var(--font-display)',
      letterSpacing: 'var(--tr-wide)',
      color,
      textTransform: 'uppercase'
    }
  }, text));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  src,
  name = '',
  size = 44,
  ring = true,
  status,
  style,
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: '0 0 auto',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-avatar)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--paper-200)',
      color: 'var(--text-muted)',
      font: 'var(--fw-medium) ' + Math.round(size * 0.34) + 'px/1 var(--font-sans)',
      boxShadow: ring ? '0 0 0 3px var(--paper-0), var(--shadow-chip)' : 'var(--shadow-hairline)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: size * 0.24,
      height: size * 0.24,
      borderRadius: 'var(--r-full)',
      background: status === 'away' ? 'var(--amber-500)' : status === 'busy' ? 'var(--state-negative)' : 'var(--lime-600)',
      boxShadow: '0 0 0 2px var(--paper-0)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/AvatarStack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AvatarStack({
  people = [],
  size = 24,
  max = 3,
  overlap = 8,
  style,
  ...rest
}) {
  const shown = people.slice(0, max),
    extra = people.length - shown.length;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, rest), shown.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i ? -overlap : 0,
      zIndex: shown.length - i
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: p.src,
    name: p.name,
    size: size
  }))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -overlap,
      width: size,
      height: size,
      borderRadius: 'var(--r-full)',
      background: 'var(--paper-0)',
      boxShadow: 'var(--shadow-hairline)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--fw-medium) ' + Math.round(size * 0.36) + 'px/1 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AvatarStack.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  paper: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)'
  },
  raised: {
    background: 'var(--surface-card-raised)',
    color: 'var(--text-body)'
  },
  accent: {
    background: 'var(--surface-accent)',
    color: 'var(--text-on-accent)'
  },
  inverse: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-on-dark)'
  },
  glass: {
    background: 'var(--surface-glass)',
    color: 'var(--text-body)',
    backdropFilter: 'var(--blur-glass)'
  }
};
function Card({
  children,
  tone = 'paper',
  notch = false,
  notchAction,
  notchSize = 56,
  pad = 'var(--pad-card)',
  interactive = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.paper;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-card)',
      padding: pad,
      ...t,
      boxShadow: tone === 'inverse' ? 'var(--shadow-float)' : hover && interactive ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transition: 'var(--t-hover)',
      transform: hover && interactive ? 'var(--lift-hover)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), notch && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: notchSize + 10,
      height: notchSize + 10,
      background: 'var(--surface-canvas)',
      borderBottomLeftRadius: 'var(--radius-notch)',
      borderTopRightRadius: 'var(--radius-card)'
    }
  }), notch && notchAction && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2,
      zIndex: 1
    }
  }, notchAction), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide outline icons, loaded as images from CDN. CSS masks cannot be used here:
// browsers block cross-origin mask-image, so tone is applied with a filter instead.
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.539.0/icons/';
const FILTERS = {
  ink: 'none',
  light: 'brightness(0) invert(1)',
  muted: 'invert(45%)',
  faint: 'invert(62%)',
  hot: 'invert(58%) sepia(64%) saturate(4000%) hue-rotate(345deg) brightness(101%) contrast(101%)',
  danger: 'invert(38%) sepia(94%) saturate(5000%) hue-rotate(346deg) brightness(97%) contrast(105%)'
};
const LIGHT = /#fff|white|on-dark|255,255,255/i;
const MUTED = /ink-400|ink-500|text-muted/i;
const FAINT = /ink-300|text-faint/i;
const HOT = /flame|state-hot/i;
const DANGER = /red-|negative/i;
function toneFor(tone, color) {
  if (tone) return tone;
  const c = String(color || '');
  if (LIGHT.test(c)) return 'light';
  if (HOT.test(c)) return 'hot';
  if (DANGER.test(c)) return 'danger';
  if (FAINT.test(c)) return 'faint';
  if (MUTED.test(c)) return 'muted';
  return 'ink';
}
function Icon({
  name = 'circle',
  size = 18,
  color,
  tone,
  style,
  ...rest
}) {
  const t = toneFor(tone, color);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: CDN + name + '.svg',
    alt: "",
    "aria-hidden": "true",
    width: size,
    height: size,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      filter: FILTERS[t] || 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 34,
    px: 'var(--sp-6)',
    font: 'var(--fw-regular) var(--fs-13)/1 var(--font-sans)',
    icon: 16
  },
  md: {
    h: 44,
    px: 'var(--sp-7)',
    font: 'var(--fw-regular) var(--fs-14)/1 var(--font-sans)',
    icon: 18
  },
  lg: {
    h: 54,
    px: 'var(--sp-8)',
    font: 'var(--fw-medium) var(--fs-16)/1 var(--font-sans)',
    icon: 20
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-on-dark)',
    boxShadow: 'var(--shadow-chip)'
  },
  accent: {
    background: 'var(--surface-accent)',
    color: 'var(--text-on-accent)',
    boxShadow: 'var(--shadow-chip)'
  },
  quiet: {
    background: 'var(--surface-chip)',
    color: 'var(--text-body)',
    boxShadow: 'var(--shadow-hairline)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    boxShadow: 'inset 0 0 0 1px var(--line-soft)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  leadingSlot,
  disabled,
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md,
    v = VARIANTS[variant] || VARIANTS.primary;
  const px = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
  const [hover, setHover] = React.useState(false),
    [down, setDown] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      gap: 'var(--gap-inline)',
      height: s.h,
      paddingLeft: leadingSlot ? 4 : px,
      paddingRight: px,
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: 'var(--radius-control)',
      font: s.font,
      letterSpacing: 'var(--tr-mid)',
      ...v,
      opacity: disabled ? .4 : 1,
      transition: 'var(--t-hover)',
      transform: down ? 'scale(var(--press-scale))' : hover && !disabled ? 'var(--lift-hover)' : 'none',
      filter: hover && !disabled ? 'brightness(1.06)' : 'none',
      ...style
    }
  }, rest), leadingSlot, icon && !leadingSlot && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    tone: variant === 'primary' ? 'light' : 'ink'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: leadingSlot ? '0 6px' : 0
    }
  }, children), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon,
    tone: variant === 'primary' ? 'light' : 'ink'
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  quiet: {
    background: 'var(--surface-chip)',
    color: 'var(--ink-700)',
    boxShadow: 'var(--shadow-hairline)'
  },
  dark: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-on-dark)',
    boxShadow: 'none'
  },
  accent: {
    background: 'var(--surface-accent)',
    color: 'var(--text-on-accent)',
    boxShadow: 'none'
  },
  danger: {
    background: 'var(--state-negative)',
    color: '#fff',
    boxShadow: 'none'
  },
  glass: {
    background: 'rgba(255,255,255,.14)',
    color: '#fff',
    boxShadow: 'inset 0 0 0 1px var(--line-on-dark)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink-700)',
    boxShadow: 'inset 0 0 0 1px var(--line-soft)'
  }
};
function IconButton({
  icon = 'plus',
  variant = 'quiet',
  size = 44,
  dot = false,
  label,
  onClick,
  style,
  children,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.quiet;
  const [hover, setHover] = React.useState(false),
    [down, setDown] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || icon,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      borderRadius: 'var(--radius-control)',
      ...v,
      transition: 'var(--t-hover)',
      transform: down ? 'scale(var(--press-scale))' : hover ? 'var(--lift-hover)' : 'none',
      filter: hover ? 'brightness(1.06)' : 'none',
      ...style
    }
  }, rest), children || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.42),
    tone: /dark|danger|glass/.test(variant) ? 'light' : 'ink'
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: size * 0.2,
      right: size * 0.22,
      width: 7,
      height: 7,
      borderRadius: 'var(--r-full)',
      background: 'var(--state-negative)',
      boxShadow: '0 0 0 2px var(--surface-chip)'
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/DeltaBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DeltaBadge({
  value = 0,
  style,
  ...rest
}) {
  const up = value >= 0;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      padding: '3px 7px 3px 5px',
      borderRadius: 'var(--r-full)',
      background: up ? 'var(--lime-500)' : 'var(--red-100)',
      color: up ? 'var(--ink-900)' : 'var(--state-negative)',
      font: 'var(--fw-medium) var(--fs-11)/1 var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: up ? 'arrow-up' : 'arrow-down',
    size: 10,
    tone: up ? 'ink' : 'danger'
  }), Math.abs(value));
}
Object.assign(__ds_scope, { DeltaBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DeltaBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/DocThumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DocThumb({
  src,
  title = 'Document',
  caption,
  width = 104,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: width * 1.28,
      borderRadius: 'var(--radius-thumb)',
      overflow: 'hidden',
      background: 'var(--paper-0)',
      boxShadow: 'var(--shadow-chip)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-11)/1.3 var(--font-sans)',
      color: 'var(--text-faint)',
      padding: 8,
      textAlign: 'center'
    }
  }, title)), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '3px 10px',
      borderRadius: 'var(--radius-chip)',
      background: 'var(--paper-100)',
      font: 'var(--fw-regular) var(--fs-11)/1 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { DocThumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DocThumb.jsx", error: String((e && e.message) || e) }); }

// components/data/InterestRamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const RAMP = ['var(--ramp-1)', 'var(--ramp-2)', 'var(--ramp-3)', 'var(--ramp-4)', 'var(--ramp-5)'];
function InterestRamp({
  level = 5,
  steps = 5,
  label,
  size = 11,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-12)/1 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 3
    }
  }, Array.from({
    length: steps
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--r-full)',
      background: i < level ? RAMP[Math.round(i * (RAMP.length - 1) / (steps - 1))] : 'var(--paper-200)'
    }
  }))));
}
Object.assign(__ds_scope, { InterestRamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/InterestRamp.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetricStat({
  value,
  label,
  delta,
  size = 44,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'flex-end',
      gap: 'var(--sp-3)',
      whiteSpace: 'nowrap',
      flex: '0 0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) ' + size + 'px/0.9 var(--font-display)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tr-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 2,
      paddingBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-16)/1 var(--font-sans)',
      color: 'var(--text-faint)'
    }
  }, label), delta !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: -14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DeltaBadge, {
    value: delta
  }))));
}
Object.assign(__ds_scope, { MetricStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricStat.jsx", error: String((e && e.message) || e) }); }

// components/data/SourceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SourceTag({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 26,
      padding: '0 12px',
      borderRadius: 'var(--radius-chip)',
      background: 'var(--surface-chip)',
      color: 'var(--text-muted)',
      boxShadow: 'var(--shadow-hairline)',
      font: 'var(--fw-regular) var(--fs-12)/1 var(--font-sans)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SourceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SourceTag.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FilterChip({
  children,
  icon,
  iconColor,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      height: 38,
      padding: '0 16px',
      border: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-chip)',
      font: 'var(--fw-regular) var(--fs-13)/1 var(--font-sans)',
      letterSpacing: 'var(--tr-mid)',
      background: active ? 'var(--paper-0)' : 'var(--surface-chip)',
      color: active ? 'var(--text-strong)' : 'var(--text-muted)',
      boxShadow: active ? 'var(--shadow-card)' : 'var(--shadow-hairline)',
      transform: hover && !active ? 'var(--lift-hover)' : 'none',
      transition: 'var(--t-hover)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: iconColor,
    tone: iconColor ? undefined : active ? 'ink' : 'muted'
  }), children);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FilterBar({
  options = [],
  value,
  onChange,
  search = true,
  sort = true,
  style,
  ...rest
}) {
  const [sel, setSel] = React.useState(value || options[0] && (options[0].label || options[0]));
  const current = value !== undefined ? value : sel;
  const pick = v => {
    setSel(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      minWidth: 0,
      ...style
    }
  }, rest), search && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    variant: "outline",
    size: 38
  }), sort && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "sliders-horizontal",
    variant: "outline",
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      overflow: 'hidden',
      minWidth: 0
    }
  }, options.map((o, i) => {
    const label = o.label || o;
    return /*#__PURE__*/React.createElement(__ds_scope.FilterChip, {
      key: i,
      icon: o.icon,
      iconColor: o.iconColor,
      active: current === label,
      onClick: () => pick(label)
    }, label);
  })));
}
Object.assign(__ds_scope, { FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchInput({
  placeholder = 'Search leads, deals, people',
  value,
  onChange,
  width = 320,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      width,
      height: 44,
      padding: '0 18px',
      borderRadius: 'var(--radius-control)',
      background: 'var(--surface-chip)',
      boxShadow: focus ? 'var(--shadow-focus), var(--shadow-hairline)' : 'var(--shadow-hairline)',
      transition: 'var(--t-hover)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 17,
    color: "var(--ink-400)"
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--text-body)',
      font: 'var(--fw-regular) var(--fs-14)/1 var(--font-sans)'
    }
  }));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SelectPill({
  value,
  options = [],
  avatar,
  onChange,
  tone = 'raised',
  width,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const [val, setVal] = React.useState(value || options[0] || '');
  const current = value !== undefined && !open ? value : val;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: width || '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-5)',
      width: '100%',
      height: 52,
      padding: avatar ? '0 16px 0 6px' : '0 18px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-control)',
      textAlign: 'left',
      background: tone === 'raised' ? 'var(--paper-0)' : 'var(--surface-chip)',
      color: 'var(--text-body)',
      font: 'var(--fw-regular) var(--fs-14)/1 var(--font-sans)',
      boxShadow: 'var(--shadow-chip)',
      transition: 'var(--t-hover)'
    }
  }, avatar && /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatar.src,
    name: avatar.name,
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, current), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--ink-500)",
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'var(--t-hover)'
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 58,
      left: 0,
      right: 0,
      zIndex: 20,
      padding: 'var(--sp-3)',
      background: 'var(--paper-0)',
      borderRadius: 'var(--radius-card-inner)',
      boxShadow: 'var(--shadow-float)'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("div", {
    key: o,
    onClick: () => {
      setVal(o);
      setOpen(false);
      onChange && onChange(o);
    },
    style: {
      padding: '10px 14px',
      borderRadius: 'var(--r-4)',
      cursor: 'pointer',
      font: 'var(--fw-regular) var(--fs-14)/1.2 var(--font-sans)',
      background: o === current ? 'var(--lime-100)' : 'transparent',
      color: 'var(--text-body)'
    }
  }, o))));
}
Object.assign(__ds_scope, { SelectPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectPill.jsx", error: String((e && e.message) || e) }); }

// components/navigation/IconRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconRail({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const [sel, setSel] = React.useState(value || items[0] && items[0].id);
  const current = value !== undefined ? value : sel;
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)',
      ...style
    }
  }, rest), items.map(it => {
    const active = it.id === current;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      "aria-label": it.label,
      onClick: () => {
        setSel(it.id);
        onChange && onChange(it.id);
      },
      style: {
        width: 44,
        height: 44,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-control)',
        transition: 'var(--t-hover)',
        background: active ? 'var(--surface-inverse)' : 'var(--surface-chip)',
        color: active ? 'var(--text-on-dark)' : 'var(--ink-500)',
        boxShadow: active ? 'var(--shadow-card)' : 'var(--shadow-hairline)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 19,
      tone: active ? 'light' : 'muted'
    }));
  }));
}
Object.assign(__ds_scope, { IconRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/IconRail.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ScheduleBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Slot({
  slot
}) {
  const accent = slot.tone === 'accent';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      flex: slot.flex || '0 0 auto',
      minWidth: 0,
      height: 44,
      padding: '0 6px 0 4px',
      borderRadius: 'var(--radius-control)',
      background: accent ? 'var(--surface-accent)' : 'transparent',
      color: accent ? 'var(--text-on-accent)' : 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AvatarStack, {
    people: slot.people || [],
    size: 34,
    max: 2,
    overlap: 12
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-12)/1 var(--font-sans)',
      whiteSpace: 'nowrap',
      color: accent ? 'var(--ink-700)' : 'rgba(255,255,255,.72)'
    }
  }, slot.meta), slot.action && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: slot.action,
    variant: accent ? 'accent' : 'glass',
    size: 30
  })));
}
function ScheduleBar({
  label = 'Your Schedule',
  date,
  slots = [],
  onOpen,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-5)',
      height: 56,
      padding: '0 6px 0 22px',
      borderRadius: 'var(--radius-control)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-14)/1 var(--font-sans)',
      whiteSpace: 'nowrap'
    }
  }, label), date && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      height: 34,
      padding: '0 14px',
      borderRadius: 'var(--radius-control)',
      background: 'rgba(255,255,255,.10)',
      font: 'var(--fw-regular) var(--fs-12)/1 var(--font-sans)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar",
    size: 14,
    tone: "light"
  }), date), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      minWidth: 0,
      overflow: 'hidden'
    }
  }, slots.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--line-on-dark)',
      flex: '0 0 auto'
    }
  }), s.time && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-12)/1 var(--font-sans)',
      color: 'rgba(255,255,255,.72)',
      whiteSpace: 'nowrap'
    }
  }, s.time), /*#__PURE__*/React.createElement(Slot, {
    slot: s
  })))), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-up-right",
    variant: "glass",
    size: 44,
    onClick: onOpen
  }));
}
Object.assign(__ds_scope, { ScheduleBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ScheduleBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  title,
  count,
  countLabel,
  right,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-8)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--type-section)',
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, title), count !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 6,
      paddingBottom: 2,
      flex: '0 0 auto',
      whiteSpace: 'nowrap',
      borderBottom: '1px solid var(--line-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-16)/1 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, count), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-12)/1 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, countLabel || 'items')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, right));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/patterns/CallTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CallTile({
  src,
  name,
  width = 228,
  muted = false,
  onEnd,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width,
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      background: 'var(--ink-800)',
      boxShadow: 'var(--shadow-float)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: width * 0.78,
      background: 'var(--ink-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-13)/1 var(--font-sans)',
      color: 'rgba(255,255,255,.5)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "maximize-2",
    variant: "glass",
    size: 30
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    variant: "glass",
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "video",
    variant: "glass",
    size: 34
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: muted ? 'mic-off' : 'mic',
    variant: "glass",
    size: 34
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "volume-2",
    variant: "glass",
    size: 34
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "phone",
    variant: "danger",
    size: 34,
    onClick: onEnd
  })));
}
Object.assign(__ds_scope, { CallTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/CallTile.jsx", error: String((e && e.message) || e) }); }

// components/patterns/LeadCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LeadCard({
  name,
  role,
  photo,
  sources = [],
  interest = 5,
  interestLabel,
  tone = 'paper',
  onOpen,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    interactive: true,
    notch: true,
    notchAction: /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
      icon: "arrow-up-right",
      size: 52,
      onClick: onOpen
    }),
    notchSize: 52,
    pad: "var(--sp-7)",
    style: {
      minWidth: 'var(--card-min-width)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: photo,
    name: name,
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-card-title)',
      color: tone === 'accent' ? 'var(--text-on-accent)' : 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: 'var(--type-label)',
      color: 'var(--text-muted)'
    }
  }, role)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-7)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-micro)',
      color: 'var(--text-faint)',
      marginBottom: 6
    }
  }, "Source"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)'
    }
  }, sources.map(s => /*#__PURE__*/React.createElement(__ds_scope.SourceTag, {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, interestLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      marginBottom: 6,
      padding: '3px 9px',
      borderRadius: 'var(--radius-chip)',
      background: 'var(--paper-0)',
      boxShadow: 'var(--shadow-hairline)',
      font: 'var(--type-micro)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, interestLabel), /*#__PURE__*/React.createElement(__ds_scope.InterestRamp, {
    level: interest
  }))));
}
Object.assign(__ds_scope, { LeadCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/LeadCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/SummaryPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SummaryPanel({
  title = 'Summary',
  blocks = [],
  width = 228,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      padding: 'var(--sp-6)',
      borderRadius: 'var(--radius-card)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      boxShadow: 'var(--shadow-float)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      marginBottom: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--r-full)',
      background: 'rgba(255,255,255,.10)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 16,
    tone: "light"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--fw-medium) var(--fs-18)/1 var(--font-display)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-up-right",
    variant: "glass",
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, blocks.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 'var(--sp-5)',
      borderRadius: 'var(--radius-card-inner)',
      background: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-14)/1 var(--font-sans)'
    }
  }, b.label), b.action && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: b.action,
    variant: "glass",
    size: 26
  })), b.body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-regular) var(--fs-12)/1.5 var(--font-sans)',
      color: 'rgba(255,255,255,.62)'
    }
  }, b.body), b.children))));
}
Object.assign(__ds_scope, { SummaryPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/SummaryPanel.jsx", error: String((e && e.message) || e) }); }

// components/patterns/TaskCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TaskCard({
  person = {},
  title,
  kindIcon = 'video',
  meta,
  attendees = [],
  status,
  statusOptions = [],
  tone = 'raised',
  primaryAction,
  onNotify,
  style,
  ...rest
}) {
  const accent = tone === 'accent';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    notch: true,
    notchAction: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 'var(--sp-3)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
      icon: "bell",
      size: 46,
      dot: true,
      onClick: onNotify
    }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
      icon: "arrow-up-right",
      size: 46
    })),
    notchSize: 110,
    pad: "var(--sp-7)",
    style: {
      minWidth: 300,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: person.photo,
    name: person.name,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-14)/1.2 var(--font-sans)',
      color: accent ? 'var(--text-on-accent)' : 'var(--text-strong)'
    }
  }, person.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: 'var(--type-micro)',
      color: 'var(--text-muted)'
    }
  }, person.role))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-control)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: accent ? 'rgba(255,255,255,.42)' : 'var(--surface-chip)',
      boxShadow: 'var(--shadow-hairline)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: kindIcon,
    size: 20,
    color: "var(--ink-700)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-card-title)',
      color: accent ? 'var(--text-on-accent)' : 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)'
    }
  }, attendees.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.AvatarStack, {
    people: attendees,
    size: 22,
    max: 3,
    overlap: 7
  }), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: accent ? 'var(--ink-700)' : 'var(--text-muted)'
    }
  }, meta)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-micro)',
      color: accent ? 'var(--ink-700)' : 'var(--text-faint)',
      marginBottom: 6
    }
  }, "Status"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SelectPill, {
    avatar: {
      src: person.ownerPhoto,
      name: person.owner
    },
    value: status,
    options: statusOptions.length ? statusOptions : [status]
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "mail",
    variant: "outline",
    size: 46
  }), primaryAction !== false && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: kindIcon,
    variant: "dark",
    size: 52
  }))));
}
Object.assign(__ds_scope, { TaskCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/TaskCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/TimelineRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TimelineRail({
  stops = [],
  active = 0,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 0,
      ...style
    }
  }, rest), stops.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 2,
      flex: 1,
      minHeight: 34,
      background: 'var(--line-on-dark)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-11)/1 var(--font-mono)',
      color: 'rgba(255,255,255,.5)'
    }
  }, s.time), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 'var(--r-full)',
      background: i === active ? 'var(--lime-500)' : 'rgba(255,255,255,.18)',
      boxShadow: i === active ? '0 0 0 4px rgba(190,251,113,.18)' : 'none'
    }
  })))));
}
Object.assign(__ds_scope, { TimelineRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/TimelineRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workspace/CallOverlay.jsx
try { (() => {
const {
  CallTile,
  SummaryPanel,
  TimelineRail,
  DocThumb
} = window.BatonDesignSystem_4885ff;
function CallOverlay({
  onEnd
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      top: 150,
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(TimelineRail, {
    stops: [{
      time: '3:15'
    }, {
      time: '3:02'
    }, {
      time: '2:46'
    }],
    active: 2,
    style: {
      background: 'var(--ink-900)',
      borderRadius: 'var(--r-full)',
      padding: '18px 10px',
      boxShadow: 'var(--shadow-float)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(CallTile, {
    name: "Peter Thomas \u2014 live",
    width: 228,
    onEnd: onEnd
  }), /*#__PURE__*/React.createElement(SummaryPanel, {
    width: 228,
    blocks: [{
      label: 'Documents:',
      action: 'download',
      children: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(DocThumb, {
        title: "Proposal draft",
        caption: "Final",
        width: 88
      }), /*#__PURE__*/React.createElement(DocThumb, {
        title: "Security review",
        caption: "Requirements",
        width: 88
      }))
    }, {
      label: 'Goal:',
      action: 'pencil',
      body: 'Reduce the number of security incidents by 50%. This goal is quantitative and measurable, and it would have significant impact on the account.'
    }]
  })));
}
Object.assign(window, {
  CallOverlay
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workspace/CallOverlay.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workspace/LeadDetail.jsx
try { (() => {
const {
  Card,
  Avatar,
  IconButton,
  Button,
  SourceTag,
  InterestRamp,
  SelectPill,
  MetricStat
} = window.BatonDesignSystem_4885ff;

// Composed only from existing primitives — the source material shows no detail view,
// so this panel is an extrapolation (see README).
function LeadDetail({
  lead,
  onClose
}) {
  if (!lead) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(11,11,11,.28)',
      backdropFilter: 'blur(3px)',
      zIndex: 50,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 420,
      margin: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "raised",
    pad: "var(--sp-8)",
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: lead.name,
    size: 64
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-section)',
      color: 'var(--text-strong)'
    }
  }, lead.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, lead.role)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-micro)',
      color: 'var(--text-faint)',
      marginBottom: 6
    }
  }, "Source"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, lead.sources.map(s => /*#__PURE__*/React.createElement(SourceTag, {
    key: s
  }, s)))), /*#__PURE__*/React.createElement(InterestRamp, {
    level: lead.interest,
    label: lead.interestLabel
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)',
      display: 'flex',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement(MetricStat, {
    value: "$ 20.000",
    label: "pipeline",
    size: 26
  }), /*#__PURE__*/React.createElement(MetricStat, {
    value: 4,
    label: "touches",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(SelectPill, {
    tone: "chip",
    value: "Call scheduled",
    options: ['Call scheduled', 'Waiting Proposal', 'Closed won', 'Closed lost']
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "mail",
    variant: "outline",
    size: 52
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "video",
    variant: "dark",
    size: 52
  }))), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--sp-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-micro)',
      color: 'var(--text-faint)',
      marginBottom: 10
    }
  }, "Activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Intro call', '28.03.2023 at 2 pm'], ['Sent pricing deck', '26.03.2023'], ['Replied on LinkedIn', '24.03.2023']].map(([t, m]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--r-full)',
      background: 'var(--lime-600)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)'
    }
  }, m)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "check"
  }, "Mark as won")))));
}
Object.assign(window, {
  LeadDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workspace/LeadDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workspace/LeadsRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeader,
  FilterBar,
  LeadCard
} = window.BatonDesignSystem_4885ff;
function LeadsRail({
  onOpenLead
}) {
  const D = window.BatonData;
  const [filter, setFilter] = React.useState('All');
  const shown = D.leads.filter(l => filter === 'All' ? true : filter === 'Hot Client' ? l.interest === 5 : filter === 'Great interest' ? l.interest >= 4 : filter === 'Medium interest' ? l.interest === 3 : filter === 'Low interest' ? l.interest === 2 : l.interest <= 1);
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "New Leads",
    count: shown.length,
    countLabel: "Leads",
    right: /*#__PURE__*/React.createElement(FilterBar, {
      options: D.leadFilters,
      value: filter,
      onChange: setFilter
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--gap-card)',
      marginTop: 'var(--sp-7)',
      overflow: 'hidden'
    }
  }, shown.map(l => /*#__PURE__*/React.createElement(LeadCard, _extends({
    key: l.name
  }, l, {
    style: {
      flex: '0 0 250px'
    },
    onOpen: () => onOpenLead(l)
  })))));
}
Object.assign(window, {
  LeadsRail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workspace/LeadsRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workspace/PageHeader.jsx
try { (() => {
const {
  Wordmark,
  Button,
  IconButton,
  MetricStat
} = window.BatonDesignSystem_4885ff;
function PageHeader({
  onNewTask
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    size: 48
  }), /*#__PURE__*/React.createElement(Wordmark, {
    text: "WORKSPACE",
    mark: false,
    size: 34
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingSlot: /*#__PURE__*/React.createElement(IconButton, {
      variant: "accent",
      icon: "plus",
      size: 36
    }),
    onClick: onNewTask
  }, "New Task"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 44,
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement(MetricStat, {
    value: 34,
    label: "Deals",
    delta: 3
  }), /*#__PURE__*/React.createElement(MetricStat, {
    value: 20,
    label: "won",
    delta: 2
  }), /*#__PURE__*/React.createElement(MetricStat, {
    value: 3,
    label: "lost",
    delta: -1
  })));
}
Object.assign(window, {
  PageHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workspace/PageHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workspace/TasksRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeader,
  FilterBar,
  TaskCard
} = window.BatonDesignSystem_4885ff;
function TasksRail() {
  const D = window.BatonData;
  const [filter, setFilter] = React.useState('All');
  const shown = D.tasks.filter(t => filter === 'All' ? true : filter === 'Hot' ? t.tone === 'accent' : filter === 'Due Today' ? /28\.03/.test(t.meta) : filter === 'Overdue' ? false : t.status === 'Signed');
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Your Days Tasks",
    count: shown.length,
    countLabel: "Tasks",
    right: /*#__PURE__*/React.createElement(FilterBar, {
      options: D.taskFilters,
      value: filter,
      onChange: setFilter
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--gap-card)',
      marginTop: 'var(--sp-7)',
      overflow: 'hidden'
    }
  }, shown.map((t, i) => /*#__PURE__*/React.createElement(TaskCard, _extends({
    key: i
  }, t, {
    style: {
      flex: '0 0 336px'
    }
  }))), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-faint)',
      padding: '28px 4px'
    }
  }, "Nothing here today.")));
}
Object.assign(window, {
  TasksRail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workspace/TasksRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workspace/TopBar.jsx
try { (() => {
const {
  ScheduleBar,
  IconButton,
  Avatar
} = window.BatonDesignSystem_4885ff;
function TopBar({
  onJoinCall
}) {
  const D = window.BatonData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(ScheduleBar, {
    date: "28 March",
    slots: [{
      meta: '36 min',
      people: [{
        name: 'Ken Ito'
      }],
      action: 'arrow-up-right'
    }, {
      time: '2:00 pm',
      people: [{
        name: 'Ava Ruiz'
      }, {
        name: 'Peter Thomas'
      }],
      tone: 'accent',
      flex: '1 1 auto',
      action: 'video'
    }, {
      time: '3:00 pm',
      people: [{
        name: 'Mia Fox'
      }, {
        name: 'Jon Ray'
      }],
      action: 'arrow-up-right'
    }],
    onOpen: onJoinCall
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    dot: true,
    size: 48
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 2,
      borderRadius: 'var(--r-full)',
      background: 'var(--surface-chip)',
      boxShadow: 'var(--shadow-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: D.me.name,
    size: 44
  })));
}
Object.assign(window, {
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workspace/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workspace/WorkspaceApp.jsx
try { (() => {
const {
  IconRail
} = window.BatonDesignSystem_4885ff;
function WorkspaceApp() {
  const D = window.BatonData;
  const [nav, setNav] = React.useState('home');
  const [lead, setLead] = React.useState(null);
  const [call, setCall] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--canvas-wash)',
      padding: '22px 26px 40px'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    onJoinCall: () => setCall(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      marginTop: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement(IconRail, {
    items: D.nav,
    value: nav,
    onChange: setNav
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-section)'
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    onNewTask: () => setLead(D.leads[0])
  }), /*#__PURE__*/React.createElement(LeadsRail, {
    onOpenLead: setLead
  }), /*#__PURE__*/React.createElement(TasksRail, null))), call && /*#__PURE__*/React.createElement(CallOverlay, {
    onEnd: () => setCall(false)
  }), /*#__PURE__*/React.createElement(LeadDetail, {
    lead: lead,
    onClose: () => setLead(null)
  }));
}
Object.assign(window, {
  WorkspaceApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workspace/WorkspaceApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workspace/data.js
try { (() => {
window.BatonData = {
  me: {
    name: 'Sam Lee'
  },
  leads: [{
    name: 'Jane Doe',
    role: 'Marketing Director at Microsoft',
    sources: ['LinkedIn', 'Email'],
    interest: 5,
    interestLabel: 'Hot Client'
  }, {
    name: 'Darlene Robertson',
    role: 'Financial Manager at Ford',
    sources: ['LinkedIn', 'Facebook'],
    interest: 4,
    interestLabel: 'High interest'
  }, {
    name: 'Wade Warren',
    role: 'Operations Manager at Zenith',
    sources: ['Typeform'],
    interest: 3,
    interestLabel: 'Medium interest'
  }, {
    name: 'Jonah Jude',
    role: 'Web Developer at Binary Bytes',
    sources: ['Typeform'],
    interest: 2,
    interestLabel: 'Low interest'
  }, {
    name: 'Marta Ilves',
    role: 'Head of Growth at Northbeam',
    sources: ['LinkedIn'],
    interest: 5,
    interestLabel: 'Hot Client'
  }],
  tasks: [{
    person: {
      name: 'Peter Thomas',
      role: 'CEO at Madira Ink',
      owner: 'Sam Lee'
    },
    title: 'Google Meet Call',
    kindIcon: 'video',
    meta: '28.03.2023 at 2 pm',
    attendees: [{
      name: 'Ken Ito'
    }, {
      name: 'Ava Ruiz'
    }],
    status: 'Call scheduled',
    statusOptions: ['Call scheduled', 'Rescheduled', 'Completed'],
    tone: 'accent'
  }, {
    person: {
      name: 'Alesha Hyacinth',
      role: 'CEO at Metamorposs',
      owner: 'Sam Lee'
    },
    title: 'Send Proposal',
    kindIcon: 'file-text',
    meta: 'Amount  $ 20.000',
    attendees: [],
    status: 'Waiting Proposal',
    statusOptions: ['Waiting Proposal', 'Sent', 'Signed'],
    tone: 'raised'
  }, {
    person: {
      name: 'Miriam Fannie',
      role: 'Brand Manager at Summit Marketing',
      owner: 'Sam Lee'
    },
    title: 'Google Meet Call',
    kindIcon: 'video',
    meta: '28.03.2023 at 8 pm',
    attendees: [{
      name: 'Mia Fox'
    }],
    status: 'Call scheduled',
    statusOptions: ['Call scheduled', 'Rescheduled'],
    tone: 'raised'
  }, {
    person: {
      name: 'Ronald Byrd',
      role: 'CTO at Halcyon Labs',
      owner: 'Sam Lee'
    },
    title: 'Follow-up Email',
    kindIcon: 'mail',
    meta: '29.03.2023 at 10 am',
    attendees: [],
    status: 'Waiting Proposal',
    statusOptions: ['Waiting Proposal', 'Sent'],
    tone: 'raised'
  }],
  nav: [{
    id: 'home',
    icon: 'layout-grid',
    label: 'Workspace'
  }, {
    id: 'people',
    icon: 'users',
    label: 'Contacts'
  }, {
    id: 'inbox',
    icon: 'message-circle',
    label: 'Inbox'
  }, {
    id: 'cal',
    icon: 'calendar',
    label: 'Calendar'
  }],
  leadFilters: ['All', {
    label: 'Hot Client',
    icon: 'flame',
    iconColor: 'var(--state-hot)'
  }, 'Great interest', 'Medium interest', 'Low interest', 'Non interest'],
  taskFilters: ['All', {
    label: 'Hot',
    icon: 'flame',
    iconColor: 'var(--state-hot)'
  }, 'Due Today', 'Overdue', 'Completed']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workspace/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.DeltaBadge = __ds_scope.DeltaBadge;

__ds_ns.DocThumb = __ds_scope.DocThumb;

__ds_ns.InterestRamp = __ds_scope.InterestRamp;

__ds_ns.MetricStat = __ds_scope.MetricStat;

__ds_ns.SourceTag = __ds_scope.SourceTag;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.SelectPill = __ds_scope.SelectPill;

__ds_ns.IconRail = __ds_scope.IconRail;

__ds_ns.ScheduleBar = __ds_scope.ScheduleBar;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.CallTile = __ds_scope.CallTile;

__ds_ns.LeadCard = __ds_scope.LeadCard;

__ds_ns.SummaryPanel = __ds_scope.SummaryPanel;

__ds_ns.TaskCard = __ds_scope.TaskCard;

__ds_ns.TimelineRail = __ds_scope.TimelineRail;

})();
