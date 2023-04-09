'use strict';

var styled = require('styled-components');
var styledSystem = require('styled-system');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const variants = styledSystem.variant({
  variants: {
    default: {
      color: 'fg.default',
      backgroundColor: 'accent.subtle',
      borderColor: 'accent.muted',
      svg: {
        color: 'accent.fg'
      }
    },
    success: {
      color: 'fg.default',
      backgroundColor: 'success.subtle',
      borderColor: 'success.muted',
      svg: {
        color: 'success.fg'
      }
    },
    danger: {
      color: 'fg.default',
      backgroundColor: 'danger.subtle',
      borderColor: 'danger.muted',
      svg: {
        color: 'danger.fg'
      }
    },
    warning: {
      color: 'fg.default',
      backgroundColor: 'attention.subtle',
      borderColor: 'attention.muted',
      svg: {
        color: 'attention.fg'
      }
    }
  }
});
const Flash = styled__default.default.div.withConfig({
  displayName: "Flash",
  componentId: "sc-hzrzfc-0"
})(["position:relative;color:", ";padding:", ";border-style:solid;border-width:", ";border-radius:", ";margin-top:", ";p:last-child{margin-bottom:0;}svg{margin-right:", ";}", ";", ";"], constants.get('colors.fg.default'), constants.get('space.3'), props => props.full ? '1px 0px' : '1px', props => props.full ? '0' : constants.get('radii.2'), props => props.full ? '-1px' : '0', constants.get('space.2'), variants, sx.default);

// TODO: Remove defaultProps to be compatible with the next major version of React
// Reference: https://github.com/primer/react/issues/2758
Flash.defaultProps = {
  variant: 'default'
};
var Flash$1 = Flash;

module.exports = Flash$1;
