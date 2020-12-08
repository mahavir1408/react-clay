import React from "react";
import ClayTable from "@clayui/table";
import TableHead from "./table-head";
import TableBody from "./table-body";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <ClayTable>
      <TableHead columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </ClayTable>
  );
};
export default Table;
