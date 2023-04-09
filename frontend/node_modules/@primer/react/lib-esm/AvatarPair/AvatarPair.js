import React__default from 'react';
import styled from 'styled-components';
import { get } from '../constants.js';
import Avatar from '../Avatar/Avatar.js';
import Box from '../Box/Box.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ChildAvatar = styled(Avatar).withConfig({
  displayName: "AvatarPair__ChildAvatar",
  componentId: "sc-1f7gzqg-0"
})(["position:absolute;right:-15%;bottom:-9%;box-shadow:", ";"], get('shadows.avatar.childShadow'));
const AvatarPair = ({
  children,
  ...rest
}) => {
  const avatars = React__default.Children.map(children, (child, i) => {
    if (! /*#__PURE__*/React__default.isValidElement(child)) {
      return child;
    }
    if (i === 0) {
      return /*#__PURE__*/React__default.cloneElement(child, {
        size: 40
      });
    }
    return /*#__PURE__*/React__default.createElement(ChildAvatar, _extends({
      bg: "canvas.default"
    }, child.props, {
      size: 20
    }));
  });
  return /*#__PURE__*/React__default.createElement(Box, _extends({
    position: "relative",
    display: "inline-flex"
  }, rest), avatars);
};
AvatarPair.displayName = "AvatarPair";
// styled() changes this
AvatarPair.displayName = 'AvatarPair';
var AvatarPair$1 = AvatarPair;

export { AvatarPair$1 as default };
