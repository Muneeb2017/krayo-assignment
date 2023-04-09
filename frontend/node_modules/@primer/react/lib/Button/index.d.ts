/// <reference types="react" />
import { IconButton } from './IconButton';
import { LinkButton } from './LinkButton';
export type { ButtonProps, IconButtonProps } from './types';
export { IconButton, LinkButton };
export declare const Button: import("../utils/polymorphic").ForwardRefComponent<"button", import("./types").ButtonProps> & {
    Counter: ({ children, sx: sxProp, ...props }: import("./ButtonCounter").CounterProps) => JSX.Element;
};
