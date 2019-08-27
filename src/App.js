import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './layouts/Home';
import AddProject from './layouts/AddProject';
import Search from './layouts/Search';
import ProjectDetails from './layouts/ProjectDetails';
import AddProfile from './layouts/AddProfile'
import { Layout }  from './components/Layout';
import { Navigationbar } from './components/Navigationbar';
import Playback from './layouts/Playback'


class App extends Component {

state = {
  projects: [
    {
      id: 1,
      title: 'Mr. Bojangles',
      director: 'tony weldon',
      tags: 'inspiring',
      writer: 'holly weldon'
    },
    {
      id: 2,
      title: 'how the west was won',
      director: 'holly weldon',
      tags: 'scarry hours',
      writer: 'jeff weldon'
    },
    {
      id: 3,
      title: 'dont talk about me',
      director: 'aubrey chamberlain',
      tags: 'inspiring',
      writer: 'jeanette weldon'
    }
  ]
}


  render() {
    return (
      <React.Fragment>
      <Navigationbar/>
        <Router>
          <Switch>
                <Route exact path="/" component = {Home} />
                <Route path="/Playback" component = {Playback} />
              <Layout>
                <Route path="/AddProject" component = {AddProject} />
                <Route path="/Search" render = {(props) => <Search {...props} projects={this.state.projects} />} />
                <Route path="/ProjectDetails" component = {ProjectDetails} />
                <Route path="/AddProfile" component = {AddProfile} />
              </Layout>
          </Switch>
        </Router>
      </React.Fragment>
    )};
}

export default App;
