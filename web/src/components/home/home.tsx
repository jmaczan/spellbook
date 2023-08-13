import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { onCopy } from '../toast/copy';
import './home.scss';

export const Home = () => (
  <section className='home'>
    <div className='home__howto'>
      <div className='howto__step'>
        <Link className='howto__link' to='/install'>
          Install
        </Link>
        &nbsp;Spellbook
      </div>
      <div className='howto__step__icon'>➡</div>
      <div className='howto__step__icon--mobile'>⬇</div>
      <div className='howto__step'>
        <Link className='howto__link' to='/search'>
          Find
        </Link>
        &nbsp;your favourite script
      </div>
      <div className='howto__step__icon'>➡</div>
      <div className='howto__step__icon--mobile'>⬇</div>
      <div className='howto__step'>Speak the spell</div>
      <div className='howto__step'>
      <CopyToClipboard onCopy={onCopy} text={"spell your-favourite-script"}>
        <code className='howto__code'>
          <span className='howto__code__shell-prompt'>$</span> spell your-favourite-script
        </code>
        </CopyToClipboard>
      </div>
    </div>
    <div className='home__target'>
      <span>
        For <span className='secondary-accent-text'>Linux 🐧</span> and <span className='secondary-accent-text'>macOS </span>
      </span>
    </div>
  </section>
);
