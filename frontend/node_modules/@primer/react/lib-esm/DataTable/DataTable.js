import React__default from 'react';
import { useTable } from './useTable.js';
import { Table, TableHead, TableRow, TableSortHeader, TableHeader, TableBody, TableCell } from './Table.js';

// ----------------------------------------------------------------------------
// DataTable
// ----------------------------------------------------------------------------

function DataTable({
  'aria-labelledby': labelledby,
  'aria-describedby': describedby,
  cellPadding,
  columns,
  data,
  initialSortColumn,
  initialSortDirection
}) {
  const {
    headers,
    rows,
    actions,
    gridTemplateColumns
  } = useTable({
    data,
    columns,
    initialSortColumn,
    initialSortDirection
  });
  return /*#__PURE__*/React__default.createElement(Table, {
    "aria-labelledby": labelledby,
    "aria-describedby": describedby,
    cellPadding: cellPadding,
    gridTemplateColumns: gridTemplateColumns
  }, /*#__PURE__*/React__default.createElement(TableHead, null, /*#__PURE__*/React__default.createElement(TableRow, null, headers.map(header => {
    if (header.isSortable()) {
      return /*#__PURE__*/React__default.createElement(TableSortHeader, {
        key: header.id,
        align: header.column.align,
        direction: header.getSortDirection(),
        onToggleSort: () => {
          actions.sortBy(header);
        }
      }, typeof header.column.header === 'string' ? header.column.header : header.column.header());
    }
    return /*#__PURE__*/React__default.createElement(TableHeader, {
      key: header.id,
      align: header.column.align
    }, typeof header.column.header === 'string' ? header.column.header : header.column.header());
  }))), /*#__PURE__*/React__default.createElement(TableBody, null, rows.map(row => {
    return /*#__PURE__*/React__default.createElement(TableRow, {
      key: row.id
    }, row.getCells().map(cell => {
      return /*#__PURE__*/React__default.createElement(TableCell, {
        key: cell.id,
        scope: cell.rowHeader ? 'row' : undefined,
        align: cell.column.align
      }, cell.column.renderCell ? cell.column.renderCell(row.getValue()) : cell.getValue());
    }));
  })));
}
DataTable.displayName = "DataTable";

export { DataTable };
