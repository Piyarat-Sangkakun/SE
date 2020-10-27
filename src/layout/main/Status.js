import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

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
      'status': <MDBBtn color="danger" rounded size="sm">Pass</MDBBtn>
    },
    {
      'id': 222222,
      'name': 'Chatbot',
      'status': <MDBBtn color="success" rounded size="sm">Pass</MDBBtn>
    },
    {
      'id': 333333,
      'name': 'AI',
      'status': <MDBBtn color="success" rounded size="sm">Wait</MDBBtn>
    }
  ];

  return(
    <MDBTable btn>
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows_rounded_btn} />
    </MDBTable>
  );
};

export default Status;