import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Renders a Navbar with links
 */
class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <h1>Microblog</h1>
        <p><i id="nav-description">Get in the Rithm of blogging!</i></p>
        <NavLink className="NavLink" exact to="/">Blog</NavLink>
        <NavLink className="NavLink" exact to="/new">Add a new post</NavLink>
      </div>
    );
  }
}

export default NavBar;