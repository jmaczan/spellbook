import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ExternalLink } from '../external-link/external-link';
import { InstallCard } from './install-card';
import './install.scss';

export const Install = () => (
  <section className='install'>
    <h1>Install</h1>
    <ExternalLink url='https://github.com/jmaczan/spellbook/releases/download/v0.0.1/spell'>
      <InstallCard icon='🐧' title='Linux' />
    </ExternalLink>
    <div className='install__instruction'>
      <div>
        Make <code>spell</code> executable{' '}
        <code>
          <span className='spell-item__shell-prompt'>$</span> chmod +x spell
        </code>
      </div>
      <div>
        Add <code>spell</code> to <code>$PATH</code> variable{' '}
        <code>
          <span className='spell-item__shell-prompt'>$</span> echo &quot;export PATH=`pwd`:$PATH&quot; &gt;&gt;
          ~/.bashrc | source ~/.bashrc
        </code>{' '}
        or put <code>spell</code> in folder that&apos;s already in <code>$PATH</code> variable{' '}
        <code>
          <span className='spell-item__shell-prompt'>$</span> sudo mv spell /usr/local/bin
        </code>
      </div>
      <div>
        Done! Ready to make the magic happen{' '}
        <CopyToClipboard text={"spell repeat-sh 5 ls -no-clean"}><code className='spell-item__example'>
          <span className='spell-item__shell-prompt'>$</span> spell repeat-sh 5 ls -no-clean
        </code></CopyToClipboard>
      </div>
    </div>
  </section>
);
