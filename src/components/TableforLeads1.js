import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, leads) {
  return { name, leads };
}

const rows = [createData("peter moore", 1), createData("Mary king", 1)];

const TableforLeads1 = () => {
  return (
    <div className="mt-2">
      <p className="text-green-600">
        Current month top 5 lead owners by converted leads
      </p>
      <TableContainer className="" component={Paper}>
        <Table sx={{ width: "full" }}>
          <TableHead>
            <TableRow>
              <TableCell className="">Full name</TableCell>
              <TableCell align="right"># of leads</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.leads}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TableforLeads1;
