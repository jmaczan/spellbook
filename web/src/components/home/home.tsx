import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

export const Home = () => (
  <section>
    <div className='home__howto'>
      <div className='howto__step'>
        <Link className='howto__link' to='/install'>
          Install
        </Link>
        &nbsp;Spellbook
      </div>
      <div className='howto__step__icon'>➡</div>
      <div className='howto__step'>
        <Link className='howto__link' to='/search'>
          Find
        </Link>
        &nbsp;your favourite script
      </div>
      <div className='howto__step__icon'>➡</div>
      <div className='howto__step'>
        Speak the spell&nbsp;&nbsp;
        <code className='howto__code'>
          <span className='howto__code__shell-prompt'>$</span> spellbook your-favourite-script
        </code>
      </div>
    </div>
    <div className='home__target'>For Windows 🪟, Linux 🐧 and macOS 🍎</div>
    <div className='home__description home--center'>✨🔮</div>
  </section>
);
