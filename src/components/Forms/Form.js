import React from 'react'
import {
  FormGroup,
  // Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from 'reactstrap';

export const Form = ({ children, ...props }) => {
  return (
    <form {...props} noValidate>
      {children}
    </form>
  )
}

export default Form
