import React from 'react';
type Viewport = 'narrow' | 'regular' | 'wide';
export type HiddenProps = {
    when: Array<Viewport> | Viewport;
    children: React.ReactNode;
};
export declare const Hidden: {
    ({ when, children }: HiddenProps): JSX.Element | null;
    displayName: string;
};
export {};
