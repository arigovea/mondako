import React, {Component} from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comic from './components/ComicPage';
import Explore from './components/Explore';
import Home  from './components/Home';
import Menu from './components/Menu';
import NearYou from './components/NearYou';
import Forum from './components/Forum';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Favorites from './components/Favorites';
import Saved from './components/Saved';
import Settings from './components/Settings';
import Donations from './components/Donations';
import Argentina from './components/Argentina';
import Users from './services/Users.json';
import UserLogIn from './services/Profile.json';

class App extends Component{

  render(){
    return <Router>
      <Menu/>
      <Container id = "general-container">
      <Row>
        <Col md='12'>
        <Switch>
          <Route path='/explore'>
            <Explore />
          </Route>
          <Route path='/argentina'>
            <Argentina />
          </Route>
          <Route path='/messages'>
            <Messages />
          </Route>
          {
            Users.map(user=>(
              <Route path={user.mondako_url}>
                <Profile User = {user}/>
              </Route> 
            ))
          }
          <Route path='/settings'>
            <Settings />
          </Route>
          <Route path='/donations'>
            <Donations />
          </Route>
          <Route path='/favorites'>
            <Favorites User={UserLogIn[0]} />
          </Route>
          <Route path='/saved'>
            <Saved User={UserLogIn[0]} />
          </Route>
          <Route path='/forum'>
            <Forum />
          </Route>
          <Route path='/nearyou'>
            <NearYou />
          </Route>
          <Route
              path='/comic/:id'
              render={(props) => <Comic {...props} UserName={UserLogIn[0].name} UserCountry={UserLogIn[0].country_img}/>} />
          <Route path = "/">
            <Home />
            </Route>
          </Switch>
        </Col>
      </Row>
      </Container>
    </Router>
  }
}

export default App;
