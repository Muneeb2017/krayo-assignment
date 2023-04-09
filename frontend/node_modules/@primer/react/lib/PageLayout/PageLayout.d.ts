import React from 'react';
import { ResponsiveValue } from '../hooks/useResponsiveValue';
import { SxProp } from '../sx';
declare const SPACING_MAP: {
    none: number;
    condensed: number;
    normal: (number | null)[];
};
export type PageLayoutProps = {
    /** The maximum width of the page container */
    containerWidth?: keyof typeof containerWidths;
    /** The spacing between the outer edges of the page container and the viewport */
    padding?: keyof typeof SPACING_MAP;
    rowGap?: keyof typeof SPACING_MAP;
    columnGap?: keyof typeof SPACING_MAP;
    /** Private prop to allow SplitPageLayout to customize slot components */
    _slotsConfig?: Record<'header' | 'footer', React.ComponentType>;
} & SxProp;
declare const containerWidths: {
    full: string;
    medium: string;
    large: string;
    xlarge: string;
};
export type PageLayoutHeaderProps = {
    /**
     * A unique label for the rendered banner landmark
     */
    'aria-label'?: React.AriaAttributes['aria-label'];
    /**
     * An id to an element which uniquely labels the rendered banner landmark
     */
    'aria-labelledby'?: React.AriaAttributes['aria-labelledby'];
    padding?: keyof typeof SPACING_MAP;
    divider?: 'none' | 'line' | ResponsiveValue<'none' | 'line', 'none' | 'line' | 'filled'>;
    /**
     * @deprecated Use the `divider` prop with a responsive value instead.
     *
     * Before:
     * ```
     * divider="line"
     * dividerWhenNarrow="filled"
     * ```
     *
     * After:
     * ```
     * divider={{regular: 'line', narrow: 'filled'}}
     * ```
     */
    dividerWhenNarrow?: 'inherit' | 'none' | 'line' | 'filled';
    hidden?: boolean | ResponsiveValue<boolean>;
} & SxProp;
export type PageLayoutContentProps = {
    /**
     * A unique label for the rendered main landmark
     */
    'aria-label'?: React.AriaAttributes['aria-label'];
    /**
     * An id to an element which uniquely labels the rendered main landmark
     */
    'aria-labelledby'?: React.AriaAttributes['aria-labelledby'];
    width?: keyof typeof contentWidths;
    padding?: keyof typeof SPACING_MAP;
    hidden?: boolean | ResponsiveValue<boolean>;
} & SxProp;
declare const contentWidths: {
    full: string;
    medium: string;
    large: string;
    xlarge: string;
};
export type PageLayoutPaneProps = {
    position?: keyof typeof panePositions | ResponsiveValue<keyof typeof panePositions>;
    /**
     * @deprecated Use the `position` prop with a responsive value instead.
     *
     * Before:
     * ```
     * position="start"
     * positionWhenNarrow="end"
     * ```
     *
     * After:
     * ```
     * position={{regular: 'start', narrow: 'end'}}
     * ```
     */
    'aria-labelledby'?: string;
    'aria-label'?: string;
    positionWhenNarrow?: 'inherit' | keyof typeof panePositions;
    width?: keyof typeof paneWidths;
    resizable?: boolean;
    widthStorageKey?: string;
    padding?: keyof typeof SPACING_MAP;
    divider?: 'none' | 'line' | ResponsiveValue<'none' | 'line', 'none' | 'line' | 'filled'>;
    /**
     * @deprecated Use the `divider` prop with a responsive value instead.
     *
     * Before:
     * ```
     * divider="line"
     * dividerWhenNarrow="filled"
     * ```
     *
     * After:
     * ```
     * divider={{regular: 'line', narrow: 'filled'}}
     * ```
     */
    dividerWhenNarrow?: 'inherit' | 'none' | 'line' | 'filled';
    sticky?: boolean;
    offsetHeader?: string | number;
    hidden?: boolean | ResponsiveValue<boolean>;
    id?: string;
} & SxProp;
declare const panePositions: {
    start: number;
    end: number;
};
declare const paneWidths: {
    small: (string | null)[];
    medium: (string | null)[];
    large: (string | null)[];
};
export type PageLayoutFooterProps = {
    /**
     * A unique label for the rendered contentinfo landmark
     */
    'aria-label'?: React.AriaAttributes['aria-label'];
    /**
     * An id to an element which uniquely labels the rendered contentinfo landmark
     */
    'aria-labelledby'?: React.AriaAttributes['aria-labelledby'];
    padding?: keyof typeof SPACING_MAP;
    divider?: 'none' | 'line' | ResponsiveValue<'none' | 'line', 'none' | 'line' | 'filled'>;
    /**
     * @deprecated Use the `divider` prop with a responsive value instead.
     *
     * Before:
     * ```
     * divider="line"
     * dividerWhenNarrow="filled"
     * ```
     *
     * After:
     * ```
     * divider={{regular: 'line', narrow: 'filled'}}
     * ```
     */
    dividerWhenNarrow?: 'inherit' | 'none' | 'line' | 'filled';
    hidden?: boolean | ResponsiveValue<boolean>;
} & SxProp;
export declare const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> & {
    Header: React.FC<React.PropsWithChildren<PageLayoutHeaderProps>>;
    Content: React.FC<React.PropsWithChildren<PageLayoutContentProps>>;
    Pane: React.ForwardRefExoticComponent<{
        position?: "end" | "start" | ResponsiveValue<"end" | "start", "end" | "start", "end" | "start"> | undefined;
        /**
         * @deprecated Use the `position` prop with a responsive value instead.
         *
         * Before:
         * ```
         * position="start"
         * positionWhenNarrow="end"
         * ```
         *
         * After:
         * ```
         * position={{regular: 'start', narrow: 'end'}}
         * ```
         */
        'aria-labelledby'?: string | undefined;
        'aria-label'?: string | undefined;
        positionWhenNarrow?: "inherit" | "end" | "start" | undefined;
        width?: "small" | "medium" | "large" | undefined;
        resizable?: boolean | undefined;
        widthStorageKey?: string | undefined;
        padding?: "normal" | "none" | "condensed" | undefined;
        divider?: "none" | "line" | ResponsiveValue<"none" | "line", "none" | "line" | "filled", "none" | "line"> | undefined;
        /**
         * @deprecated Use the `divider` prop with a responsive value instead.
         *
         * Before:
         * ```
         * divider="line"
         * dividerWhenNarrow="filled"
         * ```
         *
         * After:
         * ```
         * divider={{regular: 'line', narrow: 'filled'}}
         * ```
         */
        dividerWhenNarrow?: "inherit" | "none" | "line" | "filled" | undefined;
        sticky?: boolean | undefined;
        offsetHeader?: string | number | undefined;
        hidden?: boolean | ResponsiveValue<boolean, boolean, boolean> | undefined;
        id?: string | undefined;
    } & SxProp & {
        children?: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    Footer: React.FC<React.PropsWithChildren<PageLayoutFooterProps>>;
};
export {};
