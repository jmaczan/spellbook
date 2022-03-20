import { Ok, Err, Result } from '../types';

export const clearQuery = (query: string): Result => {
  const clearedQuery = query.toLocaleLowerCase().trim();

  if (clearedQuery.split('').find((char) => legalQueryCharacters.findIndex((character) => character === char) === -1)) {
    return Err('Illegal character found in query');
  }

  return Ok(clearedQuery);
};

export const legalQueryCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '-',
  '_',
];
