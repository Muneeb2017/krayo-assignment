/// <reference types="react" />
export type MarkdownViewMode = 'preview' | 'edit';
type ViewSwitchProps = {
    selectedView: MarkdownViewMode;
    onViewSelect?: (view: MarkdownViewMode) => void;
    disabled?: boolean;
    /** Called when the preview should be loaded. */
    onLoadPreview: () => void;
};
export declare const ViewSwitch: ({ selectedView, onViewSelect, onLoadPreview, disabled }: ViewSwitchProps) => JSX.Element;
export {};
