import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>The Blog</h1>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/create'>Create Post</Link>
    </nav>
  </header>
);

export default Header;
