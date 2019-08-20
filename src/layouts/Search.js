import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div`

#searchImageCard {
  border: 1px solid black;
  width: 300px;
}

`

class Search extends Component {
  render() {
    return (
      <Styles>
        <div>
          <div>
            <h1>Search Test Render</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </Styles>
    )
  }
}

export default Search
