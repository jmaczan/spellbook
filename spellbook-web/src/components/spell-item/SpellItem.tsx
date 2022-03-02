import React from 'react';
import { Spell } from './types';

interface SpellItemProps {
  spell: Spell;
}

export const SpellItem = ({ spell }: SpellItemProps) => (
  <div>
    {spell.id}
    {spell.name}
    {spell.description}
  </div>
);
