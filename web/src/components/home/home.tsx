import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

export const Home = () => (
  <section>
    <div className='home__howto'>
      <div className='howto__step'>
        <Link to='/install'>Install</Link>&nbsp;Spellbook ➡️&nbsp;
      </div>
      <div className='howto__step'>
        <Link to='/search'>Find</Link>&nbsp;your favourite script&nbsp;
      </div>
      <div className='howto__step'>
        ➡️&nbsp;Run it&nbsp;
        <code>$ spellbook your-favourite-script</code>
      </div>
    </div>
    <div className='home__target'>For Windows 🪟, Linux 🐧 and macOS 🍎</div>
    <div>Spellbook - The magic is happening here ✨🔮</div>
  </section>
);
