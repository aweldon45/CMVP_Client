import React, { Component } from 'react';
import { Player } from 'video-react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div`
#plbContainer {
  height: 100vh;
  background-color: #0C1A30;
  padding-top: 30px;
  border-top: 2px solid #A8A4A3;
}

#plbRow {
  color: white;
}

#plbCol {
  border-right: 2px solid #A8A4A3;
}

#infoCol {
  text-align: center;
}

`

class Playback extends Component {
  render() {
    return (
      <Styles>
        <Container fluid={true} id='plbContainer'>
          <Row id='plbRow'>
            <Col sm={8} id ='plbCol'>
            <Player
            playsInline
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
            </Col>
              <Col id ='infoCol'>
                <h4>Role</h4>
                <h4>Name</h4>
                <h4>Contact Info</h4>
              </Col>
          </Row>
        </Container>
      </Styles>
    )
  }
}

export default Playback
