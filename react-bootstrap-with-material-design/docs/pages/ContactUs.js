import React, { Component } from 'react';
import Email from '../components/Email';
import Comments from '../components/Comments';
import Form from '../components/Form';
import Button from '../components/Button';
import Text from '../components/Text';
import Map from '../components/Map';
import {WithData} from '../lib';
import styled from 'styled-components';
import { MDBContainer, MDBCol, MDBRow, MDBIcon} from "mdbreact";
import DataTable from 'react-data-table-component';
import registerUser from '../lib/Api.js';

const data = [{
  name: "Franciso Prin",
  email: 'franciscoprin@gmail.com',
  birthday: '30/10/1995',
  address: 'Houston Texas',
  position:'developer',
  skills:["skill 1", "skill 2", "skill 3", "skill 4asdfasdfasdfasdfasdfasdfsad"]
}];

const columns = [
  {
    name: '', // Info table
    sortable: false,
    cell: row => <div>{row.image}</div>,
  },
  {
    name: 'name',
    sortable: true,
    selector: 'name',
  },
  {
    name: 'email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'birthday',
    selector: 'birthday',
    sortable: true,
  },
  {
    name: 'address',
    selector: 'address',
    sortable: true,
  },
  {
    name: 'skills',
    cell: row => <div>{row.skills.join(",")}</div>,
  },
];


export class ContactUs extends Component {

  state={
    data:data,
  }

  handleChange = (event) => {
    console.log(event);
  }
  handleSort = (column, sortDirection, event) => {
    console.log(column, sortDirection, event);
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow
          style={{padding:"5rem 0 2rem 0"}}
        >
          <MDBCol
            sm="12"
            md="6"
            style={{
              display:"flex",
              justifyContent:"center",
              flexDirection:"column",
            }}
          >
            <Form>
              <Text id="name" iconName="user">Name</Text>
              <Email id="sender" iconName="envelope">your@email.com</Email>
              <Text id="name" iconName="user">Birthday</Text>
              <Text id="adress" iconName="user">Adress</Text>
              <Text id="position" iconName="user">Position</Text>
              <Button submit> Register </Button>
            </Form>
          </MDBCol>
        </MDBRow>
        <DataTable
          title="Employees"
          columns={columns}
          data={this.state.data}
          pagination={true}
          // selectableRows
          // selectableRowsComponent={Checkbox}
          // selectableRowsComponentProps={{ inkDisabled: true }}
          onRowDoubleClicked={this.handleChange}
          onSort={this.handleSort}
          // sortIcon={<FontIcon>arrow_downward</FontIcon>}
          // onSelectedRowsChange={handleChange}
        />
      </MDBContainer>

    );
  }
}

export default WithData(ContactUs);
