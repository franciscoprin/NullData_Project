import React, { Component } from 'react';
import styled from 'styled-components'; 

const A = styled.a`
  :hover {
    color:${(props)=>props.highlight};
  }
`;

export default A;