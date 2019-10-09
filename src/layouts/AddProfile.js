import React, { Component } from 'react';
import { EmailForm, PasswordForm, CnfPasswordForm, ProfileImageForm, UsernameForm } from '../components/Forms';
import { ButtonOne } from '../components/Button';
import { Form } from 'react-bootstrap'

class AddProfile extends Component {
  constructor() {
    super();
    this.state = {
      userName1: '',
      email1: '',
      password1: '',
      cnfPassword1: '',
      profileImage1: ''
    }
  }

  updateProfile(event) {
    this.setState({
      userName1: event.target.value
    });
  }

  updateEmail(event) {
    this.setState({
      email1: event.target.value
    });
  }

  callProfile(item) {
    console.log(item)
  }



  render() {
    return (
      <div>
      <h1>Create your Profile</h1>
      <Form>
        <Form.Group controlId='FilterForm'>
          <Form.Label>Test Username</Form.Label>
          <Form.Control inputtype='text' value={this.state.userName1} onChange={this.updateProfile.bind(this)}/>
          <Form.Text></Form.Text>
        </Form.Group>
      </Form>
      <UsernameForm></UsernameForm>
      <EmailForm value={this.state.email1} onChange={this.updateEmail.bind(this)}></EmailForm>
      <PasswordForm></PasswordForm>
      <CnfPasswordForm></CnfPasswordForm>
      <ProfileImageForm></ProfileImageForm>
      <br></br>
      <ButtonOne function={()=>{this.callProfile(this.state)}}>Submit</ButtonOne>
      </div>
    )
  }
}

export default AddProfile
