import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => (
  <nav className='navbar'>
    <h1 className='navbar__title'>Spellbook</h1>
    <div className='navbar__subtitle'>Bash and Powershell scripts registry</div>
    <ul className='navbar__items'>
      <li className='navbar__item'>
        <Link to='/'>Spellbook</Link>
      </li>
      <li className='navbar__item'>
        <Link to='/install'>Install</Link>
      </li>
      <li className='navbar__item'>
        <Link to='/search'>Search</Link>
      </li>
    </ul>
  </nav>
);
