import React, { ChangeEvent, useEffect } from 'react';
import { Spell } from '../spell-item/types';
import debounce from 'lodash.debounce';
import './search-bar.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export interface SearchBarProps {
  query: string;
  onChange: (value: Spell[]) => void;
  setQuery: (value: string) => void;
  fetchingSpells: boolean;
  setFetchingSpells: (fetching: boolean) => void;
}

export const SearchBar = ({ query, onChange, setQuery, setFetchingSpells }: SearchBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    location.pathname !== '/search' && navigate('/search');
    setFetchingSpells(true);
    fetch('https://spellbookapi.herokuapp.com/api/spell/search?query=' + query)
      .then((response) => response.json())
      .then((response) => {
        onChange(response);
      });
  }, [query]);

  const searchForSpells = (text: ChangeEvent<HTMLInputElement>) => {
    setQuery(text?.target.value);
  };

  return (
    <div className='search-bar__container'>
      <input className='search-bar' placeholder='Search for spells' onChange={debounce(searchForSpells, 300)} />
    </div>
  );
};
