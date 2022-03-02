import React, { ChangeEvent, useEffect, useState } from 'react';
import { SpellItem } from '../spell-item/SpellItem';
import { Spell } from '../spell-item/types';
import debounce from 'lodash.debounce';

export const Search = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    !!query &&
      fetch('http://localhost:8080/api/search?query=' + query)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setSpells(response);
        });
  }, [query]);

  const searchForSpells = (text: ChangeEvent<HTMLInputElement>) => {
    setQuery(text?.target.value);
  };

  return (
    <section>
      <h1>Search for packages</h1>
      <input onChange={debounce(searchForSpells, 300)} />
      {spells.map((spell) => (
        <SpellItem key={spell.name} spell={spell} />
      ))}
    </section>
  );
};
