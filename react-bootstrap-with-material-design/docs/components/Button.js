import React, { Component } from 'react';
import {MDBBtn} from "mdbreact";

export class Button extends Component {
  render(){
    const {children, type,onClick,} = this.props;
    return(

      <div className="text-center">
        {/* <button 
          type={type}
          onClick={onClick}
        >
          {children}
        </button> */}
        <MDBBtn 
          outline 
          color="secondary"
          type={type}
          onClick={onClick}
        >
         {children}
        </MDBBtn>
      </div>
                    //   <div className="text-center">
                    //   <MDBBtn outline color="secondary">
                    //     Send <MDBIcon far icon="paper-plane" className="ml-1" />
                    //   </MDBBtn>
                    // </div>
    )
  }
}

Button.defaultProps = {
  children: '',
  type: '',
}

export default Button;