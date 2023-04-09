'use strict';

var styled = require('styled-components');
var sx = require('../sx.js');
var _getGlobalFocusStyles = require('../_getGlobalFocusStyles.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const StyledButton = styled__default.default.button.withConfig({
  displayName: "types__StyledButton",
  componentId: "sc-ws60qy-0"
})(["", ";", ";"], _getGlobalFocusStyles('-2px'), sx.default);

exports.StyledButton = StyledButton;
