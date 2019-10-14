import React, { Component } from 'react';
import { NameForm, LinkForm, RoleForm, GenreForm, DetailsForm, PrjImageForm, TagForm } from '../components/Forms';
import { ButtonOne } from '../components/Button';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AddProject extends Component {
  constructor() {
      super();
      this.state = {
        title1: '',
        vlink1: '',
        genre1: '',
        prjimage1: '',
        details1: '',
        tags1: '',
        role1: '',
        redirect: false
      }
  }

  updateTitle(event) {
    this.setState({
      title1: event.target.value
    });
  }

  updateVlink(event) {
    this.setState({
      vlink1: event.target.value
    })
  }

  updateGenre(event) {
    this.setState({
      genre1: event.target.value
    })
  }

  updatePrjImage(event) {
    this.setState({
      prjimage1: event.target.value
    })
  }

  updateDetails(event) {
    this.setState({
      details1: event.target.value
    })
  }

  updateTags(event) {
    this.setState({
      tags1: event.target.value
    })
  }

  updateRole(event) {
    this.setState({
      role1: event.target.value
    })
  }

//Functions
//add a project
  handleOnClick(state) {
    axios.put('http://localhost:8082/addproject', {
      title: state.title1,
      vimeoLink: state.vlink1,
      genre: state.genre1,
      image: state.prjimage1,
      info: state.details1,
      tags: state.tags1
    }).then((response)=> {
      if (response.data.includes('Collabeteria!')) {
          this.setState({redirect: true})
        }
          console.log(response);
    }).catch((error)=> {
          console.log(error)
    });
  }

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect push to='/AddProfile'/>
    }
  }

  render() {
    return (
      <div>
      <h1>Add a Project</h1>
      <NameForm value={this.state.title1} onChange={this.updateTitle.bind(this)}></NameForm>
      <LinkForm value={this.state.vlink1} onChange={this.updateVlink.bind(this)}></LinkForm>
      <GenreForm value={this.state.genre1} onChange={this.updateGenre.bind(this)}></GenreForm>
      <PrjImageForm value={this.state.prjimage1} onChange={this.updatePrjImage.bind(this)}></PrjImageForm>
      <DetailsForm value={this.state.details1} onChange={this.updateDetails.bind(this)}></DetailsForm>
      <TagForm value={this.state.tag1} onChange={this.updateTags.bind(this)}></TagForm>
      <RoleForm value={this.state.role1} onChange={this.updateRole.bind(this)}></RoleForm>
      <br></br>
      {this.renderRedirect()}
      <ButtonOne function={()=>{this.handleOnClick(this.state)}}>Submit</ButtonOne>
      </div>
    )
  }
}


export default AddProject
