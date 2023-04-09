import { UseSuggestionsHook } from '.';
export type Reference = {
    titleHtml: string;
    titleText: string;
    id: string;
    iconHtml?: string;
};
export declare const useReferenceSuggestions: UseSuggestionsHook<Reference>;
