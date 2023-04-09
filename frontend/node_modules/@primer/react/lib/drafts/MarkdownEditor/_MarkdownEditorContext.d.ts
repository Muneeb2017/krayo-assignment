import { RefObject } from 'react';
import { FormattingTools } from './_FormattingTools';
type MarkdownEditorContextProps = {
    disabled: boolean;
    condensed: boolean;
    required: boolean;
    formattingToolsRef: RefObject<FormattingTools>;
};
export declare const MarkdownEditorContext: import("react").Context<MarkdownEditorContextProps>;
export {};
