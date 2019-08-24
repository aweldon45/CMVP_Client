import React, { Component } from 'react';
import { SearchCard } from '../components/SearchCard';
import { Form } from 'react-bootstrap'

class Search extends Component {
  constructor () {
    super();
    this.state = {
      filter1: ''
    }
  }

  updatefilter(event) {
    this.setState({filter1: event.target.value})
  }

  render() {
      const filteredRoles = this.props.projects.filter((project) => {
        return project.director.toLowerCase().indexOf(this.state.filter1.toLowerCase()) !== -1;
      })

    const results = filteredRoles.map((project) => (
    <SearchCard title={project.title} role={project.director} key={project.id}>
      </SearchCard>))

      return (
        <div>
        <Form>
          <Form.Group controlId='FilterForm'>
            <Form.Label></Form.Label>
            <Form.Control inputtype='text' value={this.state.filter1} onChange={this.updatefilter.bind(this)}/>
            <Form.Text></Form.Text>
          </Form.Group>
        </Form>
        {[ results ]}
        </div>
      )
  }
}

export default Search
