import React from 'react';
import { Link } from 'react-router-dom';
import './documentation.scss';

export const Documentation = () => (
  <section className='documentation'>
    <h1>Documentation</h1>
    <div className='documentation__item'>
      <Link to='/install'>Install</Link> spellbook cli app
    </div>
    <div className='documentation__item'>
      <Link to='/spell'>Browse the spellbook</Link> and find a useful script
    </div>
    <div className='documentation__item'>Use cli app to run scripts</div>
    <div className='documentation__item'>Currently available commands:</div>
    <ol>
      <li className='documentation__item'>
        Show installed scripts - <code>spell list</code>
      </li>
      <li className='documentation__item'>
        Add a script from repository - <code>spell learn &lt;script name&gt;</code>
      </li>
      <li className='documentation__item'>
        Run a script - <code>spell &lt;script name&gt; [parameters]</code>
      </li>
      <li className='documentation__item'>
        Remove a script - <code>spell forget &lt;script name&gt;</code>
      </li>
    </ol>
  </section>
);
