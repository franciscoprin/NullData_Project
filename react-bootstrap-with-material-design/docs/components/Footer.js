import React, { Component } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBFooter} from "mdbreact";
import Phone from './Phone';
//class="row d-flex justify-content-around"
import InstagramLogo from '../components/InstagramLogo';
import FacebookLogo from '../components/FacebookLogo'
import A from '../components/A';

export class Footer extends Component {
  //https://codepen.io/mambows/pen/pNQPzW
    render() {
        return (
            <MDBFooter style={{backgroundColor:"black"}} >
                <MDBContainer
                  style={{backgroundColor:"black"}}
                >
                  <MDBRow 
                    className="justified-self-center text-center text-md-left row d-flex justify-content-around"
                    style={{
                      marginTop:"0.5rem",
                      marginBottom:"0.5rem",
                    }}
                  >
                    <MDBCol
                      sm="12" 
                      md="4"
                      className="row d-flex"
                      style={{
                        paddingTop:"1rem",
                        paddingBottom:"1rem",
                        flex: 1,
                        justifyContent:"center",
                      }}
                    >         
                      <div
                        style={{
                          paddingTop:"1 rem"
                        }}
                      >
                        <h6 style={{color:"#00AFEF",fontWeight: "900"}}>
                            CONTACT US
                        </h6>
                        
                        <h7 style={{fontSize:"0.8rem"}}>18319 forest dew dr katy</h7><br/>
                        <h7 style={{fontSize:"0.8rem"}}>Texas 77449</h7><br/>
                        <h7 style={{fontSize:"0.8rem"}}>
                          <b>Spanish:</b> <Phone highlight="#00AFEF">832-438-0744</Phone>
                        </h7><br/>
                        <h7 style={{fontSize:"0.8rem"}}>
                          <b>English:</b> <Phone highlight="#00AFEF">832-340-0475</Phone>
                        </h7>
                      </div>
                    </MDBCol>
                    <MDBCol
                      sm="12" 
                      md="4"
                      className="row d-flex"
                      style={{
                        paddingTop:"1rem",
                        paddingBottom:"1rem",
                        flex: 1,
                        justifyContent:"center",
                      }}
                    > 
                      <div>         
                        <h6 style={{color:"#00AFEF",fontWeight: "900"}}>MENU</h6>
                        <p style={{fontSize:"0.8rem"}}>
                          <A highlight="#00AFEF" href="./">HOME</A></p>
                        <p style={{fontSize:"0.8rem"}}>
                          <A highlight="#00AFEF" href="./gallery">GALLERY</A></p>
                        <p style={{fontSize:"0.8rem"}}>
                          <A highlight="#00AFEF" href="./contact-us">CONTACT US</A></p>
                      </div>
                    </MDBCol>
                    <MDBCol
                      sm="12" 
                      md="4"
                      className="row d-flex"
                      style={{
                        paddingTop:"1rem",
                        paddingBottom:"1rem",
                        paddingLeft:"1.5rem",
                        flex: 1,
                        justifyContent:"center",
                      }}
                    >      
                      <div>     
                        <h6 style={{color:"#00AFEF",fontWeight: "900"}}>CONNECT WITH US</h6>         
                        <div
                          style={{
                            paddingLeft:"1.5rem",
                            flex: 1,
                            justifyContent:"space-between",
                          }}  
                        >
                          <a
                            style={{marginRight:"0.25rem"}}
                            href="https://www.facebook.com/clever.cmyk.7"
                          >
                            <FacebookLogo/>
                          </a>
                          <a 
                            style={{marginRight:"0.25rem"}}
                            href="https://www.instagram.com/creativeassociation/?hl=en"
                          >
                            <InstagramLogo/>
                          </a>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>  
                <div className="footer-copyright text-center py-3">
                  <MDBContainer 
                    fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="#"> CMYKCLEVER.com </a>
                  </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;