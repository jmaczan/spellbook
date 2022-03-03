import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { Spell, SpellFiles } from './types';

const spellsPath = path.join(path.resolve(__dirname, '../..'), '/registry/spells/');

const getAllSpellsDirectories = () => fs.readdirSync(spellsPath);

const getSpells = (query: string = '') => getAllSpellsDirectories()
    .flatMap(spellDirectory =>
        [...fs.readdirSync(spellsPath + spellDirectory)]
            .map(spellFile => spellsPath + spellDirectory + '/' + spellFile))
    .filter(spellFile => spellFile.includes('.json'))
    .map(spellFile => JSON.parse(fs.readFileSync(spellFile, 'utf-8')))
    .filter(spell => spell.name.includes(query));

const getSpell = (spellName: string): Spell => {
    if (!getAllSpellsDirectories().find(spellDirectory => spellDirectory === spellName)) {
        return undefined;
    }

    const filesOfSpell: SpellFiles[] = fs.readdirSync(spellsPath + spellName) as SpellFiles[];
    const containsAllSpellFiles = !!filesOfSpell.find(file => file === SpellFiles.JSON) &&
        !!filesOfSpell.find(file => file === SpellFiles.SCRIPT);

    return containsAllSpellFiles ? ({
        [SpellFiles.JSON]: fs.readFileSync(spellsPath + spellName + '/' + SpellFiles.JSON, 'utf-8'),
        [SpellFiles.SCRIPT]: fs.readFileSync(spellsPath + spellName + '/' + SpellFiles.SCRIPT, 'utf-8')
    }) : undefined;
}

dotenv.config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Spellbook API");
});

app.get('/api/search', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(getSpells(req.query?.query.toString())));
});

app.get('/api/spell', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(getSpell(req.query?.name.toString())));
});

app.listen(process.env.PORT, () => {
    console.log(`server running : http://${process.env.HOST}:${process.env.PORT}`);
});

