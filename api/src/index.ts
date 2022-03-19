import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { Spell, SpellFiles } from './types';

const spellsPath = path.join(path.resolve(__dirname, '../'), 'spells/');

const getAllSpellsDirectories = () => fs.readdirSync(spellsPath);

const getSpells = (query: string) =>
  !!query
    ? getAllSpellsDirectories()
        .flatMap((spellDirectory) =>
          [...fs.readdirSync(spellsPath + spellDirectory)].map(
            (spellFile) => spellsPath + spellDirectory + '/' + spellFile,
          ),
        )
        .filter((spellFile) => spellFile.includes('.json'))
        .map((spellFile) => JSON.parse(fs.readFileSync(spellFile, 'utf-8')))
        .filter((spell) => spell.name.includes(query)) ?? []
    : [];

const getSpell = (spellName: string): Spell => {
  if (!getAllSpellsDirectories().find((spellDirectory) => spellDirectory === spellName)) {
    return undefined;
  }

  const filesOfSpell: SpellFiles[] = fs.readdirSync(spellsPath + spellName) as SpellFiles[];
  const containsAllSpellFiles =
    !!filesOfSpell.find((file) => file === SpellFiles.JSON) &&
    !!filesOfSpell.find((file) => file === SpellFiles.SCRIPT);

  return containsAllSpellFiles
    ? {
        [SpellFiles.JSON]: fs.readFileSync(spellsPath + spellName + '/' + SpellFiles.JSON, 'utf-8'),
        [SpellFiles.SCRIPT]: fs.readFileSync(spellsPath + spellName + '/' + SpellFiles.SCRIPT, 'utf-8'),
      }
    : undefined;
};

const legalQueryCharacters = [
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

enum PossibleResult {
  Ok = 'Ok',
  Err = 'Err',
}

const Ok = (value: any): Result => ({ result: PossibleResult.Ok, value });
const Err = (value: any): Result => ({ result: PossibleResult.Err, value });

interface Result {
  result: PossibleResult;
  value: any;
}

const clearQuery = (query: string): Result => {
  const clearedQuery = query.toLocaleLowerCase().trim();

  if (clearedQuery.split('').find((char) => legalQueryCharacters.findIndex((character) => character === char) === -1)) {
    return Err('Illegal character found in query');
  }

  return Ok(clearedQuery);
};

dotenv.config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Spellbook API');
});

app.get('/api/search', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const clearedQuery = clearQuery(req.query?.query.toString());

  if (clearedQuery.result === PossibleResult.Ok) {
    res.send(JSON.stringify(getSpells(clearedQuery.value)));
  } else {
    res.statusCode = 400;
    res.send([]);
  }
});

app.get('/api/spell', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const clearedQuery = clearQuery(req.query?.query.toString());

  if (clearedQuery.result === PossibleResult.Ok) {
    res.send(JSON.stringify(getSpell(clearedQuery.value)));
  } else {
    res.statusCode = 400;
    res.send([]);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server running : http://${process.env.HOST}:${process.env.PORT}`);
});
