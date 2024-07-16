import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
import tasks from './tasks/tasks.routes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/tasks', tasks);

export default router;
