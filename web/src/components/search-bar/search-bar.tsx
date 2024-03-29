import React, { ChangeEvent, useEffect } from 'react';
import { Spell } from '../spell-item/types';
import debounce from 'lodash.debounce';
import './search-bar.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export interface SearchBarProps {
  query: string;
  onChange: (value?: Spell) => void;
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

    location.pathname !== '/spell' && navigate(`/spell/${query}`);
    setFetchingSpells(true);
    fetch(`${process.env.REACT_APP_REGISTRY_URL}${query}/spell.json`)
      .then((response) => response.json())
      .then((response) => {
        onChange(response);
      })
      .catch((err) => {
        onChange(undefined)
      });
  }, [query]);

  const searchForSpells = (text: ChangeEvent<HTMLInputElement>) => {
    setQuery(text?.target.value?.toLocaleLowerCase());
  };

  return (
    <div className='search-bar__container'>
      <input className='search-bar' placeholder='Search for spells' onChange={debounce(searchForSpells, 300)} />
    </div>
  );
};
