import React__default from 'react';
import InputCaption from '../../_InputCaption.js';
import { Slot } from './slots.js';

const InputFieldCaption = ({
  children
}) => /*#__PURE__*/React__default.createElement(Slot, {
  name: "Caption"
}, ({
  captionId,
  disabled
}) => /*#__PURE__*/React__default.createElement(InputCaption, {
  id: captionId,
  disabled: disabled
}, children));
InputFieldCaption.displayName = "InputFieldCaption";
var InputFieldCaption$1 = InputFieldCaption;

export { InputFieldCaption$1 as default };
