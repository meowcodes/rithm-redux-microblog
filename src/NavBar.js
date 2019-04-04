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
        <p>Get in the Rithm of blogging!</p>
        <NavLink exact to="/">Blog</NavLink>
        <NavLink exact to="/new">Add a new post</NavLink>
      </div>
    );
  }
}

export default NavBar;