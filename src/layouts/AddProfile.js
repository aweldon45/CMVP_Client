import React, { Component } from 'react';
import { EmailForm, PasswordForm, CnfPasswordForm, ProfileImageForm } from '../components/Forms'
import { ButtonOne } from '../components/Button'

class AddProfile extends Component {
  render() {
    return (
      <div>
      <h1>Create your Profile</h1>
      <EmailForm></EmailForm>
      <PasswordForm></PasswordForm>
      <CnfPasswordForm></CnfPasswordForm>
      <ProfileImageForm></ProfileImageForm>
      <br></br>
      <ButtonOne>Submit</ButtonOne>
      </div>
    )
  }
}

export default AddProfile
