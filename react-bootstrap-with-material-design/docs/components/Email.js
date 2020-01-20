import React, {Component} from 'react'
import Input from './Input'

export class Email extends Component {
  render(){
    const {label, children, name, onChangeHandle, iconName, type} = this.props;
    console.log(this.props);
    return(
      <Input
        iconName={iconName}
        name={name}
        onChangeHandle={onChangeHandle}
        type={type}
        placeholder={children}
        label={label}
      />
    )
  }
}

Email.defaultProps = {
  label: '',
  children: '',
  name: 'email',
  type:'email',
}

export default Email;