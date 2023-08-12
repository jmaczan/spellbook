import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from '../external-link/external-link';
import './footer.scss';

export const Footer = () => (
  <footer className='footer'>
    <div className='footer__section'>
      <ul>
        <li className='footer__section__header'>Spellbook</li>
        <Link to='/install'>
          <li className='footer__section__link'>Install Spellbook</li>
        </Link>
        <Link to='/documentation'>
          <li className='footer__section__link'>Documentation</li>
        </Link>
        <Link to='/add'>
          <li className='footer__section__link'>Add spell</li>
        </Link>
      </ul>
    </div>
    <div className='footer__section'>
      <ul>
        <li className='footer__section__header'>About Spellbook</li>
        <Link to='/license'>
          <li className='footer__section__link'>License</li>
        </Link>
        <Link to='/about'>
          <li className='footer__section__link'>About</li>
        </Link>
      </ul>
    </div>
    <div className='footer__author'>
      <div>
        Made in{' '}
        <ExternalLink className={'footer__author__link'} url={'https://en.wikipedia.org/wiki/Poland'}>
          Poland 🇵🇱
        </ExternalLink>
        ,{' '}
        <ExternalLink className={'footer__author__link'} url={'https://en.wikipedia.org/wiki/European_Union'}>
          EU 🇪🇺
        </ExternalLink>{' '}
        in 2022 by{' '}
        <ExternalLink className={'footer__author__link'} url={'https://maczan.pl/'}>
          Jedrzej Pawel Maczan
        </ExternalLink>
      </div>
      <div>
        Solidarity with{' '}
        <ExternalLink className={'footer__author__link'} url={'https://en.wikipedia.org/wiki/Ukraine'}>
          Ukraine 🇺🇦
        </ExternalLink>{' '}
      </div>
    </div>
  </footer>
);
