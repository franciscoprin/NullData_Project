import React, { Component } from "react";
import styled from 'styled-components';

const SVG = styled.svg`
    .fil0 {fill:#FEFEFE}
    .fil6 {fill:#FEFEFE}
    .fil4 {fill:#BDBFC1}
    .fil2 {fill:#A9ABAE}
    .fil1 {fill:#201E1E}
    .fil3 {fill:#201E1E}
    .fil5 {fill:black}
`;

class BannerLetters extends Component {
    render(){
        return(
            <DataTable
              title="Employees"
              columns={columns}
              data={data}
              pagination={true}
              // selectableRows
              // selectableRowsComponent={Checkbox}
              // selectableRowsComponentProps={{ inkDisabled: true }}
              onRowDoubleClicked={this.handleChange}
              onSort={this.handleSort}
              // sortIcon={<FontIcon>arrow_downward</FontIcon>}
              // onSelectedRowsChange={handleChange}
            />
        );
    }
}

export default BannerLetters;
