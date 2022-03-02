import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("What's up doc ?!");
});

app.get('/api/search', (req, res) => {
    res.send(req.query.query);
});

app.listen(process.env.PORT, () => {
    console.log(`server running : http://${process.env.HOST}:${process.env.PORT}`);
});
