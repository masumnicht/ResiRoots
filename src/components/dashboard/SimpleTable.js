import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(time_period, loan_type, int_rate, principal, pmi, total, apr, equity, avg_monthly_pmt) {
  id += 1;
  return { id, time_period, loan_type, int_rate, principal, pmi, total, apr, equity, avg_monthly_pmt };
}

const data = [
  createData('time_period', '0 1/1 ARM', '1 1/1 ARM', '2 1/1 ARM', '3 1/1 ARM', '4 1/1 ARM'),
  createData('loan_type', 0.03440004, 0.03440004, 0.05770404, 0.05810148, 0.05768124),
  createData('int_rate', 0, 6819.25, 18065.74, 29229.29, 40143.44),
  createData('principal', 0, 3877.55, 6574.46, 9411.91, 12439.36),
  createData('pmi', 0, 0, 0, 0, 0),
  createData('total', 0, 10696.8, 24640.2, 38641.2, 52582.8),
  createData('apr', 0, 0.033248628, 0.04474197144, 0.04887454065, 0.05087987352),
  createData('equity', 0.2, 0.2155102, 0.22629784, 0.23764764, 0.24975744),
  createData('avg_monthly_pmt', 0, 891.4 , 1161.95 , 1166.75, 1161.8 ),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Loan #</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">2</TableCell>
            <TableCell align="right">3</TableCell>
            <TableCell align="right">4</TableCell>
            <TableCell align="right">5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell align="right">{n.time_period}</TableCell>
                <TableCell align="right">{n.loan_type}</TableCell>
                <TableCell align="right">{n.int_rate}</TableCell>
                <TableCell align="right">{n.principal}</TableCell>
                <TableCell align="right">{n.pmi}</TableCell>
                <TableCell align="right">{n.total}</TableCell>
                <TableCell align="right">{n.apr}</TableCell>
                <TableCell align="right">{n.equity}</TableCell>
                <TableCell align="right">{n.avg_monthly_pmt}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);