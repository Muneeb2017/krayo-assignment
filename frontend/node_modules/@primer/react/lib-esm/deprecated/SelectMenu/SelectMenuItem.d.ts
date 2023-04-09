import React from 'react';
import { SxProp } from '../../sx';
import { ComponentProps } from '../../utils/types';
export declare const listItemStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
declare const StyledItem: import("styled-components").StyledComponent<"a", any, {
    role: "menuitemcheckbox";
} & SxProp, "role">;
type SelectMenuItemInteralProps = {
    as?: React.ElementType;
    selected?: boolean;
} & ComponentProps<typeof StyledItem>;
declare const SelectMenuItem: React.ForwardRefExoticComponent<Omit<SelectMenuItemInteralProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export type SelectMenuItemProps = ComponentProps<typeof SelectMenuItem>;
export default SelectMenuItem;
