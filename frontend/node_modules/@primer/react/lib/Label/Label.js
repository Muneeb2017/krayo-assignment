'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var styledSystem = require('styled-system');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const variants = {
  default: {
    borderColor: 'border.default'
  },
  primary: {
    borderColor: 'fg.default'
  },
  secondary: {
    borderColor: 'border.muted',
    color: 'fg.muted'
  },
  accent: {
    borderColor: 'accent.emphasis',
    color: 'accent.fg'
  },
  success: {
    borderColor: 'success.emphasis',
    color: 'success.fg'
  },
  attention: {
    borderColor: 'attention.emphasis',
    color: 'attention.fg'
  },
  severe: {
    borderColor: 'severe.emphasis',
    color: 'severe.fg'
  },
  danger: {
    borderColor: 'danger.emphasis',
    color: 'danger.fg'
  },
  done: {
    borderColor: 'done.emphasis',
    color: 'done.fg'
  },
  sponsors: {
    borderColor: 'sponsors.emphasis',
    color: 'sponsors.fg'
  }
};
const sizes = {
  small: {
    height: '20px',
    padding: '0 7px' // hard-coded to align with Primer ViewComponents and Primer CSS
  },

  large: {
    height: '24px',
    padding: '0 10px' // hard-coded to align with Primer ViewComponents and Primer CSS
  }
};

const Label = styled__default.default.span.withConfig({
  displayName: "Label",
  componentId: "sc-1dgcne-0"
})(["align-items:center;background-color:transparent;border-width:1px;border-radius:999px;border-style:solid;display:inline-flex;font-weight:", ";font-size:", ";line-height:1;white-space:nowrap;", ";", ";", ";"], constants.get('fontWeights.bold'), constants.get('fontSizes.0'), styledSystem.variant({
  variants
}), styledSystem.variant({
  prop: 'size',
  variants: sizes
}), sx.default);

// TODO: Remove defaultProps to be compatible with the next major version of React
// Reference: https://github.com/primer/react/issues/2758
Label.defaultProps = {
  size: 'small',
  variant: 'default'
};
var Label$1 = Label;

exports.default = Label$1;
exports.variants = variants;
