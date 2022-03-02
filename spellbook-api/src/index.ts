import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const spellsPath = path.join(path.resolve(__dirname, '../..'), '/spellbook-registry/spells/');

const getAllSpellsDirectories = () => fs.readdirSync(spellsPath);

const getAllSpells = () => {
    let spells: any[] = getAllSpellsDirectories()
        .flatMap(spellDirectory =>
            [...fs.readdirSync(spellsPath + spellDirectory)]
                .map(spellFile => spellsPath + spellDirectory + '/' + spellFile))
        .filter(spellFile => spellFile.includes('.json'))
        .map(spellFile => JSON.parse(fs.readFileSync(spellFile, 'utf-8')));

    console.log('spells', spells);
}

getAllSpells();

dotenv.config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Spellbook API");
});

app.get('/api/search', (req, res) => {
    res.send({ text: req.query.query });
});

app.listen(process.env.PORT, () => {
    console.log(`server running : http://${process.env.HOST}:${process.env.PORT}`);
});
