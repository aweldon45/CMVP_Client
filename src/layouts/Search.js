import React, { Component } from 'react';
import { SearchCard } from '../components/SearchCard';
import { Form } from 'react-bootstrap';


class Search extends Component {
  constructor () {
    super();
    this.state = {
      filter1: ''
    }
  }

  componentDidMount() {
        this.props.callState()
    }

  updatefilter(event) {
    this.setState({filter1: event.target.value})
  }


  render() {
    const filteredRoles = this.props.projects.filter((project) => {
      return project.role.toLowerCase().indexOf(this.state.filter1.toLowerCase()) !== -1
    })

    const results = filteredRoles.map((project, index) => (
      <SearchCard title={project.title} name={project.name} role={project.role} key={index}>
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
