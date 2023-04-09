'use strict';

var React = require('react');
var _InputLabel = require('../../_InputLabel.js');
var slots = require('./slots.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const InputFieldLabel = ({
  children,
  visuallyHidden
}) => /*#__PURE__*/React__default.default.createElement(slots.Slot, {
  name: "Label"
}, ({
  disabled,
  id,
  required
}) => /*#__PURE__*/React__default.default.createElement(_InputLabel, {
  htmlFor: id,
  visuallyHidden: visuallyHidden,
  required: required,
  disabled: disabled
}, children));
InputFieldLabel.displayName = "InputFieldLabel";
var InputFieldLabel$1 = InputFieldLabel;

module.exports = InputFieldLabel$1;
