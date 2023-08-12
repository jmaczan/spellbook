import fs from 'fs';
import path from 'path';
import { Spell, SpellFiles } from '../types';

const spellsPath = path.join(path.resolve(__dirname, '../../'), 'spells/');

const getAllSpellsDirectories = () => fs.readdirSync(spellsPath);

export const searchForSpells = (query: string) =>
  !!query
    ? getAllSpellsDirectories()
        .flatMap((spellDirectory) =>
          [...fs.readdirSync(spellsPath + spellDirectory)].map(
            (spellFile) => spellsPath + spellDirectory + '/' + spellFile,
          ),
        )
        .filter((spellFile) => spellFile.endsWith('.json'))
        .map((spellFile) => JSON.parse(fs.readFileSync(spellFile, 'utf-8')))
        .filter((spell) => spell.name.includes(query)) ?? []
    : [];

export const getSpell = (spellName: string): Spell => {
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
