import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { onCopy } from '../toast/copy';
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
        Show installed scripts - <CopyToClipboard onCopy={onCopy} text={"spell list"}><code>spell list</code></CopyToClipboard>
      </li>
      <li className='documentation__item'>
        Add a script from repository - <CopyToClipboard onCopy={onCopy} text={"spell learn <script name>"}><code>spell learn &lt;script name&gt;</code></CopyToClipboard>
      </li>
      <li className='documentation__item'>
        Run a script - <CopyToClipboard onCopy={onCopy} text={"spell <script name> [parameters]"}><code>spell &lt;script name&gt; [parameters]</code></CopyToClipboard>
      </li>
      <li className='documentation__item'>
        Remove a script - <CopyToClipboard onCopy={onCopy} text={"spell forget <script name>"}><code>spell forget &lt;script name&gt;</code></CopyToClipboard>
      </li>
    </ol>
  </section>
);
