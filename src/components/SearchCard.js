import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
// eslint-disable-next-line
import { BrowserRouter as Route, Link } from 'react-router-dom';

const Styles = styled.div`

#cardShell {
  color: black;
  width: 18rem;
  margin-top: 10px
}

`

//check
export const SearchCard = (props) => (
  <Styles>
    <Card id='cardShell'>
      <Card.Body>
        <Card.Title>
            <Link to='/Playback'>
          {props.title}
            </Link>
        </Card.Title>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text>{props.role}</Card.Text>
      </Card.Body>
    </Card>
  </Styles>
)
