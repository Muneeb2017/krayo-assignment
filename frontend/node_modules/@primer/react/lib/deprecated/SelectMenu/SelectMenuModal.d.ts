import React from 'react';
import { WidthProps } from 'styled-system';
import { SxProp } from '../../sx';
import { ComponentProps } from '../../utils/types';
type StyledModalProps = {
    filter?: boolean;
} & WidthProps;
declare const ModalWrapper: import("styled-components").StyledComponent<"div", any, {
    align?: "left" | "right" | undefined;
} & SxProp, never>;
type SelectMenuModalInternalProps = Pick<StyledModalProps, 'width'> & ComponentProps<typeof ModalWrapper>;
declare const SelectMenuModal: React.ForwardRefExoticComponent<Omit<SelectMenuModalInternalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type SelectMenuModalProps = ComponentProps<typeof SelectMenuModal>;
export default SelectMenuModal;
