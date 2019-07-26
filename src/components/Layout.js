import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

#defaultLayout {
  height: 100vh;
}`

export const Layout = (props) => {
    return (
      <Styles>
        <Container fluid={true} id='defaultLayout'>
      {props.children}
        </Container>
      </Styles>
    )
  }
