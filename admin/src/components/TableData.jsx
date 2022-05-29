import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { rows } from '../arrayData/productRow';
import '../styles/table.scss'
const TableData = () => {
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell className='tableCell'>Tracking ID</TableCell>
           <TableCell className='tableCell'>Product</TableCell>
           <TableCell className='tableCell'>Customer</TableCell>
           <TableCell className='tableCell'>Date</TableCell>
           <TableCell className='tableCell'>Amount</TableCell>
           <TableCell className='tableCell'>Payment Menthod</TableCell>
           <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrap">
                    <img src={row.image} alt={row.title} className='img'/>
                    {row.title}
                    </div>  
              </TableCell>
              <TableCell className='tableCell'>{row.username}</TableCell>
              <TableCell className='tableCell'>$ {row.price}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                  <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableData