import express from 'express';
import { PossibleResult } from '../types';
import { clearQuery } from './sanitize';
import { getSpell, searchForSpells } from './spells';

export const getSpellsRoutes = () => {
  const router = express.Router();

  router.get('/search', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const clearedQuery = clearQuery(req.query?.query.toString());

    if (clearedQuery.result === PossibleResult.Ok) {
      res.send(JSON.stringify(searchForSpells(clearedQuery.value)));
    } else {
      res.statusCode = 400;
      res.send([]);
    }
  });

  router.get('/get', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const clearedQuery = clearQuery(req.query?.query.toString());

    if (clearedQuery.result === PossibleResult.Ok) {
      res.send(JSON.stringify(getSpell(clearedQuery.value)));
    } else {
      res.statusCode = 400;
      res.send([]);
    }
  });

  return router;
};
