import React, { Component } from 'react';
import { Container, Media } from 'react-bootstrap';
import lpImage from './assets/backlit-clouds-friends.jpg'
import styled from 'styled-components';
import { ButtonOne } from './components/button'

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
  width: 60%;
  height: auto;
  border: 5px solid white;
  border-radius: 12px;
  box-shadow: 20px 20px 20px #FF72BD
}

#tagFalse {
  text-decoration: line-through;
}

#tagTrue {
  color: #FF72BD;
}

#wrapper {
  display: flex;
  padding-top: 8px;
}

#btnLeft {
  flex: 0 0 45%;
}

#btnRight {
  flex: 1;
}

`

class Home extends Component {
  render() {
    return (
      <Styles>
        <Container fluid={true} id='landingPage'>
          <Media id='media'>
            <Media.Body>
            <div>
              <h1>Collabeteria.</h1>
              <p id='tagFalse'>Bacterial infection</p>
              <p id='tagFalse'>Planet in a fictional universe</p>
              <p id='tagTrue'>A video-first networking tool for filmmakers</p>
            </div>
            <section id='wrapper'>
            <div id='btnLeft'>
              <ButtonOne>Add Project</ButtonOne>
            </div>
            <div id='btnRight'>
              <ButtonOne>Join Project</ButtonOne>
            </div>
            </section>
            </Media.Body>
            <img
            className="ml-3"
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
