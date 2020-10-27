import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import SideBar from '../sidebar/SideBarMenu'
import { Button } from '@material-ui/core';
const Payment = (props) => {
  const columns= [
    {
      label: 'ID Research',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'Name Research',
      field: 'name',
      sort: 'asc'
    },
    {
      label: 'Price',
      field: 'price',
      sort: 'asc'
    }
    
  ];

  const rows_rounded_btn = [
    {
      'id': 111111,
      'name': 'Registration',
      'price': '12000'
    }
    
  ];

  return(
    
    <div>
      <SideBar />
      
    <MDBTable btn>
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows_rounded_btn} />
    </MDBTable>
    <Button variant="contained" color="primary" disableElevation>
  Disable elevation
</Button>
    </div>
    
  );
  
};

export default Payment;