import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../search-bar/search-bar';
import { Spell } from '../spell-item/types';
import './navbar.scss';

interface NavbarProps {
  query: string;
  onChange: (value: Spell[]) => void;
  setQuery: (value: string) => void;
}

export const Navbar = ({ query, onChange, setQuery }: NavbarProps) => (
  <nav className='navbar'>
    <div className='navbar__title-with-search'>
      <div>
        <Link to='/'>
          <h1 className='navbar__title'>
            {' '}
            🪄 <span className='navbar__title--secondary-half'>Spell</span>
            <span className='navbar__title--primary-half'>book</span> 📖
          </h1>
        </Link>
        <div className='navbar__subtitle'>Shell and Powershell scripts registry</div>
      </div>
      <SearchBar onChange={onChange} query={query} setQuery={setQuery} />
      <div className='navbar__burger-menu'>
        <div>
          <svg viewBox='0 0 100 80' width='40' height='40'>
            <rect width='70' height='7' fill='#FDE74C'></rect>
            <rect y='25' width='70' height='7' fill='#FDE74C'></rect>
            <rect y='50' width='70' height='7' fill='#FDE74C'></rect>
          </svg>
        </div>
      </div>
    </div>
    <div>
      <ul className='navbar__items'>
        <Link to='/install'>
          <li className='navbar__item'>Install</li>
        </Link>
        <Link to='/search'>
          <li className='navbar__item'>Search</li>
        </Link>
        <Link to='/documentation'>
          <li className='navbar__item'>Documentation</li>
        </Link>
        <Link to='/add'>
          <li className='navbar__item'>📤&nbsp;&nbsp;Add</li>
        </Link>
      </ul>
    </div>
  </nav>
);
