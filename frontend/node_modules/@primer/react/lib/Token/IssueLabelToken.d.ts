import { TokenBaseProps } from './TokenBase';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
export interface IssueLabelTokenProps extends TokenBaseProps {
    /**
     * The color that corresponds to the label
     */
    fillColor?: string;
}
declare const IssueLabelToken: PolymorphicForwardRefComponent<"a" | "button" | "span", IssueLabelTokenProps>;
export default IssueLabelToken;
