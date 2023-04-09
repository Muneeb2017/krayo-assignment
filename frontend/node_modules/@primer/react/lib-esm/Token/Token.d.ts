import React from 'react';
import { SxProp } from '../sx';
import { TokenBaseProps } from './TokenBase';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
export interface TokenProps extends TokenBaseProps, SxProp {
    /**
     * A function that renders a component before the token text
     */
    leadingVisual?: React.ComponentType<React.PropsWithChildren<any>>;
}
declare const Token: PolymorphicForwardRefComponent<"a" | "button" | "span", TokenProps>;
export default Token;
