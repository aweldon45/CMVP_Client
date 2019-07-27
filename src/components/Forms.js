import React from 'react';
import { Form } from 'react-bootstrap';
//import styled from 'styled-components';


//Project Details - Main
/*genre
project image
add roles
tags
other info*/

//Add a profile
/*
Email
Password
confirm password
profile image*/

//Add a project
//name
export const NameForm = () => (
  <Form>
    <Form.Group controlId='formBasicName'>
      <Form.Label>Name</Form.Label>
      <Form.Control type='name' placeholder='Your Name' />
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//link
export const LinkForm = () => (
  <Form>
    <Form.Group controlId='formBasicLink'>
      <Form.Label>Vimeo Link</Form.Label>
      <Form.Control type='link' placeholder='Vimeo link to your Project' />
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//username
export const UsernameForm = () => (
  <Form>
    <Form.Group controlId='formBasicUsername'>
      <Form.Label>Username</Form.Label>
      <Form.Control type='name' placeholder='Username' />
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//Role
export const RoleForm = () => (
  <Form>
    <Form.Group controlId='controlSelect1'>
      <Form.Label>What was your primary role on this project?</Form.Label>
      <Form.Control as='select'>
        <option>Role 1</option>
        <option>Role 2</option>
        <option>Role 3</option>
      </Form.Control>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//location
export const LocationForm = () => (
  <Form>
    <Form.Group controlId='controlSelect1'>
      <Form.Label>Location</Form.Label>
      <Form.Control as='select'>
        <option>Location 1</option>
        <option>Location 2</option>
        <option>Location 3</option>
      </Form.Control>
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

//other project details
export const DetailsForm = () => (
  <Form>
    <Form.Group controlId='controlTextArea1'>
      <Form.Label>Other Project Details</Form.Label>
      <Form.Control as='textarea' rows='3' />
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)



export const EmailForm = (props) => (
  <Form>
    <Form.Group controlId='formBasicEmail'>
      <Form.Label>{props.children}</Form.Label>
      <Form.Control type='email' placeholder='Email address' />
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)

export const PasswordForm = (props) => (
  <Form>
    <Form.Group controlId='formBasicPassword'>
      <Form.Label>{props.children}</Form.Label>
      <Form.Control type='password' placeholder='Password' />
      <Form.Text></Form.Text>
    </Form.Group>
  </Form>
)
