import React__default from 'react';
import { defaultSxProp } from '../utils/defaultSxProp.js';
import CounterLabel from '../CounterLabel/CounterLabel.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Counter = ({
  children,
  sx: sxProp = defaultSxProp,
  ...props
}) => {
  // we need to make sure we add the sx styles to the css selector that has the highest specificity.
  const cssSelector = `&[data-component="ButtonCounter"]`;
  const counterButtonStyles = {
    [cssSelector]: sxProp
  };
  return /*#__PURE__*/React__default.createElement(CounterLabel, _extends({
    "data-component": "ButtonCounter",
    sx: {
      ml: 2,
      ...counterButtonStyles
    }
  }, props), children);
};
Counter.displayName = "Counter";

export { Counter };
