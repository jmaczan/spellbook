import React, { ChangeEvent, useEffect } from 'react';
import { Spell } from '../spell-item/types';
import debounce from 'lodash.debounce';
import './search-bar.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export interface SearchBarProps {
  query: string;
  onChange: (value: Spell[]) => void;
  setQuery: (value: string) => void;
}

export const SearchBar = ({ query, onChange, setQuery }: SearchBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    !!query && location.pathname !== '/search' && navigate('/search');
    fetch('https://spellbookapi.herokuapp.com/api/search?query=' + query)
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
