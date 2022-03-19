import React from 'react';
import { ExternalLink } from '../external-link/external-link';
import { InstallCard } from './install-card';
import './install.scss';

export const Install = () => (
  <section className='install'>
    <h1>Install</h1>
    {/* <InstallCard icon='🐧' title='Linux' /> */}
    <div>
      The only step is to download a binary from{' '}
      <ExternalLink url='https://github.com/jmaczan/spellbook/releases/download/v0.0.1/spell'> here</ExternalLink>
    </div>
    <div>Once you download the program, run it in your favourite terminal</div>
    <div></div>
    <div className='install--alternative'>
      Alternatively, you can build it from the source. The repository is{' '}
      <ExternalLink url='https://github.com/jmaczan/spellbook/tree/main/cli'> here</ExternalLink>
    </div>
  </section>
);
