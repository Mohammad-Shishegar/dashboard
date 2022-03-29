import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { columns, dataRows } from "../../tablesource"
import {Link} from "react-router-dom"
import "./datatable.scss"

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     // valueGetter: (params) =>
//     //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     renderCell : (params) => {
//       return(
//         <>
//           <span>{params.row.lastName}</span>
//           <p>{params.row.age}</p>
//         </>
//       )
//     }
//   },
// ];


const DataTable = () => {

  const [data , setData] = useState(dataRows)

  const handleDelete = (id)=> {
    setData(data.filter(item=>item.id !== id))
  }

  const actionColumn = [
    {
      fild: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/users/test"} style={{textDecoration:"none"}}>
              <div className="viewButton">View</div>

            </Link>
            <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
          </div>
        )
      }
    }
  ]

  return (
    <div className="datatable">
      <div className="dataTableTitle">
        Add New User
        <Link to={"/users/new"} className="link">
          Add new
        </Link>
      </div>
      <DataGrid
        rows={data}
        className={"datagrid"}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable