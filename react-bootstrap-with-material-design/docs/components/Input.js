import React from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBIcon, MDBInput, MDBBtn, } from "mdbreact";

// Custom component to pass to <Field />
const Input = ({label, type, placeholder, onChangeHandle, iconName,rows}) =>{
  return(
    <MDBInput
      label={label}
      icon={iconName}
      group
      onChange={onChangeHandle}
      type={type}
      validate
      row={rows}
      error="wrong"
      success="right"
    />
  )
}

export default Input