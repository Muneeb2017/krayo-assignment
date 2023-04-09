import React, { FC } from 'react';
import { SxProp } from '../../sx';
type LabelProps = SxProp & {
    visuallyHidden?: boolean;
    children?: React.ReactNode;
};
export declare const Label: FC<LabelProps>;
export {};
