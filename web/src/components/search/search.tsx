import React from 'react';
import { SpellItem } from '../spell-item/spell-item';
import './search.scss';
import { Spell } from '../spell-item/types';

interface SearchProps {
  spells: Spell[];
  query: string;
}

export const Search = ({ spells = [], query }: SearchProps) => {
  return (
    <section>
      <div className='search__spells'>
        {spells.map((spell) => (
          <SpellItem key={spell.name} spell={spell} />
        ))}
        {spells.length === 0 ? (
          <div className='search__not-found'>
            {!!query && query !== '' ? (
              'No spells found for your query 📚'
            ) : (
              <>
                <div>
                  <h1>Search</h1>
                </div>
                <div>Type your query in search bar above</div>
              </>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
};
