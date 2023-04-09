import React, { MouseEventHandler } from 'react';
import { SxProp } from '../sx';
import { CellAlignment } from '../DataTable/column';
export type ToggleSwitchProps = {
    /** The id of the DOM node that describes the switch */
    ['aria-describedby']?: string;
    /** The id of the DOM node that labels the switch */
    ['aria-labelledby']: string;
    /** Uncontrolled - whether the switch is turned on */
    defaultChecked?: boolean;
    /** Whether the switch is ready for user input */
    disabled?: boolean;
    /** Whether the switch's value is being calculated */
    loading?: boolean;
    /** Whether the switch is turned on */
    checked?: boolean;
    /** The callback that is called when the switch is toggled on or off */
    onChange?: (checked: boolean) => void;
    /** The callback that is called when the switch is clicked */
    onClick?: MouseEventHandler;
    /** Size of the switch */
    size?: 'small' | 'medium';
    /** Whether the "on" and "off" labels should appear before or after the switch.
     * **This should only be changed when the switch's alignment needs to be adjusted.** For example: It needs to be left-aligned because the label appears above it and the caption appears below it.
     */
    statusLabelPosition?: CellAlignment;
} & SxProp;
declare const ToggleSwitch: React.FC<React.PropsWithChildren<ToggleSwitchProps>>;
export default ToggleSwitch;
