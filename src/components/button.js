import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

#buttonOne {
  background-color: #176FFF;
  margin: 0px;
  border: 2px solid white;
  box-shadow: 5px 5px 8px #FF72BD

}

#buttonTwo {
  background-color: #176FFF;
  margin-top: 10px;
}

`


export const ButtonOne = (props) => (
  <Styles>
    <Button id='buttonOne' size='lg' onClick={props.function}>{props.children}</Button>
  </Styles>

)

export const ButtonTwo = (props) => (
  <Styles>
    <Button id='buttonTwo' size='md'>{props.children}</Button>
  </Styles>

)
