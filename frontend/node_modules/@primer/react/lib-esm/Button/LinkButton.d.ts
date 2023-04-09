import { LinkButtonProps } from './types';
import { ButtonBaseProps } from './ButtonBase';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
type MyProps = LinkButtonProps & ButtonBaseProps;
declare const LinkButton: PolymorphicForwardRefComponent<"a", MyProps>;
export { LinkButton };
