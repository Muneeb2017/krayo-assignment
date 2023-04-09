import React from 'react';
import { ComponentProps } from '../utils/types';
type StyledPositionProps = {
    as?: React.ElementType;
};
/**
 * @deprecated Use the Box component instead (i.e. <Position> → <Box>)
 */
declare const Position: import("styled-components").StyledComponent<"div", any, import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").GridProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").BackgroundProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Background<import("styled-system").TLengthStyledSystem>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & import("styled-system").PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").ShadowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("..").SxProp & StyledPositionProps, never>;
export type PositionProps = ComponentProps<typeof Position>;
/**
 * @deprecated Use the Box component instead (i.e. <Absolute> → <Box position="absolute">)
 */
export default Position;
export type AbsoluteProps = Omit<PositionProps, 'position'>;
/**
 * @deprecated Use the Box component instead (i.e. <Absolute> → <Box position="absolute">)
 */
export declare const Absolute: React.ForwardRefExoticComponent<Omit<AbsoluteProps, "ref"> & React.RefAttributes<unknown>>;
export type FixedProps = Omit<PositionProps, 'position'>;
/**
 * @deprecated Use the Box component instead (i.e. <Fixed> → <Box position="fixed">)
 */
export declare const Fixed: React.ForwardRefExoticComponent<Omit<AbsoluteProps, "ref"> & React.RefAttributes<unknown>>;
export type RelativeProps = Omit<PositionProps, 'position'>;
/**
 * @deprecated Use the Box component instead (i.e. <Relative> → <Box position="relative">)
 */
export declare const Relative: React.ForwardRefExoticComponent<Omit<RelativeProps, "ref"> & React.RefAttributes<unknown>>;
export type StickyProps = Omit<PositionProps, 'position'>;
/**
 * @deprecated Use the Box component instead (i.e. <Sticky> → <Box position="sticky">)
 */
export declare const Sticky: React.ForwardRefExoticComponent<Omit<StickyProps, "ref"> & React.RefAttributes<unknown>>;
