import React, { useEffect } from 'react';
import { SpellItem } from '../spell-item/spell-item';
import './spell-page.scss';
import { Spell } from '../spell-item/types';
import { useLocation } from 'react-router-dom';

interface SearchProps {
  spells: Spell[];
  query: string;
  fetching: boolean;
  setQuery: (value: string) => void;
}

export const SpellPage = ({ spells = [], query, setQuery, fetching }: SearchProps) => {
  const location = useLocation();
  
  useEffect(() => {
    const spell =  location?.pathname?.slice?.(7);
    if (spell && query !== spell) {
      setQuery(spell?.toLocaleLowerCase());
    }
  }, [location?.pathname]);

  return (
    <section>
      <h1>{spells.length === 0 || fetching ? 'Search' : 'Spell'}</h1>
      {fetching ? (
        <div className='search__not-found'>Fetching spells... 🌏</div>
      ) : (
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
                  <div>Type your query in search bar above ⌨️</div>
                </>
              )}
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
};
