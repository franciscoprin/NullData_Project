import React, {Component} from 'react'
import Input from './Input'

export class Text extends Component {
  render(){
    const {label, children, name, onChangeHandle, iconName, type} = this.props;
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

Text.defaultProps = {
  label: '',
  children: '',
  name: 'text',
  type: 'text',
}

export default Text;