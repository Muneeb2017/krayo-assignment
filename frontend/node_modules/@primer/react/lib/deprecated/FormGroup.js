'use strict';

var styled = require('styled-components');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const FormGroup = styled__default.default.div.withConfig({
  displayName: "FormGroup",
  componentId: "sc-16u5rpr-0"
})(["margin:", " 0;font-weight:", ";", ";"], constants.get('space.3'), constants.get('fontWeights.normal'), sx.default);

/** @deprecated Use FormControl instead. See https://primer.style/react/FormControl for more details. */
const FormGroupLabel = styled__default.default.label.withConfig({
  displayName: "FormGroup__FormGroupLabel",
  componentId: "sc-16u5rpr-1"
})(["display:block;margin:0 0 ", ";font-size:", ";font-weight:", ";", ";"], constants.get('space.2'), constants.get('fontSizes.1'), constants.get('fontWeights.bold'), sx.default);
FormGroupLabel.displayName = 'FormGroup.Label';
/** @deprecated Use FormControl instead. See https://primer.style/react/FormControl for more details. */
var FormGroup$1 = Object.assign(FormGroup, {
  Label: FormGroupLabel
});

module.exports = FormGroup$1;
