import React from 'react';
import { Spell } from './types';
import './spell-item.scss';

interface SpellItemProps {
  spell: Spell;
}

export const SpellItem = ({ spell }: SpellItemProps) => (
  <div className='spell-item'>
    <div className='spell-item__title'>
      {randomSpellIcon()} {spell.title}
    </div>{' '}
    <div className='spell-item__description'>{spell.description}</div>
    {spell.example ? <code className='spell-item__example'>$ spellbook {spell.example}</code> : null}
    <div className='spell-item__bottom'>
      {spell.license ? <span className='spell-item__license'>{spell.license} ∙ </span> : null}
      Version {spell.version} ∙ by {spell.author}
    </div>
  </div>
);

const randomSpellIcon = () =>
  ['✨', '🔮', '🪄', '🧙🏽', '🧙‍♂️', '📖', '🧙🏼‍♀️', '🧙🏿‍♀️', '🧝🏽‍♀️', '🧙', '🧝🏽'][Math.round(Math.random() * 10)];
