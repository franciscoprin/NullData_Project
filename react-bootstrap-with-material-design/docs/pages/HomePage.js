import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBIcon} from "mdbreact";
import styled, { keyframes } from 'styled-components';
import "./HomePage.css";
import BoldCharacter from '../components/BoldCharacter';
import Col from '../components/Col';
import BrainCharacter from '../components/BrainCharacter';
import PenCharacter from '../components/PenCharacter';
import InternetCharacter from '../components/InternetCharacter';
import CleverBanner from '../components/CleverBanner';
import Wave from '../components/Wave';


import Email from '../components/Email';
import Comments from '../components/Comments';
import Form from '../components/Form';
import Button from '../components/Button';
import Text from '../components/Text';
import {WithData} from '../lib';

// import MaterialTable from "material-table";

class HomePage extends React.Component {
  state = {
    wave1:false,
    wave2:false,
    wave3:false,
    wave4:false,
  }

  boltBackgroundRef = React.createRef();

  addEvent = (messague) => console.log(messague);

  toggleWave = (wave) => {
    console.log("I was toggle");
    this.setState({
      ...this.state,
      [wave]:!this.state[wave]
    });
  }

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow
            style={{padding:"5rem 0 2rem 0"}}
          >
            <MDBCol
              sm="12"
              md="6"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1><b>Drop us a line</b></h1>
              <div className="grey-text">
                <Form>
                  <Text onChangeHandle={this.change} id="name" iconName="user">Name</Text>
                  <Email id="sender" iconName="envelope">your@email.com</Email>
                  <Button submit>
                    Log In <MDBIcon far icon="paper-plane" className="ml-1" />
                  </Button>
                </Form>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default WithData(HomePage);
