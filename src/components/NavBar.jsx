import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
  
      <nav>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/components/HTMLDefinition">HTML</Link></li>
          <li><Link to="/components/CSSDefinition">CSS</Link></li>
          <li><Link to="/components/JSDefinition">JS</Link></li>
        </ul>
      </nav>
    );
}
export default NavBar;