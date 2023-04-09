/// <reference types="react" />
import { SxProp } from '../sx';
import { ComponentProps } from '../utils/types';
declare const octiconMap: {
    issueOpened: import("@primer/octicons-react/dist/icons").Icon;
    pullOpened: import("@primer/octicons-react/dist/icons").Icon;
    issueClosed: import("@primer/octicons-react/dist/icons").Icon;
    issueClosedNotPlanned: import("@primer/octicons-react/dist/icons").Icon;
    pullClosed: import("@primer/octicons-react/dist/icons").Icon;
    pullMerged: import("@primer/octicons-react/dist/icons").Icon;
    draft: import("@primer/octicons-react/dist/icons").Icon;
    issueDraft: import("@primer/octicons-react/dist/icons").Icon;
};
declare const StateLabelBase: import("styled-components").StyledComponent<"span", any, {
    variant?: "small" | "normal" | undefined;
    status: keyof typeof octiconMap;
} & SxProp, never>;
export type StateLabelProps = ComponentProps<typeof StateLabelBase>;
declare function StateLabel({ children, status, variant: variantProp, ...rest }: StateLabelProps): JSX.Element;
export default StateLabel;
