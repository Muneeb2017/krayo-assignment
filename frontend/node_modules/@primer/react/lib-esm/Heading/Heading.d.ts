import { SxProp } from '../sx';
import { ComponentProps } from '../utils/types';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
type StyledHeadingProps = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & SxProp;
declare const Heading: PolymorphicForwardRefComponent<"h2", StyledHeadingProps>;
export type HeadingProps = ComponentProps<typeof Heading>;
export default Heading;
