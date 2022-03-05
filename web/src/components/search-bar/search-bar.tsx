import React, { ChangeEvent, useEffect, useState } from 'react';
import { Spell } from '../spell-item/types';
import debounce from 'lodash.debounce';
import './search-bar.scss';

export interface SearchBarProps {
  onChange: (value: Spell[]) => void;
}

export const SearchBar = ({ onChange }: SearchBarProps) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    !!query &&
      fetch('http://localhost:8080/api/search?query=' + query)
        .then((response) => response.json())
        .then((response) => {
          onChange(response);
        });
  }, [query, onChange]);

  const searchForSpells = (text: ChangeEvent<HTMLInputElement>) => {
    setQuery(text?.target.value);
  };

  return (
    <div className='search-bar__container'>
      <input className='search-bar' placeholder='Search for spells' onChange={debounce(searchForSpells, 300)} />
    </div>
  );
};
