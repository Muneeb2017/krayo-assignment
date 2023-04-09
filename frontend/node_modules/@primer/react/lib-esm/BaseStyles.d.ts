/// <reference types="react" />
import { SystemCommonProps, SystemTypographyProps } from './constants';
import { ComponentProps } from './utils/types';
import 'focus-visible';
declare const Base: import("styled-components").StyledComponent<"div", any, SystemTypographyProps & SystemCommonProps, never>;
export type BaseStylesProps = ComponentProps<typeof Base>;
declare function BaseStyles(props: BaseStylesProps): JSX.Element;
export default BaseStyles;
