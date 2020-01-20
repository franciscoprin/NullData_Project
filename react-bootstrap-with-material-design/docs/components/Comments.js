import React, { Component } from 'react'
import Input from './Input'

export class Comments extends Component {
  render(){
    const {label, children, onChangeHandle, iconName} = this.props;
    return(
      <Input
        iconName={iconName}
        onChangeHandle={onChangeHandle}
        type='textarea'
        rows="2"
        label={label}
        placeholder={children}
      />
    );
  }
}

Comments.defaultProps = {
  label: '',
  children: '',
  name: 'comments',
}

export default Comments;