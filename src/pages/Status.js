import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, name, status) {
  return { id, name, status };
}

const rows = [
  createData('000000', 'Registration', 'Wait'),
  createData('11111', 'Chatbot', 'Success')
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID Research</TableCell>
            <TableCell align="center">Name Rearch</TableCell>
            <TableCell align="center">Status Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* map = loop */}
          {rows.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}