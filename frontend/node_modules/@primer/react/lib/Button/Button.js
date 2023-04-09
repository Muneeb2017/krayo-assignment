'use strict';

var React = require('react');
var ButtonBase = require('./ButtonBase.js');
var defaultSxProp = require('../utils/defaultSxProp.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ButtonComponent = /*#__PURE__*/React.forwardRef(({
  children,
  sx: sxProp = defaultSxProp.defaultSxProp,
  ...props
}, forwardedRef) => {
  let sxStyles = sxProp;

  // grap the button props that have associated data attributes in the styles
  const {
    block,
    size,
    leadingIcon,
    trailingIcon,
    trailingAction
  } = props;
  if (sxProp !== null && Object.keys(sxProp).length > 0) {
    sxStyles = generateCustomSxProp({
      block,
      size,
      leadingIcon,
      trailingIcon,
      trailingAction
    }, sxProp);
  }
  return /*#__PURE__*/React__default.default.createElement(ButtonBase.ButtonBase, _extends({
    ref: forwardedRef,
    as: "button",
    sx: sxStyles,
    type: "button"
  }, props), children);
});

// This function is used to generate a custom cssSelector for the sxProp

// The usual sx prop can like this:
// sx={{
//   [`@media (max-width: 768px)`]: {
//     '& > ul': {
//       backgroundColor: 'deeppink',
//     },
//     '&:hover': {
//       backgroundColor: 'yellow',
//     },
//   },
//  '&:hover': {
//     backgroundColor: 'yellow',
//   },
//  '&': {
//  width : 320px
// }
// }}
//*
/* What we want for Button styles is this:
sx={{
//   [`@media (max-width: 768px)`]: {
//     '&[data-attribute="something"] > ul': {
//       backgroundColor: 'deeppink',
//     },
//     '&[data-attribute="something"]:hover': {
//       backgroundColor: 'yellow',
//     },
//   },
//  '&[data-attribute="something"]:hover': {
//     backgroundColor: 'yellow',
//   },
//  '&[data-attribute="something"]': {
//     width : 320px
//  }
// }}

// We need to make sure we append the customCSSSelector to the original class selector. i.e & - > &[data-attribute="Icon"][data-size="small"]
*/
function generateCustomSxProp(props, providedSx) {
  // Possible data attributes: data-size, data-block, data-no-visuals
  const size = props.size && props.size !== 'medium' ? `[data-size="${props.size}"]` : ''; // medium is a default size therefore it doesn't have a data attribute that used for styling
  const block = props.block ? `[data-block="block"]` : '';
  const noVisuals = props.leadingIcon || props.trailingIcon || props.trailingAction ? '' : '[data-no-visuals="true"]';

  // this is custom selector. We need to make sure we add the data attributes to the base css class (& -> &[data-attributename="value"]])
  const cssSelector = `&${size}${block}${noVisuals}`; // &[data-size="small"][data-block="block"][data-no-visuals="true"]

  const customSxProp = {};
  if (!providedSx) return customSxProp;else {
    customSxProp[cssSelector] = providedSx;
    return customSxProp;
  }
}
ButtonComponent.displayName = 'Button';

exports.ButtonComponent = ButtonComponent;
exports.generateCustomSxProp = generateCustomSxProp;
