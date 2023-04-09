import React__default from 'react';
import '../sx.js';
import VisuallyHidden from '../_VisuallyHidden.js';
import Box from '../Box/Box.js';
import merge from 'deepmerge';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CounterLabel = ({
  scheme = 'secondary',
  sx = {},
  children,
  ...props
}) => {
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Box, _extends({
    as: "span",
    "aria-hidden": "true",
    sx: merge({
      display: 'inline-block',
      padding: '2px 5px',
      fontSize: 0,
      fontWeight: 'bold',
      lineHeight: 'condensedUltra',
      borderRadius: '20px',
      backgroundColor: scheme === 'primary' ? 'neutral.emphasis' : 'neutral.muted',
      color: scheme === 'primary' ? 'fg.onEmphasis' : 'fg.default',
      '&:empty': {
        display: 'none'
      }
    }, sx)
  }, props), children), /*#__PURE__*/React__default.createElement(VisuallyHidden, null, "\xA0(", children, ")"));
};
CounterLabel.displayName = 'CounterLabel';
var CounterLabel$1 = CounterLabel;

export { CounterLabel$1 as default };
