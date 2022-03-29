import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import "./list.scss"

const List = () => {

    const rows = [
        {
            id:12,
            product:"Acer nitro 5",
            customer: "John Smith",
            date: "1 March",
            img:"https://images.pexels.com/photos/6893886/pexels-photo-6893886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            amount: 785,
            method:"Cash on Delevery",
            status:"Approved"
        },
        {
            id:13,
            product:"Acer nitro 5",
            customer: "John Smith",
            date: "1 March",
            img:"https://images.pexels.com/photos/6893886/pexels-photo-6893886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            amount: 785,
            method:"Cash on Delevery",
            status:"Approved"
        },
        {
            id:14,
            product:"Acer nitro 5",
            customer: "John Smith",
            date: "1 March",
            img:"https://images.pexels.com/photos/6893886/pexels-photo-6893886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            amount: 785,
            method:"Cash on Delevery",
            status:"Approved"
        },
        {
            id:15,
            product:"Acer nitro 5",
            customer: "John Smith",
            date: "1 March",
            img:"https://images.pexels.com/photos/6893886/pexels-photo-6893886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            amount: 785,
            method:"Cash on Delevery",
            status:"Approved"
        },
        {
            id:15,
            product:"Acer nitro 5",
            customer: "John Smith",
            date: "1 March",
            img:"https://images.pexels.com/photos/6893886/pexels-photo-6893886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            amount: 785,
            method:"Cash on Delevery",
            status:"Pending"
        },
        {
            id:16,
            product:"Acer nitro 5",
            customer: "John Smith",
            date: "1 March",
            img:"https://images.pexels.com/photos/6893886/pexels-photo-6893886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            amount: 785,
            method:"Cash on Delevery",
            status:"Approved"
        },
        {
            id:17,
            product:"Acer nitro 5",
            customer: "John Smith",
            date: "1 March",
            img:"https://images.pexels.com/photos/6893886/pexels-photo-6893886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            amount: 785,
            method:"Cash on Delevery",
            status:"Approved"
        },
        
    ]

    return(
        <TableContainer component={Paper} className="list">
      <Table sx={{ minWdth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customers</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className="tableCell">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <div className={`status ${row.status}`}>{row.status}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default List