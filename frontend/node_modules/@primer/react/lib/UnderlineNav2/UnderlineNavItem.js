'use strict';

var React = require('react');
require('../sx.js');
var UnderlineNavContext = require('./UnderlineNavContext.js');
var styles = require('./styles.js');
var LoadingCounter = require('./LoadingCounter.js');
var useIsomorphicLayoutEffect = require('../utils/useIsomorphicLayoutEffect.js');
var defaultSxProp = require('../utils/defaultSxProp.js');
var Box = require('../Box/Box.js');
var CounterLabel = require('../CounterLabel/CounterLabel.js');
var merge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var merge__default = /*#__PURE__*/_interopDefault(merge);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// adopted from React.AnchorHTMLAttributes

const UnderlineNavItem = /*#__PURE__*/React.forwardRef(({
  sx: sxProp = defaultSxProp.defaultSxProp,
  as: Component = 'a',
  href = '#',
  children,
  counter,
  onSelect,
  'aria-current': ariaCurrent,
  icon: Icon,
  ...props
}, forwardedRef) => {
  const backupRef = React.useRef(null);
  const ref = forwardedRef !== null && forwardedRef !== void 0 ? forwardedRef : backupRef;
  const {
    theme,
    setChildrenWidth,
    setNoIconChildrenWidth,
    selectedLink,
    setSelectedLink,
    selectedLinkText,
    setSelectedLinkText,
    selectEvent,
    afterSelect,
    variant,
    loadingCounters,
    iconsVisible
  } = React.useContext(UnderlineNavContext.UnderlineNavContext);
  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const domRect = ref.current.getBoundingClientRect();
      const icon = Array.from(ref.current.children).find(child => child.getAttribute('data-component') === 'icon');
      const content = Array.from(ref.current.children).find(child => child.getAttribute('data-component') === 'text');
      const text = content.textContent;
      const iconWidthWithMargin = icon ? icon.getBoundingClientRect().width + Number(getComputedStyle(icon).marginRight.slice(0, -2)) + Number(getComputedStyle(icon).marginLeft.slice(0, -2)) : 0;
      setChildrenWidth({
        text,
        width: domRect.width
      });
      setNoIconChildrenWidth({
        text,
        width: domRect.width - iconWidthWithMargin
      });

      // When an item has aria-current !== false while rendering, we should be sure to select it.
      // It can happen when the page is loaded (selectedLink === undefined)
      // or if the item is coming out of the menu when there is enough space to show items along with the more menu. (selectedLink.current === null)
      if ((selectedLink === undefined || selectedLink.current === null) && Boolean(ariaCurrent) && ariaCurrent !== 'false') {
        setSelectedLink(ref);
      }

      // Only runs when a menu item is selected (swapping the menu item with the list item to keep it visible)
      if (selectedLinkText === text) {
        setSelectedLink(ref);
        if (typeof onSelect === 'function' && selectEvent !== null) onSelect(selectEvent);
        setSelectedLinkText('');
      }
    }
  }, [ref, ariaCurrent, selectedLink, selectedLinkText, setSelectedLinkText, setSelectedLink, setChildrenWidth, setNoIconChildrenWidth, onSelect, selectEvent]);
  const keyPressHandler = React__default.default.useCallback(event => {
    if (event.key === ' ' || event.key === 'Enter') {
      if (!event.defaultPrevented && typeof onSelect === 'function') onSelect(event);
      if (!event.defaultPrevented && typeof afterSelect === 'function') afterSelect(event);
      setSelectedLink(ref);
    }
  }, [onSelect, afterSelect, ref, setSelectedLink]);
  const clickHandler = React__default.default.useCallback(event => {
    if (!event.defaultPrevented) {
      if (typeof onSelect === 'function') onSelect(event);
      if (typeof afterSelect === 'function') afterSelect(event);
    }
    setSelectedLink(ref);
  }, [onSelect, afterSelect, ref, setSelectedLink]);
  return /*#__PURE__*/React__default.default.createElement(Box, {
    as: "li",
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React__default.default.createElement(Box, _extends({
    as: Component,
    href: href,
    onKeyPress: keyPressHandler,
    onClick: clickHandler,
    "aria-current": ariaCurrent,
    sx: merge__default.default(styles.getLinkStyles(theme, {
      variant
    }, selectedLink, ref), sxProp)
  }, props, {
    ref: ref
  }), iconsVisible && Icon && /*#__PURE__*/React__default.default.createElement(Box, {
    as: "span",
    "data-component": "icon",
    sx: styles.iconWrapStyles
  }, /*#__PURE__*/React__default.default.createElement(Icon, null)), children && /*#__PURE__*/React__default.default.createElement(Box, {
    as: "span",
    "data-component": "text",
    "data-content": children,
    sx: selectedLink === ref ? {
      fontWeight: 600
    } : {}
  }, children), loadingCounters ? /*#__PURE__*/React__default.default.createElement(Box, {
    as: "span",
    "data-component": "counter",
    sx: styles.counterStyles
  }, /*#__PURE__*/React__default.default.createElement(LoadingCounter.LoadingCounter, null)) : counter !== undefined && /*#__PURE__*/React__default.default.createElement(Box, {
    as: "span",
    "data-component": "counter",
    sx: styles.counterStyles
  }, /*#__PURE__*/React__default.default.createElement(CounterLabel, null, counter))));
});
UnderlineNavItem.displayName = 'UnderlineNavItem';

exports.UnderlineNavItem = UnderlineNavItem;
