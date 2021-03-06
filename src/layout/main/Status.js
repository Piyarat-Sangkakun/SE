import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import SideBar from '../sidebar/SideBarMenu'

const Status = (props) => {
  const columns= [
    {
      label: 'ID Research',
      field: 'idr',
      sort: 'asc'
    },
    {
      label: 'Name Research',
      field: 'name',
      sort: 'asc'
    },
    
    {
      label: 'Status Payment',
      field: 'status',
      sort: 'asc'
    }

  ];

  const rows_rounded_btn = [
    {
      'id': 111111,
      'name': 'Registration',
      'status': <MDBBtn color="danger" rounded size="sm">Wait</MDBBtn>
    },
    {
      'id': 222222,
      'name': 'Chatbot',
      'status': <MDBBtn color="success" rounded size="sm">Pass</MDBBtn>
    },
    {
      'id': 333333,
      'name': 'AI',
      'status': <MDBBtn color="success" rounded size="sm">Pass</MDBBtn>
    }
  ];

  return(
    <div>
    <SideBar />
    <MDBTable btn>
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows_rounded_btn} />
    </MDBTable>
    </div>
  );
};

export default Status;