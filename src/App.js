import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import {
  BrowserView, 
  MobileView, 
  isBrowser, 
  isMobile
} from 'react-device-detect';


//Layot
import Nav from './components/Nav';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = () => (
  <div>FOOO</div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <MobileView device={isMobile}>
              <h1> This is rendered only on mobile </h1>
          </MobileView>

          <BrowserView device={isBrowser}>
              <h1> This is rendered only in browser </h1>
              <div id="ui-guide" className="row"> 
                <Nav /> 
                <main className="col s12 m10">          
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/topics" component={Topics}/>
                </main>
              </div>
          </BrowserView>
        </div>
      </Router>
    );
  }
}

export default App;
