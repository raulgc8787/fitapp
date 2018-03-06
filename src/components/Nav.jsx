import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';



class Nav extends Component {
  render() {
    return (
      <div className="col s12 m2">
        <ul className="row">
          <li className="col s12"><Link to="/buttons">Buttons</Link></li>
          <li className="col s12"><Link to="/about">Grid</Link></li>
          <li className="col s12"><Link to="/topics">Helpers</Link></li>
          <li className="col s12"><Link to="/topics">Color</Link></li>
          <li className="col s12"><Link to="/topics">Product Hero</Link></li>
          <li className="col s12"><Link to="/topics">Product Item</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
