import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

#cardShell {
  color: black;
  width: 18rem;
  margin-top: 10px
}

`


export const SearchCard = (props) => (
  <Styles>
    <Card id='cardShell'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text>{props.role}</Card.Text>
      </Card.Body>
    </Card>
  </Styles>
)
