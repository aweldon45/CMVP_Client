import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './layouts/Home';
import AddProject from './layouts/AddProject';
import Search from './layouts/Search';
import ProjectDetails from './layouts/ProjectDetails';
import AddProfile from './layouts/AddProfile'
import { Layout }  from './components/Layout';
import { Navigationbar } from './components/Navigationbar';
import Playback from './layouts/Playback';
import Profile from './layouts/Profile';
import axios from 'axios';

class App extends Component {

state = {
  projects: [{
    title: 'Book Chef',
    role: 'director',
    name: 'Jeff Weldon',
    email: 'jeff@gmail.com'
  }, {
    title: ' Gardener',
    role: 'director',
    name: 'Aubrey C',
    email: 'aubrey@gmail.com'
    }
  ]
}

  callState() {
    axios.get('http://localhost:8082/allUsers')
    .then((response)=>{
      let barray = [];
      for (let i=0; i<response.data.length;i++) {
        barray.push(response.data[i][0])
      }
      this.setState({projects: barray})
    }).catch((error)=> {
      console.log(error)
    })
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
                <Route path="/Search" render = {(props) => <Search {...props} projects={this.state.projects} callState={()=>this.callState()}/>} />
                <Route path="/ProjectDetails" component = {ProjectDetails} />
                <Route path="/AddProfile" component = {AddProfile} />
                <Route path="/Profile" component = {Profile} />
              </Layout>
          </Switch>
        </Router>
      </React.Fragment>
    )};
}

export default App;
