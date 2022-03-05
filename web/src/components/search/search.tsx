import React from 'react';
import { SpellItem } from '../spell-item/spell-item';
import './search.scss';
import { SearchBar } from '../search-bar/search-bar';
import { Spell } from '../spell-item/types';

interface SearchProps {
  spells: Spell[];
}

export const Search = ({ spells }: SearchProps) => {
  return (
    <section>
      <div className='search__spells'>
        {spells.map((spell) => (
          <SpellItem key={spell.name} spell={spell} />
        ))}
      </div>
    </section>
  );
};
