import React, { Component } from 'react';
import { Container, Media } from 'react-bootstrap';
import lpImage from './assets/backlit-clouds-friends.jpg'
import styled from 'styled-components';

const Styles = styled.div`

#landingPage {
  height: 100vh;
  background-color: #0C1A30;
  color: white;
}

#media {
  padding: 40px 100px 40px 100px;
}

#mediaImg {
  border: 5px solid white;
  border-radius: 12px;
  box-shadow: 20px 20px 20px #FF72BD
}

`

class Home extends Component {
  render() {
    return (
      <Styles>
        <Container fluid={true} id='landingPage'>
          <Media id='media'>
            <Media.Body>
              <h1>Collabeteria.</h1>
              <p>A video-first networking tool for filmmakers</p>
            </Media.Body>
            <img
            width={575}
            height={425}
            classname="ml-3"
            src={lpImage}
            id='mediaImg'
            alt="backlit-clouds-friends"
            />
          </Media>
        </Container>
      </Styles>
    )
  }
}

export default Home
