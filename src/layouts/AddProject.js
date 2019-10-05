import React, { Component } from 'react';
import { NameForm, LinkForm, RoleForm, LocationForm } from '../components/Forms'
import { ButtonOne } from '../components/Button'

class AddProject extends Component {
  render() {
    return (
      <div>
      <h1>Add a Project</h1>
      <NameForm></NameForm>
      <LinkForm></LinkForm>
      <RoleForm></RoleForm>
      <LocationForm></LocationForm>
      <br></br>
      <ButtonOne>Submit</ButtonOne>
      </div>
    )
  }
}

export default AddProject
