import React, { useState } from 'react'
import '../styles/datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {rows,column} from '../arrayData/userRows'
import { Link } from 'react-router-dom';
const Datatable = () => {
  const [data,setData] = useState(rows)
  const handleDelete =(id)=>{
    console.log(id)
    setData(data.filter(item=>item.id!==id))
  }
    const actionColumn =[
        {field:'action',headerName:'Action',width:200,
        renderCell:(params)=>{
            return(
                <div className="cellAction">
                  <Link to='/users/test'>
                  <div className="viewBtn">View</div>
                  </Link>
                    <div className="deleteBtn" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }}
    ]
      return (
        <div className='datatable'>
          <div className="dTitle">
            Add New User
            <Link to='/users/new' className='link'>
              Add New
            </Link>
          </div>
          <DataGrid className='datagrid'
            rows={rows}
            columns={column.concat(actionColumn)}
            pageSize={8}
            rowsPerPageOptions={[8]}
            checkboxSelection
          />
        </div>
      );
}

export default Datatable