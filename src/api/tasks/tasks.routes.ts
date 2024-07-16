import { Router, Response, Request } from 'express';
import Task from './tasks.model';

const router = Router();

router.get<{}, Task>('/', (req: Request, res: Response) => {
  res.json([
    {
      content: 'Clean hair',
      done: false,
    },
  ]);
});

export default router;
