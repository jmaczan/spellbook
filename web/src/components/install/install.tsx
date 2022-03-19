import React from 'react';
import { ExternalLink } from '../external-link/external-link';
import { InstallCard } from './install-card';
import './install.scss';

export const Install = () => (
  <section className='install'>
    <h1>Install</h1>
    <ExternalLink url='https://github.com/jmaczan/spellbook/releases/download/v0.0.1/spell'>
      <InstallCard icon='🐧' title='Linux' />
    </ExternalLink>
    <div>
      Make <code>spell</code> executable{' '}
      <code>
        <span className='spell-item__shell-prompt'>$</span> chmod +x spell
      </code>
    </div>
    <div>
      Add <code>spell</code> to <code>$PATH</code> variable{' '}
      <code>
        <span className='spell-item__shell-prompt'>$</span> echo "export PATH=`pwd`:$PATH" &gt;&gt; ~/.bashrc | source
        ~/.bashrc
      </code>{' '}
      or put <code>spell</code> in folder that's already in <code>$PATH</code> variable{' '}
      <code>
        <span className='spell-item__shell-prompt'>$</span> sudo mv spell /usr/local/bin
      </code>
    </div>
    <div>
      Done! Ready to make the magic happen{' '}
      <code className='spell-item__example'>
        <span className='spell-item__shell-prompt'>$</span> spell repeat-sh 5 ls -no-clean
      </code>
    </div>

    <div></div>
  </section>
);
