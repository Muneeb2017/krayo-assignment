'use strict';

var styled = require('styled-components');
var Box = require('../Box/Box.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * @deprecated Use the Box component instead (i.e. <Flex> → <Box display="flex">)
 */
const Flex = styled__default.default(Box).withConfig({
  displayName: "Flex",
  componentId: "sc-1vv09sz-0"
})([""]);
Flex.defaultProps = {
  display: 'flex'
};
var Flex$1 = Flex;

module.exports = Flex$1;
