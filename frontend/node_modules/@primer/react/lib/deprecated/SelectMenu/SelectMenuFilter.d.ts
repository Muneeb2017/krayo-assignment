import React from 'react';
import { ComponentProps } from '../../utils/types';
declare const SelectMenuFilter: React.ForwardRefExoticComponent<{
    value?: string | undefined;
} & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "monospace" | "maxWidth" | "minWidth" | "width" | "block" | "size" | "icon" | "sx" | "disabled" | "variant" | "loading" | "leadingVisual" | "trailingVisual" | "trailingAction" | "validationStatus" | "contrast" | "loaderPosition"> & {
    icon?: React.ComponentType<React.PropsWithChildren<{
        className?: string | undefined;
    }>> | undefined;
    loading?: boolean | undefined;
    loaderPosition?: "auto" | "leading" | "trailing" | undefined;
    leadingVisual?: string | React.ComponentType<React.PropsWithChildren<{
        className?: string | undefined;
    }>> | undefined;
    trailingVisual?: string | React.ComponentType<React.PropsWithChildren<{
        className?: string | undefined;
    }>> | undefined;
    trailingAction?: React.ReactElement<React.HTMLProps<HTMLButtonElement>, string | React.JSXElementConstructor<any>> | undefined;
} & Pick<import("../../_TextInputWrapper").StyledWrapperProps, "monospace" | "maxWidth" | "minWidth" | "width" | "block" | "size" | "sx" | "disabled" | "variant" | "validationStatus" | "contrast"> & React.RefAttributes<HTMLInputElement>>;
export type SelectMenuFilterProps = ComponentProps<typeof SelectMenuFilter>;
export default SelectMenuFilter;
