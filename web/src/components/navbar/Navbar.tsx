import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../search-bar/search-bar';
import { Spell } from '../spell-item/types';
import './navbar.scss';

interface NavbarProps {
  onChange: (spells: Spell[]) => void;
}

export const Navbar = ({ onChange }: NavbarProps) => (
  <nav className='navbar'>
    <div>
      <Link to='/'>
        <h1 className='navbar__title'>🪄 Spellbook 📖</h1>
      </Link>
      <div className='navbar__subtitle'>Bash and Powershell scripts registry</div>
    </div>
    <SearchBar onChange={onChange} />
    <div>
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
    </div>
  </nav>
);
