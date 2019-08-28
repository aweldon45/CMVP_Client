import React from 'react';
import { Card } from 'react-bootstrap';
import { ButtonTwo } from './Button'
import styled from 'styled-components';

const Styles = styled.div`

#PcardShell {
  color: black;
  width: 30rem;
  margin-top: 10px;
  text-align: center;
  border: 0px;
}

#Pcardtitle {
  font-size: 20px;
  text-decoration: underline;
}

#Pname {
  color: #D75E40;
  font-weight: bold;
}

#ImgcardShell {
  margin-top: 10px;
  text-align: center;
  background-color: #F3F2F1
}

#RcardShell {
  margin-top: 10px;
  text-align: center;
  border: 0px;
}

`


export const ProfileCard = (props) => (
  <Styles>
    <Card id='PcardShell'>
      <Card.Body>
        <Card.Title id='Pcardtitle'>{props.title}</Card.Title>
        <Card.Text id='Pname'>{props.Pname}</Card.Text>
        <Card.Text>{props.Prole}</Card.Text>
      </Card.Body>
    </Card>
  </Styles>
)

export const RoleRequestCard = (props) => (
  <Styles>
    <Card id='RcardShell'>
      <Card.Body>
        <Card.Title id='Pcardtitle'>{props.title}</Card.Title>
        <Card.Text id='Pname'>{props.Pname}</Card.Text>
        <Card.Text>{props.Prole}</Card.Text>
      </Card.Body>
      <ButtonTwo>Approve</ButtonTwo>
    </Card>
  </Styles>
)

export const ProfileImageCard = (props) => (
  <Styles>
    <Card id='ImgcardShell'>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.email}</Card.Text>
      </Card.Body>
    </Card>
  </Styles>
)
