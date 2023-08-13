import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ExternalLink } from '../external-link/external-link';
import { onCopy } from '../toast/copy';
import { InstallCard } from './install-card';
import './install.scss';

export const Install = () => (
  <section className='install'>
    <h1>Install</h1>
    <div className='install__links'>
    <ExternalLink url='https://github.com/jmaczan/spellbook/releases/download/v0.0.2/spell'>
      <InstallCard icon='🐧' title='Linux' />
    </ExternalLink>
    <ExternalLink url='https://github.com/jmaczan/spellbook/releases/download/v0.0.2/spell'>
      <InstallCard icon='' title='macOS' />
    </ExternalLink>
    </div>
    <div className='install__instruction'>
      <div>
        Make <CopyToClipboard onCopy={onCopy} text={"spell"}><code>spell</code></CopyToClipboard> executable{' '}
        <CopyToClipboard onCopy={onCopy} text={"chmod +x spell"}><code>
          <span className='spell-item__shell-prompt'>$</span> chmod +x spell
        </code></CopyToClipboard>
      </div>
      <div>
        Add <CopyToClipboard onCopy={onCopy} text={"spell"}><code>spell</code></CopyToClipboard> to <CopyToClipboard onCopy={onCopy} text={"$PATH"}><code>$PATH</code></CopyToClipboard> variable{' '}
        <CopyToClipboard onCopy={onCopy} text={'echo "export PATH=`pwd`:$PATH" >> ~/.bashrc | source ~/.bashrc'}><code>
          <span className='spell-item__shell-prompt'>$</span> echo &quot;export PATH=`pwd`:$PATH&quot; &gt;&gt;
          ~/.bashrc | source ~/.bashrc
        </code></CopyToClipboard>{' '}
        or put <CopyToClipboard onCopy={onCopy} text={"spell"}><code>spell</code></CopyToClipboard> in folder that&apos;s already in <CopyToClipboard onCopy={onCopy} text={"$PATH"}><code>$PATH</code></CopyToClipboard> variable{' '}
        <CopyToClipboard onCopy={onCopy} text={"sudo mv spell /usr/local/bin"}><code>
          <span className='spell-item__shell-prompt'>$</span> sudo mv spell /usr/local/bin
        </code></CopyToClipboard>
      </div>
      <div>
        Done! Ready to make the magic happen{' '}
        <CopyToClipboard onCopy={onCopy} text={"spell repeat-sh 5 ls -no-clean"}><code className='spell-item__example'>
          <span className='spell-item__shell-prompt'>$</span> spell repeat-sh 5 ls -no-clean
        </code></CopyToClipboard>
      </div>
    </div>
  </section>
);
