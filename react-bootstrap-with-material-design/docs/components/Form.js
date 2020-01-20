import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import {Input, Text,Comments,Email,Button} from '../components';
import PropType from 'prop-types';
import validator from 'validator';
import registerUser from '../lib/Api.js';
import { connect } from 'react-redux';

export class FormWrapper extends Component {
  state = {
    error: false,
    isFetched: false
  }

  submitForm = async values => {
    // Receive `getBookingInfo` from `<FormContainer />`
    // Receive `reset` from reduxForm HOC.
    const { registerUser, reset } = this.props;
    return registerUser(values,"POST").then(({ payload }) => {
      if (payload.message) {
        // Set state for successful server response.
        this.setState(state => ({
          ...state,
          isFetched: true,
        }))
      } else if (payload.error) {
        // Set state for failed server response.
        this.setState(state => ({
          ...state,
          error: true,
          isFetched: true,
        }))
      }
      // Clear the form after submit.
      reset()
    })
  }

  // Render the appropriate response to the user on server response.
  renderResponse = () => {
    const { error, isFetched } = this.state
    if (isFetched && error) {
      return <strong>{this.props.intl.formatMessage("there is a error")}</strong>
    } else if (!error && isFetched) {
      return (
        <strong>{this.props.intl.formatMessage("it was successful")}</strong>
      )
    }
  }

  getNewChild = (obj) => {

    // Get element and form props.
    const {handleSubmit} = this.props;
    const {children, type, id, onChangeHandle, iconName, rows} = obj.props;
    // Mutetate Form's element
    switch(obj.type.name){
      case 'Email': return (
        <Field
          iconName={iconName}
          name={id}
          onChangeHandle={onChangeHandle}
          placeholder={children}
          label={children}
          type={type}
          component={Email}
        />
      );
      case 'Comments': return (
        <Field
          iconName={iconName}
          name={id}
          type={type}
          onChangeHandle={onChangeHandle}
          rows={rows}
          label={children}
          placeholder={children}
          component={Comments}
        />
      );
      case 'Text': return (
        <Field
          iconName={iconName}
          name={id}
          type={type}
          label={children}
          onChangeHandle={onChangeHandle}
          placeholder={children}
          component={Text}
        />
      );
      case 'Button': return (
        <Button
          type={type}
          submit
          onClick={handleSubmit(this.submitForm)}
        >
          {children}
        </Button>
      );
      default: return obj;
    }
  }

  render() {
    const _children = React.Children.map(this.props.children, child => {
      // Clone child.
      const _child =  React.cloneElement(child,{});
      // Return modified child.
      return this.getNewChild(_child);
    })
    return (
      <form>
        {_children}
      </form>
    )
  }
}

// Wrap your form in the reduxForm HOC and pass options object as argument.
const FormWithoutStore =  reduxForm({
  form: 'booking',
  validator, // form level validation
})(FormWrapper)

const Form = connect(null, {
  registerUser
})(FormWithoutStore)

export default Form;
