import React, { Component } from 'react';
import { GenreForm, OtherRoleForm, TagForm, PrjImageForm, DetailsForm } from './components/Forms'
import { ButtonOne } from './components/Button'

class ProjectDetails extends Component {
  render() {
    return (
      <div>
      <h1>Project Details</h1>
      <GenreForm></GenreForm>
      <OtherRoleForm></OtherRoleForm>
      <TagForm></TagForm>
      <PrjImageForm></PrjImageForm>
      <DetailsForm></DetailsForm>
      <br></br>
      <ButtonOne>Submit</ButtonOne>
      </div>
    )
  }
}

export default ProjectDetails
