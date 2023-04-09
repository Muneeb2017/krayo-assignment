import { TokenBaseProps } from './TokenBase';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
export interface AvatarTokenProps extends TokenBaseProps {
    avatarSrc: string;
}
declare const AvatarToken: PolymorphicForwardRefComponent<"a" | "button" | "span", AvatarTokenProps>;
export default AvatarToken;
