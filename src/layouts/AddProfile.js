import React, { Component } from 'react';
import { EmailForm, PasswordForm, CnfPasswordForm, ProfileImageForm, UsernameForm, LocationForm } from '../components/Forms';
import { ButtonOne } from '../components/Button';
import axios from 'axios';


class AddProfile extends Component {
  constructor() {
    super();
    this.state = {
      userName1: '',
      email1: '',
      password1: '',
      cnfPassword1: '',
      profileImage1: '',
      location1: ''
    }
  }

  updateUserName(event) {
    this.setState({
      userName1: event.target.value
    });
  }

  updateEmail(event) {
    this.setState({
      email1: event.target.value
    });
  }

  updatePassword(event) {
    this.setState({
      password1: event.target.value
    });
  }

  updateCnfPassword(event) {
    this.setState({
      cnfPassword1: event.target.value
    });
  }

  updateProfileImg(event) {
    this.setState({
      profileImage1: event.target.value
    });
  }

  updateLocation(event) {
    this.setState({
      location1: event.target.value
    });
  }

//add a user
  callProfile(item) {
    axios.put('http://localhost:8082/newuser', {
      username: item.userName1,
      password: item.password1,
      email: item.email1,
      image: item.profileImage1,
      location: item.location1
    }).then((response)=> {
      console.log(response);
    }).catch((error)=> {
      console.log(error)
    })
  }



  render() {
    return (
      <div>
      <h1>Create your Profile</h1>
      <UsernameForm value={this.state.userName1} onChange={this.updateUserName.bind(this)}></UsernameForm>
      <EmailForm value={this.state.email1} onChange={this.updateEmail.bind(this)}></EmailForm>
      <PasswordForm value={this.state.password1} onChange={this.updatePassword.bind(this)}></PasswordForm>
      <CnfPasswordForm value={this.state.cnfPassword1} onChange={this.updateCnfPassword.bind(this)}></CnfPasswordForm>
      <ProfileImageForm value={this.state.profileImage1} onChange={this.updateProfileImg.bind(this)}></ProfileImageForm>
      <LocationForm value={this.state.location1} onChange={this.updateLocation.bind(this)}></LocationForm>
      <br></br>
      <ButtonOne function={()=>{this.callProfile(this.state)}}>Submit</ButtonOne>
      </div>
    )
  }
}

export default AddProfile
