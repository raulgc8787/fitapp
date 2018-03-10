import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



class Dashboard extends Component {  
  render() {
    return(
      <div className="dashboard">
        <div className="hero flex-item-end">
          <div className="content">
            <div className="col-12">
              <h1>Fitness</h1>
              <div className="routine-diary">
                <ul className="row">
                  <li className="col-4-sm">
                    <span className="number">10</span>
                    <span className="title">time</span>  
                  </li>
                  <li className="col-4-sm">
                    <span className="number">10</span>
                    <span className="title">excercise</span>
                  </li>
                  <li className="col-4-sm">
                    <a className="btn">Start</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row summary">
          <div className="card">
            <p>Home</p>
          </div>
          <div className="card">
            <p>asda</p>
          </div>
          <div className="card">
            <p>asdas</p>
          </div>
          <div className="card">
            <p>Home</p>
          </div>
          <div className="card">
            <p>asda</p>
          </div>
          <div className="card">
            <p>asdas</p>
          </div>
          <div className="card">
            <p>Home</p>
          </div>
          <div className="card">
            <p>asda</p>
          </div>
          <div className="card">
            <p>asdas</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
