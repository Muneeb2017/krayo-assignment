import React from 'react';
import { SxProp } from '../sx';
export type UnderlineNavProps = {
    'aria-label'?: React.AriaAttributes['aria-label'];
    as?: React.ElementType;
    sx?: SxProp['sx'];
    variant?: 'default' | 'small';
    align?: 'right';
    /**
     * loading state for all counters. It displays loading animation for individual counters (UnderlineNav.Item) until all are resolved. It is needed to prevent multiple layout shift.
     */
    loadingCounters?: boolean;
    afterSelect?: (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => void;
    children: React.ReactNode;
};
export declare const UnderlineNav: React.ForwardRefExoticComponent<UnderlineNavProps & React.RefAttributes<unknown>>;
