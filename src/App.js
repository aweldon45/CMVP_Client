import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './layouts/Home';
import AddProject from './layouts/AddProject';
import Search from './layouts/Search';
import ProjectDetails from './layouts/ProjectDetails';
import AddProfile from './layouts/AddProfile'
import { Layout }  from './components/Layout';
import { Navigationbar } from './components/Navigationbar'


class App extends Component {

  render() {
    return (
      <React.Fragment>
      <Navigationbar/>
        <Router>
          <Switch>
              <Route exact path="/" component = {Home} />
            <Layout>
              <Route path="/AddProject" component = {AddProject} />
              <Route path="/Search" component = {Search} />
              <Route path="/ProjectDetails" component = {ProjectDetails} />
              <Route path="/AddProfile" component = {AddProfile} />
            </Layout>
          </Switch>
        </Router>
      </React.Fragment>
    )};
}

export default App;
