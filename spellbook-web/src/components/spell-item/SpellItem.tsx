import React from 'react';
import { Spell } from './types';

interface SpellItemProps {
  spell: Spell;
}

export const SpellItem = ({ spell }: SpellItemProps) => (
  <div>
    {spell.name} - {spell.title} - {spell.description}
  </div>
);
