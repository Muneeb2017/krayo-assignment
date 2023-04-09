import React from 'react';
import { SxProp } from '../sx';
type VisualProps = SxProp & React.HTMLAttributes<HTMLSpanElement>;
export declare const LeadingVisualContainer: React.FC<React.PropsWithChildren<VisualProps>>;
export type ActionListLeadingVisualProps = VisualProps;
export declare const LeadingVisual: React.FC<React.PropsWithChildren<VisualProps>>;
export type ActionListTrailingVisualProps = VisualProps;
export declare const TrailingVisual: React.FC<React.PropsWithChildren<VisualProps>>;
export {};
