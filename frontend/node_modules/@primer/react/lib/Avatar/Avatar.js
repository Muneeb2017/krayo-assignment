'use strict';

var styled = require('styled-components');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

function getBorderRadius({
  size,
  square
}) {
  if (square) {
    return size && size <= 24 ? '4px' : '6px';
  } else {
    return '50%';
  }
}
const Avatar = styled__default.default.img.attrs(props => ({
  height: props.size,
  width: props.size
})).withConfig({
  displayName: "Avatar",
  componentId: "sc-2lv0r8-0"
})(["display:inline-block;overflow:hidden;line-height:", ";vertical-align:middle;border-radius:", ";box-shadow:0 0 0 1px ", ";", ""], constants.get('lineHeights.condensedUltra'), props => getBorderRadius(props), constants.get('colors.avatar.border'), sx.default);

// TODO: Remove defaultProps to be compatible with the next major version of React
// Reference: https://github.com/primer/react/issues/2758
Avatar.defaultProps = {
  size: 20,
  alt: '',
  square: false
};
var Avatar$1 = Avatar;

module.exports = Avatar$1;
