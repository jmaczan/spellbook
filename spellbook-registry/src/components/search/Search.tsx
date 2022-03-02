import React, { ChangeEvent, useEffect, useState } from 'react';
import { SpellItem } from '../spell-item/SpellItem';
import { Spell } from '../spell-item/types';

const initialSpells: Spell[] = [
  {
    id: 0,
    name: 'a',
    description: 'b',
    author: 'c',
    target: ['l', 'm'],
  },
  {
    id: 1,
    name: 'x',
    description: 'y',
    author: 'z',
    target: ['l', 'b'],
  },
];

export const Search = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    fetch('/api/spells?query=' + query).then((response) => console.log(response));
  }, [query]);

  const searchForSpells = (text: ChangeEvent<HTMLInputElement>) => {
    setSpells(initialSpells.filter((spell) => spell?.name?.includes(text?.target?.value)));
  };

  return (
    <section>
      <h1>Search for packages</h1>
      <input onChange={searchForSpells} />
      {spells.map((spell) => (
        <SpellItem key={spell.id} spell={spell} />
      ))}
    </section>
  );
};
