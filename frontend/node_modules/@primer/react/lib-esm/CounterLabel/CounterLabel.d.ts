import React from 'react';
import { SxProp } from '../sx';
export type CounterLabelProps = {
    scheme?: 'primary' | 'secondary';
} & SxProp;
declare const CounterLabel: React.FC<React.PropsWithChildren<CounterLabelProps>>;
export default CounterLabel;
