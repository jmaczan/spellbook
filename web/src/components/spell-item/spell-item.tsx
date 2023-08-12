import React from 'react';
import { Spell } from './types';
import './spell-item.scss';
import { ExternalLink } from '../external-link/external-link';

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
      <>Example:&nbsp;<code className='spell-item__example'>
        <span className='spell-item__shell-prompt'>$</span> spell {spell.example}
      </code></>
    ) : null}
      Learn using cli:&nbsp;<code className='spell-item__example'>
        <span className='spell-item__shell-prompt'>$</span> spell learn {spell.name}
      </code>
      Run without spell cli:&nbsp;
      <code className='spell-item__example'>
        <span className='spell-item__shell-prompt'>$</span> curl {process.env.REACT_APP_REGISTRY_URL}{spell.name}/spell.sh | sh {spell.example ? `-s ${spell.example}` : ''}
      </code>
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
