import express from 'express';
import { getSpellsRoutes } from './spells/routes';

const getRoutes = () => {
  const router = express.Router();
  router.use('/spell', getSpellsRoutes());
  return router;
};

export { getRoutes };
