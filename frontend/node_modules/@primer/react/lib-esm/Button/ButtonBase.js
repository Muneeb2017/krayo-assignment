import React__default, { forwardRef, useMemo } from 'react';
import '../sx.js';
import { useTheme } from '../ThemeProvider.js';
import { StyledButton } from './types.js';
import { getButtonStyles, getVariantStyles, getAlignContentSize } from './styles.js';
import { useRefObjectAsForwardedRef } from '../hooks/useRefObjectAsForwardedRef.js';
import { defaultSxProp } from '../utils/defaultSxProp.js';
import Box from '../Box/Box.js';
import merge from 'deepmerge';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ButtonBase = /*#__PURE__*/forwardRef(({
  children,
  as: Component = 'button',
  sx: sxProp = defaultSxProp,
  ...props
}, forwardedRef) => {
  const {
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    trailingAction: TrailingAction,
    icon: Icon,
    variant = 'default',
    size = 'medium',
    alignContent = 'center',
    block = false,
    ...rest
  } = props;
  const innerRef = React__default.useRef(null);
  useRefObjectAsForwardedRef(forwardedRef, innerRef);
  const {
    theme
  } = useTheme();
  const baseStyles = useMemo(() => {
    return merge.all([getButtonStyles(theme), getVariantStyles(variant, theme)]);
  }, [theme, variant]);
  const sxStyles = useMemo(() => {
    return merge(baseStyles, sxProp);
  }, [baseStyles, sxProp]);
  const iconWrapStyles = {
    display: 'flex',
    pointerEvents: 'none'
  };
  if (process.env.NODE_ENV !== "production") {
    /**
     * The Linter yells because it thinks this conditionally calls an effect,
     * but since this is a compile-time flag and not a runtime conditional
     * this is safe, and ensures the entire effect is kept out of prod builds
     * shaving precious bytes from the output, and avoiding mounting a noop effect
     */
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React__default.useEffect(() => {
      if (innerRef.current && !(innerRef.current instanceof HTMLButtonElement) && !(innerRef.current instanceof HTMLAnchorElement)) {
        // eslint-disable-next-line no-console
        console.warn('This component should be an instanceof a semantic button or anchor');
      }
    }, [innerRef]);
  }
  return /*#__PURE__*/React__default.createElement(StyledButton, _extends({
    as: Component,
    sx: sxStyles
  }, rest, {
    ref: innerRef,
    "data-block": block ? 'block' : null,
    "data-size": size === 'small' || size === 'large' ? size : undefined,
    "data-no-visuals": !LeadingIcon && !TrailingIcon && !TrailingAction ? true : undefined
  }), Icon ? /*#__PURE__*/React__default.createElement(Icon, null) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Box, {
    as: "span",
    "data-component": "buttonContent",
    sx: getAlignContentSize(alignContent)
  }, LeadingIcon && /*#__PURE__*/React__default.createElement(Box, {
    as: "span",
    "data-component": "leadingVisual",
    sx: {
      ...iconWrapStyles
    }
  }, /*#__PURE__*/React__default.createElement(LeadingIcon, null)), children && /*#__PURE__*/React__default.createElement("span", {
    "data-component": "text"
  }, children), TrailingIcon && /*#__PURE__*/React__default.createElement(Box, {
    as: "span",
    "data-component": "trailingVisual",
    sx: {
      ...iconWrapStyles
    }
  }, /*#__PURE__*/React__default.createElement(TrailingIcon, null))), TrailingAction && /*#__PURE__*/React__default.createElement(Box, {
    as: "span",
    "data-component": "trailingAction",
    sx: {
      ...iconWrapStyles
    }
  }, /*#__PURE__*/React__default.createElement(TrailingAction, null))));
});

export { ButtonBase };
