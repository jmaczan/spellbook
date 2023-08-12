import React from 'react';
import { Spell } from './types';
import './spell-item.scss';
import { ExternalLink } from '../external-link/external-link';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { onCopy } from '../toast/copy';

interface SpellItemProps {
  spell: Spell;
}

const Separator = () => <span className='spell-item__separator'> ∙ </span>;

export const SpellItem = ({ spell }: SpellItemProps) => (
  <div className='spell-item'>
    <div className='spell-item__title'>
      {randomSpellIcon()} {spell.title} ({spell.name})
    </div>{' '}
    <div className='spell-item__description'>{spell.description}</div>
    {spell.example ? (
      <>Example:&nbsp;<CopyToClipboard onCopy={onCopy} text={`spell ${spell.name} ${spell.example}`}><code className='spell-item__example'>
        <span className='spell-item__shell-prompt'>$</span> spell {spell.name} {spell.example}
      </code></CopyToClipboard></>
    ) : null}
      Learn using cli:&nbsp;<CopyToClipboard onCopy={onCopy} text={`spell learn ${spell.name}`}><code className='spell-item__example'>
        <span className='spell-item__shell-prompt'>$</span> spell learn {spell.name}
      </code></CopyToClipboard>
      Run without spell cli:&nbsp;
      <CopyToClipboard onCopy={onCopy} text={`curl ${process.env.REACT_APP_REGISTRY_URL}${spell.name}/spell.sh | sh ${spell.example ? `-s ${spell.example}` : ''}`}><code className='spell-item__example'>
        <span className='spell-item__shell-prompt'>$</span> curl {process.env.REACT_APP_REGISTRY_URL}{spell.name}/spell.sh | sh {spell.example ? `-s ${spell.example}` : ''}
      </code></CopyToClipboard>
    <div className='spell-item__bottom'>
    <ExternalLink url={`${process.env.REACT_APP_REGISTRY_URL}${spell.name}/spell.sh`}>Source code</ExternalLink> <Separator />
      {spell.license ? (
        <span className='spell-item__license'>
          {spell.license}
          <Separator />
        </span>
      ) : null}
      Version {spell.version}
      <Separator />
      by <span className='spell-item__author'>{spell.author}</span>
    </div>
  </div>
);

const randomSpellIcon = () =>
  ['✨', '🔮', '🪄', '🧙🏽', '🧙‍♂️', '📖', '🧙🏼‍♀️', '🧙🏿‍♀️', '🧝🏽‍♀️', '🧙', '🧝🏽'][Math.round(Math.random() * 10)];
