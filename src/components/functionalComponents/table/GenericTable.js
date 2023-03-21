import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { exampleTable } from "../../../utils/tableUtils";
import "./genericTable.css";

function GenericTable() {
  const { columns, rows } = exampleTable;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function mapColumns(column, key) {
    return (
      <TableCell
        key={column.id}
        align={column.align}
        style={{ minWidth: column.minWidth }}
      >
        {column.label}
      </TableCell>
    );
  }

  function mapRows(row, key) {
    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={key}>
        {columns.map((column) => {
          const value = row[column.id];
          return (
            <TableCell key={column.id} align={column.align}>
              {column.format && typeof value === "number"
                ? column.format(value)
                : value}
            </TableCell>
          );
        })}
      </TableRow>
    );
  }

  return (
    <Paper
      sx={{
        width: 650,
        overflow: "hidden",
        boxShadow: "none",
        margin: "0 auto",
      }}
    >
      <TableContainer
        sx={{ height: 600, width: 650 }}
        className="table-container"
      >
        <Table stickyHeader aria-label="sticky table" className="generic-table">
          <TableHead className="table-head">
            <TableRow>{columns.map(mapColumns)}</TableRow>
          </TableHead>
          <TableBody className="table-body">
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(mapRows)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default GenericTable;
