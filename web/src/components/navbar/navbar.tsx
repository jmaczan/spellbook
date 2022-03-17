import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../search-bar/search-bar';
import { Spell } from '../spell-item/types';
import './navbar.scss';

interface NavbarProps {
  query: string;
  onChange: (value: Spell[]) => void;
  setQuery: (value: string) => void;
  fetchingSpells: boolean;
  setFetchingSpells: (fetching: boolean) => void;
}

export const Navbar = ({ query, onChange, setQuery, fetchingSpells, setFetchingSpells }: NavbarProps) => {
  const [isMenuToggled, toggleMenu] = useState(false);

  const toggleMenuHandler = () => toggleMenu(!isMenuToggled);

  const closeMenu = () => toggleMenu(false);

  return (
    <nav className='navbar'>
      <div className='navbar__title-with-search'>
        <div>
          <Link to='/'>
            <h1 className='navbar__title'>
              <span className='navbar__title__icon'>🪄 </span>
              <span className='navbar__title--secondary-half'>Spell</span>
              <span className='navbar__title--primary-half'>book</span>
              <span className='navbar__title__icon'> 📖</span>
            </h1>
          </Link>
          <div className='navbar__subtitle'>Shell and Powershell scripts registry</div>
        </div>
        <div className='navbar__burger-menu' onClick={toggleMenuHandler}>
          {!isMenuToggled ? (
            <div>
              <svg viewBox='0 -25 25 100' width='35' height='30'>
                <rect width='70' height='7' fill='#FDE74C'></rect>
                <rect y='25' width='70' height='7' fill='#FDE74C'></rect>
                <rect y='50' width='70' height='7' fill='#FDE74C'></rect>
              </svg>
            </div>
          ) : (
            <svg viewBox='0 -25 25 100' width='40' height='40' fill='#FDE74C' stroke='#FDE74C' strokeWidth='3'>
              <line x1='40' y1='0' x2='0' y2='40'></line>
              <line x1='0' y1='0' x2='40' y2='40'></line>
            </svg>
          )}
        </div>
        <SearchBar
          onChange={onChange}
          query={query}
          setQuery={setQuery}
          fetchingSpells={fetchingSpells}
          setFetchingSpells={setFetchingSpells}
        />
      </div>
      <div className='navbar__subtitle navbar__subtitle--mobile'>Shell and Powershell scripts registry</div>
      <div className='navbar__items-container'>
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
      {isMenuToggled ? (
        <ul className='navbar__items navbar__items-container--mobile'>
          <Link to='/install' onClick={closeMenu}>
            <li className='navbar__item'>Install</li>
          </Link>
          <Link to='/search' onClick={closeMenu}>
            <li className='navbar__item'>Search</li>
          </Link>
          <Link to='/documentation' onClick={closeMenu}>
            <li className='navbar__item'>Documentation</li>
          </Link>
          <Link to='/add' onClick={closeMenu}>
            <li className='navbar__item'>📤&nbsp;&nbsp;Add</li>
          </Link>
        </ul>
      ) : null}
    </nav>
  );
};
