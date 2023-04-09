'use strict';

var React = require('react');
require('../sx.js');
var Item = require('./Item.js');
var Link = require('../Link/Link.js');
var merge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var merge__default = /*#__PURE__*/_interopDefault(merge);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const LinkItem = /*#__PURE__*/React__default.default.forwardRef(({
  sx = {},
  active,
  as: Component,
  ...props
}, forwardedRef) => {
  const styles = {
    // occupy full size of Item
    paddingX: 2,
    paddingY: '6px',
    // custom value off the scale
    display: 'flex',
    flexGrow: 1,
    // full width
    borderRadius: 2,
    // inherit Item styles
    color: 'inherit',
    '&:hover': {
      color: 'inherit',
      textDecoration: 'none'
    }
  };
  return /*#__PURE__*/React__default.default.createElement(Item.Item, {
    active: active,
    sx: {
      paddingY: 0,
      paddingX: 0
    },
    _PrivateItemWrapper: ({
      children,
      onClick,
      ...rest
    }) => {
      const clickHandler = event => {
        onClick && onClick(event);
        props.onClick && props.onClick(event);
      };
      return /*#__PURE__*/React__default.default.createElement(Link, _extends({
        as: Component,
        sx: merge__default.default(styles, sx)
      }, rest, props, {
        onClick: clickHandler,
        ref: forwardedRef
      }), children);
    }
  }, props.children);
});

exports.LinkItem = LinkItem;
