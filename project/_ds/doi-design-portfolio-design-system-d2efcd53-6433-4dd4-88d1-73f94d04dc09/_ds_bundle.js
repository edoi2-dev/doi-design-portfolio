/* @ds-bundle: {"format":3,"namespace":"DoiDesignPortfolioDesignSystem_d2efcd","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Media","sourcePath":"components/core/Media.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"4adb1c3fad33","components/core/Badge.jsx":"27de8f1ee237","components/core/Button.jsx":"3f4aaaac2433","components/core/Card.jsx":"b9c83e8a2ca4","components/core/Eyebrow.jsx":"b7e8f1c91473","components/core/Media.jsx":"0c00baffbbd3","components/core/SectionHeading.jsx":"57423562fe35","components/core/Stat.jsx":"d9356709d3c1","components/forms/Input.jsx":"f031b603475f","ui_kits/portfolio/About.jsx":"4ecb661e1fde","ui_kits/portfolio/CaseStudy.jsx":"e45e3acb096d","ui_kits/portfolio/Contact.jsx":"8d21d2d15ce3","ui_kits/portfolio/Home.jsx":"3109c30fec9f","ui_kits/portfolio/Shell.jsx":"1711a639e812"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DoiDesignPortfolioDesignSystem_d2efcd = window.DoiDesignPortfolioDesignSystem_d2efcd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doi Design — circular avatar. Shows a photo when `src` is set, otherwise
 * the warm placeholder fill with initials. Optional thin rust ring.
 */
function Avatar({
  src,
  initials = '',
  size = 56,
  ring = false,
  alt = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      flex: 'none',
      background: src ? 'transparent' : 'var(--placeholder-fill)',
      border: ring ? '1px solid var(--accent)' : '1px solid var(--border)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: size * 0.32,
      letterSpacing: '0.06em',
      color: 'var(--ink-soft)'
    }
  }, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doi Design — small label chip. Sharp edges, uppercase Montserrat 500.
 * Tones: neutral (hairline), accent (rust outline + faint wash), solid (ink).
 */
function Badge({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: 'var(--text-secondary)',
      borderColor: 'var(--border-strong)',
      background: 'transparent'
    },
    accent: {
      color: 'var(--accent)',
      borderColor: 'var(--accent)',
      background: 'var(--accent-wash)'
    },
    solid: {
      color: 'var(--paper)',
      borderColor: 'var(--ink)',
      background: 'var(--ink)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 11px',
      border: '1px solid',
      borderRadius: 'var(--radius-none)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doi Design — primary action. Sharp-edged, uppercase Montserrat 600.
 * Variants: primary (ink fill, rust on hover), secondary (hairline border),
 * ghost (inline text + arrow). Renders an <a> when href is set, else a <button>.
 */
function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  children,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: {
      padding: '10px 18px',
      fontSize: 10.5
    },
    md: {
      padding: '14px 26px',
      fontSize: 11
    },
    lg: {
      padding: '18px 34px',
      fontSize: 12
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-none)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-button)',
    textTransform: 'uppercase',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background var(--dur) var(--ease-out), color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
    padding: s.padding,
    fontSize: s.fontSize,
    ...style
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--accent)' : 'var(--ink)',
      color: 'var(--paper)',
      borderColor: hover && !disabled ? 'var(--accent)' : 'var(--ink)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink)',
      borderColor: hover && !disabled ? 'var(--ink)' : 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--accent)' : 'var(--ink)',
      borderColor: 'transparent',
      padding: size === 'sm' ? '8px 0' : '10px 0'
    }
  };
  const cls = {
    ...base,
    ...(variants[variant] || variants.primary)
  };
  const arrowEl = arrow ? /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "square",
    style: {
      transform: hover && !disabled ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "13 6 19 12 13 18"
  })) : null;
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: cls
    }, handlers, rest), children, arrowEl);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: cls,
    disabled: disabled
  }, handlers, rest), children, arrowEl);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doi Design — content card. Paper surface, hairline border, sharp edges,
 * no shadow. Optional Bebas index number and a rust top accent that can
 * appear always or on hover. Becomes a link when href is set.
 */
function Card({
  children,
  number,
  accent = 'hover',
  href,
  padding = 'var(--space-7)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const showAccent = accent === 'always' || accent === 'hover' && hover;
  const cls = {
    position: 'relative',
    display: 'block',
    background: 'var(--surface-card)',
    border: '1px solid var(--border)',
    borderTop: showAccent ? '2px solid var(--accent)' : '1px solid var(--border)',
    borderRadius: 'var(--radius-none)',
    padding,
    color: 'var(--text-secondary)',
    transition: 'border-color var(--dur) var(--ease-out)',
    ...style
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2)',
      lineHeight: 1,
      color: showAccent ? 'var(--accent)' : 'var(--text-primary)',
      transition: 'color var(--dur) var(--ease-out)',
      display: 'block',
      marginBottom: 'var(--space-5)'
    }
  }, number), children);
  const handlers = href ? {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  } : {};
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: cls
    }, handlers, rest), inner);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doi Design — eyebrow label. A fixed 32x1px rust rule followed by
 * small-caps Montserrat 500 in rust, 10px, 0.22em tracking.
 */
function Eyebrow({
  children,
  color = 'var(--accent)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 'var(--eyebrow-line)',
      height: 1,
      background: color,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Media.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doi Design — image frame / placeholder. With `src` it shows the photo
 * (cover). Without, it shows the brand's warm gradient placeholder fill
 * with a spec label bottom-left. Hairline border, sharp edges.
 */
function Media({
  src,
  label = 'Image',
  ratio = '4 / 3',
  position = 'center',
  overlay,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      background: src ? `var(--cream) url("${src}") ${position}/cover no-repeat` : 'var(--placeholder-fill)',
      ...style
    }
  }, rest), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: overlay
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: src ? 'var(--paper)' : 'var(--ink-muted)',
      mixBlendMode: src ? 'normal' : 'normal'
    }
  }, label), children);
}
Object.assign(__ds_scope, { Media });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Media.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doi Design — section heading. Eyebrow + a two-part title where the
 * emphasis clause is set in italic Cormorant. Two variants:
 * "editorial" (Cormorant, default) and "display" (Bebas all-caps).
 */
function SectionHeading({
  eyebrow,
  title,
  emphasis,
  variant = 'editorial',
  align = 'left',
  children,
  style,
  ...rest
}) {
  const isDisplay = variant === 'display';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? '24ch' : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '22px 0 0',
      ...(isDisplay ? {
        fontFamily: 'var(--font-display)',
        textTransform: 'uppercase',
        fontWeight: 'var(--fw-regular)',
        lineHeight: 'var(--lh-display)',
        letterSpacing: 'var(--ls-display)',
        fontSize: 'var(--text-display)'
      } : {
        fontFamily: 'var(--font-editorial)',
        fontWeight: 'var(--fw-light)',
        lineHeight: 'var(--lh-title)',
        fontSize: 'var(--text-title-lg)'
      }),
      color: 'var(--text-primary)'
    }
  }, title, emphasis && /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("span", {
    style: isDisplay ? {
      color: 'var(--accent)'
    } : {
      fontStyle: 'italic',
      color: 'var(--text-secondary)'
    }
  }, emphasis))), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      maxWidth: '52ch',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doi Design — statistic. A large Bebas display number over a small
 * Montserrat caption. Optional rust top rule for emphasized stat blocks.
 */
function Stat({
  value,
  label,
  rule = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: rule ? 'var(--space-5)' : 0,
      borderTop: rule ? 'var(--accent-bar)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--text-number)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-secondary)',
      maxWidth: '24ch'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doi Design — text field. Hairline underline that turns rust on focus,
 * small-caps Montserrat label. Sharp, no fill. Renders a textarea when
 * multiline is set.
 */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  multiline = false,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focus ? 'var(--accent)' : 'var(--border-strong)'}`,
    borderRadius: 'var(--radius-none)',
    padding: '12px 0',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-light)',
    fontSize: 'var(--text-body-lg)',
    color: 'var(--text-primary)',
    outline: 'none',
    resize: multiline ? 'vertical' : undefined,
    transition: 'border-color var(--dur) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    style: fieldStyle,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: fieldStyle,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
/* Doi Design Portfolio — About. Bio, experience timeline, skills. */
(function () {
  const DS = window.DoiDesignPortfolioDesignSystem_d2efcd;
  const {
    Eyebrow,
    SectionHeading,
    Button,
    Stat,
    Media,
    Badge
  } = DS;
  const EXPERIENCE = [{
    yr: '2019 \u2014 Present',
    role: 'Marketing Director',
    org: 'Soundvision Technologies / VSSL',
    d: 'Owned brand, campaigns, video, web, and dealer communications for a global AV product company. Led the VSSL MX Series launch end to end.'
  }, {
    yr: '2015 \u2014 2019',
    role: 'Creative + Marketing Lead',
    org: 'Product & Outdoor Brands',
    d: 'Built brand systems and ran campaigns across product, outdoor, and B2B categories. Directed photo, video, and trade-show presence.'
  }, {
    yr: '2013 \u2014 2015',
    role: 'Designer & Marketing Generalist',
    org: 'Agency + In-house',
    d: 'Cut my teeth on identity, collateral, and web, learning to ship strategy and craft in the same week.'
  }];
  const SKILLS = ['Brand Strategy', 'Creative Direction', 'Campaign Management', 'Video Production', 'Copywriting', 'Web Design', 'Photography Direction', 'Trade Shows', 'Email Marketing', 'Vendor Management'];
  function About({
    onNav
  }) {
    return React.createElement('div', null, React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--space-9) var(--section-pad-x) var(--space-8)',
        display: 'grid',
        gridTemplateColumns: '1fr 0.8fr',
        gap: 'var(--space-8)',
        alignItems: 'end'
      }
    }, React.createElement('div', null, React.createElement(Eyebrow, null, 'About'), React.createElement('h1', {
      className: 'doi-display',
      style: {
        fontSize: 'var(--text-hero)',
        margin: '26px 0 0',
        lineHeight: 0.92
      }
    }, 'Eric Doi'), React.createElement('p', {
      style: {
        margin: '22px 0 0',
        fontFamily: 'var(--font-editorial)',
        fontStyle: 'italic',
        fontWeight: 300,
        fontSize: 'var(--text-title)',
        color: 'var(--ink-soft)',
        maxWidth: '34ch'
      }
    }, 'Marketing and creative director who still makes the work.')), React.createElement(Media, {
      src: '../../assets/photos/Eric-Headshot.png',
      label: '',
      ratio: '1 / 1',
      position: 'center 22%'
    }))), React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr',
        gap: 'var(--space-8)'
      }
    }, React.createElement(SectionHeading, {
      eyebrow: 'In short',
      title: 'Strategy and craft,',
      emphasis: 'in the same hands.'
    }), React.createElement('div', null, React.createElement('p', {
      style: {
        margin: 0,
        fontSize: 'var(--text-body-lg)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)',
        maxWidth: '64ch'
      }
    }, 'I have spent more than ten years leading marketing and creative for product, AV, and outdoor brands. I think like a director and work like a maker: writing the copy, designing the mark, directing the shoot, and reading the numbers when the campaign lands.'), React.createElement('p', {
      style: {
        margin: '20px 0 0',
        fontSize: 'var(--text-body-lg)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)',
        maxWidth: '64ch'
      }
    }, 'What I am looking for next: a team that wants a director who can set the strategy and still ship the work, without an agency in between.')))), /* Experience */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)'
      }
    }, React.createElement(SectionHeading, {
      eyebrow: 'Experience',
      title: 'Where I have',
      emphasis: 'led.',
      style: {
        marginBottom: 'var(--space-8)'
      }
    }), React.createElement('div', null, EXPERIENCE.map((e, i) => React.createElement('div', {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '0.5fr 1.5fr',
        gap: 'var(--space-7)',
        padding: 'var(--space-6) 0',
        borderTop: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--rust)'
      }
    }, e.yr), React.createElement('div', null, React.createElement('h3', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-editorial)',
        fontWeight: 300,
        fontSize: 'var(--text-title)',
        color: 'var(--ink)'
      }
    }, e.role), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.04em',
        color: 'var(--ink-muted)',
        marginTop: 4
      }
    }, e.org), React.createElement('p', {
      style: {
        margin: '12px 0 0',
        fontSize: 'var(--text-body)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)',
        maxWidth: '60ch'
      }
    }, e.d))))))), /* Skills */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)'
      }
    }, React.createElement(SectionHeading, {
      eyebrow: 'Capabilities',
      title: 'What I bring',
      emphasis: 'to a team.',
      style: {
        marginBottom: 'var(--space-7)'
      }
    }), React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12
      }
    }, SKILLS.map(s => React.createElement(Badge, {
      key: s
    }, s))), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 16,
        marginTop: 'var(--space-8)',
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      arrow: true,
      onClick: () => onNav('contact')
    }, 'Get In Touch'), React.createElement(Button, {
      variant: 'ghost',
      arrow: true,
      onClick: () => onNav('contact')
    }, 'Download Resume')))));
  }
  window.DoiPortfolioAbout = {
    About
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
/* Doi Design Portfolio — Case study (VSSL MX Series). Employer-facing:
   the challenge, the work, the numbers. No pricing, no sales language. */
(function () {
  const DS = window.DoiDesignPortfolioDesignSystem_d2efcd;
  const {
    Eyebrow,
    SectionHeading,
    Button,
    Card,
    Stat,
    Media,
    Badge
  } = DS;
  const META = [{
    k: 'Role',
    v: 'Marketing Director'
  }, {
    k: 'Timeline',
    v: '12+ Months'
  }, {
    k: 'Team',
    v: 'Solo'
  }, {
    k: 'Partners',
    v: '15 Global'
  }];
  const CHALLENGE = [{
    n: '01',
    t: 'One person, fifteen partners',
    d: 'A 12-month globally distributed launch across 15 partners and hundreds of dealers, executed by one marketing director with a part-time videographer.'
  }, {
    n: '02',
    t: 'The bar was set by customers',
    d: 'The product had been requested for years. The bar for the launch was set by the customers themselves. Underwhelming was not an option.'
  }, {
    n: '03',
    t: 'Sold out before dealers ordered',
    d: 'Presales through distribution sold out the first production batch before direct dealers could order. A problem caused entirely by marketing success.'
  }];
  const PHASES = [{
    tag: 'Phase 1 \u00b7 12+ months out',
    t: 'Discovery',
    d: 'Dealer council sessions across the country validated the product against real demand, bridging customer insight and product direction.'
  }, {
    tag: 'Phase 2 \u00b7 3 to 6 months out',
    t: 'Pre-Production',
    d: 'Asset production begins. Series logo designed. Branded shirt designed. 10+ assets produced: sales sheets, competitive analyses, catalog updates, pull-up banners.'
  }, {
    tag: 'Phase 3 \u00b7 30 days out',
    t: 'Distribution Launch',
    d: 'Press kit to 15 global partners: product, install, and teaser videos, images, sales sheets, email templates. Pre-orders open. First batch sells out.'
  }, {
    tag: 'Phase 4 \u00b7 14 days out',
    t: 'Direct Dealer Launch',
    d: 'Email teasers to 1,000+ dealer contacts. Social teasers across four platforms. Press releases distributed. Launch adjusted 30 days for inventory.'
  }, {
    tag: 'Phase 5 \u00b7 Launch + after',
    t: 'Launch & Momentum',
    d: 'Homepage updated to hero the series. Sales mail-merge templates deployed. New bundles created. Ongoing video, ~10 to date. Tech-support video program launched.'
  }];
  const RESULTS = [{
    v: 'Thousands',
    l: 'Presales before direct dealer launch'
  }, {
    v: '15',
    l: 'Global distribution partners'
  }, {
    v: '50%+',
    l: 'International email open rate, vs ~21% average'
  }, {
    v: '12 mo',
    l: 'Concept to global launch'
  }, {
    v: '10',
    l: 'Videos produced, and counting'
  }, {
    v: '1',
    l: 'Director who owned it all'
  }];
  function CaseStudy({
    onNav
  }) {
    return React.createElement('div', null, /* Hero */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--space-9) var(--section-pad-x) var(--space-7)'
      }
    }, React.createElement(Eyebrow, null, 'Case Study \u00b7 Product Launch Campaign'), React.createElement('h1', {
      className: 'doi-display',
      style: {
        fontSize: 'var(--text-hero)',
        margin: '26px 0 0',
        lineHeight: 0.92
      }
    }, 'VSSL MX Series'), React.createElement('p', {
      style: {
        margin: '20px 0 0',
        fontFamily: 'var(--font-editorial)',
        fontStyle: 'italic',
        fontWeight: 300,
        fontSize: 'var(--text-title)',
        color: 'var(--ink-soft)',
        maxWidth: '40ch'
      }
    }, 'A streaming amplifier and dedicated WiFi streamer, years in the making.'), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-5)',
        marginTop: 'var(--space-7)',
        borderTop: '1px solid var(--border)',
        paddingTop: 'var(--space-6)'
      }
    }, META.map(m => React.createElement('div', {
      key: m.k
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--ink-muted)',
        marginBottom: 8
      }
    }, m.k), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-editorial)',
        fontWeight: 300,
        fontSize: 'var(--text-title)',
        color: 'var(--ink)'
      }
    }, m.v)))))), /* Lifestyle image */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement(Media, {
      src: '../../assets/photos/VSSL-MS1-lifestyle.png',
      label: 'VSSL MX Series \u00b7 Lifestyle',
      ratio: '21 / 9'
    })), /* Background */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr',
        gap: 'var(--space-8)'
      }
    }, React.createElement(SectionHeading, {
      eyebrow: 'The Background',
      title: 'A product',
      emphasis: 'years in the making.'
    }), React.createElement('p', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--text-body-lg)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)',
        maxWidth: '64ch'
      }
    }, 'This was not a product invented in a boardroom. It was a direct response to years of sustained customer demand. The launch was the delivery of a long-standing promise to a loyal dealer and customer network. The job of marketing was not to create desire. It was to make sure the delivery matched the anticipation.'))), /* In the field — image row */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)'
      }
    }, React.createElement(SectionHeading, {
      eyebrow: 'In the Field',
      title: 'Brand, collateral, and web,',
      emphasis: 'built to match.',
      style: {
        marginBottom: 'var(--space-7)'
      }
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space-4)'
      }
    }, [{
      src: '../../assets/photos/vssl-site.jpg',
      tag: 'Web',
      t: 'MX Series landing experience'
    }, {
      src: '../../assets/photos/vssl-mark.jpg',
      tag: 'Brand',
      t: 'MX Series mark'
    }, {
      src: '../../assets/photos/vssl-sheet.jpg',
      tag: 'Collateral',
      t: 'MX Series sales sheet'
    }].map(im => React.createElement('div', {
      key: im.tag
    }, React.createElement(Media, {
      src: im.src,
      label: '',
      ratio: '4 / 3'
    }), React.createElement('div', {
      style: {
        marginTop: 12
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--rust)'
      }
    }, im.tag), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-editorial)',
        fontWeight: 300,
        fontSize: 'var(--text-lead)',
        color: 'var(--ink)',
        marginTop: 4
      }
    }, im.t))))))), /* Challenge cards */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)'
      }
    }, React.createElement(SectionHeading, {
      eyebrow: 'The Challenge',
      title: 'Three problems.',
      emphasis: 'One person.',
      style: {
        marginBottom: 'var(--space-8)'
      }
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space-5)'
      }
    }, CHALLENGE.map(c => React.createElement(Card, {
      key: c.n,
      number: c.n,
      accent: 'always',
      padding: 'var(--space-7) var(--space-6) var(--space-6)'
    }, React.createElement('h3', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-editorial)',
        fontWeight: 300,
        fontSize: 'var(--text-title)',
        color: 'var(--ink)'
      }
    }, c.t), React.createElement('p', {
      style: {
        margin: '14px 0 0',
        fontSize: 'var(--text-sm)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)'
      }
    }, c.d)))))), /* Process timeline */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)'
      }
    }, React.createElement(SectionHeading, {
      eyebrow: 'The Process',
      title: 'Five phases.',
      emphasis: 'Twelve months.',
      style: {
        marginBottom: 'var(--space-8)'
      }
    }), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, PHASES.map((p, i) => React.createElement('div', {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '0.5fr 1fr',
        gap: 'var(--space-7)',
        padding: 'var(--space-6) 0',
        borderTop: '1px solid var(--border)'
      }
    }, React.createElement('div', null, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--rust)'
      }
    }, p.tag), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        textTransform: 'uppercase',
        fontSize: 'var(--text-h2)',
        color: 'var(--ink)',
        lineHeight: 1,
        marginTop: 10
      }
    }, p.t)), React.createElement('p', {
      style: {
        margin: 0,
        fontSize: 'var(--text-body)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)',
        maxWidth: '60ch',
        alignSelf: 'center'
      }
    }, p.d)))))), /* Results */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)'
      }
    }, React.createElement(SectionHeading, {
      eyebrow: 'The Numbers',
      title: 'What',
      emphasis: 'happened.',
      style: {
        marginBottom: 'var(--space-8)'
      }
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space-7) var(--space-5)'
      }
    }, RESULTS.map((r, i) => React.createElement(Stat, {
      key: i,
      value: r.v,
      label: r.l,
      rule: true
    }))))), /* Pull quote */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)',
        background: 'var(--paper)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 980,
        margin: '0 auto',
        padding: 'var(--space-10) var(--section-pad-x)',
        textAlign: 'center'
      }
    }, React.createElement('blockquote', {
      className: 'doi-editorial',
      style: {
        margin: 0,
        fontSize: 'var(--text-title-lg)',
        lineHeight: 1.3,
        color: 'var(--ink)'
      }
    }, '\u201cThe job of marketing was not to create demand. It was to make sure the delivery ', React.createElement('em', {
      style: {
        color: 'var(--rust)'
      }
    }, 'matched the anticipation.'), '\u201d'), React.createElement('div', {
      style: {
        marginTop: 'var(--space-6)',
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--ink-muted)'
      }
    }, 'The through line of the launch'))), /* Foot nav */
    React.createElement('section', null, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--space-9) var(--section-pad-x)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 24
      }
    }, React.createElement(Button, {
      variant: 'ghost',
      onClick: () => onNav('work')
    }, '\u2190 All work'), React.createElement(Button, {
      variant: 'primary',
      arrow: true,
      onClick: () => onNav('contact')
    }, 'Get In Touch'))));
  }
  window.DoiPortfolioCase = {
    CaseStudy
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
/* Doi Design Portfolio — Contact. Form + direct links. Employer-facing. */
(function () {
  const DS = window.DoiDesignPortfolioDesignSystem_d2efcd;
  const {
    Eyebrow,
    Button,
    Input
  } = DS;
  function Contact() {
    const [form, setForm] = React.useState({
      name: '',
      company: '',
      email: '',
      message: ''
    });
    const [sent, setSent] = React.useState(false);
    const set = k => e => setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    const links = [{
      k: 'LinkedIn',
      v: 'in/ericdoi',
      label: 'View LinkedIn'
    }, {
      k: 'Email',
      v: 'eric@doidesign.co',
      label: 'Email Me'
    }, {
      k: 'Resume',
      v: 'PDF \u00b7 1 page',
      label: 'Download Resume'
    }];
    return React.createElement('div', null, React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--space-9) var(--section-pad-x) var(--space-8)'
      }
    }, React.createElement(Eyebrow, null, 'Contact'), React.createElement('h1', {
      className: 'doi-display',
      style: {
        fontSize: 'var(--text-hero)',
        margin: '26px 0 0',
        lineHeight: 0.92,
        maxWidth: '14ch'
      }
    }, 'Let\u2019s talk.'), React.createElement('p', {
      style: {
        margin: '22px 0 0',
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--text-body-lg)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)',
        maxWidth: '48ch'
      }
    }, 'If you are hiring a marketing or creative director, I would welcome the conversation. The fastest way to reach me is below.'))), React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: 'var(--space-9)'
      }
    }, /* Form */
    React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--ink)',
        marginBottom: 'var(--space-6)'
      }
    }, 'Send a note'), sent ? React.createElement('div', {
      style: {
        padding: 'var(--space-7)',
        border: '1px solid var(--border)',
        borderTop: '2px solid var(--rust)',
        background: 'var(--paper)'
      }
    }, React.createElement('h3', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-editorial)',
        fontWeight: 300,
        fontSize: 'var(--text-title)',
        color: 'var(--ink)'
      }
    }, 'Thank you.'), React.createElement('p', {
      style: {
        margin: '12px 0 0',
        fontSize: 'var(--text-body)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)'
      }
    }, 'Your note is on its way. I reply to every message within a day or two.')) : React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-6) var(--space-7)'
      }
    }, React.createElement(Input, {
      label: 'Name',
      placeholder: 'Your name',
      value: form.name,
      onChange: set('name')
    }), React.createElement(Input, {
      label: 'Company',
      placeholder: 'Where you\u2019re hiring',
      value: form.company,
      onChange: set('company')
    }), React.createElement(Input, {
      label: 'Email',
      type: 'email',
      placeholder: 'you@company.com',
      value: form.email,
      onChange: set('email'),
      style: {
        gridColumn: '1 / -1'
      }
    }), React.createElement(Input, {
      label: 'Message',
      multiline: true,
      rows: 5,
      placeholder: 'What role are you hiring for?',
      value: form.message,
      onChange: set('message'),
      style: {
        gridColumn: '1 / -1'
      }
    }), React.createElement('div', {
      style: {
        gridColumn: '1 / -1',
        marginTop: 'var(--space-2)'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      arrow: true,
      onClick: () => setSent(true)
    }, 'Send Message')))), /* Direct links */
    React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--ink)',
        marginBottom: 'var(--space-6)'
      }
    }, 'Or reach me directly'), React.createElement('div', null, links.map((l, i) => React.createElement('a', {
      key: l.k,
      href: '#',
      onClick: e => e.preventDefault(),
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--space-5) 0',
        borderTop: '1px solid var(--border)',
        borderBottom: i === links.length - 1 ? '1px solid var(--border)' : 'none'
      },
      onMouseEnter: e => {
        e.currentTarget.querySelector('[data-l]').style.color = 'var(--rust)';
      },
      onMouseLeave: e => {
        e.currentTarget.querySelector('[data-l]').style.color = 'var(--ink)';
      }
    }, React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--ink-muted)'
      }
    }, l.k), React.createElement('div', {
      'data-l': true,
      style: {
        fontFamily: 'var(--font-editorial)',
        fontWeight: 300,
        fontSize: 'var(--text-lead)',
        color: 'var(--ink)',
        marginTop: 3,
        transition: 'color var(--dur) var(--ease-out)'
      }
    }, l.label)), React.createElement('span', {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--ink-muted)',
        letterSpacing: '0.04em'
      }
    }, l.v)))), React.createElement('p', {
      style: {
        margin: 'var(--space-7) 0 0',
        fontSize: 'var(--text-xs)',
        letterSpacing: '0.06em',
        color: 'var(--ink-muted)'
      }
    }, 'St. George, Utah \u00b7 Open to relocation \u00b7 Remote')))));
  }
  window.DoiPortfolioContact = {
    Contact
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
/* Doi Design Portfolio — Home. Hero with the large signature mark,
   intro split, selected work, capabilities, results, contact band. */
(function () {
  const DS = window.DoiDesignPortfolioDesignSystem_d2efcd;
  const {
    Eyebrow,
    SectionHeading,
    Button,
    Card,
    Stat,
    Media,
    Badge
  } = DS;
  const LOGO = '../../assets/logos/Doi-Design-logo.svg';
  const WORK = [{
    key: 'work',
    title: 'VSSL MX Series',
    cat: 'Product Launch Campaign',
    blurb: 'A 12-month global product launch across 15 distribution partners and hundreds of dealers. Run by one marketing director.',
    tags: ['Strategy', 'Creative Direction', 'Video'],
    src: '../../assets/photos/VSSL-MS1-lifestyle.png',
    span: 7
  }, {
    key: 'work',
    title: 'Doi Brand Identity',
    cat: 'Brand Identity',
    blurb: 'A personal mark built in four layers, designed to live on screen and on swag.',
    tags: ['Brand', 'Identity'],
    src: '../../assets/photos/Doi-Icon-Leather.png',
    span: 5
  }, {
    key: 'work',
    title: 'Portfolio Website',
    cat: 'Brand Strategy + Web',
    blurb: 'An editorial portfolio built to answer one question for a hiring manager.',
    tags: ['Web', 'Art Direction'],
    src: '../../assets/photos/Doi-Website-tile.jpg',
    span: 12
  }];
  const CAPS = [{
    n: '01',
    t: 'Brand Strategy',
    d: 'Positioning, messaging, and identity systems that hold up from the homepage to the trade show floor.'
  }, {
    n: '02',
    t: 'Creative Direction',
    d: 'Art direction across video, photography, web, and print. One consistent voice, every surface.'
  }, {
    n: '03',
    t: 'Campaign Execution',
    d: 'End-to-end launches: collateral, email, social, and the copy that ties them together.'
  }, {
    n: '04',
    t: 'Team & Vendor Leadership',
    d: 'Briefing and directing photographers, developers, and agencies toward a single standard.'
  }];
  const RESULTS = [{
    v: '10+',
    l: 'Years of marketing leadership'
  }, {
    v: '15',
    l: 'Global distribution partners managed'
  }, {
    v: '50%+',
    l: 'International email open rate, vs 21% industry average'
  }, {
    v: 'Solo',
    l: 'Director who owned strategy, creative, and execution'
  }];
  function WorkTile({
    item,
    onNav
  }) {
    const [hover, setHover] = React.useState(false);
    return React.createElement('a', {
      href: '#',
      onClick: e => {
        e.preventDefault();
        onNav(item.key);
      },
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        gridColumn: `span ${item.span}`,
        display: 'block',
        border: '1px solid var(--border)',
        borderTop: hover ? '2px solid var(--rust)' : '1px solid var(--border)',
        background: 'var(--paper)',
        transition: 'border-color var(--dur) var(--ease-out)'
      }
    }, React.createElement(Media, {
      src: item.src,
      label: '',
      ratio: item.span >= 12 ? '21 / 9' : '4 / 3',
      overlay: 'linear-gradient(to top, rgba(26,26,24,0.04), rgba(26,26,24,0))'
    }), React.createElement('div', {
      style: {
        padding: 'var(--space-6)'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 14
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--rust)'
      }
    }, item.cat)), React.createElement('h3', {
      className: 'doi-display',
      style: {
        fontSize: 'clamp(1.8rem, 2.4vw, 2.6rem)',
        margin: 0,
        lineHeight: 0.96
      }
    }, item.title), React.createElement('p', {
      style: {
        margin: '12px 0 0',
        fontFamily: 'var(--font-editorial)',
        fontStyle: 'italic',
        fontWeight: 300,
        fontSize: 'var(--text-lead)',
        lineHeight: 1.35,
        color: 'var(--ink-soft)',
        maxWidth: '46ch'
      }
    }, item.blurb), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 'var(--space-5)',
        flexWrap: 'wrap'
      }
    }, item.tags.map(t => React.createElement(Badge, {
      key: t
    }, t)), React.createElement('span', {
      style: {
        marginLeft: 'auto',
        alignSelf: 'center',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: 'var(--ls-button)',
        textTransform: 'uppercase',
        color: hover ? 'var(--rust)' : 'var(--ink)',
        transition: 'color var(--dur) var(--ease-out)'
      }
    }, 'View Case Study', React.createElement('svg', {
      width: 15,
      height: 15,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.5,
      strokeLinecap: 'square',
      style: {
        transform: hover ? 'translateX(3px)' : 'none',
        transition: 'transform var(--dur) var(--ease-out)'
      }
    }, React.createElement('line', {
      x1: 4,
      y1: 12,
      x2: 19,
      y2: 12
    }), React.createElement('polyline', {
      points: '13 6 19 12 13 18'
    }))))));
  }
  function Home({
    onNav
  }) {
    return React.createElement('div', null, /* Hero */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--space-9) var(--section-pad-x) var(--space-8)'
      }
    }, React.createElement(Eyebrow, null, 'Marketing + Creative Director'), React.createElement('div', {
      style: {
        margin: '28px 0 0',
        maxWidth: 980
      }
    }, React.createElement('img', {
      src: LOGO,
      alt: 'Eric Doi',
      style: {
        width: 'min(640px, 70vw)',
        display: 'block'
      }
    })), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 'var(--space-8)',
        alignItems: 'end',
        marginTop: 'var(--space-7)',
        borderTop: '1px solid var(--border)',
        paddingTop: 'var(--space-6)'
      }
    }, React.createElement('h1', {
      className: 'doi-editorial',
      style: {
        margin: 0,
        fontSize: 'var(--text-title-lg)',
        lineHeight: 1.18
      }
    }, 'Eric Doi builds and scales brands, ', React.createElement('em', null, 'hands on the work,'), ' from strategy through the final cut.'), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }
    }, React.createElement('p', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: 'var(--text-body-lg)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)',
        maxWidth: '46ch'
      }
    }, 'Ten-plus years leading marketing and creative for product, AV, and outdoor brands. Director-level thinking, delivered hands-on across brand, campaigns, and video.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      arrow: true,
      onClick: () => onNav('work')
    }, 'View Work'), React.createElement(Button, {
      variant: 'secondary',
      onClick: () => onNav('contact')
    }, 'Get In Touch')))))), /* Intro split with headshot */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)',
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        gap: 'var(--space-8)',
        alignItems: 'center'
      }
    }, React.createElement(Media, {
      src: '../../assets/photos/Eric-Headshot.png',
      label: '',
      ratio: '4 / 5',
      position: 'center 22%'
    }), React.createElement('div', null, React.createElement(SectionHeading, {
      eyebrow: 'About',
      title: 'A director who still',
      emphasis: 'makes the work.'
    }, 'Most leaders either strategize or execute. I do both. I have written the copy, designed the logo, directed the video, and appeared on camera, then reported the numbers that came back.'), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-6) var(--space-7)',
        marginTop: 'var(--space-7)',
        borderTop: '1px solid var(--border)',
        paddingTop: 'var(--space-6)'
      }
    }, React.createElement(Stat, {
      value: '10+',
      label: 'Years of marketing leadership'
    }), React.createElement(Stat, {
      value: 'Full Stack',
      label: 'Strategy, creative, and execution in one'
    }))))), /* Selected work */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: 24,
        marginBottom: 'var(--space-8)'
      }
    }, React.createElement(SectionHeading, {
      variant: 'display',
      eyebrow: 'Selected Work',
      title: 'Brands built',
      emphasis: 'and shipped.'
    }), React.createElement(Button, {
      variant: 'ghost',
      arrow: true,
      onClick: () => onNav('work')
    }, 'View all work')), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 'var(--space-4)'
      }
    }, WORK.map((w, i) => React.createElement(WorkTile, {
      key: i,
      item: w,
      onNav
    }))))), /* Capabilities */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)'
      }
    }, React.createElement(SectionHeading, {
      eyebrow: 'Capabilities',
      title: 'What I lead,',
      emphasis: 'end to end.',
      style: {
        marginBottom: 'var(--space-8)'
      }
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-5)'
      }
    }, CAPS.map(c => React.createElement('div', {
      key: c.n,
      style: {
        paddingTop: 'var(--space-5)',
        borderTop: '2px solid var(--rust)'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '3rem',
        lineHeight: 1,
        color: 'var(--ink)'
      }
    }, c.n), React.createElement('h3', {
      style: {
        margin: '16px 0 10px',
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--ink)'
      }
    }, c.t), React.createElement('p', {
      style: {
        margin: 0,
        fontSize: 'var(--text-sm)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)'
      }
    }, c.d)))))), /* Results */
    React.createElement('section', {
      style: {
        borderBottom: '1px solid var(--border)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--section-pad-y) var(--section-pad-x)'
      }
    }, React.createElement(SectionHeading, {
      eyebrow: 'By the numbers',
      title: 'What the work',
      emphasis: 'returned.',
      style: {
        marginBottom: 'var(--space-8)'
      }
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-6) var(--space-5)'
      }
    }, RESULTS.map((r, i) => React.createElement(Stat, {
      key: i,
      value: r.v,
      label: r.l,
      rule: true
    }))))), /* Contact band with rust logo accent */
    React.createElement(ContactBand, {
      onNav
    }));
  }
  function ContactBand({
    onNav
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      fetch(LOGO).then(r => r.text()).then(t => {
        if (!ref.current) return;
        ref.current.innerHTML = t;
        const svg = ref.current.querySelector('svg');
        if (svg) {
          svg.style.width = '100%';
          svg.style.display = 'block';
          svg.querySelectorAll('path').forEach(p => p.setAttribute('fill', 'currentColor'));
        }
      });
    }, []);
    return React.createElement('section', {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--paper)',
        borderTop: '2px solid var(--rust)'
      }
    }, React.createElement('div', {
      ref,
      'aria-hidden': 'true',
      style: {
        position: 'absolute',
        right: '-4%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 'min(560px, 50vw)',
        color: 'var(--rust)',
        opacity: 0.1,
        pointerEvents: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: 'var(--space-10) var(--section-pad-x)',
        textAlign: 'center'
      }
    }, React.createElement(Eyebrow, {
      style: {
        justifyContent: 'center'
      }
    }, 'Get In Touch'), React.createElement('h2', {
      className: 'doi-display',
      style: {
        fontSize: 'var(--text-display)',
        margin: '24px auto 0',
        maxWidth: '18ch'
      }
    }, 'Has this person done work ', React.createElement('span', {
      style: {
        color: 'var(--rust)'
      }
    }, 'like yours?')), React.createElement('p', {
      style: {
        margin: '24px auto 36px',
        maxWidth: '46ch',
        fontSize: 'var(--text-body-lg)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)'
      }
    }, 'If you are hiring a marketing or creative director, the case studies make the case. The fastest way to the rest is a conversation.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 16,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      arrow: true,
      onClick: () => onNav('contact')
    }, 'Get In Touch'), React.createElement(Button, {
      variant: 'secondary',
      size: 'lg',
      onClick: () => onNav('contact')
    }, 'View LinkedIn'))));
  }
  window.DoiPortfolioHome = {
    Home
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Shell.jsx
try { (() => {
/* Doi Design Portfolio — UI kit shell: Nav + Footer.
   Light/editorial, cream canvas. Signature logo inherits ink.
   Composes design-system primitives off the global namespace. */
(function () {
  const DS = window.DoiDesignPortfolioDesignSystem_d2efcd;
  const {
    Button
  } = DS;
  const LOGO = '../../assets/logos/Doi-Design-logo.svg';
  function Nav({
    page,
    onNav,
    solid
  }) {
    const links = [{
      key: 'work',
      label: 'Work'
    }, {
      key: 'about',
      label: 'About'
    }, {
      key: 'contact',
      label: 'Contact'
    }];
    return React.createElement('header', {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--section-pad-x)',
        background: solid ? 'rgba(247,244,238,0.82)' : 'transparent',
        backdropFilter: solid ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(12px)' : 'none',
        borderBottom: solid ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)'
      }
    }, React.createElement('a', {
      href: '#',
      onClick: e => {
        e.preventDefault();
        onNav('home');
      },
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, React.createElement('img', {
      src: LOGO,
      alt: 'Eric Doi',
      style: {
        height: 28,
        display: 'block'
      }
    })), React.createElement('nav', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 36
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        gap: 30
      }
    }, links.map(l => React.createElement('a', {
      key: l.key,
      href: '#',
      onClick: e => {
        e.preventDefault();
        onNav(l.key);
      },
      style: {
        position: 'relative',
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: 'var(--ls-nav)',
        textTransform: 'uppercase',
        color: page === l.key ? 'var(--ink)' : 'var(--ink-soft)',
        paddingBottom: 3,
        borderBottom: page === l.key ? '1px solid var(--rust)' : '1px solid transparent',
        transition: 'color var(--dur) var(--ease-out)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = 'var(--ink)';
      },
      onMouseLeave: e => {
        if (page !== l.key) e.currentTarget.style.color = 'var(--ink-soft)';
      }
    }, l.label))), React.createElement(Button, {
      size: 'sm',
      variant: 'primary',
      onClick: () => onNav('contact')
    }, 'Get In Touch')));
  }
  function Footer({
    onNav
  }) {
    const cols = [{
      h: 'Site',
      items: [{
        t: 'Work',
        go: 'work'
      }, {
        t: 'About',
        go: 'about'
      }, {
        t: 'Contact',
        go: 'contact'
      }]
    }, {
      h: 'Connect',
      items: [{
        t: 'LinkedIn',
        ext: true
      }, {
        t: 'Email',
        ext: true
      }, {
        t: 'Download Resume',
        ext: true
      }]
    }];
    const link = {
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-soft)',
      cursor: 'pointer',
      transition: 'color var(--dur) var(--ease-out)'
    };
    const hover = on => e => {
      e.currentTarget.style.color = on ? 'var(--ink)' : 'var(--ink-soft)';
    };
    return React.createElement('footer', {
      style: {
        borderTop: '1px solid var(--border)',
        padding: 'var(--space-9) 0 var(--space-6)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: '0 var(--section-pad-x)',
        display: 'grid',
        gridTemplateColumns: '1.8fr 1fr 1fr',
        gap: 'var(--space-7)'
      }
    }, React.createElement('div', null, React.createElement('img', {
      src: LOGO,
      alt: 'Eric Doi',
      style: {
        height: 40,
        marginBottom: 22,
        display: 'block'
      }
    }), React.createElement('p', {
      style: {
        margin: 0,
        fontSize: 'var(--text-sm)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-soft)',
        maxWidth: '36ch'
      }
    }, 'Marketing and creative director. Ten-plus years building and scaling brands, end to end.'), React.createElement('p', {
      style: {
        margin: '20px 0 0',
        fontSize: 'var(--text-xs)',
        letterSpacing: '0.06em',
        color: 'var(--ink-muted)'
      }
    }, 'St. George, Utah \u00b7 Open to relocation')), cols.map(c => React.createElement('div', {
      key: c.h
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--ink)',
        marginBottom: 18
      }
    }, c.h), React.createElement('ul', {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, c.items.map(it => React.createElement('li', {
      key: it.t
    }, React.createElement('a', {
      href: '#',
      onClick: e => {
        e.preventDefault();
        if (it.go) onNav(it.go);
      },
      style: link,
      onMouseEnter: hover(true),
      onMouseLeave: hover(false)
    }, it.t))))))), React.createElement('div', {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: '0 var(--section-pad-x)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'var(--space-8)',
        paddingTop: 'var(--space-5)',
        borderTop: '1px solid var(--border)',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, React.createElement('span', {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--ink-muted)',
        letterSpacing: '0.06em'
      }
    }, '\u00a9 2026 Eric Doi'), React.createElement('span', {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--ink-muted)',
        letterSpacing: '0.16em',
        textTransform: 'uppercase'
      }
    }, 'Marketing \u00b7 Creative Direction')));
  }
  window.DoiPortfolioShell = {
    Nav,
    Footer,
    LOGO
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Media = __ds_scope.Media;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Input = __ds_scope.Input;

})();
