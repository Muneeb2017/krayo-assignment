import React from 'react';
export type PaginationProps = {
    theme?: Record<string, unknown>;
    pageCount: number;
    currentPage: number;
    onPageChange?: (e: React.MouseEvent, n: number) => void;
    hrefBuilder?: (n: number) => string;
    marginPageCount?: number;
    showPages?: boolean;
    surroundingPageCount?: number;
};
declare function Pagination({ theme, pageCount, currentPage, onPageChange, hrefBuilder, marginPageCount, showPages, surroundingPageCount, ...rest }: PaginationProps): JSX.Element;
export default Pagination;
