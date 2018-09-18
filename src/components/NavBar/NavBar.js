import React from 'react';

const NavBar = (props) => (
  <nav className = 'navbar navbar-dark bg-primary fixed-top'>
    <a className = 'navbar-brand' href = '/'>Memory Game</a>
    <span className = 'navbar-text text-white'>
    {props.children}
    </span>
    <span className = 'navbar-text text-white'>
    Score: {props.score} High Score: {props.highScore}
    </span>
  </nav>
)

export default NavBar;