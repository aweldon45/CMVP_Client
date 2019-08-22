import React, { Component } from 'react';
import { SearchCard } from '../components/SearchCard'

class Search extends Component {
  render() {
    return ( this.props.projects.map((project) => (
      <SearchCard title={project.title} role={project.director}>
        </SearchCard>
    ))
    )
  }
}

export default Search
