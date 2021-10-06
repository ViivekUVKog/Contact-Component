import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";

interface contact {
  id: number;
  name: string;
  phone: number;
  email: string;
  policy: string;
  history: string;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor : "#c4c4c4"
  },
  searchBar: {
    marginLeft: "auto",
    marginRight: "0px",
    backgroundColor: "#E6E6E6",
    width: "500px",
    margin: "10px 0px 10px 10px"
  }
});

const originalRows: contact[] = [
  { id: 1, name: "Viivek", phone: 9550014667, email: "v@g.com", policy: "A24", history: "1/12/2021" },
  { id: 2, name: "Viswa", phone: 6152349998, email: "a@g.com", policy: "A34", history: "2/10/2021" },
  { id: 3, name: "Meghana", phone: 6243678912, email: "b@g.com", policy: "C23", history: "7/10/2021" },
  { id: 4, name: "Vikas", phone: 8657123450, email: "c@g.com", policy: "C26", history: "2/08/2021" },
  { id: 5, name: "Sai", phone: 2659123450, email: "d@g.com", policy: "D46", history: "28/06/2021" },
  { id: 6, name: "Srikanth", phone: 7007482312, email: "e@g.com", policy: "A81", history: "13/11/2021" }
];

export default function BasicTable() {
  const [rows, setRows] = useState<contact[]>(originalRows);
  const [searched, setSearched] = useState<string>("");
  const classes = useStyles();

  const requestSearch = (searchedVal: string) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
      <Paper>
        <SearchBar
          className={classes.searchBar}
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Policy</TableCell>
                <TableCell align="center">History</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row,index) => (
                // cellStyle = row.id%2==1 ? classes.oddCell : classes.evenCell
                <TableRow key={row.name} style ={ index % 2? { background : "#E6E6E6" }:{ background : "white" }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.policy}</TableCell>
                  <TableCell align="center">{row.history}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <br />
    </>
  );
}
