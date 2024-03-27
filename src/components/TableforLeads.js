import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(leadName, budget) {
  return { leadName, budget };
}

const rows = [
  createData("opportunity management system / bedford,  test", 26, 600.0),
  createData("opportunity management system / bedford,  test", 26, 600.0),
];

const TableforLeads = () => {
  return (
    <div className="mt-2">
      <p className="text-green-600">Current month top 5 leads</p>
      <TableContainer className="" component={Paper}>
        <Table sx={{ width: "full" }}>
          <TableHead>
            <TableRow>
              <TableCell className="">Lead</TableCell>
              <TableCell align="right">Budget</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.leadName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.leadName}
                </TableCell>
                <TableCell align="right">{row.budget}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TableforLeads;
