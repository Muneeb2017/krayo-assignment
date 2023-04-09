import { SxProp } from '../sx';
import { ComponentProps } from '../utils/types';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
type StyledLinkProps = {
    hoverColor?: string;
    muted?: boolean;
    underline?: boolean;
} & SxProp;
declare const Link: PolymorphicForwardRefComponent<"a", StyledLinkProps>;
export type LinkProps = ComponentProps<typeof Link>;
export default Link;
