import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { exit } from 'process';
import { getRoutes } from './routes';

dotenv.config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Spellbook API');
});

app.use('/api', getRoutes());

if (!process.env.HOST || !process.env.PORT || !process.env.REGISTRY_URL) {
  !process.env.PORT && console.log('Please define PORT in .env file');
  !process.env.HOST && console.log('Please define HOST in .env file');
  !process.env.REGISTRY_URL && console.log('Please define REGISTRY_URL in .env file');
  exit(1);
}

app.listen(process.env.PORT, () => {
  console.log(`server running : http://${process.env.HOST}:${process.env.PORT}`);
});
