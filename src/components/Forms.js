import React from 'react';
import { Form } from 'react-bootstrap';

//Add a project
//name
export const NameForm = (props) => (
  <Form>
    <Form.Group controlId='formBasicName'>
      <Form.Label>Title</Form.Label>
      <Form.Control type='name' placeholder='Project Title' value={props.value} onChange={props.onChange}/>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//link
export const LinkForm = (props) => (
  <Form>
    <Form.Group controlId='formBasicLink'>
      <Form.Label>Vimeo Link</Form.Label>
      <Form.Control type='link' placeholder='Vimeo link to your Project' value={props.value} onChange={props.onChange}/>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//username
export const UsernameForm = (props) => (
  <Form>
    <Form.Group controlId='formBasicUsername'>
      <Form.Label>Username</Form.Label>
      <Form.Control type='name' placeholder='Username' value={props.value} onChange={props.onChange}/>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//Role
export const RoleForm = (props) => (
  <Form>
    <Form.Group controlId='controlSelect1'>
      <Form.Label>What was your primary role on this project?</Form.Label>
      <Form.Control as='select'value={props.value} onChange={props.onChange}>
        <option>Role 1</option>
        <option>Role 2</option>
        <option>Role 3</option>
      </Form.Control>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//location
export const LocationForm = (props) => (
  <Form>
    <Form.Group controlId='controlSelect1'>
      <Form.Label>Location</Form.Label>
      <Form.Control as='select'  value={props.value} onChange={props.onChange}>
        <option>Location 1</option>
        <option>Location 2</option>
        <option>Location 3</option>
      </Form.Control>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)


//Project Details - Main
// genre
export const GenreForm = (props) => (
  <Form>
    <Form.Group controlId='controlSelect1'>
      <Form.Label>Genre</Form.Label>
      <Form.Control as='select' value={props.value} onChange={props.onChange}>
        <option>Genre 1</option>
        <option>Genre 2</option>
        <option>Genre 3</option>
      </Form.Control>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//roles
export const OtherRoleForm = () => (
  <Form>
    <Form.Group controlId='controlSelect1'>
      <Form.Label>Other Roles you have on this Project</Form.Label>
      <Form.Control as='select'>
        <option>Role 1</option>
        <option>Role 2</option>
        <option>Role 3</option>
      </Form.Control>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//Tag Form
export const TagForm = (props) => (
  <Form>
    <Form.Group controlId='controlSelect1'>
      <Form.Label>Tag this Project</Form.Label>
      <Form.Control as='select' value={props.value} onChange={props.onChange}>
        <option>Tag 1</option>
        <option>Tag 2</option>
        <option>Tag 3</option>
      </Form.Control>
      <Form.Text>Tags make it easier for potential collaborators to find you. If you want a tag you don't see suggest it!</Form.Text>
    </Form.Group>
  </Form>
)

//project Image
export const PrjImageForm = (props) => (
  <Form>
    <Form.Group controlId='formBasicLink'>
      <Form.Label>Project Image</Form.Label>
      <Form.Control type='link' placeholder='Include an image to represent your Project' value={props.value} onChange={props.onChange} />
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//other project details
export const DetailsForm = (props) => (
  <Form>
    <Form.Group controlId='controlTextArea1'>
      <Form.Label>Anything else you want to say about this project?</Form.Label>
      <Form.Control as='textarea' rows='3' value={props.value} onChange={props.onChange} />
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

// add a profile
// email
export const EmailForm = (props) => (
  <Form>
    <Form.Group controlId='formBasicEmail'>
      <Form.Label>Email</Form.Label>
      <Form.Control type='email' placeholder='Email address' value={props.value} onChange={props.onChange}/>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//password
export const PasswordForm = (props) => (
  <Form>
    <Form.Group controlId='formBasicPassword'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='password' placeholder='Password' value={props.value} onChange={props.onChange}/>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

// confirm password
export const CnfPasswordForm = (props) => (
  <Form>
    <Form.Group controlId='formBasicCnfPassword'>
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type='password' placeholder='Password' value={props.value} onChange={props.onChange}/>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//profile Image
export const ProfileImageForm = (props) => (
  <Form>
    <Form.Group controlId='formBasicLink'>
      <Form.Label>Profile Image</Form.Label>
      <Form.Control type='link' placeholder='Include a Profile Image' value={props.value} onChange={props.onChange}/>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)
