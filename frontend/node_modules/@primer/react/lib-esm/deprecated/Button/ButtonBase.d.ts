/// <reference types="react" />
import { ComponentProps } from '../../utils/types';
type StyledButtonBaseProps = {
    as?: 'button' | 'a' | 'summary' | 'input' | string | React.ElementType;
    variant?: 'small' | 'medium' | 'large';
};
declare const ButtonBase: import("styled-components").StyledComponent<"button", any, StyledButtonBaseProps, never>;
export type ButtonBaseProps = ComponentProps<typeof ButtonBase>;
export default ButtonBase;
