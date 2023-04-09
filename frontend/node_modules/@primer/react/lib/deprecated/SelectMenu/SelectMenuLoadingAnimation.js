'use strict';

var React = require('react');
var styled = require('styled-components');
var constants = require('../../constants.js');
var sx = require('../../sx.js');
var Spinner = require('../../Spinner/Spinner.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

const Animation = styled__default.default.div.withConfig({
  displayName: "SelectMenuLoadingAnimation__Animation",
  componentId: "sc-j2647v-0"
})(["padding:", " ", ";text-align:center;background-color:", ";", ""], constants.get('space.6'), constants.get('space.4'), constants.get('colors.canvas.overlay'), sx.default);
const SelectMenuLoadingAnimation = props => {
  return /*#__PURE__*/React__default.default.createElement(Animation, props, /*#__PURE__*/React__default.default.createElement(Spinner, null));
};
SelectMenuLoadingAnimation.displayName = "SelectMenuLoadingAnimation";
var SelectMenuLoadingAnimation$1 = SelectMenuLoadingAnimation;

module.exports = SelectMenuLoadingAnimation$1;
