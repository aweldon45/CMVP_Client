import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

.btn {
  background-color: #176FFF;
  margin: 0px;
  border: 2px solid white;
  box-shadow: 5px 5px 8px #FF72BD

}

`


export const ButtonOne = (props) => (
  <Styles>
    <Button size='lg'>{props.children}</Button>
  </Styles>

)
