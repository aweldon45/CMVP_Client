import React, { Component } from 'react';
import { ProfileCard, ProfileImageCard, RoleRequestCard } from '../components/ProfileCard';
import { Container, Row, Col } from 'react-bootstrap';


class Profile extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ProfileCard title='My Projects' Pname='Short Film 1' Prole='director'></ProfileCard>
            <ProfileCard title='My Roles on Other Projects' Pname='Short Film 2' Prole='grip'></ProfileCard>
          </Col>
          <Col>
            <ProfileImageCard imgSrc='tbd' name='Tony' email='tdot@idgaf.com'></ProfileImageCard>
            <RoleRequestCard title='Role Requests' Pname='Short Film 1' Prole='writer'></RoleRequestCard>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Profile
