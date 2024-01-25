import express from 'express';

import TestResponse from '../interfaces/TestResponse';
import emojis from './emojis';

const router = express.Router();

router.get<{}, TestResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

export default router;
