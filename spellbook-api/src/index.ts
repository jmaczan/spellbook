import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

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
