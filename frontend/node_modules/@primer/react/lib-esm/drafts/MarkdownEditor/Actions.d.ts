import React from 'react';
export declare const Actions: {
    ({ children }: {
        children?: React.ReactNode;
    }): JSX.Element;
    displayName: string;
};
export declare const ActionButton: React.ForwardRefExoticComponent<{
    icon?: React.ComponentType<{}> | null | undefined;
    leadingIcon?: React.ComponentType<{}> | null | undefined;
    trailingIcon?: React.ComponentType<{}> | null | undefined;
    trailingAction?: React.ComponentType<{}> | null | undefined;
    children: React.ReactNode;
    alignContent?: import("../../Button/types").AlignContent | undefined;
} & {
    variant?: import("../../Button/types").VariantType | undefined;
    size?: import("../../Button/types").Size | undefined;
    disabled?: boolean | undefined;
    block?: boolean | undefined;
} & import("../..").SxProp & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
