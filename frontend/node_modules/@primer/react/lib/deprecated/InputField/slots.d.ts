/// <reference types="react" />
export declare const Slots: import("react").FC<{
    context?: Record<string, unknown> | undefined;
    children: (slots: {
        Caption?: import("react").ReactNode;
        Label?: import("react").ReactNode;
        LeadingVisual?: import("react").ReactNode;
        Input?: import("react").ReactNode;
    }) => import("react").ReactNode;
}>, Slot: <T>(props: {
    name: "Caption" | "Label" | "LeadingVisual" | "Input";
    children: import("react").ReactNode | ((context: T) => import("react").ReactNode);
}) => null;
