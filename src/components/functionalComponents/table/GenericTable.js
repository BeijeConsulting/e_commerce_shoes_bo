import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { productsColumns, productsListIcons } from "../../../utils/tableUtils";
import "./genericTable.css";
import ActionsButton from "../../functionalComponents/actionsButton/ActionsButton";
import { useTranslation } from "react-i18next";

function GenericTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { t, i18n } = useTranslation();

  console.log("PROPS:", props?.fields);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function mapColumns() {
    return props?.columns?.map((column) => {
      return (
        <TableCell
          key={column.id}
          align={column.align}
          style={{ minWidth: column.minWidth }}
        >
          {t(column.label)}
        </TableCell>
      );
    });
  }

  function mapRows() {
    return props?.fields?.map((product, key) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={key}>
          {props.columns.map((column) => {
            const value = product[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {/* {column.format && typeof value === "number"
                  ? column.format(value)
                  : value} */}
                {column.id === "actions" && (
                  <ActionsButton
                    icons={productsListIcons}
                    productId={product.id}
                  />
                )}

                {column.id === "image" ? (
                  <img
                    src={value}
                    alt="product"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                    }}
                  />
                ) : (
                  value
                )}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  }

  return (
    <Paper
      sx={{
        overflow: "hidden",
        boxShadow: "none",
        margin: "0 auto",
        // width: "95%",
        backgroundColor: "#ffffff",
      }}
    >
      <TableContainer sx={{ height: 500 }} className="table-container">
        <Table stickyHeader aria-label="sticky table" className="generic-table">
          <TableHead className="table-head">
            <TableRow>{mapColumns()}</TableRow>
          </TableHead>
          <TableBody className="table-body">{mapRows()}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={props?.products?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default GenericTable;
