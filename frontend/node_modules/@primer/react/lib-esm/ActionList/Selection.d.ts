import React from 'react';
import { ActionListItemProps } from './shared';
type SelectionProps = Pick<ActionListItemProps, 'selected'>;
export declare const Selection: React.FC<React.PropsWithChildren<SelectionProps>>;
export {};
