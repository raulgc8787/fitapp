import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



class Nav extends Component {  
  
  renderNav = () => {
    if (isMobile) {
        const nav = 
          <nav class="n-row flex-jc-around fixed-bottom">
            <div>
              1
            </div>
            <div>
              2
            </div>
            <div>
              3
            </div>
            <div>
              4
            </div>
            <div>
              5
            </div>
          </nav>
        ;
        return nav
    }
    return <div> ...content </div>
  }

  render() {
    return this.renderNav();
  }
}

export default Nav;
