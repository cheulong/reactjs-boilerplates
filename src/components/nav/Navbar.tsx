import React, { FC } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar: FC = () => (
  <div className='navbar-container'>
    <ul className='navbar-container-ul'>
      <Link to='/'>
        <li>
          <p>Home</p>
        </li>
      </Link>
      <Link to='/about'>
        <li>
          <p>About</p>
        </li>
      </Link>
      <Link to='/users'>
        <li>
          <p>Users</p>
        </li>
      </Link>
      <Link to='/userApi'>
        <li>
          <p>Users Api</p>
        </li>
      </Link>
    </ul>
  </div>
);

export default Navbar;
