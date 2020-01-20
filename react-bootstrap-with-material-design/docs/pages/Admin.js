import React, { Component } from 'react';
import Email from '../components/Email';
import Comments from '../components/Comments';
import Form from '../components/Form';
import Button from '../components/Button';
import Text from '../components/Text';
import Map from '../components/Map';
import styled from 'styled-components';
import { MDBContainer, MDBCol, MDBRow, MDBIcon} from "mdbreact";

import BrainCharacter from '../components/BrainCharacter';

export class Admin extends Component {
  refBrainCharacter = React.createRef()

  render() {
    return (
      <Form>
        // <Text onChangeHandle={this.change} id="name" iconName="user">Name</Text>
        <Email onChangeHandle ={this.change}  id="sender" iconName="envelope">your@email.com</Email>
        <Button submit>
          Send <MDBIcon far icon="paper-plane" className="ml-1" />
        </Button>
      </Form>
    );
  }
}

export default Admin;
