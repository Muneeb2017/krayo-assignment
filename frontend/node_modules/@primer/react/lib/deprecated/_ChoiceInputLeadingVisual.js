'use strict';

var React = require('react');
var slots = require('./InputField/slots.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const ChoiceInputLeadingVisual = ({
  children
}) => /*#__PURE__*/React__default.default.createElement(slots.Slot, {
  name: "LeadingVisual"
}, children);
ChoiceInputLeadingVisual.displayName = "ChoiceInputLeadingVisual";
var ChoiceInputLeadingVisual$1 = ChoiceInputLeadingVisual;

module.exports = ChoiceInputLeadingVisual$1;
