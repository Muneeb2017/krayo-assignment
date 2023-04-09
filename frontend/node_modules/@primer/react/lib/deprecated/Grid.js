'use strict';

var styled = require('styled-components');
var Box = require('../Box/Box.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * @deprecated Use the Box component instead (i.e. <Grid> → <Box display="grid">)
 */
const Grid = styled__default.default(Box).withConfig({
  displayName: "Grid",
  componentId: "sc-166tpao-0"
})([""]);
Grid.defaultProps = {
  display: 'grid'
};
var Grid$1 = Grid;

module.exports = Grid$1;
