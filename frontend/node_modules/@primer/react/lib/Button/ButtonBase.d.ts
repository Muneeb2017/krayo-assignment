import { ComponentPropsWithRef } from 'react';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
import { ButtonProps } from './types';
declare const ButtonBase: PolymorphicForwardRefComponent<"a" | "button", ButtonProps>;
export type ButtonBaseProps = ComponentPropsWithRef<typeof ButtonBase>;
export { ButtonBase };
