import React from 'react';
import { SxProp } from '../sx';
import { IconProps } from '@primer/octicons-react';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
type LinkProps = {
    download?: string;
    href?: string;
    hrefLang?: string;
    media?: string;
    ping?: string;
    rel?: string;
    target?: string;
    type?: string;
    referrerPolicy?: React.AnchorHTMLAttributes<HTMLAnchorElement>['referrerPolicy'];
};
export type UnderlineNavItemProps = {
    /**
     * Primary content for an UnderlineNav
     */
    children?: React.ReactNode;
    /**
     * Callback that will trigger both on click selection and keyboard selection.
     */
    onSelect?: (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => void;
    /**
     * Is `UnderlineNav.Item` current page?
     */
    'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | boolean;
    /**
     *  Icon before the text
     */
    icon?: React.FunctionComponent<IconProps>;
    /**
     * Renders `UnderlineNav.Item` as given component
     **/
    as?: React.ElementType;
    /**
     * Counter
     */
    counter?: number | string;
} & SxProp & LinkProps;
export declare const UnderlineNavItem: PolymorphicForwardRefComponent<"a", UnderlineNavItemProps>;
export {};
