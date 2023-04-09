'use strict';

var React = require('react');
var defaultSxProp = require('../utils/defaultSxProp.js');
var CounterLabel = require('../CounterLabel/CounterLabel.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Counter = ({
  children,
  sx: sxProp = defaultSxProp.defaultSxProp,
  ...props
}) => {
  // we need to make sure we add the sx styles to the css selector that has the highest specificity.
  const cssSelector = `&[data-component="ButtonCounter"]`;
  const counterButtonStyles = {
    [cssSelector]: sxProp
  };
  return /*#__PURE__*/React__default.default.createElement(CounterLabel, _extends({
    "data-component": "ButtonCounter",
    sx: {
      ml: 2,
      ...counterButtonStyles
    }
  }, props), children);
};
Counter.displayName = "Counter";

exports.Counter = Counter;
