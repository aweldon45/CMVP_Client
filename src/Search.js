import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div`

#searchImageCard {
  border: 1px solid black;
  width: 300px
}`


const state = [
  {
  title: 'my first project',
  link: 'my project link',
  logline: 'my first project summary'
  },
  {
  title: 'my second project',
  link: 'my second project link',
  logline: 'my second project summary'
  }
]

const cardRender = () => {
  state.forEach((h) => {
    return (
    <Card id='searchImageCard'>
    <p>{h.title}</p>
    <p>{h.link}</p>
    <p>{h.logline}</p>
    </Card>
    )
  })
}

class Search extends Component {
  render() {
    return (
      <Styles>
        <div>
          <div>
            <h1>Search Test Render</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div>
            {cardRender}
          </div>
        </div>
      </Styles>
    )
  }
}

export default Search
