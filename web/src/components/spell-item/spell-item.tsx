import React from 'react';
import { Spell } from './types';
import './spell-item.scss';

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
      Learn:&nbsp;<code className='spell-item__example'>
        <span className='spell-item__shell-prompt'>$</span> spell learn {spell.name}
      </code>
    <div className='spell-item__bottom'>
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
