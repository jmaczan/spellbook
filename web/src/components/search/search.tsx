import React from 'react';
import { SpellItem } from '../spell-item/spell-item';
import './search.scss';
import { SearchBar } from '../search-bar/search-bar';
import { Spell } from '../spell-item/types';

interface SearchProps {
  spells: Spell[];
  onChange: (spells: Spell[]) => void;
}

export const Search = ({ spells, onChange }: SearchProps) => {
  return (
    <section>
      <h1>Search for packages</h1>
      <SearchBar onChange={onChange} />
      <div className='search__spells'>
        {spells.map((spell) => (
          <SpellItem key={spell.name} spell={spell} />
        ))}
      </div>
    </section>
  );
};
