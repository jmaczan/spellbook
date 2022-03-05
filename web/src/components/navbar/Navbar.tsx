import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => (
  <nav className='navbar'>
    <div>
      <h1 className='navbar__title'>
        <Link to='/'>🪄 Spellbook 📖</Link>
      </h1>
      <div className='navbar__subtitle'>Bash and Powershell scripts registry</div>
    </div>
    <ul className='navbar__items'>
      <Link to='/install'>
        <li className='navbar__item'>Install</li>
      </Link>
      <Link to='/search'>
        <li className='navbar__item'>Search</li>
      </Link>
      <Link to='/add'>
        <li className='navbar__item'>📤&nbsp;&nbsp;Add</li>
      </Link>
    </ul>
  </nav>
);
