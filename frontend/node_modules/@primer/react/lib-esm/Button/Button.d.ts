import { ButtonProps } from './types';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
import { BetterSystemStyleObject } from '../sx';
declare const ButtonComponent: PolymorphicForwardRefComponent<"button", ButtonProps>;
export declare function generateCustomSxProp(props: Partial<Pick<ButtonProps, 'size' | 'block' | 'leadingIcon' | 'trailingIcon' | 'trailingAction'>>, providedSx: BetterSystemStyleObject): {
    [key: string]: BetterSystemStyleObject;
};
export { ButtonComponent };
