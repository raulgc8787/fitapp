import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


//Layot
import Nav from './components/Nav';
import Dashboard from './components/dashboard';

const Home = () => (
  <div class="row">
    <div class="card">
      <p>Home</p>
    </div>
    <div class="card">
      <p>asda</p>
    </div>
    <div class="card">
      <p>asdas</p>
    </div>
    <div class="card">
      <p>Home</p>
    </div>
    <div class="card">
      <p>asda</p>
    </div>
    <div class="card">
      <p>asdas</p>
    </div>
    <div class="card">
      <p>Home</p>
    </div>
    <div class="card">
      <p>asda</p>
    </div>
    <div class="card">
      <p>asdas</p>
    </div>
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
              <Nav /> 
              <main className="col s12 m10">          
                  <Route exact path="/" component={Dashboard}/>
                  <Route path="/about" component={About}/>
                  <Route path="/topics" component={Topics}/>
              </main>
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
