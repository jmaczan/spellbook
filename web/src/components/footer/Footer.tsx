import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer = () => (
  <footer className='footer'>
    <div className='footer__section'>
      <ul>
        <li className='footer__section__header'>Spellbook</li>
        <Link to='/install'>
          <li className='footer__section__link'>Install</li>
        </Link>
        <Link to='/search'>
          <li className='footer__section__link'>Search</li>
        </Link>
      </ul>
    </div>
    <div className='footer__section'>
      <ul>
        <li className='footer__section__header'>About Spellbook</li>
        <Link to='/about'>
          <li className='footer__section__link'>About</li>
        </Link>
      </ul>
    </div>
  </footer>
);
